import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Jobs from './Jobs';
import Card from '../components/Card';
import Sidebar from '../sidebar/Sidebar';
import Newsletter from '../components/Newsletter';

const Home = () => {
  
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const itemsPerPage = 4;

  useEffect(() => {
    fetch('http://localhost:5000/all-jobs')
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      });
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const filterJobsByQuery = (jobs) => {
    return jobs.filter((job) => job.jobTitle.toLowerCase().includes(query.toLowerCase()));
  };

  const filterJobsByCategory = (jobs) => {
    if (!selectedCategory) return jobs;

    return jobs.filter((job) => {
      return (
        job.jobLocation.toLowerCase() === selectedCategory.toLowerCase() ||
        (job.maxPrice && parseInt(job.maxPrice) <= parseInt(selectedCategory)) ||
        job.salaryType.toLowerCase() === selectedCategory.toLowerCase() ||
        job.employmentType.toLowerCase() === selectedCategory.toLowerCase() ||
        job.experienceLevel.toLowerCase() === selectedCategory.toLowerCase() ||
        job.postingDate >= selectedCategory
      );
    });
  };

  const paginateJobs = (jobs) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return jobs.slice(startIndex, endIndex);
  };

  const filteredJobs = () => {
    let filtered = filterJobsByQuery(jobs);
    filtered = filterJobsByCategory(filtered);
    return filtered;
  };

  const displayedJobs = paginateJobs(filteredJobs());

  const nextPage = () => {
    const totalFilteredJobs = filteredJobs().length;
    if (currentPage < Math.ceil(totalFilteredJobs / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const totalFilteredJobs = filteredJobs().length;

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      <div className='bg-[#FAFAFA] lg:grid grid-cols-4 lg:px-24 px-4 py-12'>
        <div className='bg-white p-4 rounded'>
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        <div className='col-span-2 bg-white p-4 rounded-sm'>
          {isLoading ? (
            <p>Loading....</p>
          ) : displayedJobs.length > 0 ? (
            <Jobs result={displayedJobs.map((data, index) => <Card key={index} data={data} />)} />
          ) : (
            <>
              <h3>{totalFilteredJobs} Jobs</h3>
              <p>No data found!</p>
            </>
          )}
          {totalFilteredJobs > 0 && (
            <div className='flex justify-center mt-4 space-x-8'>
              <button onClick={previousPage} disabled={currentPage === 1} className='hover:underline'>
                prev
              </button>
              <span className='space-x-2'>
                page {currentPage} of {Math.ceil(totalFilteredJobs / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={currentPage === Math.ceil(totalFilteredJobs / itemsPerPage)}
                className='hover:underline'
              >
                Next
              </button>
            </div>
          )}
        </div>

        <div className='bg-white p-4 rounded-sm'>
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const pageNumbersToShow = 3;

  // Compute current jobs for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobs = jobs.slice(indexOfFirstItem, indexOfLastItem);

  // Total number of pages
  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  // Handle next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle previous page
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle delete
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/job/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged === true) {
          alert("Your job has been deleted successfully.");
          setJobs(jobs.filter(job => job._id !== id));
        }
      });
  };

  // Fetch jobs
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/myJobs/microsoft@gmail.com`)
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setIsLoading(false);
      });
  }, []);

  // Handle search
  const handleSearch = () => {
    const filter = jobs.filter(job => job.jobTitle.toLowerCase().includes(searchText.toLowerCase()));
    setJobs(filter);
    setIsLoading(false);
  };

  // Determine the range of page numbers to display
  const startPage = Math.max(1, currentPage - Math.floor(pageNumbersToShow / 2));
  const endPage = Math.min(totalPages, startPage + pageNumbersToShow - 1);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-15 px-4'>
      <div className='my-jobs-container'>
        <h1 className='text-center p-4'>All My Jobs</h1>
        <div className='p-2 text-center mb-2'>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            name='search'
            id='search'
            className='py-2 px-3 border focus:outline-none lg:w-6/12 mb-4 w-full'
          />
          <button className='bg-blue text-white font-semibold px-8 py-2 rounded-sm mb-4' onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      <section className="py-1 bg-blueGray-50">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700">All Jobs</h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <Link to={"/post-job"}>
                    <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                      Post A New Job
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      No.
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Title
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Company Name
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Salary
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Edit
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Delete
                    </th>
                  </tr>
                </thead>

                {
                  isLoading ? <div className='flex items-center justify-center h-20'>Loading...</div> :
                    <tbody>
                      {
                        currentJobs.map((job, index) => (
                          <tr key={index}>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                              {indexOfFirstItem + index + 1}
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              {job.jobTitle}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              {job.companyName}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                              ${job.minPrice} - ${job.maxPrice}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              <button className='bg-blue text-center py-2 px-6 text-white rounded-sm'><Link to={`/edit-job/${job._id}`}>Edit</Link></button>
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              <button onClick={() => handleDelete(job._id)} className='bg-red-700 py-2 px-6 text-white rounded-sm'>Delete</button>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                }
              </table>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className='flex items-center justify-center text-black space-x-2 mt-4'>
          {currentPage > 1 && (
            <button onClick={previousPage} className='hover:underline'>Previous</button>
          )}
          {
            pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => setCurrentPage(number)}
                className={`px-4 py-2 rounded ${currentPage === number ? 'bg-blue text-white' : 'bg-gray-200 text-black'}`}
              >
                {number}
              </button>
            ))
          }
          {currentPage < totalPages && (
            <button onClick={nextPage} className='hover:underline'>Next</button>
          )}
        </div>
      </section>
    </div>
  );
}

export default MyJobs;

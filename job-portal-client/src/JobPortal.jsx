import React, { useState, useEffect } from 'react';

const JobPortal = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filterDate, setFilterDate] = useState('');

  useEffect(() => {
    // Fetch data from backend
    fetch("app.json")
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    // Filter jobs by date
    const filteredJobs = jobs
    if (filterDate) {
      const filtered = jobs.filter(job => new Date(job.date) >= new Date(filterDate));
      setFilteredJobs(filtered);
    } else {
      setFilteredJobs(jobs);
    }
  }, [filterDate, jobs]);

  return (
    <div>
      <input 
        type="date" 
        value={filterDate} 
        onChange={(e) => setFilterDate(e.target.value)} 
      />
      <ul>
        {filteredJobs.map(job => (
          <li key={job.id}>
            {job.role} - {job.location} - {new Date(job.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobPortal;

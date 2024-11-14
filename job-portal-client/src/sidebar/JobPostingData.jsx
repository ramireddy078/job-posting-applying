import React from 'react'
import Inputfield from '../components/Inputfield';

const JobPostingData = ({ handleChange }) => {
    const currentDate = new Date()
    // console.log(currentDate);

    const twentyFourHoursAgo = new Date(currentDate - 24 * 60 * 60 * 1000)
    const sevenDaysAgo = new Date(currentDate - 7 * 24 * 60 * 60 * 1000)
    const thirtyDaysAgo = new Date(currentDate - 30 * 24 * 60 * 60 * 1000)
    // console.log(twentyFourHoursAgo);

    // convert date into string
    const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0,10)
    const sevenFourHoursAgoDate = sevenDaysAgo.toISOString().slice(0,10)
    const thirtyFourHoursAgoDate = thirtyDaysAgo.toISOString().slice(0,10)
    // console.log(twentyFourHoursAgoDate);
    

    

    return (
        <div>
            <h4 className='text-lg font-medium mb-2'>Job Posting Details</h4>
            <label className='sidebar-label-container'>
                <input type="radio" name='test' id='test' value={""} onChange={handleChange} />
                <span className='checkmark'></span>All
            </label>
            <Inputfield handleChange={handleChange} value={twentyFourHoursAgoDate} title="24 hours ago" name="test" />
            <Inputfield handleChange={handleChange} value={sevenFourHoursAgoDate} title="7 days ago" name="test" />
            <Inputfield handleChange={handleChange} value={thirtyFourHoursAgoDate} title="30 days ago" name="test" />
        </div>
    )
}

export default JobPostingData

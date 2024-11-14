import React from 'react'
import Inputfield from '../components/Inputfield'

const Location = ({ handleChange }) => {
    return (
        <div>
            <h4 className='text-lg font-medium mb-2'>Location</h4>
            <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name='test' id='test' value={""} onChange={handleChange} />
                    <span className='checkmark'></span>All
                </label>
                <Inputfield handleChange={handleChange} value="Bengaluru" title="Bengaluru" name="test" />
                <Inputfield handleChange={handleChange} value="Chennai" title="Chennai" name="test" />
                <Inputfield handleChange={handleChange} value="Noida" title="Noida" name="test" />
                <Inputfield handleChange={handleChange} value="Hyderabad" title="Hyderabad" name="test" />
            </div>
        </div>
    )
}

export default Location

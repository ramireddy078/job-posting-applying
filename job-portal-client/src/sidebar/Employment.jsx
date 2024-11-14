import React from 'react'
import Inputfield from '../components/Inputfield'

const Employment = ({handleChange}) => {
    return (
        <div>
            <h4 className='text-lg font-medium mb-2'>Type Of Emploment</h4>
            <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name='test' id='test' value={""}  onChange={handleChange} />
                    <span className='checkmark'></span>Any
                </label>
                <Inputfield handleChange={handleChange} value="Full-time" title="Full-time" name="test" />
                <Inputfield handleChange={handleChange} value="Temporary" title="Temporary" name="test" />
                <Inputfield handleChange={handleChange} value="Part-time" title="Part-time" name="test" />
            </div>
        </div>
    )
}

export default Employment

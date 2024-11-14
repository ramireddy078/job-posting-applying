import React from 'react'

const Jobs = ({result}) => {
  return (
    <>
        <div>
            <h3 className='text-lg font-bold'>{result.length} Jobs</h3>
        </div>
        {result}
    </>
  )
}

export default Jobs

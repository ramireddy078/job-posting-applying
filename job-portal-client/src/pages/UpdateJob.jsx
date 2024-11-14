import { useLoaderData, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from "react-hook-form"
import CreatableSelect from 'react-select/creatable';

const UpdateJob = () => {

    const { id } = useParams()
    console.log(id);
    const { _id, jobTitle, companyName, minPrice, maxPrice, salaryType, jobLocation, postingDate, experienceLevel, companyLogo,
        employmentType, description, postedBy, skills } = useLoaderData()

        const [selectedOption, setSelectedOption] = useState(null);


        const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
        } = useForm()
    
        const onSubmit = (data) => {
            data.skills = selectedOption;
            console.log(data)
            fetch(`http://localhost:5000/update-job/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    if(result.acknowledged === true){
                        alert("your company is updated job post successfully")
                    }
                    reset()
                })
        }
    
        const options = [
            { value: 'HTML', label: 'HTML' },
            { value: 'css', label: 'css' },
            { value: 'JavaScript', label: 'JavaScript' },
            { value: "React.js", label: "React.js" },
            { value: 'Node.js', label: 'Node.js' },
            { value: 'Express.js', label: 'Express.js' },
            { value: 'MongoDB', label: 'MongoDB' },
            { value: 'SQL', label: 'SQL' }
        ];
    


    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            {/* form for posting job  */}
            <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16 shadow-2xl'>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="w-full lg:w-1/2">
                            <label className="block mb-2 text-lg">Job Title</label>
                            <input type="text" placeholder='Ex: Web Developer'
                                defaultValue={jobTitle}
                                {...register("jobTitle")}
                                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900
                                    placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                            />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <label className="block mb-2 text-lg">Company Name</label>
                            <input type="text" placeholder="Ex:Microsoft"
                            defaultValue={companyName}
                                {...register("companyName")}
                                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900
                                    placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="w-full lg:w-1/2">
                            <label className="block mb-2 text-lg">Minimum Salary</label>
                            <input type="text" placeholder="Ex: 450000 CTC"
                            defaultValue={minPrice}
                                {...register("minPrice")}
                                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900
                                    placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                            />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <label className="block mb-2 text-lg">Maximum Salary</label>
                            <input type="text" placeholder="Ex: 700000 CTC"
                            defaultValue={maxPrice}
                                {...register("maxPrice")}
                                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900
                                    placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="w-full lg:w-1/2">
                            <label className="block mb-2 text-lg">Salary Type</label>
                            <select {...register("salaryType")} className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900
                                    placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 cursor-pointer">
                                <option value={salaryType}>{salaryType}</option>
                                <option value="hourly">hourly</option>
                                <option value="monthly">monthly</option>
                                <option value="yearly">Yearly</option>
                            </select>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <label className="block mb-2 text-lg">Location</label>
                            <input type="text" placeholder="Ex: Hyderabad"
                            defaultValue={jobLocation}
                                {...register("jobLocation")}
                                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900
                                    placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="w-full lg:w-1/2">
                            <label className="block mb-2 text-lg">Job Posting Date</label>
                            <input type="date" placeholder="Ex: 2024-07-28"
                            defaultValue={postingDate}
                                {...register("postingDate")}
                                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900
                                    placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                            />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <label className="block mb-2 text-lg">Experience level</label>
                            <select {...register("experienceLevel")} className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900
                                    placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 cursor-pointer">
                                <option value={experienceLevel}>{experienceLevel}</option>
                                <option value="No experience">No experience</option>
                                <option value="Internship">Internship</option>
                                <option value="Any experience">Any experience</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2 text-lg">Required Skills</label>
                        <CreatableSelect
                            defaultValue={skills}
                            onChange={setSelectedOption}
                            options={options}
                            isMulti
                            className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900
                                    placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 cursor-pointer"
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="w-full lg:w-1/2">
                            <label className="block mb-2 text-lg">Company Logo</label>
                            <input type="url" placeholder="Ex: paste your company logo URL:https://weshare.com"
                            defaultValue={companyLogo}
                                {...register("companyLogo")}
                                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900
                                    placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                            />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <label className="block mb-2 text-lg">Employment Type</label>
                            <select {...register("employmentType")} className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900
                                    placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 cursor-pointer">
                                <option value={employmentType}>{employmentType}</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Temporary">Temporary</option>
                                <option value="Work remotely">Work remotely</option>
                            </select>
                        </div>
                    </div>
                    <div className='w-full'>
                        <label className='block mb-2 text-lg'>Job Description</label>
                        <textarea
                            rows={6}
                            placeholder='Enter your company description'
                            defaultValue={description}
                            {...register("description")}
                            className='w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700'
                        />
                    </div>
                    <div>
                        <label className='block mb-2 text-lg'>Job Posted By</label>
                        <input type="email" placeholder="Ex: company@gmail.com"
                        defaultValue={postedBy}
                            {...register("postedBy")}
                            className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900
                                    placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                        />

                    </div>
                    {/* <input type="submit" className="block mt-12  bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer" /> */}
                    <button type='submit'
                            className="block mt-12  bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UpdateJob

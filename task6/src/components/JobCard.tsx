import { Link } from "react-router-dom";
import type { JobData } from "../types/job"
import jobData from "../data/jobs.json";
import { ChevronDown } from 'lucide-react';




export const JobCard = () => {
    const jobs: JobData = jobData;


    return (
        <>
            <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

                <div className="flex-[4]">
                    <div className="flex p-4 justify-between">
                        <div>
                            <h1 className="text-2xl font-bold">Opportunities</h1>
                            <p className="text-gray-500">Showing 73 results</p>
                        </div>
                        <div className="flex space-x-2">
                            <div className="text-gray-500">Sort by:</div>
                            <div>Most relevant</div>
                            <div>
                            <button className="font-semibold text-gray-700">
                                <ChevronDown className="w-4 h-4 text-gray-500" />
                            </button>
                            </div>
                        </div>
                    </div>
                    {jobs.job_postings.map((job , index) => (
                        <Link to={`/jobs/${index}`} key={index}>
                            <div className="flex flex-col sm:flex-row gap-6 border border-gray-200 p-4 rounded-2xl my-4 bg-white shadow-sm hover:shadow-md transition">

                                <img src={job.image} alt="company logo" className="w-20 h-20 sm:w-[100px] sm:h-[80px] object-contain" />
                                <div>
                                    <h1 className= "text-2xl">{job.title}</h1>
                                    <div className="text-gray-500 py-2 space-x-2">
                                        <span>{job.company}</span>
                                        <span>{job.about.location}</span>
                                    </div>
                                    <p className="text-gray-800">{job.description}</p>
                                    <div className="py-3 flex flex-wrap gap-2">
                                        <button className="bg-green-50 text-green-500 font-semibold px-4 py-2 rounded-full">In person</button>
                                        <button className="outline outline-2 outline-orange-300 text-orange-300 font-semibold rounded-2xl px-4 py-2">Education</button>
                                        <button className="outline outline-2 outline-blue-800 text-blue-800 font-semibold rounded-2xl px-4 py-2">IT</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                    }
                </div>
                <div className="flex-1"></div>
            </div>
        </>
    )
}
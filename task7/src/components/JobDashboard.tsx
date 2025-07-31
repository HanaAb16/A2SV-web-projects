import { useParams } from "react-router-dom"
import { CircleCheck , Flame , MapPin , CircleFadingPlus } from 'lucide-react';
import type { JobData } from "../types/job";



export const JobDashboard = ({jobs}: {jobs: JobData[]}) => {
    const { id } = useParams()
    console.log("Route param id:", id);
    console.log("Jobs array:", jobs);
    console.log("Job found:", jobs.find((j) => String(j.id) === id));
    const job = jobs.find((j) => String(j.id) === id)
    
     if (!job) 
        return <p>Job not found</p>
    return (
        <>
            <div className="job-dashboard flex flex-col lg:flex-row lg:space-x-5">
                <section className="flex-[3] space-y-9 p-4 lg:p-10">
                    <div>
                        <h1>Description</h1>
                        <p>{job.description}</p>
                    </div>
                    <div>
                        <h1>Resposibilities</h1>
                        <div className="flex gap-2">
                        <CircleCheck className="text-green-500 w-4 h-4 mt-1"/>
                        <p>{job.responsibilities}</p>
                        </div>
                    </div>
                    <div>
                        <h1>Ideal candidate we want</h1>
                        <p>{job.requirements}</p>
                    </div>
                    <div>
                        <h1>When & where</h1>
                        <div className="flex gap-2">
                        <MapPin className="text-blue-400"/>
                        <p>{job.whenAndWhere}</p>
                        </div>
                    </div>
                </section>

                <aside className="p-4 mt-6 lg:mt-0 lg:max-w-sm">

                    <div>
                        <h1 className="text-lg font-semibold mb-3">About</h1>

                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-7 h-7 rounded-full border border-blue-500 flex items-center justify-center">
                            <CircleFadingPlus className="text-blue-500 w-4 h-4" />
                            </div>
                            <div className="space-y-1">
                            <p className="text-sm font-medium">Posted On</p>
                            <p className="text-sm">{job.datePosted}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-7 h-7 rounded-full border border-blue-500 flex items-center justify-center">
                            <Flame className="text-blue-500 w-4 h-4" />
                            </div>
                            <div className="space-y-1">
                            <p className="text-sm font-medium">Deadline</p>
                            <p className="text-sm">{job.deadline}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-7 h-7 rounded-full border border-blue-500 flex items-center justify-center">
                            <MapPin className="text-blue-500 w-4 h-4" />
                            </div>
                            <div className="space-y-1">
                            <p className="text-sm font-medium">Location</p>
                            <p className="text-sm">{job.location}</p>
                            </div>
                        </div>

                        
                    </div>

                    <div className="border-y py-3 my-4">
                    <h1 className="text-lg font-semibold mb-3">Categories</h1>
                    <div className="flex gap-2">
                        {job.categories.map((category, index) => (
                        <span key={index} className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-600 font-medium">
                            {category}
                        </span>
                        ))}
                    </div>
                    </div>

                    <div className="my-4">
                    <h1 className="text-lg font-semibold mb-3">Required Skills</h1>
                    <div className="flex flex-wrap gap-2">
                        {job.requiredSkills.map((skill, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-sm rounded-full bg-purple-50 text-purple-900 font-medium"
                        >
                            {skill}
                        </span>
                        ))}
                    </div>
                    </div>

                </aside>
            </div>
        </>
    )
}
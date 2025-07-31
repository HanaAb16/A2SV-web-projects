import { useParams } from "react-router-dom"
import jobData from "../data/jobs.json";
import { CircleCheck , Flame , MapPin , CalendarCheck , CalendarDays , CircleFadingPlus } from 'lucide-react';



export const JobDashboard = () => {
    const { id } = useParams()
    const index = Number(id)
    const job = jobData.job_postings[index]
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
                        <ul>
                            {job.responsibilities.map((responsibility , index) =>
                            <li key={index} className="flex items-start gap-2">
                                <CircleCheck className="text-green-500 w-4 h-4 mt-1"/>
                                <span>{responsibility}</span>
                            </li>
                            )}
                        </ul>
                    </div>
                    <div>
                        <h1>Ideal candidate we want</h1>
                        <ul className="list-disc pl-7">
                            <li>
                                <span>{job.ideal_candidate.age}</span>
                                <span>{job.ideal_candidate.gender}</span>
                            </li>
                            {job.ideal_candidate.traits.map((traits , index) =>
                            <li key={index}>{traits}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h1>When & where</h1>
                        <div className="flex gap-2">
                        <MapPin className="text-blue-400"/>
                        <p>{job.when_where}</p>
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
                            <p className="text-sm">{job.about.posted_on}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-7 h-7 rounded-full border border-blue-500 flex items-center justify-center">
                            <Flame className="text-blue-500 w-4 h-4" />
                            </div>
                            <div className="space-y-1">
                            <p className="text-sm font-medium">Deadline</p>
                            <p className="text-sm">{job.about.deadline}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-7 h-7 rounded-full border border-blue-500 flex items-center justify-center">
                            <MapPin className="text-blue-500 w-4 h-4" />
                            </div>
                            <div className="space-y-1">
                            <p className="text-sm font-medium">Location</p>
                            <p className="text-sm">{job.about.location}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-7 h-7 rounded-full border border-blue-500 flex items-center justify-center">
                            <CalendarDays className="text-blue-500 w-4 h-4" />
                            </div>
                            <div className="space-y-1">
                            <p className="text-sm font-medium">Start Date</p>
                            <p className="text-sm">{job.about.start_date}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full border border-blue-500 flex items-center justify-center">
                            <CalendarCheck className="text-blue-500 w-4 h-4" />
                            </div>
                            <div className="space-y-1">
                            <p className="text-sm font-medium">End Date</p>
                            <p className="text-sm">{job.about.end_date}</p>
                            </div>
                        </div>
                        </div>

                    <div className="border-y py-3 my-4">
                    <h1 className="text-lg font-semibold mb-3">Categories</h1>
                    <div className="flex flex-wrap gap-2">
                        {job.about.categories.map((category, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-600 font-medium"
                        >
                            {category}
                        </span>
                        ))}
                    </div>
                    </div>

                    <div className="my-4">
                    <h1 className="text-lg font-semibold mb-3">Required Skills</h1>
                    <div className="flex flex-wrap gap-2">
                        {job.about.required_skills.map((skill, index) => (
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
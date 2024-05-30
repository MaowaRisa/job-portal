import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    // this is not the best practice 
    const [dataLength, setDataLength] = useState(4);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(res => setJobs(res))
    },[])
    return (
        <div>
            <h2 className="text-5xl text-center">Featured Jobs</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <button onClick={()=>{setDataLength(jobs.length)}} className="btn btn-accent">load more</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;
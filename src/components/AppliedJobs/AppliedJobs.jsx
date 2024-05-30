import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import Job from "../Job/Job";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayedJobs, setDisplayedJobs] = useState([]);
  const jobs = useLoaderData();
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayedJobs(jobsApplied);
    }
  }, []);
  const handleJobsFilter = (filter) =>{
    if(filter === 'all'){
        setDisplayedJobs(appliedJobs)
    }else if(filter === 'remote'){
        const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
        setDisplayedJobs(remoteJobs);
    }else if(filter === 'onsite'){
        const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
        setDisplayedJobs(onsiteJobs);
    }
  }
  return (
    <div>
      <h2>Applied Jobs</h2>
      <details className="dropdown">
        <summary className="m-1 btn">Filter</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
          <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
          <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
        </ul>
      </details>
      <div className="flex flex-col">
        {displayedJobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;

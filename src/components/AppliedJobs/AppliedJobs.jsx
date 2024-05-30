import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import Job from "../Job/Job";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const jobs = useLoaderData();
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      setAppliedJobs(jobsApplied);
    }
  }, []);
  return (
    <div>
      <h2>Applied Jobs</h2>
      <div className="flex flex-col">
        {appliedJobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;

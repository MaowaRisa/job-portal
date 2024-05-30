import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localstorage";
const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));

  const handleAppliedJobs = () =>{
    saveJobApplication(parseInt(id));
    toast("You have successfully applied")
  }
  return (
    <div>
      <h2 className="text-3xl">Job details of: {job.job_title}</h2>
      <div className="grid grid-cols-4">
        <div className="col-span-3">{job.job_description}</div>
        <div className="p-2 bg-gradient-to-r from-[#7e90fe] to-[#9873ff] text-white ">
          <h2>Job Details</h2>
          <hr />
          <div>
            <h2>Salary: {job.salary}</h2>
            <h2>Job Title: {job.job_title}</h2>

            <button onClick={handleAppliedJobs} className="btn btn-primary w-full text-white font-semibold">
              Apply now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default JobDetails;

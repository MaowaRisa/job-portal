import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt={job_title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title} <small className={remote_or_onsite=='Remote'? 'text-red-500': 'text-blue-500' } >{remote_or_onsite}</small></h2>
        <p>{company_name}</p>
        <div>
          <button className=" px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className=" px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="flex justify-between mt-4">
          <h2 className="flex gap-1 items-end">
            <MdOutlineLocationOn className="text-2xl" /> {location}
          </h2>
          <h2 className="flex gap-1 items-end">
            <AiOutlineDollar className="text-2xl" /> {salary}
          </h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;

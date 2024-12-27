import React from "react";
import useJobs from "../../hooks/useJobs";
import HotJobCard from "../Home/HotJobCard";

const AllJob = () => {
  const { jobs, loading } = useJobs();
  if (loading) {
    return <h2>Job is Loading</h2>;
  }
  return (
    <div>
      <h1 className=" py-5 text-4xl font-bold text-center">ALL Jobs</h1>

      <div className="grid py-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-11/12 mx-auto">
        {jobs.map((job) => (
          <HotJobCard key={job._id} job={job}></HotJobCard>
        ))}
      </div>
    </div>
  );
};

export default AllJob;

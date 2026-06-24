import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jobs from "../data/jobs";

function Dashboard() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

const applyJob = (job) => {
  const appliedJobs =
    JSON.parse(localStorage.getItem("appliedJobs")) || [];

  const alreadyApplied =
    appliedJobs.find((j) => j.id === job.id);

  if (alreadyApplied) {
    alert("Already applied for this job");
    return;
  }

  appliedJobs.push(job);

  localStorage.setItem(
    "appliedJobs",
    JSON.stringify(appliedJobs)
  );

  alert(`Applied for ${job.title}`);
};

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome, {user?.name}</h1>

      <button onClick={() => navigate("/applied-jobs")}>
        View Applied Jobs
      </button>

        <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
            padding: "10px",
            width: "300px",
            marginBottom: "20px",
        }}
        />
      <h2>Available Jobs</h2>

      {jobs
  .filter((job) =>
    job.title
      .toLowerCase()
      .includes(search.toLowerCase())
  )
  .map((job) => (
        <div
          key={job.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>{job.location}</p>

          <button onClick={() => applyJob(job)}>
            Apply
          </button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
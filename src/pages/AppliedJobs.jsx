function AppliedJobs() {
  const jobs =
    JSON.parse(localStorage.getItem("appliedJobs")) || [];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Applied Jobs</h1>

      {jobs.length === 0 ? (
        <p>No jobs applied yet.</p>
      ) : (
        jobs.map((job, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default AppliedJobs;
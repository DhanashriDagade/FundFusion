import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.get("http://localhost:3000/api/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => {
        setUserData(response.data);
      })
      .catch(err => {
        console.error("Error fetching dashboard data", err);
      });
    }
  }, []);

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      {userData ? (
        <div>
          <p>Welcome, {userData.first_name}!</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;

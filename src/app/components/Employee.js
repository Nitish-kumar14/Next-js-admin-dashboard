"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/css/search.module.css";

export default function Employee() {
  const [employeeId, setEmployeeId] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const res = await fetch(`/api/employee/?employeeId=${employeeId}`); // Search by  EmployeeId you can change this for your own use
      if (!res.ok) {
        throw new Error("Employee not found");
      }
      const data = await res.json();
      setData(data);
      setError(null);
    } catch (error) {
      setData(null);
      setError(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchInput}
          type="text"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          placeholder="Enter Employee ID"
        />
        <button onClick={handleSearch} className={styles.searchButton}>
          Search
        </button>
      </div>

      {error && <p className={styles.error}>{error}</p>}
      {data && (
        <>
        <div className={styles.main_card}>
        <div className={styles.card}>
          <Image
            src={data.image || "/noavatar.png"}
            alt="Profile Picture"
            width={60}
            height={60}
            className={styles.avatar} />
          <div className={styles.info}>
            <h2 className={styles.name}>{data.username}</h2>
            <p className={styles.status}>Active</p>
            <p className={styles.detail}>Post: {data.post}</p>
            <p className={styles.detail}>DOJ: {data.doj}</p>
            <p className={styles.detail}>Team: {data.team}</p>
            <p className={styles.detail}>Employee ID: {data.employeeId}</p>
          </div>
        </div>
        <div className={styles.card}>
            <div className={styles.info}>
              <h2 className={styles.name}> Level</h2>
              <p className={styles.status}>
                
              </p>
            </div>
          </div>
        </div>
        </>
      )}
    </div>
  );
}

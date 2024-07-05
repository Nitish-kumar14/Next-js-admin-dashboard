'use client'
// import { fetchEmployee } from "@/app/lib/data"; // Ensure the correct path
// import styles from "@/app/ui/dashboard/users/singleUser/singleUser..module.css";
// import Image from "next/image";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// const SingleUserPage = async ({ params }) => {
//   const { id } = params;
//   const employee = await fetchEmployee(id);
//   const router = useRouter();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData(event.target);
//     const data = {
//       id: formData.get("id"),
//       username: formData.get("username"),
//       post: formData.get("post"),
//       doj: formData.get("doj"),
//       Team: formData.get("Team"),
//       EmployeeId: formData.get("EmployeeId"),
//     };

//     const response = await fetch("/api/updateUser", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     if (response.ok) {
//       // Redirect or show success message
//       router.push("/successPage");
//     } else {
//       // Handle error
//       console.error("Failed to update user");
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.infoContainer}>
//         <div className={styles.imgContainer}>
//           <Image src={employee.imd || "/noavatar.png"} alt="" fill />
//         </div>
//         {employee.username}
//       </div>
//       <div className={styles.formContainer}>
//         <form onSubmit={handleSubmit} className={styles.form}>
//           <input type="hidden" name="id" value={employee.id} />
//           <label> Username </label>
//           <input type="text" name="username" defaultValue={employee.username} />
//           <label> Post </label>
//           <input type="text" name="post" defaultValue={employee.post} />
//           <label> DOJ </label>
//           <input type="text" name="doj" defaultValue={employee.DOJ} />
//           <textarea type="text" name="Team" defaultValue={employee.Team} />
//           <input type="text" defaultValue={employee.EmployeeId} name="EmployeeId" required />
//           <button type="submit">Update</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SingleUserPage;




import { fetchUsers } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser..module.css";
import Image from "next/image";

import React from "react";

const SingleUserPage = async ({params}) => {

  const {id} = params
  const user = await fetchUsers(id)
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.imd || "/noavatar.png"} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
        <input type="hidden" name="id" value={user.id} />
        <label> Username </label>
        <input type="text" name="username" placeholder={user.username} />
        <label> post </label>
        <input type="text" name="post" placeholder={user.post} />
        <label> doj </label>
        <input type="text" name="doj" placeholder={user.DOJ} />
        <textarea type="text" name="Team" placeholder={user.Team} />
        <input type="text" placeholder={user.EmployeeId} name="EmployeeId" required />
        <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;

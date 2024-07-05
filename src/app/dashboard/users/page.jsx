import { fetchUser } from "@/app/lib/data"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import Search from "@/app/ui/dashboard/search/search"
import styles from '@/app/ui/dashboard/users/users.module.css'
import Image from "next/image"
import Link from "next/link"

const UserPage = async ({searchParams}) => {

  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {count , users} = await fetchUser(q,page)


  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>EmployeeId</td>
            <td>DOJ</td>
            <td>Post</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.image || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.employeeId}</td>
              <td>{user.doj}</td>
              <td>{user.post}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user._id}`}>
                    <button className={`${styles.button} ${styles.view}`}>View</button>
                  </Link>
                  <form >
                    <input type="hidden" name="id" value={user.id} />
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
}

export default UserPage

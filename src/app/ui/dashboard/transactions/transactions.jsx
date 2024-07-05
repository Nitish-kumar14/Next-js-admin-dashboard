import Image from "next/image";
import styles from "./transactions.module.css";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>lastest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Data</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
              <Image
                src="/noavatar.png"
                alt=""
                width={40}
                height={40}
                className={styles.userImage}
              />
              Nitish
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>done</span>
            </td>
            <td> 14.08.2024</td>
            <td>$10000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;

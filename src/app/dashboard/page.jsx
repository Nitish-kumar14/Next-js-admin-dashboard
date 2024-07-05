'use client';
import Chart from "@/app/ui/dashboard/chart/chart"
import Transactions from "@/app/ui/dashboard/transactions/transactions"
import Card from "@/app/ui/dashboard/card/card";
import Rightbar from "@/app/ui/dashboard/rightbar/rightbar";
import styles from "@/app/ui/dashboard/dashboard.module.css";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch('/api/check-auth');
      if (!res.ok) {
        router.push('/login');
      }
    };

    checkAuth();
  }, []);

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/login');
  };



  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
        
      </div>
    </div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Dashboard;

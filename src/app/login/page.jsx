"use client"
import styles from "@/app/ui/login/login.module.css";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };


  return (
    <>
      <div className={styles.main}>
        <div className={styles.wrapper}>
          <h1 className={styles.h2}>Login</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.input_field}>
            <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
            </div>
            <button className={styles.button}  type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

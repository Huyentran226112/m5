import styles from '../styles/Login.module.css';

export default function Home() {
  return (
    <div className={styles['login-container']}>
      <form className={styles['login-form']}>
        <h1>Login</h1>
        <input type="text" placeholder="Username" className={styles['login-input']} />
        <input type="password" placeholder="Password" className={styles['login-input']} />
        <button type="submit" className={styles['login-button']}>Submit</button>
      </form>
    </div>
  );
}
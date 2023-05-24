import { useState } from 'react';
import styles from './AuthPage.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  console.log(setUser, "AuthPage")
  return (
    <main className={styles.AuthPage}>
      
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}

      <div>
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      </div>
    </main>
  );
}
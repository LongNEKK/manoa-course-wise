'use client';

import { signOut } from 'next-auth/react'; // v5 compatible
import { useRouter } from 'next/navigation';
import '../auth.css';

/** Confirmation page before signing out. */
const SignOut = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/');
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <main className="auth-container">
      <div className="auth-content">
        <div className="auth-card">
          <div className="auth-card-header">
            <h1 className="auth-card-title">Sign Out</h1>
            <p className="auth-card-subtitle">Are you sure you want to leave?</p>
          </div>

          <div style={{ padding: '30px', textAlign: 'center' }}>
            <p style={{ color: '#666', marginBottom: '30px', fontSize: '1rem' }}>
              You will be signed out of your account and redirected to the home page.
            </p>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={handleSignOut}
                className="auth-submit-button"
                style={{ flex: 1, backgroundColor: '#dc3545' }}
              >
                Sign Out
              </button>
              <button
                onClick={handleCancel}
                className="auth-submit-button"
                style={{ flex: 1, backgroundColor: '#6c757d' }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignOut;

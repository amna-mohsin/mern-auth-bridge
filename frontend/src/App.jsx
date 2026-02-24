import React, { useState } from 'react';

export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [showModal, setShowModal] = useState(false); // For styled alert
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setShowModal(true); // Show alert
        setTimeout(() => setShowModal(false), 3000); // Hide after 3s
      }
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  const styles = `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    /* Center Alert Styling */
    .custom-modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #10b981;
      color: white;
      padding: 20px 40px;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      z-index: 9999;
      font-weight: 600;
      animation: pop 0.3s ease-out;
    }
    @keyframes pop {
      0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
      100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    }

    .app-container {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f8fafc;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      padding: 1.5rem;
    }

    .card {
      background: white;
      border-radius: 32px;
      box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.02);
      width: 100%;
      max-width: 400px;
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .card-header { padding: 2rem 2rem 1rem 2rem; text-align: center; }
    .card-header h2 { font-size: 1.875rem; font-weight: 700; color: #0f172a; letter-spacing: -0.02em; margin-bottom: 0.5rem; }
    .card-header p { color: #475569; font-size: 0.95rem; line-height: 1.5; }
    .card-body { padding: 1.5rem 2rem 2rem 2rem; }
    .form-group { margin-bottom: 1.25rem; }
    .form-label { display: block; font-size: 0.875rem; font-weight: 500; color: #334155; margin-bottom: 0.5rem; }
    .input-wrapper { position: relative; display: flex; align-items: center; }
    .input-icon { position: absolute; left: 1rem; color: #94a3b8; font-size: 1.1rem; line-height: 1; }
    input { width: 100%; padding: 0.75rem 1rem 0.75rem 2.75rem; border: 1.5px solid #e2e8f0; border-radius: 16px; font-size: 0.95rem; color: #0f172a; background: white; transition: all 0.2s ease; font-family: inherit; }
    input:focus { outline: none; border-color: #3b82f6; box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1); }
    .btn-primary { width: 100%; padding: 0.875rem; background: #3b82f6; color: white; border: none; border-radius: 16px; font-weight: 600; font-size: 1rem; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 6px -2px rgba(59, 130, 246, 0.3); }
    .btn-primary:hover { background: #2563eb; transform: translateY(-1px); }
    .divider { display: flex; align-items: center; text-align: center; margin: 1.5rem 0; color: #94a3b8; font-size: 0.875rem; gap: 1rem; }
    .divider::before, .divider::after { content: ''; flex: 1; height: 1px; background: #e2e8f0; }
    .social-buttons { display: flex; gap: 1rem; margin-bottom: 1.5rem; }
    .btn-social { flex: 1; display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.75rem; background: white; border: 1.5px solid #e2e8f0; border-radius: 16px; font-size: 0.95rem; font-weight: 500; color: #334155; cursor: pointer; }
    .toggle-text { text-align: center; font-size: 0.95rem; color: #475569; }
    .toggle-link { color: #3b82f6; font-weight: 600; cursor: pointer; background: none; border: none; font-size: 0.95rem; padding: 0 0 0 0.25rem; }
  `;

  return (
    <div className="app-container">
      <style>{styles}</style>

      {showModal && <div className="custom-modal"> Form submitted successfully!</div>}

      <div className="card">
        <div className="card-header">
          <h2>{isLogin ? 'Welcome back' : 'Create account'}</h2>
          <p>{isLogin ? 'Enter your credentials' : 'Get started for free'}</p>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="form-group">
                <label className="form-label">Full name</label>
                <div className="input-wrapper">
                  <span className="input-icon">👤</span>
                  <input type="text" name="fullName" placeholder="John Doe" value={formData.fullName} onChange={handleChange} required={!isLogin} />
                </div>
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Email address</label>
              <div className="input-wrapper">
                <span className="input-icon">📧</span>
                <input type="email" name="email" placeholder="hello@example.com" value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="input-wrapper">
                <span className="input-icon">🔒</span>
                <input type="password" name="password" placeholder="••••••••" value={formData.password} onChange={handleChange} required />
              </div>
            </div>

            <button type="submit" className="btn-primary">{isLogin ? 'Sign in' : 'Create account'}</button>
          </form>

          <div className="divider">or continue with</div>
          <div className="social-buttons">
            <button className="btn-social">Google</button>
            <button className="btn-social">Facebook</button>
          </div>

          <p className="toggle-text">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button onClick={() => setIsLogin(!isLogin)} className="toggle-link">{isLogin ? 'Sign up' : 'Sign in'}</button>
          </p>
        </div>
      </div>
    </div>
  );
}
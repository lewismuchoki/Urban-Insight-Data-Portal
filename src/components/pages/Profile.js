import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext'

function Profile() {
    const { currentUser, updateEmail, updatePassword,  logout } = useAuth();
    //const user = useUser(currentUser?.uid);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const roleRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
  
    async function handleSubmit(e) {
      e.preventDefault();
      setLoading(true);
      setError('');
  
      if (passwordRef.current.value !== confirmPasswordRef.current.value) {
        setError('Passwords do not match');
        setLoading(false);
        return;
      }
  
      const promises = [];
  
      if (emailRef.current.value !== currentUser.email) {
          promises.push(updateEmail(emailRef.current.value));
        }
    
        if (passwordRef.current.value) {
          promises.push(updatePassword(passwordRef.current.value));
        }
    
        try {
          await Promise.all(promises);
          setError('');
        } catch {
          setError('Failed to update account');
        }
    
        setLoading(false);
      }

      async function handleLogout() {
        setError("")
    
        try {
          await logout()
          navigate("/login")
        } catch {
          setError("Failed to log out")
        }
      }

  return (
    <div className="container">
    <h2>Profile</h2>
    {error && <div className="alert alert-danger">{error}</div>}
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Role</label>
      <input
        type="role"
        ref={roleRef}
        className="form-control"
        defaultValue={currentUser.role}
        readOnly
      />
      </div>
      <div className="mb-3">
      <label className="form-label">Email</label>
      <input type="email" ref={emailRef} defaultValue={currentUser.email} className="form-control" />
    </div>
    <div className="mb-3">
      <label className="form-label">Password</label>
      <input type="password" ref={passwordRef} placeholder="Leave blank to keep the same" className="form-control" />
    </div>
    <div className="mb-3">
      <label className="form-label">Confirm Password</label>
      <input type="password" ref={confirmPasswordRef} placeholder="Leave blank to keep the same" className="form-control" />
    </div>
    <button type="submit" disabled={loading} className=" mb-4 w-100 btn btn-primary">
      Update
    </button>
    <button type="submit"  disabled={loading} className='w-100 btn btn-primary' onClick={handleLogout}>
         Log Out
    </button>
  </form>
</div>
  );
};

export default Profile;

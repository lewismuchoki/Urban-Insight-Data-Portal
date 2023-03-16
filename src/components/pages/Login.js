import React from "react";
import { useState, useRef } from 'react'
import { Button, Form, Card, Alert } from "react-bootstrap"
import { useAuth } from '../../context/AuthContext' 
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      console.log("Attempting to sign in with email: ", emailRef.current.value);
      await login(emailRef.current.value, passwordRef.current.value);
      console.log("Sign In Successfully");
      navigate("/");
    } catch (error) {
      console.error("Unable to Sign In", error);
      setError("Failed to Sign In");
    } finally {
      setLoading(false);
    }

    setLoading(false);
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-2" type="submit">
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}

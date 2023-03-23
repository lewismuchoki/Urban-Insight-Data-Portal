import React from 'react'
import { useState, useRef } from 'react'
import { Button, Form, Card, Alert } from "react-bootstrap"
import { useAuth } from '../../context/AuthContext' 
import { Link, useNavigate } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const roleRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
  
    async function handleSubmit(e) {
      e.preventDefault()
  
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Passwords do not match")
      }
  
      try {
        setError("");
        setLoading(true);
        console.log("Attempting to create user with email: ", emailRef.current.value)
        const newUserCredential = await signup(
          emailRef.current.value,
          passwordRef.current.value
        );
        await addDoc(collection(db, "users"), {
          uid: newUserCredential.user.uid,
          email: newUserCredential.user.email,
          role: roleRef.current.value,
          approved: false,
        });
        navigate('/')
      } catch(error) {
        console.error("Error creating user:", error);
        setError("Failed to create an account");
      }
  
      setLoading(false);
    }

    return (
      <>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant='danger'>{error}</Alert> }
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required  />
              </Form.Group>
              <Form.Group id="paassword-confirm">
                <Form.Label>Confrirm Password</Form.Label>
                <Form.Control type="password" ref={passwordConfirmRef} required />
              </Form.Group>
              <Form.Group id="role">
              <Form.Label>Role</Form.Label>
              <Form.Control as='select' ref={roleRef} required>
               <option value="publisher">Publisher</option>
               <option value="consumer">Consumer</option>
              </Form.Control>
            </Form.Group>
              <Button disabled = {loading} className="w-100 mt-2" type="submit">
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to='/login'>Log In</Link>
        </div>
      </>
    )
  }
  

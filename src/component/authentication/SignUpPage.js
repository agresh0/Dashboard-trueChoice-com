import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/Config';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function SignUpPage() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit =  (e) => {
    e.preventDefault()
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        // const user = userCredential.user;
         let id =  userCredential.user.uid;
         setDoc(doc(db, "users", id), {
          username, email, id
          
        });
        updateProfile(userCredential.user, {
          displayName:username
        })
        alert("Congrats Successfully created !")
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        
      });


  }

  return (

    <>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={5} >
            <div >
              <div className="container mt-5">
                <div className="authentication-wrapper authentication-basic container-p-y ">
                  <div className="authentication-inner shadow ">
                    {/* Register Card */}
                    <div className="card">
                      <div className="card-body p-5">
                        {/* Logo */}
                        {/* /Logo */}
                        <h2 className='mb-4'>Become a <span style={{ color: '#f58633' }}>True</span> <span style={{ color: '#00afef' }}>Choice</span> Insider!</h2>
                        <form className="mb-3" onSubmit={handleSubmit}>
                          <div className="mb-3">
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" name="username" placeholder="Enter your username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" name="email" placeholder="Enter your email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                          </div>
                          <div className="mb-3 form-password-toggle">
                            <label className="form-label" >Password</label>
                            <div className="input-group input-group-merge">
                              <input type="password" id="password" className="form-control" name="password" placeholder="············" aria-describedby="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                              <span className="input-group-text cursor-pointer"><i className="bx bx-hide" /></span>
                            </div>
                          </div>&nbsp;
                          <button className="btn btn-dark d-grid w-100" type='submit'>Sign up</button>
                        </form>
                        <p className="text-center">
                          <span>Already have an account?</span>
                          <Link to={'/'}>
                            <span style={{ color: '#393f81' }}>Sign in instead</span>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>

    </>
  )
}

export default SignUpPage
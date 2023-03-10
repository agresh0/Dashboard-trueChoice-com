import { useState, React, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
               alert('Sign In')
               navigate('/home')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }


    return (
        <>
            <section className="vh-100" style={{ backgroundColor: '#f5f5f9' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: '1rem' }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src="https://images.unsplash.com/photo-1620847969348-60db0790bc09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">
                                            <form onSubmit={handleSubmit}>
                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }} />
                                                    <span className="h1 fw-bold mb-0 " style={{ color: '#f58633' }}>True </span>&nbsp; <span className="h1 fw-bold mb-0 " style={{ color: '#00afef' }}> Choice</span>
                                                </div>
                                                <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}>Sign into your account</h5>
                                                <div className="form-outline mb-4">
                                                    <input type="email" className="form-control form-control-lg" onChange={(e) => { setEmail(e.target.value) }} />
                                                    <label className="form-label">Email address</label>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form2Example27" className="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} />
                                                    <label className="form-label" htmlFor="form2Example27" >Password</label>
                                                </div>
                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block w-100" type="submit">Login</button>
                                                </div>
                                                <label className="small text-muted" style={{ textDecoration: 'none' }}>Forgot password?</label>
                                                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account?<Link to={'/register'} style={{ textDecoration: 'none' }}> <a style={{ color: '#393f81' }}>Register here</a></Link ></p>
                                                <label className="small text-muted" style={{ textDecoration: 'none' }}>Terms of use.</label>
                                                <label className="small text-muted" style={{ textDecoration: 'none' }}>Privacy policy</label>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginPage
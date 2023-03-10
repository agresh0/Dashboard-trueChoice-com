import React, { useEffect, useContext } from 'react'
import './SideBar.css'
import { Link,useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Context from '../../store/Context';
import { AuthContext } from '../../store/Context';


function SideBar() {

  const navigate = useNavigate();


  function logOut() {
    const auth = getAuth();
    signOut(auth).then(() => {
      alert('Logout');
      navigate('/')
    }).catch((error) => {
      alert(error.message)
    });
  }


  useEffect(() => {
  }, [])

  return (
    <>
      <div className='sidebar  rounded-end-5 d-flex flex-column'>

        <div className='p-2 m-4 mb-1'>
          {/* <span><img src={logo} alt="Logo" width={70}/></span> */}
          <span className="h1 fw-bold mb-0" style={{ color: '#f58633' }} >True </span>&nbsp; <span className="h1 fw-bold mb-0 " style={{ color: '#00afef' }}> Choice</span><hr></hr>
        </div>
        <div className='sidebarLink p-2 d-flex flex-column'>
          <Link to={'/home'} className='text-muted'><a><i className="fa-solid fa-house me-2"></i>HOME</a></Link >
          <Link to={'/stockList'} className='text-muted'><a><i className="fa-solid fa-list me-2"></i>STOCK LIST</a></Link >
          <Link to={'/purchaselist'} className='text-muted'><a><i className="fa-solid fa-cart-shopping me-2"></i>PURCHASED</a></Link >
          <Link to={'/expense'} className='text-muted'><a><i className="fa-solid fa-wallet me-2"></i>EXPENSE</a></Link >
        </div>
        <div className="border rounded-5 mt-auto mb-4 sidebarLink shadow" >
          <a href="#" className="d-flex align-items-center text-dark text-decoration-none " id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://i.pinimg.com/1200x/1c/c5/35/1cc535901e32f18db87fa5e340a18aff.jpg" alt="profile pic" width={40} height={40} className="rounded-circle" />
            <Row onClick={logOut}>
              <Col sm={9}><span className="d-none d-sm-inline mx-1" >hai</span></Col>
              <Col sm={3}><span className='ms-4'><i className="fa-solid fa-right-from-bracket fs-3" style={{ color: '#f58633' }}></i></span></Col>
            </Row>
          </a>
        </div>
      </div>




      {/* <div className='content'>
      hello world
    </div> */}

    </>
  )
}

export default SideBar
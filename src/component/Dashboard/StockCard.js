import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import demoData from './demoData.js'
import {  Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import SellButtonModel from './modal/SellButtonModel.js';
import AddButtonModal from './modal/AddButtonModal.js';
import { Col, Row } from 'react-bootstrap';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/Config.js';
import {FaCheckCircle} from 'react-icons/fa';

function StockCard() {
  

  const [vehicleDetails, setVehicleDetails] = useState('')
    const [sellmodal, SetSellModal] = useState(false);
    const [addModal, SetAddModal] = useState(false)

    const [vehicleid, setVehicleid] = useState('')


    useEffect(() => {
    getDocs(collection(db, "purchaseDetails")).then(result=>{
      setVehicleDetails((result.docs));
    })

    
    }, [])

  return (
    <div>
      <div className="content card">
        <div className="input-group rounded mt-5 shadow" >
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search" />
          </span>
          <input type="search" className="form-control rounded" placeholder="Search...." aria-label="Search" aria-describedby="search-addon" style={{ height: '3.5rem' }} />

        </div>


        <div className=''>
          <div className="table-responsive text-nowrap p-3 bg-light rounded-4 shadow mt-4 ">
            <Row >
              <Col sm={9}><h5 className="card-header">Stock List</h5></Col>
              <Col sm={3}><Button className='ms-5 m-3' onClick={() => SetAddModal(true)}><i className="fa-solid fa-plus "></i> Add</Button></Col>
            </Row>
              <table className="table table-hover  ">
                <thead>
                  <tr>
                    <th>Sl No</th>
                    <th>Date Of Purchase</th>
                    <th>Vehicle Name</th>
                    <th>Reg No</th>
                    <th>Source</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  {vehicleDetails && vehicleDetails.length > 0 ?
                    vehicleDetails.map((item, index) => (
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.data().dateOfPurchase}</td>
                        <td>{item.data().vehicleName}</td>
                        <td>{item.data().rcDetails.reg_no}</td>
                        <td>{item.data().source}</td>
                        <td>
                          <span><Link to={'/vehicledetails/:id'}><i className="fa-solid fa-pen-to-square fs-4"></i></Link ></span>
                         { item.data().sellDetails.status ?
                         <FaCheckCircle className='text-success fs-4 ms-3 mb-1'/>:
                         <span className='ms-3'><Button variant="success" onClick={() => {
                            setVehicleid(item.data().id)
                            SetSellModal(true)
                            }}><i className="fa-solid fa-check"></i>&nbsp;SELLED</Button></span>
                            
                          }
                            
                        </td>
                      </tr>
                    )) : "no data to display"}

                </tbody>
              </table>

          </div>

        </div>

        {/* modal for sell */}
        <Modal
        size="lg"
        show={sellmodal}
        onHide={() => SetSellModal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Sell Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <SellButtonModel id={vehicleid}/>
            
        </Modal.Body>
      </Modal>

      {/* modal for add */}
      <Modal
        size="lg"
        show={addModal}
        onHide={() => SetAddModal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddButtonModal/>
      </Modal.Body>
      </Modal>
    
      </div>

    </div>
  )
}

export default StockCard
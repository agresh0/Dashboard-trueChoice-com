import React from 'react'
import Layout from '../Layout'
import { Row,Col } from 'react-bootstrap'

function VehicleDetails() {
  return (
    <Layout>
      <div className='content p-5 '>
        <div className='p-5 border bg-light rounded-4 text-center'>
          <Row>
            <Col>
            <div>
              <label className='form-label'>vehicle name<i className="fa-solid fa-car fs-5 ms-2"></i>&nbsp;:</label>
             <p className='ms-5 fs-5'>swift</p>
            </div>
            <div>
              <label className='form-label'>vehicle name <i class="fa-sharp fa-regular fa-gas-pump-slash"></i>&nbsp;:</label>
             <p className='ms-5 fs-5'>swift</p>
            </div>


            </Col>
            <Col>
            <div>
              <label className='form-label'>vehicle varient<i class="fa-solid fa-gas-pump fs-5 ms-2"></i>&nbsp;:</label>
             <p className='ms-5 fs-5'>hybrid</p>
            </div>
            <div>
              <label className='form-label'>vehicle name<i className="fa-solid fa-car fs-5 ms-2"></i>&nbsp;:</label>
             <p className='ms-5 fs-5'>swift</p>
            </div>

            </Col>
          </Row>
          
        </div>
      </div>
    </Layout>
  )
}

export default VehicleDetails
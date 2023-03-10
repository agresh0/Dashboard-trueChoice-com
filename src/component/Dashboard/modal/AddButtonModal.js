import React from 'react'
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebase/Config';


function AddButtonModal() {


    const [expenseOnPurchase, setExpenseOnPurchase] = useState([{ purpose: '', amount: '' }]);

    const handleinputchange = (e, index) => {
        const { name, value } = e.target;
        const list = [...expenseOnPurchase];
        list[index][name] = value;
        setExpenseOnPurchase(list);
    }

    const handleRemove = index => {
        const list = [...expenseOnPurchase];
        list.splice(index, 1);
        setExpenseOnPurchase(list);
    }

    const handleAddClick = () => {
        setExpenseOnPurchase([...expenseOnPurchase, { purpose: '', amount: '' }]);
    }

    const [vehicleName, setVehicleName] = useState('')
    const [dateOfPurchase, setDateOfPurchase] = useState('')
    const [source, setSource] = useState('')
    const [secondKey, setSecondKey] = useState('')
    const [purchasedAmt, setPurchasedAmt] = useState('')
    const [insurance, setInsurance] = useState({
        type: '',
    })
    const [noc, setNoc] = useState('');
    const [rcDetails, setRcDetails] = useState({
        owner_name: '',
        reg_no: '',
        chasis_no: '',
        dateOf_reg: '',
        reg_validity: '',
        owner_no: ''
    })
    const [note, setNote] = useState('')
    function handleOptionChange(event) {
        setNoc(event.target.value);
    }
    function handleSecondKey(event) {
        setSecondKey(event.target.value);
    }
    const [varient, setVarient] = useState('')

    async function handleSubmit(event) {
        event.preventDefault();
        try{

            let id = Date.now().toString();
            await setDoc(doc(db, "purchaseDetails", id), {
                id, dateOfPurchase, source, secondKey, purchasedAmt, noc,rcDetails,vehicleName,insurance,note,expenseOnPurchase,
                sellDetails:{
                    status:false
                }
            });
            alert("Successfull !")
        }catch(err){
            alert(err)
        }
    }



    useEffect(() => {


    }, [])
    return (
        <>
            <hr className="my-0" />
            <div className="card-body">
                <form id="formAccountsettings" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="mb-3 col-md-6">
                            <label for="vehicleName" className="form-label">Vehicle Name</label>
                            <input
                                className="form-control"
                                type="text"
                                id="vehicleName"
                                name="vehicleName"
                                onChange={(event) => setVehicleName(event.target.value)}
                            />
                        </div>
                        <div className="mb-3 col-md-6">
                            <label for="dateOfPurchase" className="form-label">Date of Purchase</label>
                            <div className="col-md-12">
                                <input className="form-control" type="date" id="html5-date-input" onChange={(event) => setDateOfPurchase(event.target.value)} />
                            </div>
                        </div>
                        <div className="mb-3 col-md-6">
                            <label className="form-label">Vehicle varient</label>
                            <select className="form-select" aria-label="Default select example"  onChange={(event) => setVarient(event.target.value)}>
                                <option selected >Open this select menu</option>
                                <option value="Petrol">Petrol</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Electric">Electric</option>
                            </select>
                        </div>

                        <div className="mb-3 col-md-6">
                            <label for="source" className="form-label">source</label>
                            <input
                                type="text"
                                className="form-control"
                                id="source"
                                name="source"
                                placeholder="name"
                                onChange={(event) => setSource(event.target.value)}
                            />
                        </div>
                        <Row>
                            <Col>
                                <div className="mb-3 ">
                                    <label className="form-label" >second key</label>
                                    <div className="col-md">
                                        <div className="form-check form-check-inline " >
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                value="yes"
                                                checked={secondKey === "yes"}
                                                onChange={handleSecondKey}
                                            />
                                            <label className="form-check-label" for="inlineRadio1">Yes</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                value="no"
                                                checked={secondKey === "no"}
                                                onChange={handleSecondKey}
                                            />
                                            <label className="form-check-label" for="inlineRadio2">NO</label>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="mb-3 ">
                                    <label for="noc" className="form-label">noc</label>
                                    <div className="col-md">
                                        <div className="form-check form-check-inline " >
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="inlineRadioOptions"
                                                id="inlineRadio1"
                                                value="yes"
                                                // checked={noc === "yes"}
                                                onChange={handleOptionChange}
                                            />
                                            <label className="form-check-label" for="inlineRadio1">Yes</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="inlineRadioOptions"
                                                id="inlineRadio2"
                                                value="no"
                                                // checked={noc === "no"}
                                                onChange={handleOptionChange}
                                            />
                                            <label className="form-check-label" for="inlineRadio2">NO</label>
                                        </div>
                                    </div>
                                </div>&nbsp;
                            </Col>
                            <div className='col-md-6'>
                                <div className="mb-3 ">
                                    <label className="form-label">Purchased amount</label>
                                    <div className="input-group input-group-merge">
                                        <span className="input-group-text"></span>
                                        <input
                                            type="text"
                                            id="purchasedAmt"
                                            name="purchasedAmt"
                                            className="form-control"
                                            placeholder="amount"
                                            onChange={(event) => setPurchasedAmt(event.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Row>

                        <div className="mb-3 col-md-12">
                            <label for="insurance" className="form-label">Insurance</label>
                            <hr className="my-0 mb-4" />
                            <Row>
                                <Col>
                                    <div>
                                        <label for="insuranceType" className="form-label">premium type</label>
                                        <select className="form-select" id="insuranceType" aria-label="Default select example" onChange={(e) => setInsurance({ ...insurance, type: e.target.value })}>
                                            <option selected >Open this select menu</option>
                                            <option value="First  Class">First  Class</option>
                                            <option value="Tp">Tp</option>
                                            <option value="None">None</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <label className="form-label">amount</label>
                                        <input type="text" name="insuranceAmt" className="form-control" onChange={(e) => setInsurance({ ...insurance, amount: e.target.value })} />
                                    </div>
                                </Col>
                                <div className=" col-md-6">
                                    <label for="dateOfPurchase" className="form-label">Validity end date</label>
                                    <div className="col-md-12">
                                        <input className="form-control" type="date" id="html5-date-input" onChange={(e) => setInsurance({ ...insurance, date: e.target.value })} />
                                    </div>
                                </div>
                            </Row>
                        </div>
                        <div className="mb-3 col-md-12">
                            <label for="rcDetails" className="form-label">rc details</label>
                            <hr className="my-0 mb-4" />
                            <Row>
                                <Col>
                                    <div>
                                        <label for="ownerName" className="form-label">owner name</label>
                                        <input type="text" name="ownerName" className="form-control" onChange={(e) => setRcDetails({ ...rcDetails, owner_name: e.target.value })} />
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <label for="rcRegNO" className="form-label">reg no</label>
                                        <input type="text" name="rcRegNO" className="form-control" onChange={(e) => setRcDetails({ ...rcDetails, reg_no: e.target.value })} />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <label for="ownerName" className="form-label">chasis no </label>
                                        <input type="text" name="ownerName" className="form-control" onChange={(e) => setRcDetails({ ...rcDetails, chasis_no: e.target.value })} />
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <label for="rcRegNO" className="form-label">date of reg</label>
                                        <input type="date" name="rcRegNO" className="form-control" onChange={(e) => setRcDetails({ ...rcDetails, dateOf_reg: e.target.value })} />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <label for="ownerName" className="form-label">reg validity </label>
                                        <input type="date" name="ownerName" className="form-control" onChange={(e) => setRcDetails({ ...rcDetails, reg_validity: e.target.value })} />
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <label for="rcRegNO" className="form-label">owner no</label>
                                        <input type="number" name="rcRegNO" className="form-control" placeholder='number' onChange={(e) => setRcDetails({ ...rcDetails, owner_no: e.target.value })} />
                                    </div>
                                </Col>
                            </Row>
                        </div>&nbsp;
                        <div className="mb-3 col-md-12">
                            <label for="expenseOnPurchase" className="form-label">Expense on Purchase</label>
                            {/* <input type="text" className="form-control" id="expenseOnPurchase" name="expenseOnPurchase" placeholder="amount" /> */}
                            <hr className="my-0 mb-4" />
                            {
                                expenseOnPurchase.map((x, i) => (
                                    <div className='row'>
                                        <div className="col-md-6">
                                            <label className="form-label"  >Purpose</label>
                                            <input type="text" name="purpose" className="form-control" placeholder="fuel/food" onChange={e => handleinputchange(e, i)} />
                                        </div>
                                        <div className=" col-md-5">
                                            <label className="form-label"   >amount</label>
                                            <input type="text" name="amount" className="form-control" placeholder="amount" onChange={e => handleinputchange(e, i)} />
                                        </div>
                                        <div className='col-md-1'>
                                            {
                                                expenseOnPurchase.length !== 1 &&
                                                <div className='mt-4 '>
                                                    {/* <Button  variant="danger"> */}
                                                    <i className="fa-solid fa-xmark" onClick={() => handleRemove(i)}></i>
                                                    {/* </Button> */}
                                                </div>
                                            }
                                            {
                                                expenseOnPurchase.length - 1 === i &&
                                                <div className='mt-4 ' >
                                                    {/* <Button onClick={handleAddClick}> */}
                                                    <i className="fa-solid fa-plus" onClick={handleAddClick}></i>
                                                    {/* </Button> */}
                                                </div>
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="mb-3 col-md-6">
                            <label className="form-label" for="purchasedAmt">note</label>
                            <textarea className='form-control' id="note" name="note" rows="5" cols="50" onChange={(event) => setNote(event.target.value)} />
                        </div>
                    </div>
                    <div className="mt-2">
                        <button type="submit" className="btn btn-primary me-2">Save changes</button>
                        <button type="reset" className="btn btn-outline-secondary">Cancel</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddButtonModal
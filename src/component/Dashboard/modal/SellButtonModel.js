import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase/Config';

function SellButtonModel({ id }) {

    const [paymentMethode, setPaymentMethode] = useState({
        type: '',
        finance_name: '',
        exicutive_name: '',
        loan_amount: '',
        disbursement_amount: '',
        ref_no: '',
        commission_amount: ''
    })

    const [customerName, setCustomerName] = useState('')
    const [customerPhone, setCustomerPhone] = useState('')
    const [purchasedAmt, setPurchasedAmt] = useState('')
    const [advanceAmt, setAdvanceAmt] = useState('')
    const [dateOfSale, setDateOfSale] = useState('')


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await updateDoc(doc(db, "purchaseDetails", id), {
                sellDetails: {
                    status: true,
                    dateOfSale: dateOfSale,
                    customerName: customerName,
                    customerPhone: customerPhone,
                    purchasedAmt: purchasedAmt,
                    advanceAmt: advanceAmt,
                    paymentMethode: paymentMethode
                }
            });
            alert("Successfull !")
        } catch (error) {
            alert(error)
        }
    }

    return (
        <>

            <hr className="my-0" />
            <div className="card-body">
                <form id="formAccountSettings" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="mb-3 col-md-6">
                            <label className="form-label">date of sale</label>
                            <input className="form-control" type="date" name="dateOfSale" id="lastName" onChange={(e) => setDateOfSale(e.target.value)} />
                        </div>
                        <div className="mb-3 col-md-6">
                            <label className="form-label">customer name</label>
                            <input
                                className="form-control"
                                type="text"
                                id="customerName"
                                name="customerName"
                                onChange={(e) => setCustomerName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3 col-md-6">
                            <label className="form-label" for="phoneNumber">customer Phone Number</label>
                            <div className="input-group input-group-merge">
                                <span className="input-group-text">IND (+91)</span>
                                <input
                                    type="text"
                                    name="customerPhone"
                                    className="form-control"
                                    placeholder="202 555 0111"
                                    onChange={(e) => setCustomerPhone(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mb-3 col-md-6">
                            <label className="form-label">total purchased amount</label>
                            <input
                                type="text"
                                className="form-control"
                                id="purchasedAmt"
                                name="purchasedAmt"
                                placeholder='amount'
                                onChange={(e) => setPurchasedAmt(e.target.value)}
                            />
                        </div>
                        <div className="mb-3 col-md-6">
                            <label className="form-label">advance amount</label>
                            <input
                                type="text"
                                className="form-control"
                                name="advanceAmt"
                                placeholder='amount'
                                value={0}
                                onChange={(e) => setAdvanceAmt(e.target.value)}
                            />
                        </div>
                        <div className="mb-3 col-md-6">
                            <label className="form-label">payment methode</label>
                            <select className="form-select" id="insuranceType" aria-label="Default select example" onChange={(e) => setPaymentMethode({ ...paymentMethode, type: e.target.value })}>
                                <option selected >Open this select menu</option>
                                <option value="finance">Finance</option>
                                <option value="full payment">Full payment</option>
                            </select>
                        </div>
                        {
                            paymentMethode.type == "finance" ?
                                <div className="mb-3 col-md-12">
                                    <label for="finance" className="form-label">finannce</label>
                                    <hr className="my-0 mb-4" />
                                    <Row>
                                        <Col>
                                            <div>
                                                <label className="form-label">finance name</label>
                                                <input type="text" name="finance_name" className="form-control" onChange={(e) => setPaymentMethode({ ...paymentMethode, finance_name: e.target.value })} />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div>
                                                <label className="form-label">exicutive name</label>
                                                <input type="text" name="exicutive_name" className="form-control" onChange={(e) => setPaymentMethode({ ...paymentMethode, exicutive_name: e.target.value })} />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div>
                                                <label className="form-label">loan amount </label>
                                                <input type="text" name="loan_amount" className="form-control" onChange={(e) => setPaymentMethode({ ...paymentMethode, loan_amount: e.target.value })} />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div>
                                                <label for="disbursementAmt" className="form-label">disbursement amount</label>
                                                <input type="text" name="disbursement_amount" className="form-control" onChange={(e) => setPaymentMethode({ ...paymentMethode, disbursement_amount: e.target.value })} />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div>
                                                <label for="refNo" className="form-label">ref no/do </label>
                                                <input type="text" name="ref_no" className="form-control" onChange={(e) => setPaymentMethode({ ...paymentMethode, ref_no: e.target.value })} />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div>
                                                <label className="form-label">commission amount</label>
                                                <input type="text" name="commission_amount" className="form-control" placeholder='amount' onChange={(e) => setPaymentMethode({ ...paymentMethode, commission_amount: e.target.value })} />
                                            </div>
                                        </Col>
                                    </Row>
                                </div> : ''
                        }
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

export default SellButtonModel
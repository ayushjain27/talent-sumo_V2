import React, { useState } from 'react';
import styles from './Clone.module.css';

import Quesans from '../Modal/QuesAns';

const Clone = () => {

    const [custom, setCustom] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [certificate, setCertificate] = useState(false);

    const handleCustom = () => {
        setCustom(!custom);
        setDisabled(!disabled);
    }

    const handleCertificate = () => {
        setCertificate(!certificate);
        setDisabled(!disabled);
    }

    return (
        <>
            <style>
                {`
                    .active {
                        color: #000;
                    }
                `}
            </style>

            <div className="container mt-5">
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className={`${styles.navLink} nav-link active`} id="nav-create-tab" data-bs-toggle="tab" data-bs-target="#nav-create" type="button" role="tab" aria-controls="nav-create" aria-selected="true">Create Interaction</button>
                        <button className={`${styles.navLink} nav-link`} id="nav-access-tab" data-bs-toggle="tab" data-bs-target="#nav-access" type="button" role="tab" aria-controls="nav-access" aria-selected="false">Access Details</button>
                        <button className={`${styles.navLink} nav-link`} id="nav-notificationMessage-tab" data-bs-toggle="tab" data-bs-target="#nav-notificationMessage" type="button" role="tab" aria-controls="nav-notificationMessage" aria-selected="false">Notification & Message</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-create" role="tabpanel" aria-labelledby="nav-create-tab" tabindex="0">
                        <div className='d-grid col-md-9 mx-auto my-3'>
                            <div className='card border-warning'>
                                <h3 className='card-header text-black text-center mb-3 bg-warning'>
                                    Create Interaction
                                </h3>
                                <div className="card-body">
                                    <form style={{ color: "#000" }}>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="mb-3">
                                                    <label htmlFor="detail" className="form-label fw-bold">Company/Institute Name</label>
                                                    <input type="text" className="form-control" placeholder='Enter company/institute name' id="companyName" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="mb-3">
                                                    <label htmlFor="job" className="form-label fw-bold">Job Title / Course Title</label>
                                                    <input type="text" className="form-control" placeholder='Enter Job role' id="job" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="mb-3">
                                                    <label htmlFor="positionCode" className="form-label fw-bold">Test Code</label>
                                                    <input type="number" className="form-control" placeholder='Enter 6-digit code' id="positionCode" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="track" className="form-label fw-bold">Track/Domain :</label>
                                                    <select className="form-select" id='track' aria-label="Default select example">
                                                        <option selected value="Select">Select...</option>
                                                        <option value="Custom-A">Custom-A</option>
                                                        <option value="Custom-B">Custom-B</option>
                                                        <option value="Sales">Sales</option>
                                                        <option value="Service">Service</option>
                                                        <option value="HR">HR</option>
                                                        <option value="New Grad.">New Grad.</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="mode" className="form-label fw-bold">Interaction Mode</label>
                                                    <select className="form-select" id='mode' aria-label="Default select example">
                                                        <option selected value="Select">Select...</option>
                                                        <option value="Audio">Audio</option>
                                                        <option value="Video">Video</option>
                                                        <option value="Mcq">Mcq</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className='mb-3'>
                                                    <label className="form-label fw-bold">Report Type</label>
                                                    <div className="form-check">
                                                        <input disabled={custom ? false : true} onClick={handleCustom} className="form-check-input" type="radio" name="reportType" id="trackBased" defaultChecked />
                                                        <label className="form-check-label" htmlFor="trackBased">
                                                            Track Based
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input disabled={custom ? true : false} onClick={handleCustom} className="form-check-input" type="radio" name="reportType" id="custom" />
                                                        <label className="form-check-label" htmlFor="custom">
                                                            Custom
                                                        </label>
                                                        {
                                                            custom &&
                                                            <input type="text" className="form-control mt-2 mb-3" id="custom" placeholder='Custom' aria-describedby="customHelp" />
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className='mb-3'>
                                                    <label className="form-label fw-bold">Generate Certificate</label>
                                                    <div className="form-check">
                                                        <input disabled={certificate ? false : true} onClick={handleCertificate} className="form-check-input" type="radio" name="generateCertificate" id="no" defaultChecked />
                                                        <label className="form-check-label" htmlFor="no">
                                                            No
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input disabled={certificate ? true : false} onClick={handleCertificate} className="form-check-input" type="radio" name="generateCertificate" id="yes" />
                                                        <label className="form-check-label" htmlFor="yes">
                                                            Yes
                                                        </label>
                                                        {
                                                            certificate &&
                                                            <input type="text" className="form-control mt-2 mb-3" id="certificate" placeholder='Certificate Name' />
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="description" className="form-label fw-bold">Instruction</label>
                                                    <input type="text" className="form-control" placeholder='Your instruction' id="instruction" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="description" className="form-label fw-bold">Description</label>
                                                    <input type="text" className="form-control" placeholder='Your description' id="description" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mb-3">
                                            <label htmlFor="question" className="form-label fw-bold">Total Question: <span className='badge badge bg-warning'>No.</span></label>
                                            <button type="button" className="btn btn-warning button" data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button>
                                        </div>
                                    </form>
                                    <hr />
                                    <div className="d-grid col-3 ms-auto">
                                        <button className="btn btn-dark button">Save and Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Quesans />
                </div>
                <div className="tab-pane fade" id="nav-access" role="tabpanel" aria-labelledby="nav-access-tab" tabindex="0">...</div>
                <div className="tab-pane fade" id="nav-notificationMessage" role="tabpanel" aria-labelledby="nav-notificationMessage-tab" tabindex="0">...</div>
            </div>
        </>
    )
}

export default Clone;
import React from 'react';
import styles from './Profile.module.css';

import { cities } from "../../assets/Cities/cities";

const Profile = () => {
    return (
        <>
            <div className='mt-5 container'>
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <div className={`${styles.card} card`}>
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className={`${styles.card} card`}>
                            <div className="card-body">
                                <h5 className='card-title'>Personal Details :</h5>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <input type="text" className="form-control" id="fName" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <input type="text" className="form-control" id="lName" placeholder="Last Name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <input type="email" className="form-control" id="emailAddress" placeholder="Email address" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <input type="number" className="form-control" id="contactNumber" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <input type="text" className="form-control" id="companyName" placeholder="Company Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <select class="form-select" aria-label="Default select example">
                                                <option>Select Location</option>
                                                {
                                                    cities.map((item) => (
                                                        <option>{item.name + "," + item.state}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <h5 className='card-title mt-4'>Social Links :</h5>
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <input type="text" className="form-control" id="linkedin" placeholder="LinkedIn" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <input type="text" className="form-control" id="facebook" placeholder="Facebook" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <input type="text" className="form-control" id="twitter" placeholder="Twitter" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <input type="text" className="form-control" id="instagram" placeholder="Instagram" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;
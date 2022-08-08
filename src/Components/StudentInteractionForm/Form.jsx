import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { BiError } from "react-icons/bi";

const Form = () => {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(1);
  const [displays, setDisplays] = useState({ display: "none" });
  const [opacity, setOpacity] = useState({ opacity: '1' })

  var timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);

      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }

      if (seconds === 0 && minutes === 0) {
        setMinutes(0);
        setSeconds(0);
        setDisplays({
          display: "block",
          position: "absolute",
          top: "40%",
          left: "30%",
          right: '30%',
          zIndex: '1',
        });
        setOpacity({
          opacity: '0.3'
        })
        setInterval(() => {
          navigate('/');
        }, 2000);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  const handleDisplay = (e) => {
    e.preventDefault();
    setDisplay(!display);
  };

  return (
    <>
      <div style={displays}>
        <div className="d-grid col-md-5 mx-auto">
          <div className="card border-warning bg-warning">
            <div className="card-body">
              <BiError className="bg-white d-flex justify-content-center mx-auto rounded-circle p-2 fs-1 fw-bold" />
              <p className="card-text text-center mt-3">Your time has been expired !!</p>
              <p className="card-text text-center mt-3">You may re-attempt the test.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={opacity}>
        <div className="d-grid col-md-8 mx-auto my-5">
          <div className="card h-100 border-warning">
            <div
              className="card-header bg-warning d-flex justify-content-between align-items-center"
              style={{ borderBottom: "2px solid #ffc107" }}
            >
              <h3>Interaction Title</h3>
              <h3>
                {minutes < 10 ? "0" + minutes : minutes}:
                {seconds < 10 ? "0" + seconds : seconds}
              </h3>
            </div>
            <div className="card-body">
              <label className="form-label fw-bold">Test Description :</label>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                explicabo modi nemo ab inventore minus in quidem nobis illo.
                Quos?
              </p>
              <label className="form-label fw-bold">Test Instruction :</label>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores suscipit consequatur dolores molestias voluptas
                quaerat voluptatem sunt esse praesentium corporis.
              </p>
              <hr />
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="What is your name ?"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="What is your email ?"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="accessCode"
                    placeholder="Please enter your access code"
                  />
                </div>
                <button
                  onClick={handleDisplay}
                  className="btn btn-warning mb-2"
                >
                  Validate
                </button>
                <hr
                  style={{
                    color: "#ffc107",
                    borderTop: "2px solid",
                    opacity: "1",
                  }}
                />
                <div className={`${display ? "" : "d-none"}`}>
                  <h5 className="text-center mb-3">Start Test</h5>
                  <div className="mb-3">
                    <label className="form-label">
                      What is the key function of HR that deals with training?
                    </label>
                    <select
                      className="form-select"
                      id="track"
                      aria-label="Default select example"
                    >
                      <option selected value="Select">
                        Select...
                      </option>
                      <option value="Compensation & Benefits">
                        Compensation & Benefits
                      </option>
                      <option value="Recruitment">Recruitment</option>
                      <option value="Strategy">Strategy</option>
                      <option value="Learning & Development">
                        Learning & Development
                      </option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Why you want to have a career in HR?
                    </label>
                    <textarea className="form-control" rows="2"></textarea>
                    <div className="form-text text-end">
                      (Record your answer via this <a href="#">LINK</a> and
                      insert above)
                    </div>
                  </div>
                  <button className="btn btn-dark float-end">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

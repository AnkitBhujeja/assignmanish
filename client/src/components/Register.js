import React, { useState} from "react";
import { useNavigate} from "react-router-dom";
import "./register.css";
import { useToaster,Message} from "rsuite";
import "rsuite/dist/rsuite.min.css";
import axios from "axios";

import { Router } from "react-router-dom";
const Register = () => {
  const toaster = useToaster();
  const [d1, setd1] = useState("");
  const [d2, setd2] = useState("d-none");
  const [data, setData] = useState({
    name: "",
    mobile: "",
    email: "",
    gstin: "",
    bank_account: "",
    bank_ifsc: "",
    password: "",
    confirmpassword: "",
  });
  let navigate = useNavigate();
  const onchange = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    // console.log(data);
  };


  const handleClick = (e) => {
    e.preventDefault();
    if (data.password != data.confirmpassword) {
      alert("password not match");
    } else {
      console.log("data ", data);
      axios.post("http://localhost:8000/api/vendor", data)
        .then((res) => {
          setData({ mobile: "", email: "", gstin: "",
          bank_account: "",
          bank_ifsc: "",
          password: "",
          confirmpassword: ""});
          toaster.push(
            <Message type="success" closable>
              Vendor Registration successfully
            </Message>
          );
          navigate("/login")
          console.log(res.data.message, " mess printed ");
        })
        .catch((err) => {
          console.log("Error couldn't create Emp");
          toaster.push(
            <Message type="error" closable>
              Error Couldn't create vendor
            </Message>
          );
          console.log(err.message);
        });
    }
  };
  // const credentials={
  //   email:"",
  //   password:""
  // }
  return (
    <div className="container d-flex reg">
      <div class="regform" style={{ position: "relative", width: "50%" }}>
        <form>
          <div className="d-flex">
            {/* name of seller */}
            <div class="mb-3 " style={{ width: "80%" }}>
              <input
                style={{ fontSize: ".95rem" }}
                name="name"
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                value={data.name}
                onChange={onchange}
                placeholder="Enter name "
              />
            </div>
            {/* mobile no of seller */}
            <div class="mb-3 " style={{ width: "80%" }}>
              <input
                style={{ fontSize: ".95rem" }}
                name="mobile"
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                value={data.mobile}
                onChange={onchange}
                placeholder="Enter Mobile No."
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          {/* email of seller */}
          <div class="mb-3">
            <input
              style={{ fontSize: ".95rem" }}
              name="email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              value={data.email}
              onChange={onchange}
              placeholder="Enter Email Id"
              aria-describedby="emailHelp"
            />
          </div>

          {/* gst no of seller */}
          <div class={`mb-3 ${d1}`}>
            <input
              style={{ fontSize: ".95rem" }}
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              name="gstin"
              value={data.gstin}
              onChange={onchange}
              placeholder="Enter GSTIN"
              aria-describedby="emailHelp"
            />
            <div style={{ fontSize: ".8rem" }}>
              <label for="exampleInputEmail1" class="form-label">
                {" "}
                GSTIN is required to sell products on Sellers
              </label>
            </div>
          </div>
          {/* bank account no of seller */}
          <div class="mb-3">
            <input
              style={{ fontSize: ".95rem" }}
              type="text"
              name="bank_account"
              class="form-control"
              id="exampleInputEmail1"
              value={data.bank_account}
              onChange={onchange}
              placeholder=" Enter Bank Account No."
              aria-describedby="emailHelp"
            />
          </div>
          {/* bank ifsc code of seller */}
          <div class="mb-3">
            <input
              style={{ fontSize: ".95rem" }}
              type="text"
              name="bank_ifsc"
              class="form-control"
              id="exampleInputEmail1"
              value={data.bank_ifsc}
              onChange={onchange}
              placeholder=" Enter Bank IFSC"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-1" style={{ fontSize: ".84rem" }}>
            <label for="exampleInputEmail1" class="form-label">
              By continuing, I agree to Sellers's Terms of Use & Privacy Policy
            </label>
          </div>

          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Register to Continue
          </button>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Create Password
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div>
                    <div className="container my-3">
                      {/* password creation of seller */}

                      <div className="mb-3 my-3">
                        <label htmlFor="email" className="form-label">
                          Password
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="password"
                          value={data.password}
                          aria-describedby="emailHelp"
                          onChange={onchange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="confirmpassword"
                          value={data.confirmpassword}
                          onChange={onchange}
                        />
                      </div>
                      <div class="mb-1" style={{ fontSize: ".84rem" }}></div>

                      {/* final register by seller */}

                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleClick}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
                <div class="modal-footer"></div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div></div>
      <div>
        <div class="card mx-2 my-3" style={{ width: "350px" }}>
          <img src="/images/img1.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">Sell Online and Grow...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

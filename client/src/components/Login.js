import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate} from "react-router-dom";
import { useStore } from "../store";
import { useToaster,Message} from "rsuite";
import "rsuite/dist/rsuite.min.css";
const Login = () => {
  const toaster = useToaster();
  let navigate = useNavigate();
  
  const currentName = useStore((state) => state.currentName);
  const currentEmail = useStore((state) => state.currentEmail);
  const currentId = useStore((state) => state.currentId);
  const { setCurrentName, setCurrentEmail, setCurrentId} = useStore();
  const [logindata, setLoginData] = useState({
    email: "",  
    password: "",
  });
    const handleClick=(e)=>{
      e.preventDefault();
      console.log("logindata ", logindata);
      axios.post("http://localhost:8000/api/vendor/login", logindata)
        .then((res) => {
          console.log(res.data.data.name,"fuck")
          setCurrentName(res.data.data.name);
          setCurrentEmail(res.data.data.email);
          setCurrentId(res.data.data.id);
          setLoginData({ email: "",
          password: ""
        })
        toaster.push(
          <Message type="success" closable>
           lOGIN successfully
          </Message>
        );
        navigate("/home")
          console.log(res.data.message, " mess2 printed ");
        })
        .catch((err) => {
          console.log("Error couldn't login");
          <Message type="error" closable>
          error login
         </Message>
          console.log(err.response.data);
        });
    }
    const onChange=(e)=>{
      setLoginData((data) => ({ ...data, [e.target.name]: e.target.value }));
      console.log(logindata)
    }
 
  return (
<>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Login to Sellers</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div>
   <div className="container my-3">   
   
    <form onSubmit={handleClick}>
  <div className="mb-3 my-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input name="email" type="email" className="form-control" id="email"  value={logindata.email} aria-describedby="emailHelp" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor='password' className="form-label">Password</label>
    <input name="password" type="password" className="form-control" id="password"  value={logindata.password} onChange={onChange}/>
  </div>
  <div class="mb-1" style={{fontSize:".84rem"}}>
  <label for="exampleInputEmail1" class="form-label">By continuing, I agree to Sellers's Terms of Use & Privacy Policy      
  </label></div>
  <button type="submit" className="btn btn-primary">Login</button>
</form>
</div>  
    </div>
      </div>
      <div class="modal-footer">
        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        {/* <button type="button" class="btn btn-primary">Login</button> */}
      </div>
    </div>
  </div>
</div>
</>
  )
}
export default Login

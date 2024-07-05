import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Authcontext } from "../Context/AuthContext";

function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const {loginUser, authstate} = useContext(Authcontext)
  const navigate = useNavigate()
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userdata = {
      email, password: pass
    };
    console.log(userdata)
    axios.post('https://reqres.in/api/login', userdata).then((res) => {
      loginUser(res.data.token)
      navigate('/dashboard')
    })
    .catch((err) => console.log(err))
  };

  return (
    <div className="login-container">
      <form className="login-form" data-testid="login-form" onSubmit={handleFormSubmit}>
        <div>
          <label>
            Email
            <input 
              data-testid="email-input" 
              type="email" 
              placeholder="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div className="go-back-link">
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}

export default Login;

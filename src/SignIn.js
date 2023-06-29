import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import {AuthContext} from "authProvider";

const Signin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";
  const { auth, setAuth } = useContext(AuthContext);
  
//state the name of the employee gotten from the form
  const [name, setName] = useState("");
//state to store password of the employee gotten from the form
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      fetch(`http://localhost:3000/signin`, {
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify({
          name: name,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.name) {
            console.log(res);
            const role = res.role;
            const token = res.token;

              //storing employee information in our Auth state
            setAuth({ role, token, name });
            console.log(auth);
            setName("");
            setPassword("");
            //navigate our employee to the home page
            navigate(from, { replace: true });
          } else {
            console.log("incorrect submission");
          }
        });
    } catch (err) {
      if (!err?.response) {
        console.log("no server response");
      } else {
        console.log("registeration failed");
      }
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        //code for signin form.
      </form>
    </div>
  );
};

export default Signin;
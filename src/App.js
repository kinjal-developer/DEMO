import { useState } from "react"
//import { useNavigate } from "react-router-dom";
//import "./Login.css";

const App = () => {
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');
  //const navigate = useNavigate();

  const handle = () => {
     localStorage.setItem('Name', name);
     localStorage.setItem('Password', pwd);
    

     
     
     
     
  };
  
  return (
    <>
<form  onSubmit={handle}>
      <h2>Login</h2>
      <h1>Kinjal</h1>
        <label>Name</label> <br />
        <input type="text" onChange={(e) => setName(e.target.value)}  />      
        <label> Password </label><br />
        <input type="password"   value={pwd} onChange={(e) => setPwd(e.target.value)} pattern="^(?=(.*[a-z]){3,})(?=(.*[A-Z]){2,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$" />
        <button type="submit" >LOG IN</button>
    </form>
</>
  );
};
export default App;
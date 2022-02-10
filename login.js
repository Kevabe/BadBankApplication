import React from "react";
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
const UserContext = React.createContext();

const Userlogin=()=>{
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);
   
   function validate(field, label){
       if(!field){
           setStatus('Error data incomplete please insert: ' + label);
           setTimeout(() => setStatus(''),3000);
           return false;
       }
       if(label === 'password' && password.length < 5) {
        setStatus('Error: password length must be at least 5 characters');
        setTimeout(() => setStatus(''), 3000);
        return false;
    }
       return true;
   }


   function handleCreate(){
       console.log(name,email,password);
      
       if(!validate(email,     'email'))    return;
       if(!validate(password,  'password')) return;
     
       setShow(false);
   }


   
    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }
   
   
   
    return (
        <Card
        
        bgcolor= "info"
        header= "User Login"
        status={status}
        body={show ? (
            <>
            Email address<br/>
            <input type="input" className="form-control" id="email" placeholder="Enter email" value= {email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
            Password<br/>
            <input type="input" className="form-control" id="password" placeholder="Enter password" value= {password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-light" onClick={handleCreate}>Login</button>
            </>
        ):(
            <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-dark" onClick={clearForm}>LogOut</button>
            </>  
        )}
        />
    )

}
export default Userlogin
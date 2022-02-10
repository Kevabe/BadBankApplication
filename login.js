function Login(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  
 
  return (

    <Card 
      bgcolor="secondary"
      header="Login"
      status={status}
      body={show ? (
        
        <LoginForm setShow={setShow} setStatus={setStatus}/> ): (
        <LoginMsg setShow={setShow} setStatus={setStatus}/> )
      }
    />  
  ) 
}

function LoginMsg(props){
      const ctx = React.useContext(UserContext);
      const [username, SetUsername] = React.useState('');
      
  return(<>
    <h5>welcome!</h5>
    <button type="submit"
      id="logout" 
      className="btn btn-light" 
      onClick={() => {props.setShow (true), logout();}}>
        Log out
    </button>
  </>);

  function logout(){
    let nothing = ctx.users[0].email = '';
     SetUsername(nothing);
     ctx.users[0].email = nothing;
     console.log(ctx.users[0].email);
     props.setStatus('');
    };
}

function LoginForm(props){
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, SetUsername] = React.useState('');
  const ctx = React.useContext(UserContext);


 function handle(){
    fetch(`/account/login/${email}/${password}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus('account: ' + data.name);
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus('error account not found')
            console.log('error:', text);
        }
    });

  };
 function display(){
  let total= ctx.users[0].email = email;
  SetUsername(total);
  ctx.users[0].email = total;
  console.log(ctx.users[0].email);
 };


  return (<>

    Email<br/>
    <input type="input" 
      id="email"
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input type="password" 
      id="password"
      className="form-control" 
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button id="login" type="submit" className="btn btn-light" onClick={() => {display(), handle();}}>Login</button>
  </>);
  
}

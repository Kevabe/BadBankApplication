function CreateAccount(){
	const [show, setShow]         = React.useState(true);
	const [status, setStatus]     = React.useState('');
	const [name, setName]         = React.useState('');
	const [email, setEmail]       = React.useState('');
	const [password, setPassword] = React.useState('');
	const [disabled, setDisabled] = React.useState(true);
	const ctx = React.useContext(UserContext);  
  
	
	function validate(field, label){
		if (!field) {
		  setStatus('Error: ' + label + ' needed');
		  setTimeout(() => setStatus(''),3000);
		  return false;
		}
		return true;
	}

	function passwordLength(field, label){
		if (field.length < 8) {
		  setStatus('Error: ' + label + ' needed');
		  setTimeout(() => setStatus(''),3000);
		  return false;
		}
		return true;
	}
  
	function handleCreate(){
	  console.log(name,email,password);
	  if (!validate(name,     'name'))     return;
	  if (!validate(email,    'email'))    return;
	  if (!validate(password, 'password')) return;
	  if(!passwordLength(password, 'Password must be 8 characters in length')) return;
	  ctx.users.push(name,email,password);
	  console.log(ctx);
	  //console.log(ctx.users);
	  //console.log(ctx.users.balance);
	  //console.log(ctx.users.name);
	  setShow(false);
	}   
	
	
	
  
	function clearForm(){
	  setName('');
	  setEmail('');
	  setPassword('');
	  setShow(true);
	}

	React.useEffect(() => {
		if (!name && !email && !password) {
			setDisabled(true);
		}
		else {
			setDisabled(false);
		}
	}, [name, email, password]);
  return (
		<Card
		  bgcolor="primary"
		  header="Create Account"
		  status={status}
			body={show ? (
		   <>
				  Name<br/>
				  <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value, 'name')} /><br/>
				  Email address<br/>
				  <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => {setEmail(e.currentTarget.value, 'email')}}/><br/>
				  Password<br/>
				  <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => {setPassword(e.currentTarget.value, 'password')}}/><br/>
				  <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={disabled}>Create Account</button>
				  <br />
				  
				  </>
				):(
				  <>
				  <h5>Success</h5>
				  <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>

				  </>
				)}
				/>		
			)

			}	
			document.getElementById('container').style.background = `linear-gradient(to right, ${hex1} , ${hex2} )`;

	
				
	 
				  
function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [deposit, setDeposit]   = React.useState('');
   const [balance, setBalance]   = React.useState(100);
   const [disabled, setDisabled] = React.useState(true);
  const ctx = React.useContext(UserContext); 
  //var ctx2 = Array(ctx); 

  const validate = amount => {
    if(!amount) {
      setStatus('Error: Please enter a value');
      return false;
    }
    if(!Number(amount)) {
      //(amount === NaN) doesnt work
      setStatus('Error: Please enter a valid number');
      return false;
    }
    if(amount < 0) {
      setStatus("Error: Cannot deposit a negative amount");
      return false;
    }
    return true;
  }

  const depositMoney = amount => {
    if (!validate(amount)) return;
    setBalance(Number(balance) + Number(amount));
    setShow(false);
    setStatus('');
    ctx.users.push(Number(balance) + Number(amount));
  }

  //function handleCreate(){
    //console.log(deposit);
     //if (!validate(deposit,     'deposit'))     return;
    //ctx2.push({deposit});
    //setShow(false);
    //console.log(ctx2);
    //console.log(this.ctx2[0]);
    //let newbalance = parseInt(deposit) + Number(ctx2.balance);
    //console.log(newbalance); 
    //return deposit;
     // }    
//console.log(handleCreate());

  function clearForm(){
    setDeposit('');
    setShow(true);
  }

  React.useEffect(() => {
		if (!deposit) {
			setDisabled(true);
		}
		else {
			setDisabled(false);
		}
	}, [deposit]);

  return (
    <Card
      bgcolor="success"
      header="Deposit"
      status={status}
      body={show ? (  
              <>
              <h5>Balance: ${balance}</h5>
              <br/>
              Deposit Amount<br/>
              <input type="deposit" className="form-control" id="deposit" placeholder="Deposit Amount $" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={() => depositMoney(deposit)} disabled={disabled}>Deposit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make another deposit?</button>
              </>
            )}
    />
  )
}
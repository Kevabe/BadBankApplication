function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [withdrawal, setWithdrawal]   = React.useState('');
   const [balance, setBalance]   = React.useState(100);
   const [disabled, setDisabled] = React.useState(true);
  const ctx = React.useContext(UserContext); 

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
      setStatus("Error: Cannot withdraw a negative amount");
      return false;
    }
    if (balance - amount < 0) {
      setStatus('Error: Overdrafting account')
      return false;
    }
    return true;
  }

  const withdrawMoney = amount => {
    if (!validate(amount)) return;
    setBalance(Number(balance) - Number(amount));
    setShow(false);
    setStatus('');
    ctx.users.push(Number(balance) - Number(amount));
  }

  function clearForm(){
    setWithdrawal('');
    setShow(true);
  }

  React.useEffect(() => {
		if (!withdrawal) {
			setDisabled(true);
		}
		else {
			setDisabled(false);
		}
	}, [withdrawal]);

  return (
    <Card
      bgcolor="danger"
      header="Withdraw"
      status={status}
      body={show ? (  
              <>
              <h5>Balance: ${balance}</h5>
              <br/>
              Withdrawal Amount<br/>
              <input type="withdraw" className="form-control" id="withdraw" placeholder="Withdraw Amount $" value={withdrawal} onChange={e => setWithdrawal(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={() => withdrawMoney(withdrawal)} disabled={disabled}>Withdraw</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdrawal?</button>
              </>
            )}
    />
  )
}
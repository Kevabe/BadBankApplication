function Withdraw(){
  const [ show, setShow]      = React.useState(true);
  const [status, setStatus]    = React.useState('');
  const [amount, setAmount]   = React.useState('');
  const ctx = React.useContext(UserContext);

  const { users } = ctx;
  var customer ="";
  var balance = "";
    const createdUsers = users.map((user, index) => {
      if (index ===0)
      {customer =user.name
        balance = user.balance
      }
    });

    function clearForm(){
      setAmount('');
      setShow(true);
    }

function validate(field, label){
    if (!field) {
      setStatus('Please Enter an amount to Withdrawl');
      setTimeout(() => setStatus(''),3000);
      return false;
}
    if (field <0){
      setStatus('Amount should be greater than zero');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    if (isNaN(field)){
      setStatus('Amount should be a number.');
      setTimeout(() => setStatus(''),3000);
      return false;
    }


return true;
}



function handleWithdraw(){
 
if (!validate(amount,     'amount'))     return;
let newBalance2 = parseInt(balance) - parseInt(amount);

ctx.users[0].balance = newBalance2 ;
setShow(false);
}    
const checkValue = function (){
if (amount === ''  )
return 'disabled';
return;

}

function clearForm(){
  setAmount('');
  setShow(true);
}


 return (
   <Card
     bgcolor="info"
     header="Withdraw Funds"
     status={status}
     body={show ? (  
             <>
             Balance: ${balance } <br/>

             <u>Withdraw Amount:</u><br/>
             <br/>
             <input type="input" className="form-control" id="amount" placeholder="0"  onChange={e => setAmount(e.currentTarget.value)} /><br/>
             
             <button type="submit" className={`btn btn-light ${checkValue()}`} onClick={handleWithdraw} >Withdraw</button>
             </>
           ):(
             <>
             <h4>Your withdraw was a Success! Your new balance is: ${balance }</h4>
             <button type="submit" className="btn btn-light" onClick={clearForm}>Make another Withdraw</button>
             </>
           )}
   />
 )
}









function Balance(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="secondary"
      header="Balance"
      status={status}
      body={show ?
        <BalanceForm setShow={setShow} setStatus={setStatus}/> :
        <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )

}

function BalanceMsg(props){
  return(<>
    <h5>Success!</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
        Check balance again
    </button>
  </>);
}

function BalanceForm(props){
  const ctx = React.useContext(UserContext);
  
  function handle(){
    let email = ctx.users[0].email
    fetch(`/account/findOne/${email}`)
    .then(response => response.text())
    .then(text => {
        
            const data = JSON.parse(text);
            props.setStatus('balance: ' + data.balance);
            props.setShow(false);
            console.log(data.balance);
        }
    );
  }
  if(ctx.users[0].email==''){return<>Log in to continue</>} else {
  return (<>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
        Check Balance
    </button>

  </>);
}


}
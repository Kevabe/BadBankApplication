import React from "react";
import Swal from 'sweetalert2';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
const UserContext = React.createContext();

const Withdraw= ()=>{
    const [withdraw, setWithdraw] = React.useState('');
    const [balance, setBalance] =  React.useState(100);
    const [button, setButton]     = React.useState(true);
    const ctx = React.useContext(UserContext); 

    const f = new Intl.NumberFormat( 
            {
                style: 'currency',
                currency: 'USD',
            });
    const balanceMoneda = f.format(balance);


// -----Sweet alerts------

    function sinSaldo (){
        Swal.fire(
            {   title: 'Overdraft Warning',
            });
        setWithdraw('');
        setButton(true);
        }


    function ConfirmacionRetiro() {           
        // formato moneda en la alerta delmonto a depositar
        const f = new Intl.NumberFormat(
                {
                    style: 'currency',
                    currency: 'USD',
                    minimunFractionDigits: 1,
                });
        const currency = f.format(withdraw);

            Swal.fire({
            title: 'Confirm withdraw',
            text: "Confim withdraw amount: " + currency,
            showCancelButton: true,
            cancelButtonText: 'Change',
            showDenyButton: true,
            confirmButtonText: 'Confirm',
            denyButtonText: `Cancel`,
        }).then((result) => {
            
            if (result.isConfirmed) {
                const NewBalance = Number(balance); 
                setBalance(NewBalance - withdraw);
                setWithdraw('');
                setButton(true);

                Swal.fire(
                    {   title: 'Succesful withdaw',
                
                    }
                );

            } else if (result.isDenied) {
            Swal.fire('Cacel', '', 'info');
            setWithdraw('');
            setButton(true);
            }
        });
    };

    
// ----habilitacion o deshabilitación de boton "Deposit"-----
function HandleWithdraw (e){
    if(balance === 0){
         sinSaldo ();
         setWithdraw('');
    } else {
        if(e.currentTarget.value > 0 || e.currentTarget.value <= balance){
            setWithdraw(Number(e.currentTarget.value));
            setButton(false) 
        };

        if(e.currentTarget.value <= 0){
            setWithdraw('');
            setButton(true)
        } else {
            if(e.currentTarget.value > balance){
                setWithdraw(balance);
                setButton(true)
            }
        }
    }
};


return(
        <Card
        bgcolor= "danger"
        header="Withdraw"

        body={(  
            <>
            <h3>Balance : {balanceMoneda}</h3>

            <div>Withdraw Amount</div>

            <input type="number" className="form-control" id="Withdraw" placeholder="$ Withdraw Amount" value={withdraw}  onChange={HandleWithdraw}/> 
            <br/>

            <button type="submit" className="btn btn-light" onClick={ConfirmacionRetiro} disabled={button} >Complete Withdraw</button>
            </>
            )}
        />
    );
}

export default Withdraw
document.body.style.backgroundImage = "url ('bank.jpg')";
function Home(){
  return (
    <Card
      txtcolor="Black"
      header="Bad Bank"
      title="Banking Application, We take all your money!"
      text="Welcome to Bad Bank "
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image" />)}
      
    />    
    
  ); 
}


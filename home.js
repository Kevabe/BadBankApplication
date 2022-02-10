function Home(){
  return (
    <Card
      txtcolor="white"
      bgcolor="dark"
      header="BadBank HomePage"
      title="Welcome to the Bad Bank 2"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  );  
}

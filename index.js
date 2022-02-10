function Spa() {
  return (
    <HashRouter>
      <div>
        <NavBar/>
        <UserContext.Provider value={{users:[{name:'',email:'',password:'',balance:0}]}}>
          <div className="container" 
          style={{
            padding: "20px",
            margin: "auto",
            height: "100%",
            display: "grid",
            justifyContent: "center",
            alignItems: "center", 
          }}>

            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            {/* <Route path="/transactions/" component={Transactions} /> */}
            <Route path="/balance/" component={Balance} />
            <Route path="/alldata/" component={AllData} />
            
          </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);

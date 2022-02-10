function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h5>Bank Activity History</h5>
    {JSON.stringify(ctx)}<br/>
    </>
  );
  console.log(ctx);
  console.log(ctx.name);
}

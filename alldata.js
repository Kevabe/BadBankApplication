function AllData(){
    const [data, setData] = React.useState('');    

    React.useEffect(
        function GetData(){
        
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                setData(JSON.stringify(data));                
            });

    }, []);


    return (
        <Card
          bgcolor="secondary"
          header="All data"
          body={
            <>{data}</>}
        />
    );
}

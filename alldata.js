
import React from 'react'
import { useBankContext } from '../Context/context';
import 'bootstrap/dist/css/bootstrap.min.css';



function AllData(){
  const { users } = useBankContext();
    
  return (
    <container>
      <div className="card">
      <div className="container-fluid" font-size="4em">
      <br />
      <h1>All Clients</h1>
      </div>
      </div>
      <br />
      <table className="table table-striped Hover">
          <thead>
          <tr>
              <th scope="col">Index</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>   
              <th scope="col">Balance</th>
          </tr>
          </thead>
          <tbody >
            {
            users.map((item, key) => (
              <tr key={key}>
                  <th scope="row">{key + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.balance}</td>
                </tr>
            ))
           }
        </tbody>
        </table>
      </container>
      
   
  )
}
export default AllData
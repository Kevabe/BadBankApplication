/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useContext, useEffect } from "react"
// import firebase from 'firebase/compat/app';
const BankContext = createContext(null);
export function  useBankContext (){
  return useContext(BankContext)
}
function ContextProvider({children}){
  const [users, setUsers] = useState([{name:'abel',email:'abel@mit.edu',password:'secret',balance:100, loged: false}])
  const [currentUser, setCurrentUser] = useState()
  // const [done,setDone] = useState(false)


  function login(user){
    const index = users.indexOf(user)
    const usersCopy = [...users]
    usersCopy[index].loged = true
    setUsers(usersCopy)
  }
  function logout(user){
    const index = users.indexOf(user)
    const usersCopy = [...users]
    usersCopy[index].loged = false
    setUsers(usersCopy)
  }

  function handleSetCurrentUser(user) {
    setCurrentUser(user)
  }
  // useEffect(() => {
  //   if(done){
  //     let user = users?.filter(thisuser => thisuser.email === currentUser.email)
  //     login(user[0])
  //   }
  // }, [done])
  // firebase.auth().onAuthStateChanged(firebaseUser => {
  //   if (firebaseUser) {
  //     // let user = users?.filter(thisuser => thisuser.email === firebaseUser.email)
  //     // login(user[0])
  //     handleSetCurrentUser(firebaseUser)
  //     setDone(true)
      
  //   } else {
  //     console.log("User is not logged in");
  //     setCurrentUser(null)
  //   }
  // });
  const value = {
    users,
    currentUser,
    login,
    logout,
    handleSetCurrentUser
  }
    return (
      <BankContext.Provider value={value}>
        {children}
      </BankContext.Provider>
    )
  }

export default ContextProvider
import React, { useState } from 'react'
import AddUser from './components/User/AddUser'
import UsersList from './components/User/UsersList'

function App () {
  //using usestate to manage rendering ofn= data
  const [usersList, setUsersList] = useState([])

  //function beign passed to onAddUser
  const addUserHandler = (uName, uAge) => {
    //since state update relies on the previous state
    setUsersList(prevUsersList => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() }
      ]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={[usersList]} />
    </div>
  )
}

export default App

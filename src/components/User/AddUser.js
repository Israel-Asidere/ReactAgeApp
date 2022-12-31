import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'
import { useState } from 'react'
const AddUser = props => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')

  const addUserHandler = event => {
    event.prevent.Default()
    console.log(enteredUsername, enteredAge)
    //there should be a function here for validation and resetting logic
    props.onAddUser(enteredUsername, enteredAge)
  }

  const usernameChangeHandler = event => {
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = event => {
    setEnteredAge(event.target.value)
  }
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          onChange={usernameChangeHandler}
          value={enteredUsername}
        />
        <label htmlFor='age'>Age (Years)</label>
        <input
          id='age'
          type='number'
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  )
}
export default AddUser

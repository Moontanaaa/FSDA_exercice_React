import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'



function App() {

  const [users, setUsers] = useState(null)
  const URL = "https://jsonplaceholder.typicode.com/users"

  const fetchUsers = async () => {
    try {
      const response = await axios.get(URL)
      setUsers(response.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div>
      {users && users.map(user => {
        return (
          <>
            <div>
            <h1>my name is {user.name}</h1>
            <h2>my email is {user.email}</h2>
            </div>
            

          </>

        )
      })}
    </div>
  )
}

export default App


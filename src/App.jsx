import './App.css'
import Avatar from './avatar'


function App() {
  const users = [
    {
      image: "https://static.wikia.nocookie.net/simpsons/images/a/a1/Marge_Simpsons.png/revision/latest?cb=20130817213926&path-prefix=fr",
      firstName: "Marge",
      lastName: "Simpson"
    },
    {
      image: "https://static.wikia.nocookie.net/simpsons/images/3/33/Homer.png/revision/latest?cb=20110703093455&path-prefix=fr",
      firstName: "Homer",
      lastName: "Simpson"
    }
  ]

  return (
    <div>
      <h1>Famille Simpson</h1>
      <ul>
        {users.map(user => (
          <Avatar key={user.firstName} {...user} />
        ))}
      </ul>
    </div>
  )
}

export default App


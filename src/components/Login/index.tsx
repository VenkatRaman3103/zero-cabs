'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'

export const LoginForm = () => {
  const [allUser, setAllUser] = useState<any>(null)

  const [userName, setUserName] = useState<any>('')

  const [userFound, setUserFound] = useState<any>(false)

  const [userPassword, setUserPassword] = useState<any>('')

  const [loginMessage, setLoginMessage] = useState<any>('')

  // when the component appears on the screen
  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get('http://localhost:3000/api/external-user')
      const data = response.data.docs
      console.log(data, 'data')
      setAllUser(data)
    }
    fetchUsers()
  }, [])

  // finding user
  // run when useName and the  allUser change
  useEffect(() => {
    function checkUser() {
      if (allUser) {
        let found = false

        // todo : binary search
        for (let i = 0; i < allUser.length; i++) {
          if (allUser[i].userName === userName) {
            found = true
            break
          }
        }
        setUserFound(found)
      }
    }
    checkUser()
  }, [userName, allUser])

  function handleUserName(e: any) {
    setUserName(e.target.value)
  }

  function handleUserPassword(e: any) {
    setUserPassword(e.target.value)
  }

  function handleLogin(e: any) {
    e.preventDefault()

    if (allUser) {
      let isCorrect = false
      for (let i = 0; i < allUser.length; i++) {
        console.log(allUser[i].password, 'userPassword')

        if (allUser[i].password === userPassword) {
          console.log('entering')
          isCorrect = true
          break
        }
      }
      setLoginMessage(isCorrect ? 'Login Successful' : 'Incorrect Password')
    }
  }

  return (
    <>
      <h1>Hello big bird</h1>
      <h1>{userName}</h1>
      <form>
        <label>User Name: </label>
        <input type="text" onChange={(e) => handleUserName(e)} />
      </form>
      {userFound && (
        <div>
          <h1>User Found</h1>
          <form>
            <label>Enter Password: </label>
            <input type="text" onChange={(e) => handleUserPassword(e)} />
            <button onClick={handleLogin}>Click</button>
          </form>
          {loginMessage && <h1>{loginMessage}</h1>}
        </div>
      )}
    </>
  )
}

// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {render} from 'react-dom'

function UsernameForm({onSubmitUsername}) {
  function handleSubmit(event) {
    event.preventDefault()
    // console.dir(event.target)
    const value = event.target.username.value
    onSubmitUsername(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={'username'}>Username:</label>
        <input id={'username'} type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username1 => alert(`You entered: ${username1}`)
  return (
    <>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
    </>
  )
}

export default App

// 1. 💯 using refs

function SubmitUsingRefs(props) {
  const inputRef = React.useRef()
  function handleSubmit(event) {
    event.preventDefault()
    const value = inputRef.current.value
    props.submitForm(value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input ref={inputRef} id="username"></input>
        <button type="submit">Send</button>
      </form>
    </>
  )
}

function App() {
  const submitForm = username => alert(username)
  return (
    <>
      <SubmitUsingRefs submitForm={submitForm} />
    </>
  )
}

export default App

// 2. 💯 Validate lower-case

function UserNameForm() {
  let [error, setError] = React.useState(false)
  const inputRef = React.useRef()

  function handleSubmit(event) {
    event.preventDefault()
    alert(event.target[0].value)
  }

  function handleChange(event) {
    const value = inputRef.current.value
    const isValid = value === value.toLowerCase()

    setError(isValid ? false : 'Username must be lower case')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input onChange={handleChange} ref={inputRef} id="username"></input>
        <button disabled={error} type="submit">
          Send
        </button>
        <div style={{color: 'red'}}>{error}</div>
      </form>
    </>
  )
}

function App() {
  return (
    <>
      <UserNameForm />
    </>
  )
}

export default App

// 3. 💯 Control the input value

function UserNameForm() {
  let [inputValue, setInputValue] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    alert(inputValue) //since we're setting the input value we can just use it instead of event.target
  }

  function handleChange(event) {
    const value = event.target.value
    setInputValue(value.toLowerCase())
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input onChange={handleChange} value={inputValue} id="username"></input>
        <button type="submit">Send</button>
      </form>
    </>
  )
}

function App() {
  return (
    <>
      <UserNameForm />
    </>
  )
}

export default App

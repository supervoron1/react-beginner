import {useEffect, useState} from "react";

export function Counter() {
  const [name, setName] = useState('Raven')
  const [age, setAge] = useState(0)

  useEffect(() => {
    console.log('**Render**')
  })

  useEffect(() => {
    const handler = () => console.log('click')
    addEventListener('click', handler)
    removeEventListener('click', handler)

    return () => {
      console.log('**Bye**')
    }
  }, [])

  useEffect(() => {
    // console.log(`My name is ${name} and I am ${age} years old`)
  }, [age, name])

  useEffect(() => {
    document.title = name

    const timeout = setTimeout(() => {
      console.log(`My name is ${name}`)
    }, 1000)

    return () => {
     clearTimeout(timeout)
    }
  }, [name])

  function increaseAge() {
    setAge(cur => cur + 1)
  }

  function decreaseAge() {
    setAge(cur => cur - 1)
  }

  return (
    <>
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <br/>
      <button onClick={increaseAge}>+</button>
      {age}
      <button onClick={decreaseAge}>-</button>
      <div>My name is {name} and I am {age} years old</div>
    </>
  )
}

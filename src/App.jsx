import {useState} from "react";
import {Counter} from "./Counter";

export default function App() {

  const [show, setShow] = useState(true)

  const childComponent = show ? <Counter/> : null

  return (
    <div>
      <button onClick={() => setShow(currentShow => !currentShow)}>
        Show/Hide
      </button>
      <br/>
      {childComponent}
    </div>
  )
}

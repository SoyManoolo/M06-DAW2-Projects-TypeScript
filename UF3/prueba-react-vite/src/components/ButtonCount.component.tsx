import { useState } from 'react'

function ButtonCount() {
  const [count, setCount] = useState(0)

  return (
    <>
        <button onClick={() => setCount((count) => count + 1)}>
          <img src="" alt="" />
          count is {count}
        </button>
    </>
  )
}

export default ButtonCount
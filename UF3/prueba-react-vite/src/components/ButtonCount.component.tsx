function ButtonCount({ onIncrement, clickValue}: {onIncrement: () => void, clickValue: number}) {

  return (
    <>
        <button onClick={onIncrement}>
          {clickValue}
        </button>
    </>
  )
}

export default ButtonCount
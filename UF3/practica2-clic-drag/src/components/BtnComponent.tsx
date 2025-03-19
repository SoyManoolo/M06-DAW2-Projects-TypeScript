function BtnComponent ({clickEffect}: {clickEffect: () => void}) {
    return (
        <>
            <button onClick={clickEffect}>Click</button>
        </>
    )
}

export default BtnComponent
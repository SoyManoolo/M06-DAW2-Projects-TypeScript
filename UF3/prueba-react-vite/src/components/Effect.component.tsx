function Effect({ EffectValue, clickEffect}: { EffectValue: number, clickEffect: () => void}) {

    return (
        <>
            <button onClick={clickEffect}>Click +1</button>
            <p>Coste: {EffectValue}</p>
        </>
    )
};

export default Effect;
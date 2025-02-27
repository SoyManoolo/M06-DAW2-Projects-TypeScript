import { useEffect, useState } from 'react'
import ButtonCount from '../components/ButtonCount.component'
import Coin from '../components/Coin.component'
import Effect from '../components/Effect.component'

function Game() {
    // Lógica para el contador de monedas
    const [clickValue, setclickValue] = useState(1)

    const [count, setCount] = useState(0)

    const incrementCoin = () => {
        setCount(count + clickValue);
    }

    useEffect(() => {
        localStorage.setItem("CountCoin", count.toString());
    }, [count.toString()])

    // Lógica para el valor de la mejora
    const [effectImproveClick, setEffectImproveClick] = useState(50)

    const incrementClickValue = () => {
        if(effectImproveClick <= count) {
            setEffectImproveClick( effectImproveClick * 3 );
            setCount(count - effectImproveClick);
            setclickValue(clickValue+1);
        } else alert("You must have more than: " + effectImproveClick)
    }

    return(
        <>
            <h2>Monedas</h2>
            <Coin contador={count}></Coin>
            <h2>Clicker</h2>
            <ButtonCount onIncrement={incrementCoin} clickValue={clickValue}></ButtonCount>
            <h2>Mejoras</h2>
            <Effect EffectValue={effectImproveClick} clickEffect={incrementClickValue}></Effect>
        </>
    )
}

export default Game;
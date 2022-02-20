import axios from "axios";
import { useEffect, useState } from "react";

export default function App(){
    const [advice, setAdvice] = useState({id: null, advice: ''})
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        getAdvice()
    },[])

    async function getAdvice(){
        let response  = await axios.get('https://api.adviceslip.com/advice')
        console.log(response)
        if(response.status === 200)
        setAdvice(response.data.slip)
        setLoading(false)
    }

    return(
        <div className="container">
            <div className="card">
                <h1 className="title">Advice # {advice.id}</h1>
                <p className="advice">"{advice.advice}"</p>
                <img className="divider" src='./images/pattern-divider-desktop.svg'/>
                <div onClick={()=>{
                    setTimeout(()=>{
                        getAdvice()
                    }, 2000)
                    setLoading(true)
                }} className={`dice ${loading && 'dice-animation'}`}>
                    <img src='./images/icon-dice.svg'/>
                </div>
            </div>
        </div>
    )
}
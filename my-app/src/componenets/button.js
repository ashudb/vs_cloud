import React,{useEffect,useState}from 'react'


const LikeBtn = (props)=> {
    const [count, setCount] =  useState()

    useEffect(()=>{setCount(props.initcount)},[props.initcount])
    
    const handleClick = (event) =>{
        const newCount = count+1
        setCount(newCount)
        console.log(count)
        if(props.onCountUpdate){
            props.onCountUpdate(newCount)
        }
    }
    return (
        <div>
            <button onClick = {handleClick}>Like {count}</button>
        </div>
    )
}

export default LikeBtn

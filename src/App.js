import React from "react"





function Hello(){
    let a=10
    let b={
        color:"yellow",
        textAlign:"center"
    }
    let c="{}"
    return <div className="hello">
        <h1 style={{color:"red",textAlign:"right"}}>Welcome to react Sushmitha</h1>  
        <p>This is react course,{a}</p>
        <h3 style={b} >How are you ?</h3>
        <p>{c}</p>
    </div>
}
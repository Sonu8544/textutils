import React from 'react'

export default function Greeting() {
    let currdate = new Date(2023,5,5,1);
    currdate = currdate.getHours();
    let greeting = "";
    const stylecolor ={}
    
    if(currdate >= 1 && currdate <= 12){
        greeting = "Good Moring ji"
        stylecolor.color = 'green'
    }else if(currdate >= 12 && currdate <= 7){
        greeting = "Good AfterNoon Ji"
        stylecolor.color='red'
    }else{
        greeting = "good Night";
        stylecolor.color='orange'
    }
  return (
    <>
    <h1>Hii Bro : <span style={stylecolor}>{greeting} </span> </h1>
    
    </>
  )
}

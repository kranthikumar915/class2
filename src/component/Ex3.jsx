import React, { useState } from 'react'

//state => internal variable of a react, number, string,boolean, object, array

const Ex3 = function(props){
    //useState => react hook
    //const[state,handler] = useState(initial value)
    const[x,setX] = useState(123)
    const[title,setTitle] = useState("welcome to react")
    const[view,setView] = useState(true)

    const[user,setUser] = useState({
        name:'kranthi',
        email:'rcbkranthi@gmail.com',
        age:23

    })
    const [colors,setColors] = useState(['red','green','yellow'])
    return (
        <div>
            <h1>states in functional component</h1>
            <h2>var x = {x}</h2>
            <h3>title = {title}</h3>
            <hr />
            <h2>view = {view ? "True" : "False"}</h2>
            <hr />
            <h3>user name = {user.name}</h3>
            <h3>user email = {user.email}</h3>
            <h3>user age = {user.age}</h3>
            <hr />
            <ol>
                {
                    colors.map((item,index) => {
                        return (
                            <li key = {index}>{item}</li>
                        )
                    })
                }
            </ol>
        </div>
    )
}
export default Ex3
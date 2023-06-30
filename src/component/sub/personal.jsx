import React from 'react'

function Personal(props) {
    return (
        <div>
            <h2>personal</h2>
            <h3>name={props.fname}</h3>
            <h3>email= {props.femail}</h3>
            <h3>mobile ={props.fmobile}</h3>
        </div>
    )
}
export default Personal
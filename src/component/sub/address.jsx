import React from 'react'

function Address(props) {
    return (
        <div>
            <h3>address</h3>
            <h4>city = {props.fcity}</h4>
            <h4>zip = {props.fzip}</h4>
        </div>
    )
}
export default Address
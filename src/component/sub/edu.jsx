import React from 'react'

function Edu(props) {
    return (
        <div>
            <h3>Education</h3>
            <h4>type = {props.ftype}</h4>
            <h4>title = {props.ftitle}</h4>
            <h4>year = {props.fyear}</h4>
        </div>
    )
}
export default Edu
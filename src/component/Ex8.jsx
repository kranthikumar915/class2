import React,{useState} from 'react'
import Personal from './sub/personal'
import Address from './sub/address'
import Edu from './sub/edu'

//personal component

//address

//education

function Ex8(props) {
    const [user,setUser] = useState({
        name:'kranthi',
        email:'kranthi@gmail.com',
        mobile:895755,
        address:{
            city:'banglore',
            zip:560064
        },
        edu:{
            type:'degree',
            title:'btech',
            year:'2023'
        }
    })
    return (
        <div>
            <h1>props in functional components</h1>
           <Personal fname={user.name} femail={user.email} fmobile={user.mobile}/>
           <Address fcity={user.address.city} fzip={user.address.zip}/>
           <Edu ftype={user.edu.type} ftitle={user.edu.title} fyear={user.edu.year}/>
        </div>
    )
}
export default Ex8

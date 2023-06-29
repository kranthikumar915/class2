import React from 'react'

class Ex4 extends React.Component {
    constructor(props) {
        super(props);
        //state
        this.state = {
            x : 123,
            y : 234,
            title : "welcome to string example",
            view: false,
            colors : ['red','green','yellow'],
            user : {
                name : 'kranthi',
                id : 123,
                email : 'hgygjyvjh',
                mobile :7657656956
            }

        }
    }
    render() {
        return (
            <div> 
                <h3>states in clas components</h3>
                <h3>x = {this.state.x}</h3>
                <h3>y = {this.state.y}</h3>
                <h3>title = {this.state.title}</h3>
                <h3>{this.state.view ? "true" : "false"}</h3>
                <ol>
                    {
                        this.state.colors.map((item,index) =>{
                            return (
                                <li key = {index}>{item}</li>
                            )
                        })
                    }
                </ol>
                <h3>user name = {this.state.user.name}</h3>
                <h3>user id = {this.state.user.id}</h3>
                <h3>user email = {this.state.user.email}</h3>
                <h3>user mobile = {this.state.user.mobile}</h3>
            </div>
        )} 

}
export default Ex4


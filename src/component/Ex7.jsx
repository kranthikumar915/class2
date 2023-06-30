import React,{Component} from 'react'

class Ex7 extends Component {
    constructor(props) {
        super(props)
        this.state ={
            num:0
        }
    }

    incNum (){
        //handler in class component
        this.setState({
            num:this.state.num+1
        })
    }

    addVal(val){
        this.setState({
            num:this.state.num+val
        })

    }
    render() {
        return (
            <div>
                <h3>state handler in class component</h3>
                <h3>num = {this.state.num}</h3>
                <hr/>
                <button onClick={()=> this.incNum()}>Add+1</button>
                <button onClick={()=> this.addVal(50)}>Add+50</button>
                <button onClick={()=> this.addVal(100)}>Add+100</button>
                <button onClick={()=> this.addVal(150)}>Add+150</button>
            </div>
        )
    }
}
export default Ex7
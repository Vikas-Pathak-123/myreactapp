import React from "react";
class Child1Component extends React.Component{
    state = {
        name:"Vikas Pathak"
    };
    sendData=()=>{
       this.props.parrentCallFun(this.state.name);
    }

    render(){
        return(
        <>
        <button onClick={this.sendData}>Get from Child</button>
        </>
        )
    }
}
export default Child1Component;
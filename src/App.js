import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import ExternalComponent from './ExternalComponent';
import Wrapper from './Wrapper';
import {add} from './config/commonFunction';
import {multiply } from './config/commonFunction';

// ////function component////////////
function App(props) {
  // console.log('props',props);
  // console.log('props.name.age',props.name.age)

   const result = add(10,20);
   const result1 = multiply(10,20);
   const  name1 = " Vikas"
   const number = [3,45,6,,7,27,8];
   const string = ["Vikas","karan","binod","manohar","Aarti"]

   //list in react
   const data = number.map((element,index) =>{
    return <li key={index}>{element}</li>
   });
   const data1 = string.map((element,index) =>{
    return <li key={index}>{element}</li>
    // return <li>{element}</li> ///also can be write like this but get error in cansole it's not good practic
   });
   const sayHello = ()=>{
    alert("Hello! My self Vikas");
   }

   const styleObj = {
    color:'white',
    backgroundColor:'darkcyan',
    border: 'solid #ffd700 5px'
  }
  
  const [name,setName]=useState("");
  const [showWrapper,setshowWrapper]=useState(false);  
  const visibleWrapper=()=>{
    setshowWrapper(true);
  }
  const novisibleWrapper=()=>{
    setshowWrapper(false);
  }
                            
  return (
  
    
    
    <div className="App">
      
      
      <h1 style={styleObj}>Welcome to the React learn with {props.name.name}</h1>

      <h1 className="app-heading">Welcome to the React {name1} from App component</h1>
      <h1 className='app-heading'>sum of of 10 and 20 is = {result}</h1>
      <h1 className='app-heading'>multiplly of of 10 and 20 is = {result1}</h1>
      <button onClick={()=>alert("Hi! My self Vicky")}>Say Hi!</button>
      <button onClick={sayHello}>Say Hello</button>
      <img src={logo} className="App-logo" alt="logo" />
      <ExternalComponent/>
      {/* Hook concept */}
      <h1>Name is {name}</h1>
      <button onClick={()=>setName("Omkar Kale......... (Thank you sir for Teaching Us)")}>click me</button>
      <button onClick={visibleWrapper}>visible</button>
      <button onClick={novisibleWrapper}>divisible</button>
      {showWrapper && <Wrapper></Wrapper>}
      
      {/* list in react */}
      <ul>{data}</ul>
      <ol>{data}</ol>
      <ul>{data1}</ul>
      <ol>{data1}</ol>

       

       {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"  
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
     </div>

    //////React.fregment////
    // <>
    //   <h1>vikas</h1>
    //   <h2>vikas</h2>
    // </>
  );


// ////// Creat Portal//////
//   return ReactDOM.createPortal(
//     <h1>I have created the portal</h1>,
//     document.getElementById("portal")
//   )
}



// ///// class component//////////
// class App extends React.Component{
//   render(){
//     return<h1>This is render</h1>
//   }
// }



/////class component  //////////////
// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {name: 'vinay'};
//   }
//   render(){
//     return(
//       <h1>My name is  {this.state.name}</h1>
//     )
//   }
// }


/////class component  with  state//////////////

// import Child1Component from "./Child1Component";
// class App extends React.Component{
//     state = {
//       name:""
//     };
//     executeCallback =(childComData)=>{                        
//       this.setState({name:childComData})
//     }
//     render(){
//       const name = this.state.name;
//           return(
//            <>
//            
//            <Child1Component
//            parrentCallFun = {this.executeCallback}
//            />
          
          
//            <p>Here on click of above button we will get the data from the child to parent.........basicaly we are taking  data from parent to child   {name}</p>     
//            </>
//           )
//         }

//   }
  

export default App;
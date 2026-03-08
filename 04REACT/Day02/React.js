// const element = React.createElement("h1",{id:"tittle"},"hello i am rajneesh kumar");
// console.log(typeof element); // object

// // const element2=React.createElement("div",null,element);

// // problem is

// const element2=React.createElement("div",null,
//         [React.createElement("h1",{id:"tittle"},"hello i am rajneesh kumar"),
//         React.createElement("h2",{id:"tittle_1"},"app kaise ho")],     
// );

// // const root = document.getElementById("root"); // old Method

// const root =ReactDOM.createRoot(document.getElementById("root")); // new Method
// root.render(element2);





// optimization of code


// JSX: javascript XML: Look like HTML (Babel)
// JSX --> React.createELement() --> React Element(JS Object) --> Real DOM(HTML ELEMENT)
//     babel                    React                        RectDOM

// <h1 id="title">Hello Coder Army</h1> --> React.createElement('h1',{id:'title'},"Hello Coder Army") --> {type:"h1", props:{id:"title", children:"Hello Coder Army"}} --> <h1 id="title">Hello Coder Army</h1>
// const element = React.createElement('h1',{id:'title'},"Hello Coder Army");


// const element =<h1 id="tittle" className="first"> hello ji aap kaise ho</h1>
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);
// console.log(element);




// const element2 =(<div>
//          <h1>hello</h1>
//          <h2>kaise ho app</h2>      
// </div>);


// // Error

// React.createElement("h1",null,"hello");
// React.createElement("h1",null,"kaise ho app");
// const element2 =(
//          <h1>hello</h1>
//          <h2>kaise ho app</h2>      
// );



// const element3= React.createElement("div",null,
//      [React.createElement("h1",null,"hello"),
//      React.createElement("h1",null,"kaise ho app")]);

// React Element
// const element3 = (<div>
//          <h1>hello</h1>
//          <h2>kaise ho app</h2>   
// </div>);

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(element3);




/*-------------------------------------------------------------------------------------------------------------------- */



// React Component

// A React component is a JavaScript function or class that returns HTML-like code (JSX) to show on the screen.

// function App(){
//     return (
//         <h1>Hello Coder Army {name}</h1>
//     );
// }


// root.render(App());
// root.render(<h1>Hello Coder </h1>);
// root.render(<App/>);

// const a=App();
// root.render(a);



// React Component as function pass argument

// how to write js expression in jxs 

// function App(name){
//     return (
//         <h1>Hello Coder Army {name}</h1>
//     );
// }

// const a=App("Rajneesh");
// root.render(a);



// {} --- with the help of this symble we can write any expression of js which produce single result

// text/element: Javascript ka expression aap iske andar likh sakte hain
// Number, string, true false, null, undefined, array, object

// Number, string, array
// true false null undefined (render honge lekin kuch display nahi hoga)


// Object: Error
// const element=<h1>hello coder army {{name:rajneesh ,age:21}}</h1> // Error


// // Number
// const element = <h1 className="second">i am rajneesh kumar manjhi {12}</h1>


// // String
// const element = <h1 className="second">i am rajneesh kumar manjhi {"and form bihar"}</h1>


// // Html Element
// const element = <h1 className="second">i am rajneesh kumar manjhi {<h2>full stack devloper</h2>}</h1>


// j.s expression
// const age= 10;
// const element = <h1>voting {age>18?<h2>Your are aligible for vote</h2>:<h2>You not eligible</h2>}</h1>
// const isLoggedIn = true;


// // why 
// const element = <h1>Hello Coder {isLoggedIn?<h2>Logged In</h2>:<h2>Kindly SignIn</h2>}</h1>


// j.s Array 
// const courses = ["HTML","CSS","Javascript","React"]; // backend se data

// // 1.
// const element=<ul> {course} </ul>


// [<li>HTML</li>,<li>CSS</li>,<li>JavaScript</li>,<li>React</li>]

// // 2.
// const element = (
//      <ul>
//        {[<li>HTML</li>,<li>CSS</li>,<li>JavaScript</li>,<li>React</li>]}  
//      </ul>          
// );

// // behind the seen
// const element =React.createElement("ul",null,[React.createElement("ul",null,<li>Html</li>),
//                React.createElement("ul",null,<li>css</li>)]);

// // 3.
// const element = (
//      <ul>
//         {courses.map(courses=><li>{courses}</li>)}   // focuse these line
//      </ul>          
// );






// props

// hma kuc function ko call kiya and multiple value ko pass kar diya 

// const ab = {backgroundColor:"orange", color:"white"}
// const element =<h1 id="frist" className="tittle" style={{backgroundColor:"orange", color:"white"}}>hello i am rajneesh kumar </h1>

// first js expression ,second object


// function App(props){
//     return (
//         <h1>Hello Coder Army {props.name} {props.age}</h1>
//     )
// }


// {
//     name : "Rajneesh",
//     age : 25            
// }
// const element = <App name="Rajneesh" age={25}></App>   
// why this type of fuction beacouse jsx want like htlm 


// concept

// why function name first start from capital letter

// in html every tag element start from small letter ex -h1,h2

// when we are creating custom tag then always first letter start from captial for diff

// if tag are custom ,then first convert React.createElement("App",null,) , after convert App call



// Project Structure


function  Header(props){
        return(
            <h1>Header Component {props.name} {props.city} </h1>
               // <h1>Header Component {name} {city} </h1>  // destructuring {name, city}
        )       
}

function Main(props){
     return(
        <>
        <h2>Hi {props.user.name}</h2>
        <h3>{props.user.age>18? "Ypur are eligible for vote": "Your are not eligible for vote"}</h3>
        <p>Your city is {props.user.city}</p>
        </>     
     )
}


function Footer(){

    return (
        <h3>Thansk for visiting our website</h3>
    )
}
function  App(){
       return(
           <>
             <Header name="Rajneesh" city="siwan"></Header> 
             <Main user={{name:"Rajneesh", age:25, city:"siwan"}}></Main>  
             <Footer></Footer>
           </>      
       )        
               
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);

// App();
//<App/>






















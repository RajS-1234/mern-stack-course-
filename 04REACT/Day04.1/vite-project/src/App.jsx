
function App() {

  let count=0;
  function increment() {
    count++;
    const para = document.querySelector("p");
    para.textContent=`counter : ${count}`
    console.log(count);
  }
  
    return(
    <>
    <p> counter : {count} </p> 
    <button onClick={increment}>Increment</button> 
    </>
  )
}


export default App;

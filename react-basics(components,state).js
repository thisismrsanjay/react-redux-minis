//manual binding

let count = 0;
const add = ()=>{
    count++;
    renderCounterApp();
}
const minus = ()=>{
    count--;
    renderCounterApp();
}
const reset = ()=>{
    count=0;
    renderCounterApp();
}
const renderCounterApp= ()=>{
    const template = ( 
    <div>
        <h1>Count {count}</h1>
      <button onClick={add}>+1</button>
      <button onClick={minus}>-1</button>
       <button onClick={reset}>0</button>
    </div> );
    ReactDOM.render(template, document.getElementById('root'));
}

renderCounterApp();

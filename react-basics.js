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


//todos
const app = {
    options: ['one', 'two','three']
}
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}
const clearAll = ()=>{
    app.options.length=0;
    render();
}
const deleteIt = (index)=>{
    app.options.splice(index,1);
    render();
}
const render = () => {
    const template = (
        <div>     
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
                <button onClick={clearAll}>Clear All</button>
            </form>
            {
                app.options.map((item,index)=>{
                    return <li key={index}>{item} <button onClick={()=>deleteIt(index)} >X</button>  </li>
                })
            }
        </div>
    );
    ReactDOM.render(template, document.getElementById('root'));
}
render();

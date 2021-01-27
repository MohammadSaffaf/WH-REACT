import { useState} from "react";


const Counter = () => {
    const [count, setCount] = useState(0);

    return ( 
        <article className="counter-article">
            <h1>Counter</h1>
            <div className="counter-div">
           
 <button onClick={()=>setCount(count+1)}>+</button>
 <h1>{count}</h1>
 <button onClick={()=>setCount(count-1)}>-</button>
 </div>
 <br/>
 <button  className="reset" onClick={()=>setCount(0)}>RESET</button>

            
        </article>
     );
}
 
export default Counter;
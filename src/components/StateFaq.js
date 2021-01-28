import { useState} from "react";
 const StateFaq = () => {
    const [hidden, setHidden] = useState(true);
     return ( 
         <article className="counter-article">
             <section className="state-section">
             <div className="state-div"> 
                 <h1> Why is React greate</h1>
                 <button onClick={() => setHidden(!hidden)}>+</button>
                 </div>
             <div hidden={hidden} className="hidden">
                 <h2>Fast Learning Curve</h2>
             </div>
             </section>
         </article>
      );
 }
  
 export default StateFaq;
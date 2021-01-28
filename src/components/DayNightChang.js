import { useState} from "react";

const DayNightChang = () => {
    
    const randomColor1 = () => setIsColor1('black','white')
    const [color1 , setIsColor1] = useState(false)

    const randomColor2 = () => setIsColor2('white')
    const [color2 , setIsColor2] = useState(false)
   
    
    return ( 
        <article className="DayNight">
            <div className="div-day" style={{ backgroundColor:color1}}>
                <h1>Day</h1>
                <button onClick={() => randomColor1()}>Change to Night</button>
            </div>
            <div>+</div>
            <div className="div-night" style={{ backgroundColor:color2}}>
            <h1>Night</h1>
                <button onClick={() => randomColor2()}>Change to Day</button>
            </div>
        </article>
     );
}
 
export default DayNightChang;
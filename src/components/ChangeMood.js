import { Cat } from 'react-kawaii';
import { Backpack } from 'react-kawaii';
import { Browser } from 'react-kawaii';
import { Chocolate } from 'react-kawaii';
import { CreditCard } from 'react-kawaii';
import { File } from 'react-kawaii';
import { Ghost } from 'react-kawaii';
import { IceCream } from 'react-kawaii';
import { Mug } from 'react-kawaii';
import { Planet } from 'react-kawaii';
import { useState} from "react";

const ChangMood = () => {
    const random255 = () => Math.floor(Math.random()*255);
    const randomColor = () => setColor(`rgba(${random255()},${random255()},${random255()},${Math.random()})`)
    const [color, setColor]=useState(`rgba(${random255()},${random255()},${random255()},${Math.random()})`)
    const arrayMood =["sad", "shocked", "happy", "blissful", "lovestruck", "excited", "ko"]
    const randomMood = () => setMood(arrayMood[Math.floor(Math.random () * arrayMood.length)])
    const [mood , setMood] = useState(arrayMood[Math.random () * arrayMood.length])
    return (    
        <article className="changmood">
            <div>
<Cat size={300} mood={mood} color={color} />
<Cat size={300} mood={mood} color={color} />
<Backpack size={300} mood={mood} color={color} />
<Backpack size={300} mood={mood} color={color} />
<Browser size={300} mood={mood} color={color} />
<Browser size={300} mood={mood} color={color} />
<Chocolate size={300} mood={mood} color={color} />
<Chocolate size={300} mood={mood} color={color} />
<CreditCard size={300} mood={mood} color={color} />
<File size={300} mood={mood} color={color} />
<Ghost size={300} mood={mood} color={color} />
<IceCream size={300} mood={mood} color={color} />
<Mug size={300} mood={mood} color={color} />
<Planet size={300} mood={mood} color={color} />
<Cat size={300} mood={mood} color={color} />
<Cat size={300} mood={mood} color={color} />

</div>
<button onClick={() => {randomMood() ; randomColor()} } style={{backgroundColor:color}}>Change Mood</button>
        </article>
     );
}
 
export default ChangMood;

import Text from "./Text"
import {ways} from "./data.js"


function TechSection(){
    return(<ul>
                {ways.map((way)=>(<Text key={way.id} {...way}/>))}
            </ul>)
}
export default TechSection;

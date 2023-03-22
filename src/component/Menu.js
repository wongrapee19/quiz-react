
import { useContext} from "react"
import { DataContext } from "../App"

const Menu = () => {
    const {setAppState} = useContext(DataContext)
    return (

            <div className="menu"> 
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="react logo" style={{ width: '90px', }}/>
                        <h1>แบบทดสอบ React</h1>
                    <button onClick={()=>setAppState("quiz")}>เริ่มทำกันเลย</button>
            </div>

    )

}

export default Menu
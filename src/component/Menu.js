
import { useContext} from "react"
import { DataContext } from "../App"

const Menu = () => {
    const {setAppState} = useContext(DataContext)
    return (

            <div className="menu"> 
            <img src="/logo192.png" alt="" />
                        <h1>แบบทดสอบ React</h1>
                    <button onClick={()=>setAppState("quiz")}>เริ่มทำกันเลย</button>
            </div>

    )

}

export default Menu
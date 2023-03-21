import { useContext } from "react"
import { DataContext } from "../App"
import QuestionsData from "../data/QuestionsData"
const Score = () => {
    const {score,setAppState,setScore}  =  useContext(DataContext)
   const restartApp =()=>{
     setScore(0)
     setAppState("menu")
   }
    return (

<div className="score"> 

<h1>คะแนนที่ได้</h1>
<div className="point">
        <h2> {score} / {QuestionsData.length}</h2>
    
</div>
<p>คุณทำได้ดีเยี่ยม ขอบคุณที่ร่วมทำแบบทดสอบ</p>
<button  onClick={restartApp}>ทำแบบทดสอบอีกครั้ง</button>
</div>

    )

}

export default Score
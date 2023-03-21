import { useContext, useState , useEffect } from "react"
import QuestionsData from "../data/QuestionsData"
import { DataContext } from "../App"


const Quiz = () => {
    const [currentdata,setCurrent] = useState(0)
    const [selectoption,setSelectOption] = useState("")

    const {score,setScore,setAppState} = useContext(DataContext)
    useEffect(() => {
        checkAns()
        // eslint-disable-next-line 
    },[selectoption])

    const checkAns = () =>{
        if(selectoption!== ""){
            if(selectoption === QuestionsData[currentdata].answer){
               
                setScore(score+1)
          
                nextStep()
            }else{
               
                nextStep()
            }
        }
    }

    const nextStep =()=> {
        setSelectOption("")
        if (currentdata === QuestionsData.length-1){
                setAppState("score")
        }else{
            setCurrent(currentdata+1)
        }
       
    }
    return (
            
            <div className="quiz"> 
            <h1>{QuestionsData[currentdata].question}</h1>
            <div className="option">
              <button onClick={()=>setSelectOption("A")}>{QuestionsData[currentdata].A}</button>
              <button onClick={()=>setSelectOption("B")}>{QuestionsData[currentdata].B}</button>
              <button onClick={()=>setSelectOption("C")}>{QuestionsData[currentdata].C}</button>
              <button onClick={()=>setSelectOption("D")}>{QuestionsData[currentdata].D}</button>
            </div>


            <div className="nextcontainer">
            <div className="next">
            <p>{`${currentdata+1} / ${QuestionsData.length}`}</p>
            </div>
            </div>
           
            
     
            </div>

    )

}

export default Quiz
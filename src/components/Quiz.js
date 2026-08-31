import QuestionsData from '../data/QuestionsData';
import { useState } from 'react';
const Quiz = () => {
    //console.log(QuestionsData)
    const [current, setCurrent] = useState(0)
    const [selected, setSelected] = useState("")
    return(
        <div className="quiz">
            <h1>{QuestionsData[current].question}</h1>
            <div className="choices">
                <button>{QuestionsData[current].A}</button>
                <button>{QuestionsData[current].B}</button>
                <button>{QuestionsData[current].C}</button>
                <button>{QuestionsData[current].D}</button>
            </div>
            <p>{`${current + 1}/${QuestionsData.length}`}</p>
        </div>
    )
}
export default Quiz;
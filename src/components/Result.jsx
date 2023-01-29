import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import resultImg from "../results-photo.png"
export default function Result(){
    const quiz=useContext(QuizContext);
    return(
        <div className=" items-center text-center mt-24">
        <div className="w-5/6 lg:w-3/4 items-center text-center mx-auto rounded overflow-hidden shadow-lg pb-10 mt-10 bg-l-green">
        <p className="font-lato text-2xl text-white bg-green-700 py-4 mb-11  mx-auto">Results</p>
        {quiz.getScore()>=quiz.noQuestions/2?<p className="text-xl p-5"> Congratulations, you finished the test!</p>:<p className="text-xl p-5">You scored less than 50%! Better luck next time!</p>}
        <p className="text-2xl"> Your <span className="text-green-700 font-semibold">score</span> is: {quiz.getScore()}/{quiz.noQuestions}</p>
        <img alt=" " src={resultImg} className="p-5 z-0 h-3/5 sm:w-2/5"></img>
        </div>
    </div>
    )
}
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";

export default function Question(){

    const [isCorrect,setIsCorrect]=useState(false); 
    const [isFalse,setIsFalse]=useState(false);
    const [isClicked,setIsClicked]=useState(false);
    const quiz=useContext(QuizContext);
    const question=quiz.getQuestion();
    const answer="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-2";
    const next="bg-orange-600 hover:bg-orange-700 text-white font-semibold font-ptsans py-2 px-20 border border-gray-400 rounded shadow m-6";
    const buttonA=useRef(null);
    const buttonB=useRef(null); 
    const buttonC=useRef(null);
    const buttonD=useRef(null);
    const checkAnswer=(answer,button)=>{
        if(!isClicked)
        if(answer===question.answer){
            button.current.className="bg-white text-gray-800 font-semibold py-2 px-4 border-2 border-green-600 rounded shadow m-2";
            setIsClicked(true);
            setIsCorrect(true);
            quiz.addPoint();
        }
        else{
            button.current.className="bg-white text-gray-800 font-semibold py-2 px-4 border-2 border-red-600 rounded shadow m-2";
            setIsClicked(true);
            setIsFalse(true);
        }
    }
    const nextQuestion=()=>{
        buttonA.current.className=answer;
        buttonB.current.className=answer;
        buttonC.current.className=answer;
        buttonD.current.className=answer;
        setIsCorrect(false);
        setIsFalse(false);
        setIsClicked(false);
        quiz.nextQuestion();
    }
    return(
        
        <div className="w-full h-full items-center text-center mt-24">
            <p> <span className="p-5  rounded overflow-hidden shadow-lg mb-32 bg-l-green">Question {question.id}/{quiz.noQuestions}</span></p>
            <div className="w-5/6 lg:w-3/4 items-center text-center mx-auto rounded overflow-hidden shadow-lg pb-10 mt-10 bg-l-green">
            <p className="font-lato text-2xl text-white bg-green-700 py-4 px-4 mb-11  mx-auto">{question.title}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 w-4/5 mx-auto">
            <button onClick={()=>checkAnswer("A",buttonA)} className={answer} ref={buttonA}>A. {question.A}</button>
            <button onClick={()=>checkAnswer("B",buttonB)} className={answer} ref={buttonB}>B. {question.B}</button>
            <button onClick={()=>checkAnswer("C",buttonC)} className={answer} ref={buttonC}>C. {question.C}</button>
            <button onClick={()=>checkAnswer("D",buttonD)} className={answer} ref={buttonD}>D. {question.D}</button>
            </div>
            {isCorrect&&<p className="text-2xl font-semibold text-green-700">Correct!</p>}
            {isFalse&&<p className="text-xl ss:text-2xl font-semibold text-red-600">Wrong! The correct answer is {question.answer}</p>}
            {question.id!==quiz.noQuestions &&<button className={next} onClick={nextQuestion}>Next</button>}
            {question.id===quiz.noQuestions &&<Link to="/result"><button className={next} >Finish</button></Link>}
            </div>
        </div>
    );
}
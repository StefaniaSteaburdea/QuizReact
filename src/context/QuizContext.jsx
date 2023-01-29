import { createContext, useState } from "react";
import {questions} from "./questions";
export const QuizContext=createContext({
    currentQuestion:0,
    score:0,
    nextQuestion:()=>{},
    getQuestion:()=>{},
    addPoint:()=>{},
    getScore:()=>{},
    noQuestions:0
});

export function QuizProvider({children}){
    const [currentQuestion,setCurrentQuestion]=useState(1);
    const [score,setScore]=useState(0);
    const noQuestions=questions.length;
    
    function nextQuestion(){
        if(currentQuestion<noQuestions)
            setCurrentQuestion(currentQuestion+1);
        return currentQuestion;
    }
    function getQuestion(){
        return questions[currentQuestion-1];
    }
    function addPoint(){
        setScore(score+1);
    }
    function getScore(){
        return score;
    }
    const contextValue={
        currentQuestion:currentQuestion,
        questions:questions,
        nextQuestion,
        getQuestion,
        addPoint,
        getScore,
        noQuestions:noQuestions,
    }

    return(
        <QuizContext.Provider value={contextValue}>{children}</QuizContext.Provider>
    )
}
export default QuizProvider;
import React,{useState} from 'react'
import './Questions.css'
import { useNavigate } from 'react-router-dom';

function Questions() {

  const questions = [
    {
      question: "What is the capital of India?",
      options: ["Delhi","Hyderabad","Mumbai","Bangalore"],
      answer: "Delhi",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth","Saturn","Jupiter","Mars"],
      answer: "Jupiter",
    },
    {
      question: "What is the smallest country in the world?",
      options: ["Vatican City","Monaco","Nauru","Tuvalu"],
      answer: "Vatican City",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [capture, setCapture] = useState(null);
  const [count, setCount] = useState(0);
  const [optionCount, setoptionCount] = useState(0);


  const currentQuestion = questions[currentQuestionIndex];

  const navigate = useNavigate();


  const evaluation = () =>{
    if(optionCount === questions.length){
      navigate('/results', { state: { score: count + (capture === currentQuestion.answer ? 1 : 0), total: questions.length } });
    }
    else{
      alert("attempt all the questions")
    }
  };

  

  const handleNext = () =>{
      if (capture === null) {
        alert("select one option");
        return;
      }

      setoptionCount(optionCount+1);

      if(capture === currentQuestion.answer){
        console.log("correct answer");
        setCount(count+1);
      }
      if(currentQuestionIndex < questions.length-1){
        setCurrentQuestionIndex(currentQuestionIndex+1);
        setCapture(null);
      }
      else{
        alert("You've reached the last question and click submit button");
      }
  };

  const handlePrev = () => {
    if(currentQuestionIndex > 0){
      setCurrentQuestionIndex(currentQuestionIndex-1);
      setCapture(null);
    }
  };

  
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="h-[500px] w-[1000px] ml-5 mr-5 border-2 border-black rounded-3xl shadow-2xl bg-blue-800">
             <div className='text-white text-xl ml-5 mt-5'>Questions {currentQuestionIndex+1}/{questions.length}</div>           
             <div className=''>
                <div className='text-white text-2xl ml-5 mt-36'>{currentQuestion.question}</div>
                  <div className='text-white ml-[550px] mr-[100px] text-2xl '>
                      {currentQuestion.options.map((option,index) =>(
                        <div
                          key={index}
                          onClick={() => setCapture(option)}
                          className={`border-2 border-black rounded-lg mb-2 text-center hover-pointer ${capture === option ? 'bg-pink-500' : 'bg-transparent'
                          }`}
                          >
                            {option}
                            </div>
                      ))}      
                    </div>
                </div>

                <div className="flex items-center justify-between w-full">
                  <button onClick={handlePrev} className="text-white bg-pink-500 rounded-lg ml-3 mt-8 px-4 py-2">Prev</button>
                  <button onClick={evaluation} className="bg-white text-black rounded-lg mt-8 px-4 py-2">Submit</button>
                  <button onClick={handleNext} className="text-white bg-pink-500 rounded-lg mr-3 mt-8 px-4 py-2">Next</button>
                </div>
          </div>
      </div>
    </>
  )
}

export default Questions

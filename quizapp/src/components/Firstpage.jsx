import React from "react";
import { useNavigate } from "react-router-dom";

    
export default function Firstpage() {
    const navigate = useNavigate();//Initialize navigate

    const handlestart = () =>{
        navigate("/questions");
    };
    return (

            <div className="flex items-center justify-center h-screen">
                <div className="h-96 w-96 ml-5 mr-5 border-2 border-black rounded-3xl shadow-2xl bg-blue-800">
                <div className="text-center text-white text-2xl mt-28">Welcome to the quiz</div>
                <div className="text-center text-white text-3xl mt-16 "><button 
                    onClick={handlestart} 
                    className="border-2 border-black rounded-xl bg-red-500 px-4 py-2">START</button></div>
            </div>
            </div>

    );
}

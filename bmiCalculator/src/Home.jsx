import { useState } from 'react'
import './App.css'



function Home() {
  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')

  const handleBtn = () =>{
    if (weight && height) {

        const heightInMeters = height / 100;
        
        const bmiValue = weight / (heightInMeters * heightInMeters);

        let bmiMessage=""
        if (bmiValue <= 18.4) {
            bmiMessage = `You are Underweight ${bmiValue.toFixed(2)}`;
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
            bmiMessage = `You are Normal ${bmiValue.toFixed(2)}`;
        } else if (bmiValue >= 25.0 && bmiValue <= 39.9) {
            bmiMessage = `You are Overweight ${bmiValue.toFixed(2)}`;
        } else {
            bmiMessage = `You are Obese ${bmiValue.toFixed(2)}`;
        }

        alert(bmiMessage); // Update the message after BMI calculation

    } else {
        alert('Please enter weight and height');
    }
  }
  return (
   <>
   <div className='flex justify-center mt-[100px]'>
    <div className='border border-black rounded-lg w-[500px] h-[490px] text-3xl bg-blue-500'>
      <div className='mt-[30px] text-zinc-200'><h1>BMI</h1></div>
      <hr className='mt-[10px]'/>
      <div className='mt-[30px] mr-[60px] text-xl'>
          Age[2-102] :
          <input 
          className='ml-[10px] w-[80px] rounded-lg'
          type="number"
          name='Age' 
          min = '2'
          max = '102'
          value={age}
          onChange={(e) => setAge(e.target.value)}
          />
        </div>
      <div className='mt-[30px] mr-[40px] text-xl'>
          Weight  :
          <input 
          className='ml-[20px] w-[80px] rounded-lg'
          type="number"
          name='Weight' 
          placeholder='in kgs'
          value={weight}
          min = '1'
          onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className='text-xl flex mt-[30px] ml-[150px]'>
              Height :
              <input
                className='ml-[20px] w-[80px] rounded-lg'
                type="number"
                name='Height'
                placeholder="in cms"
                min = '0'
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
        <button 
          onClick={handleBtn}
         className='mt-[50px] border-2 border-black rounded-xl bg-red-500 px-4 py-2 text-white'>compute BMI</button>
      </div>
    </div>
   </>
  )
}

export default Home

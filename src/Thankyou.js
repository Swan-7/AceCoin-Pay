import React from 'react'
import { ReactComponent as Tick } from './images/tick-blue.svg';

function ThankYou({ onSuccess }) {
    return (
      <>
        <div className='flex flex-col justify-center'>
          <div className='flex items-center gap-0.5'>
            <span className='flex items-center justify-center h-11 w-11 block bg-blue-600 rounded-full'></span>
            <h1 className='text-xl font-semibold ml-2.5'>AceCoin<span className='font-light'>Pay</span></h1>
          </div>
          <Tick className='w-40 h-40 block mx-auto mt-14' />
          <h1 className='text-blue-950 my-6 text-4xl uppercase text-center'>Thank you!</h1>
          <p className='text-gray-400 text-center'>Your order was completed successfully</p>
          <button onClick={() => onSuccess(false)} className='btn block mx-auto mt-10 lg:w-1/2'>Done</button>
        </div>
      </>
    )
  }

  export default ThankYou

  
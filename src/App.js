import React from 'react';
import formBg from './images/bg.jpg';
import { ReactComponent as EditIcon } from './images/edit.svg';
import { ReactComponent as MasterCard } from './images/mastercard.svg';
import { ReactComponent as Verify } from './images/verified-badge.svg';
import { ReactComponent as Grid } from './images/dots.svg';


export default function App() {
  return (
    <>
      <section>
        <div className='bg absolute -z-10'>
          <img src={formBg} alt='' />
        </div>

        <div className='grid grid-cols-12 gap-20 max-w-[67rem] relative mx-auto bg-white p-12 pt-20 text-blue-950'>
          <div className='col-span-8 m-1'>
            <header className='flex items-center justify-between mb-11'>
              <div className='flex items-center gap-0.5'>
                <span className='h-11 w-11 block bg-blue-600 rounded-full'></span>
                <h1 className='text-xl font-semibold ml-2.5'>AceCoin<span className='font-light'>Pay</span></h1>
              </div>
              <div className='font-medium text-xl flex gap-x-0.5'>
                <span className='bg-blue-950 text-white w-7 h-10 rounded flex items-center justify-center'>0</span>
                <span className='bg-blue-950 text-white w-7 h-10 rounded flex items-center justify-center'>1</span>
                <span className='text-md flex items-center mx-px'>:</span>
                <span className='bg-blue-950 text-white w-7 h-10 rounded flex items-center justify-center'>1</span>
                <span className='bg-blue-950 text-white w-7 h-10 rounded flex items-center justify-center'>9</span>
              </div>
            </header>

            <section>
              <form action=''>
                <div className='mb-4'>
                  <div className='flex items-center justify-between mb-8'>
                    <div>
                      <label htmlFor='card_no' className='font-semibold mb-1'>Card Number</label>
                      <p className='font-medium text-gray-400 text-[0.68rem]'>Enter the 16-digit card number on the card</p>
                    </div>
                    <button className='flex gap-3 items-center text-blue-600'>
                      <EditIcon className='w-4 h-4 text-blue-600 fill-current' />
                      <span className='font-medium text-sm'>Edit</span>
                    </button>
                  </div>
                  <div className='flex relative'>
                    <MasterCard className='w-10 h-10 absolute left-4 top-[0.6rem]' />
                    <input name='card_no' id='card_no' className='w-full p-4 pl-[4.4rem] rounded-lg border-2 border-gray-200 outline-blue-600 focus:bg-gray-100' type='text' placeholder='2412    -     7512    -    3412    -    3456' required maxLength={16}/>
                    <Verify className='w-6 h-6 absolute right-4 top-[1.1rem]' />
                  </div>
                </div>
                <div className='flex justify-between mb-4'>
                  <div>
                    <label htmlFor='cvv_no' className='font-semibold mb-1'>CVV Number</label>
                    <p className='font-medium text-gray-400 text-[0.68rem]'>Enter the 3 or 4 digit number on the card</p>
                  </div>
                  <div className='flex relative'>
                    <input name='cvv_no' id='cvv_no' className='flex p-4 text-blue-950 w-[21rem] font-semibold pl-[9.5rem] rounded-lg border-2 border-gray-200 outline-blue-600 focus:bg-gray-100 placeholder-blue-950' type='text' placeholder='327' required maxLength={3}/>
                    <Grid className='w-6 h-6 absolute right-4 top-[1.1rem] text-gray-400 fill-current' />
                  </div>
                </div>
                <div className='flex justify-between mb-4'>
                  <div>
                    <label htmlFor='expiry_date' className='font-semibold mb-1'>Expiry Date</label>
                    <p className='font-medium text-gray-400 text-[0.68rem]'>Enter the expiration date of the card</p>
                  </div>
                  <div className='flex w-[21rem] space-x-1'>
                    <div className=''>
                    <input name='expiry_date' id='expiry_date' className='flex-1 pl-14 font-semibold py-6 px-5 text-blue-950 h-8 rounded-lg border-2 border-gray-200 outline-blue-600 focus:bg-gray-100 placeholder-blue-950' type='number' placeholder='09' required min={1} max={12}/>
                    </div>
                    <span className='flex items-center px-3.5 text-blue-950'>/</span>
                    <div className=''>
                    <input name='expiry_date' id='expiry_date' className='flex-1 pl-16 font-semibold py-6 px-3.5 text-blue-950 h-8 rounded-lg border-2 border-gray-200 outline-blue-600 focus:bg-gray-100 placeholder-blue-950' type='number' placeholder='22' required min={1} max={31}/>
                    </div>
                  </div>
                </div>
                <div className='flex justify-between mb-12'>
                  <div>
                    <label htmlFor='password' className='font-semibold mb-1'>Password</label>
                    <p className='font-medium text-gray-400 text-[0.68rem]'>Enter your Dynamic password</p>
                  </div>
                  <div className='flex relative'>
                    <input name='password' id='password' className='flex p-4 text-blue-950 w-[21rem] font-semibold rounded-lg border-2 border-gray-200 outline-blue-600 focus:bg-gray-100 tracking-wide placeholder-blue-950' type='password' placeholder='********' required />
                    <Grid className='w-6 h-6 absolute right-4 top-[1.1rem] text-gray-400 fill-current' />
                  </div>
                </div>
                <button className='w-full bg-blue-600 py-6 px-36 rounded-lg text-white font-semibold transition ease-in-out delay-250 hover:bg-blue-800'>Pay Now</button>
              </form>
            </section>
          </div>
          <div className='col-span-4'>
            {/* virtual card */}
          </div>
        </div>
      </section>
    </>
  )
}

import React from 'react';
import formBg from './images/bg.jpg';
import { ReactComponent as EditIcon } from './images/edit.svg';
import { ReactComponent as MasterCard } from './images/mastercard.svg';
import { ReactComponent as MasterCard_2 } from './images/mastercard-2.svg';
import { ReactComponent as Verify } from './images/verified-badge.svg';
import { ReactComponent as Grid } from './images/dots.svg';
import { ReactComponent as Apple } from './images/apple.svg';
import chip from './images/chip.png';
import wifi from './images/wifi.png';
import receipt from './images/receipt.png';


export default function App() {
  return (
    <>
      <section>
        <div className='bg absolute -z-10 top-0 hidden lg:block'>
          <img src={formBg} alt='' />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 overflow-hidden lg:gap-20 lg:max-w-[67rem] max-w-xs relative mx-auto lg:my-24 mt-10 bg-white lg:p-12 p-0.5 lg:pt-20 text-blue-950'>
          <div className='lg:col-span-8 m-1'>
            <header className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-0 mb-11'>
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
                  <div className='flex items-center justify-between mb-6'>
                    <div>
                      <label htmlFor='card_no' className='font-semibold mb-1'>Card Number</label>
                      <p className='font-medium text-gray-400 text-[0.68rem]'>Enter the 16-digit card number on the card</p>
                    </div>
                    <button className='flex lg:gap-3 gap-1 items-center text-blue-600'>
                      <EditIcon className='w-4 h-4 text-blue-600 fill-current' />
                      <span className='font-medium text-sm'>Edit</span>
                    </button>
                  </div>
                  <div className='flex relative'>
                    <MasterCard className='lg:w-10 lg:h-10 w-8 h-8 absolute left-2 lg:left-4 top-3 lg:top-[0.6rem]' />
                    <input name='card_no' id='card_no' className='w-full p-4 pl-11 lg:pl-[4.4rem] text-sm lg:text-base rounded-lg border-2 border-gray-200 outline-blue-600 focus:bg-gray-100' type='text' placeholder='2412   -    7512   -   3412   -   3456' required maxLength={16} />
                    <Verify className='w-3.5 h-3.5 lg:h-6 lg:w-6 absolute right-4 top-5 lg:top-[1.1rem]' />
                  </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-between mb-4'>
                  <div className='mb-4 lg:mb-0'>
                    <label htmlFor='cvv_no' className='font-semibold mb-1'>CVV Number</label>
                    <p className='font-medium text-gray-400 text-[0.68rem]'>Enter the 3 or 4 digit number on the card</p>
                  </div>
                  <div className='flex relative'>
                    <input name='cvv_no' id='cvv_no' className='flex p-3 text-blue-950 w-full lg:w-[21rem] font-semibold lg:pl-[9.5rem] rounded-lg border-2 border-gray-200 outline-blue-600 focus:bg-gray-100 placeholder-blue-950' type='text' placeholder='327' required maxLength={3} />
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
                      <input name='expiry_date' id='expiry_date' className='flex-1 pl-14 font-semibold py-6 px-5 text-blue-950 h-8 rounded-lg border-2 border-gray-200 outline-blue-600 focus:bg-gray-100 placeholder-blue-950' type='number' placeholder='09' required min={1} max={12} />
                    </div>
                    <span className='flex items-center px-3.5 text-blue-950'>/</span>
                    <div className=''>
                      <input name='expiry_date' id='expiry_date' className='flex-1 pl-16 font-semibold py-6 px-3.5 text-blue-950 h-8 rounded-lg border-2 border-gray-200 outline-blue-600 focus:bg-gray-100 placeholder-blue-950' type='number' placeholder='22' required min={1} max={31} />
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

          <div className='lg:col-span-4'>
            <div className=''>
              {/* <span className='absolute right-48 top-[4.7rem] h-6 w-[3.9rem] block bg-blue-600 rounded-sm transform translate-x-1/2'></span> */}
              <div className='card absolute z-50 right-24 shadow px-6 py-10 backdrop-blur overflow-hidden rounded-2xl h-72 w-52 mx-auto'>
                <div className='flex justify-between'>
                  <img src={chip} alt='chip' className='w-8 h-10' />
                  <img src={wifi} alt='wifi' className='w-6 h-6' />
                </div>
                <div className='mt-20 mb-2'>
                  <span className='font-medium text-sm'>Jonathan Michael</span>
                  <div className='flex items-center gap-4'>
                    <div className='flex gap-1.5'>
                      <span className='h-1.5 w-1.5 block bg-blue-950 rounded-full'></span>
                      <span className='h-1.5 w-1.5 block bg-blue-950 rounded-full'></span>
                      <span className='h-1.5 w-1.5 block bg-blue-950 rounded-full'></span>
                      <span className='h-1.5 w-1.5 block bg-blue-950 rounded-full'></span>
                    </div>
                    <span className='font-semibold text-lg'>3456</span>
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='font-semibold text-sm'>09/22</span>
                  <MasterCard_2 className='w-11 h-11' />
                </div>
                <div className='absolute h-96 w-96 border-2 border-gray-100 top-12 -left-9 -z-10 rounded-full flex items-center justify-center'>
                  <span className='absolute h-72 w-72 border-2 border-gray-100 rounded-full'></span>
                  <span className='absolute h-44 w-44 border-2 border-gray-100 rounded-full'></span>
                </div>
              </div>
              <div className='relative bg-gray-100 p-8 w-72 h-[30rem] pb-0 right-4 top-24 rounded-2xl'>
                <div className='relative top-48 flex flex-col gap-8'>
                  <div className='flex flex-col gap-3'>
                    <div className='flex items-center justify-between text-xs'>
                      <span className='text-gray-500'>Company</span>
                      <span className='flex items-center font-semibold gap-1'>
                        <Apple className='w-6 h-6' />
                        <span>Apple</span>
                      </span>
                    </div>
                    <div className='flex items-center justify-between text-xs'>
                      <span className='text-gray-500'>Order Number</span>
                      <span className='flex items-center font-semibold'>
                        <span>1266201</span>
                      </span>
                    </div>
                    <div className='flex items-center justify-between text-xs'>
                      <span className='text-gray-500'>Product</span>
                      <span className='flex items-center font-semibold'>
                        <span>MackBook Air</span>
                      </span>
                    </div>
                    <div className='flex items-center justify-between text-xs'>
                      <span className='text-gray-500'>VAT(20%)</span>
                      <span className='flex items-center font-semibold'>
                        <span>$100.00</span>
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className='w-60 -ml-2 border-t-2 border-gray-300 border-dashed'></div>
                    <div className='absolute -left-11 top-32 h-8 w-8 block bg-white rounded-full'></div>
                    <div className='absolute -right-11 top-32 h-8 w-8 block bg-white rounded-full'></div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <div>
                      <span className='text-gray-500 text-sm'>You have to Pay</span>
                      <div className='flex gap-2 items-center'>
                        <div className='text-2xl text-blue-950 font-bold'>549<span className='text-lg font-normal'>.99</span></div>
                        <span className='text-gray-500 text-lg'>USD</span>
                      </div>
                    </div>
                    <div>
                      <img src={receipt} alt='' className='w-6' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

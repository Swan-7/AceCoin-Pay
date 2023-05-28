import React, { useState, useRef } from 'react';
import Timer from './timer';
import ThankYou from './Thankyou'
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
  const [formValues, setFormValues] = useState({
    month: '',
    year: '',
    password: '',
    cvv: ''
  })
  const [success, setSuccess] = useState(false);
  const [cardNum, setCardNum] = useState('');
  const [toggleCvv, setToggleCvv] = useState(true);
  const [togglePassword, setTogglePassword] = useState(false);
  const [validCard, setValidCard] = useState(false);
  const [slash, setSlash] = useState('')

  const inputRef = useRef(null);
  const { month, year, cvv, password } = formValues;
  const date = `${month}${slash}${year}`;

  const iconColor = toggleCvv ? 'text-gray-400 fill-current' : 'text-gray-900 fill-current';
  const passColor = togglePassword ? 'text-gray-900 fill-current' : 'text-gray-400 fill-current';
  const lastDigits = cardNum.slice(-4);


  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  const handleCardNum = (e) => {
    const num = e.target.value;
    const formatNum = num
      .replace(/[^\d]/g, '')
      .replace(/(.{4})/g, '$1 - ')
      .replace(/\s-\s$/, '');

    setCardNum(formatNum);

    if (formatNum.length === 25) {
      setValidCard(true);
    } else {
      setValidCard(false);
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: value
    })
    
    if (month) {
      setSlash('/');
    }

    validateInput(name, value);    

  }

  const validateInput = (inputName, inputValue) => {
    switch (inputName) {
      case "month":
        if (inputValue.length > 2) {
          setFormValues({
            ...formValues,
            [inputName]: inputValue.slice(0, 2)
          })
        }
        break;

      case "year":

        let updatedInput = (inputValue.length >= 4) ? inputValue.slice(2, 4) : (inputValue.length > 2 && inputValue.length < 4) ? inputValue.slice(1, 3) : inputValue

        setFormValues({
          ...formValues,
          [inputName]: updatedInput
        })
        break;

      case "cvv":
        if (inputValue.length < 3 || inputValue.length > 4) {
          setFormValues({
            ...formValues,
            [inputName]: inputValue.slice(0, 4)
          })
        }
        break;

      default:
        break;
    }
  }


  const handleSubmit = (event) => {
    event.preventDefault();

    if (cardNum && formValues) {
      setSuccess(true);
    }
  }

  const updateSuccess = (value) => {
    setSuccess(value)
  }



  return (
    <>
      <section>
        <div className='bg absolute -z-10 top-0 hidden lg:block'>
          <img src={formBg} alt='' />
        </div>

        <div className='flex flex-col relative lg:max-w-[67rem] max-w-xs lg:my-24 my-10 mx-auto lg:p-12 p-0.5 lg:pt-20 bg-white text-blue-950'>
          {!success && <div>
            <header className='flex flex-col lg:flex-row lg:items-center lg:w-[38.7rem] lg:justify-between gap-6 lg:gap-0 mb-11'>
              <div className='flex items-center gap-0.5'>
                <span className='flex items-center justify-center transform -rotate-[20deg] h-11 w-11 block bg-blue-600 rounded-full'></span>
                <h1 className='text-xl font-semibold ml-2.5'>AceCoin<span className='font-light'>Pay</span></h1>
              </div>
              <div className='font-medium text-xl flex gap-x-0.5'>
                <Timer />
              </div>
            </header>
            <div className='flex flex-col lg:grid lg:grid-cols-12 lg:gap-20'>
              <div className='lg:col-span-8 m-1'>

                <section>
                  <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                      <div className='flex items-center justify-between mb-4'>
                        <div>
                          <label htmlFor='cardNumber' className='label'>Card Number</label>
                          <p className='label-text'>Enter the 16-digit card number on the card</p>
                        </div>
                        <button type='button' onClick={handleClick} className='flex lg:gap-3 gap-1 items-center text-blue-600'>
                          <EditIcon className='w-4 h-4 text-blue-600 fill-current' />
                          <span className='font-medium text-sm'>Edit</span>
                        </button>
                      </div>
                      <div className='flex relative'>
                        <MasterCard className='lg:w-10 lg:h-10 w-8 h-8 absolute left-2 lg:left-4 top-3 lg:top-[0.6rem]' />
                        <input
                          name='cardNumber'
                          id='cardNumber'
                          className='input p-4 pl-11 lg:pl-[4.4rem] text-sm lg:text-base'
                          type='text'
                          placeholder='2412   -    7512   -   3412   -   3456'
                          required
                          ref={inputRef}
                          value={cardNum}
                          onChange={handleCardNum}
                          minLength={25}
                          maxLength={25} />
                        {validCard && <Verify className='w-3.5 h-3.5 lg:h-6 lg:w-6 absolute right-4 top-5 lg:top-[1.1rem]' />}
                      </div>
                    </div>
                    <div className='mb-4'>
                      <div className='flex flex-col lg:flex-row justify-between'>
                        <div className='mb-4 lg:mb-0'>
                          <label htmlFor='cvvNumber' className='label'>CVV Number</label>
                          <p className='label-text'>Enter the 3 or 4 digit number on the card</p>
                        </div>
                        <div className='flex relative'>
                          <input
                            name='cvv'
                            id='cvv'
                            className='input input-2 p-4 lg:w-[21rem] lg:pl-[9.5rem]'
                            type={toggleCvv ? 'number' : 'password'}
                            placeholder='327'
                            required
                            value={cvv}
                            onChange={handleInputChange}
                            minLength={3}
                            maxLength={4} />
                          <button type='button' onClick={() => setToggleCvv(!toggleCvv)} className='w-6 h-6 absolute right-4 top-[1.1rem]'>
                            <Grid className={iconColor} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='mb-4'>
                      <div className='flex flex-col lg:flex-row justify-between'>
                        <div className='mb-4 lg:mb-0'>
                          <label htmlFor='date' className='label'>Expiry Date</label>
                          <p className='label-text'>Enter the expiration date of the card</p>
                        </div>
                        <div className='flex lg:w-[21rem] space-x-1'>
                          <input
                            name='month'
                            id='month'
                            className='flex-1 lg:pl-14 py-6 lg:px-5 px-10 h-8 input input-2'
                            type='number'
                            value={month}
                            onChange={handleInputChange}
                            placeholder='09'
                            required
                            min={1}
                            max={12} />
                          <span className='flex items-center px-3.5 text-blue-950'>/</span>
                          <input
                            name='year'
                            id='year'
                            className='flex-1 lg:pl-16 py-6 lg:px-3.5 px-10 h-8 input input-2'
                            type='number'
                            value={year}
                            onChange={handleInputChange}
                            placeholder='22'
                            required />
                        </div>
                      </div>
                    </div>
                    <div className='mb-12'>
                      <div className='flex  flex-col lg:flex-row justify-between'>
                        <div className='mb-4 lg:mb-0'>
                          <label htmlFor='password' className='label'>Password</label>
                          <p className='label-text'>Enter your Dynamic password</p>
                        </div>
                        <div className='flex relative'>
                          <input
                            name='password'
                            id='password'
                            className='p-4 lg:w-[21rem] input input-2'
                            type={togglePassword ? 'text' : 'password'}
                            value={password}
                            onChange={handleInputChange}
                            placeholder='* * * * * * * *'
                            required />
                          <button type='button' onClick={() => setTogglePassword(!togglePassword)} className='w-6 h-6 absolute right-4 top-[1.1rem]'>
                            <Grid className={passColor} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button type='submit' className='btn absolute translate-x-1/2'>Pay Now</button>
                  </form>
                </section>
              </div>

              <div className='lg:col-span-4'>
                <div className='mb-52 lg:mb-0'>
                  <span className='absolute right-40 lg:right-48 lg:top-[4.7rem] top-[50.6rem]  h-6 w-[3.9rem] block bg-blue-600 rounded-sm transform translate-x-1/2'></span>
                  <div className='card absolute z-50 lg:right-24 lg:top-20 right-14 shadow px-6 py-10 backdrop-blur overflow-hidden rounded-2xl h-72 w-52 mx-auto'>
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
                        <input
                          type="text"
                          value={lastDigits}
                          placeholder='3456'
                          readOnly
                          className="focus:outline-none w-16 border-none font-semibold text-lg p-0 bg-transparent placeholder-blue-950"
                        />
                      </div>
                    </div>
                    <div className='flex justify-between items-center'>
                      <input
                          type="text"
                          value={date}
                          placeholder='09/22'
                          readOnly
                          className="focus:outline-none w-16 border-none font-semibold text-lg p-0 bg-transparent placeholder-blue-950"
                        />
                      <MasterCard_2 className='w-11 h-11' />
                    </div>
                    <div className='absolute h-96 w-96 border-2 border-gray-100 top-12 -left-9 -z-10 rounded-full flex items-center justify-center'>
                      <span className='absolute h-72 w-72 border-2 border-gray-100 rounded-full'></span>
                      <span className='absolute h-44 w-44 border-2 border-gray-100 rounded-full'></span>
                    </div>
                  </div>
                  <div className='relative bg-gray-100 p-8 w-72 h-[30rem] pb-0 lg:right-4 lg:top-0 top-24 rounded-2xl mx-auto lg:mx-0'>
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
          </div>}

          {success && <ThankYou onSuccess={updateSuccess} />}
        </div>
      </section>
    </>
  )
}




import React from 'react'
import styles from '../style'
import { discount,robot } from '../assets'
import GetStarted from "./GetStarted"

const Hero = () => 
 (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} `}>
    <div className={`flex-1${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 ' >
        <img src= {discount} alt= "discount" className='w-[32px] h-[32px]' />
        <p className= {`${styles.paragraph} ml-2`}>
          <span className='text-white'> 20% </span>
          DISCOUNT FOR {""}
          <span className="text-white"> 1 MONTH</span> {""}
              ACCOUNT
        </p>
      </div>
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='text-white flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]'>
          The Next<br className='sm:block hidden '/>{""}
          <span className='text-gradient'> Generation
 
          </span> {""}
          
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
        <GetStarted/>
        </div>
      </div>
      <h1 className='text-white  font-poppins w-full font-semibold ss:text-[58px] text-[52px] ss:leading-[100px] leading-[75px]'>
        Payment Method
      </h1 >
      <p className= {`${styles.paragraph} max-w-[470px] mt-10`}>
      With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
      </p>
    </div>
    <div className= {`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src= {robot} alt= "robot" className='w-[100%] h-[100%] z-[5]' />
     <div className=' absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
     <div className=' absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient'/>
     <div className=' absolute z-[0] w-[40%] h-[35%] top-0 gradient__pink'/>
    </div>
   

    <div className={`${styles.flexStart} ss:hidden`}>
      <GetStarted/>
      </div>
    </section>
  )


export default Hero
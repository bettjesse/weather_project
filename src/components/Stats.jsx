import React from 'react'
import styles from '../style'
import { stats } from '../constants'

const Stats = () => 
 (
    <section className= {`${styles.flexCenter}`}>
    {stats.map((stats)=>(
        <div key={stats.key} className = {`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className=' font-poppins font-semibold  xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stats.value}</h4>
          <p className='font-poppins font-  xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase'>{stats.title}</p>
          

        </div>

    )

    )}
    </section>
  )


export default Stats
import React from 'react'
import logo  from "../assets/Images/sabilogow.png";
import money  from "../assets/Images/sabimoney.png";
import Button from '../Components/sabiButton'

const LandingPage = () => {
  return (
    <>
        <div className=" grid md:grid-cols-1 lg:grid-cols-2 h-[100vh]">
            <div className=' bg-[#451253] rounded-b-[50%] lg:rounded-b-none md:rounded-b-none flex items-center justify-center flex-col gap-4 sm:rounded-b-[50%]'>
              <div>
                <img src={logo} alt="" />
              </div>
              <div>
                <img src={money} alt="" />
              </div>
            </div>
            <div className=' flex items-center justify-center flex-col gap-2 bg-slate-100'>
              <div className=' text-2xl font-normal'>Bank of Stability</div>
              <p className='text-center'>Lorem ipsum dolor sit amet consectetur. Eleifend quis at tortor felis suspendisse urna. Viverra mauris </p>
              <Button/>
            </div>
        </div>
    </>
  )
}

export default LandingPage
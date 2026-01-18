import React from 'react'
import BannerImg from '../../public/Banner.png'
function Banner() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
        <div className='order-2 md:order-1 w-full md:w-1/2 mt-32 md:mt-32'>
          <div className='space-y-12'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold '>Hello, welcomes here to learn something <span className='text-pink-500'>new everyday!!!!</span></h1>
            <p text-xl font-semibold>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam sunt minus, inventore deserunt animi consequuntur rerum veniam fugit tenetur nihil consequatur, quisquam possimus assumenda magnam cumque voluptas deleniti totam sint.
            </p>
          </div>
          <div className="join">
            <div>
              <label className="input validator join-item w-120">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" placeholder="mail@site.com" required />
              </label>
              <div className="validator-hint hidden">Enter valid email address</div>
            </div>

          </div>
         <button className="btn mt-6 btn-secondary">Email</button>
        </div>
         
        <div className='order-1 w-full md:w-1/2'>
        <img src={BannerImg} alt="" className='w-200 h-100' />
        </div>
      </div>

    </>
  )
}

export default Banner
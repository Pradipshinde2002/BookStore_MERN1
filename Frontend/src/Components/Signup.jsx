import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form';



function Signup() {
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit=(data)=>console.log(data)


  return (
    <>
    <div className='flex h-screen items-center justify-center '>
         <div className='w-[400px] box-shadow border-[2px] p-5'>
          <div >
            <form method='dialog 'onSubmit={handleSubmit(onSubmit)}>
             
              <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-5 top-2 ">✕</Link>
            
            <h3 className="font-bold text-lg">Login</h3>

            
            {/* name input */}
            <div className='mt-4 space-y-2'>
              <span>Name</span><br></br>

              <input type='name' placeholder='Enter your name' className='w-80 px-3 border-rounded-md py-1 outline-none'  {...register("name",{required:true})}/>
              
              <br></br>
              {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            {/* email input */}
            <div className='mt-4 space-y-2'>
              <span>Email</span><br></br>

              <input type='email' placeholder='Enter your email' className='w-80 px-3 border-rounded-md py-1 outline-none'   {...register("email",{required:true})}/>
            
              <br></br>
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>


            {/* password input */}
            <div className='mt-4 space-y-2'>
              <span>Password</span><br></br>

              <input type='password' placeholder='Enter your password' className='w-80 px-3 border-rounded-md py-1 outline-none'  {...register("password",{required:true})}/>
             
              <br></br>
              {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            {/* login button and text */}
            <div className='flex justify-around mt-4'>
              <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 text-md'>Signup</button>
              <span>Already registered? 
                <button className='underline text-blue-500 cursor-pointer' onClick={()=>{
                  document.getElementById("my_modal_3").showModal()
                }}>
               Login</button>
               
               </span>
             
            </div>
            </form>
            <Login />
          </div>
        </div>
    </div>
    </>
  )
}

export default Signup
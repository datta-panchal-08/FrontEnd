import React from 'react'
import {useForm} from 'react-hook-form'

const Form = ({handleFormSubmitData}) => {
    const {register,handleSubmit,reset} = useForm();
    const handleFormSubmit = (data)=>{
        handleFormSubmitData(data);
        reset();
    }
  return (
    <div className='flex justify-center mt-10'>
        
        <form onSubmit={handleSubmit(handleFormSubmit)} className='flex gap-10'>
            <input {...register('name')}  className='rounde-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='name' />
            <input {...register('email')} className='rounde-md px-2 py-1 text-base font-semibold outline-none' type="email" placeholder='email' />
            <input {...register('image')} className='rounde-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='Image Url'/>
             <input type="submit" className='bg-blue-500 font-semibold text-white px-4 py-1' />
        </form>

        
    </div>
  )
}

export default Form
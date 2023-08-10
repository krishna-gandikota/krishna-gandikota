import React, { useState } from 'react'
import Image from 'next/image';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Message from '../Message';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';


const Chatbox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [changeLayout, setChangeLayout] = useState(false)

    const defaultValues = {
        name: '',
        message: '',
      };
    const validationSchema:any = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        message: Yup.string().required('Message is required'),
      });
      const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues,
      }); 
     
    const toggleChatbox = () => {
        setIsOpen(!isOpen);
        setChangeLayout(!changeLayout)
    };

    const onSubmit = (data:any) => {
        console.log(data);
        setChangeLayout(true);
    };
    return (
        <div>
            {isOpen === true ?
                <div className='flex justify-end pt-[7rem] pr-3 absolute  right-0 bottom-0 '>
                    <div className="block rounded-lg  border border-solid bg-white  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                        <div className="flex justify-between bg-[#3061AF]">
                            <h1 className=' flex pl-[3rem] text-center text-white bg-[#3061AF] font-bold font-poppins py-2 '>Vision IAS Help Desk (Live Chat) </h1>
                            <Image src={'/images/minas_icon.png'} alt={'minasicon'} width={25} height={25} className='!text-white' onClick={toggleChatbox} />
                        </div>
                        {changeLayout ? <>
                        <Message />
                        </> : <>
                        <p className='p-4 text-[#5a7184] pb-0 pt-8'>Greeting from Vision IAS Help Desk !</p>
                        <p className='p-4 text-[#5a7184] pt-0'>How may i help you!</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-md-6 mb-3 p-4">
                            <label className='font-bold text-[#404650]'>Introduce yourself *</label>
                            <input type="text"
                            placeholder='Name'
                            className='py-2 min-w-full pl-3 border border-solid border-gray-300 rounded'
                            {...register('name')}
                            />
                            {errors.name && (
                              <div className="text-red-500">{errors.name.message}</div>
                            )}
                        </div>
                        <div className="mt-[-2rem]">
                            <main className=' flex text-[#5a7184] text-[15px] p-4'>or sign in with<FaFacebookF className='min-h-[18px] text-[#3B5998] dark:text-[#EBEBEB]' /><FcGoogle className='min-h-[18px] w-[18px]  ' /></main>
                        </div>
                        <div className="col-md-6 mb-3 p-4 pt-0">
                            <label className='font-bold text-[#404650]'>Message *</label>
                            <textarea
                             className='py-6 min-w-full pl-3  border border-solid border-gray-300 rounded'
                             {...register('message')}
                             />
                             {errors.message && (
                               <div className="text-red-500">{errors.message.message}</div>
                             )}
                            
                        </div>
                        <hr className='mt-[6rem]' />
                        {changeLayout ? <></> : 
                  <div className='text-center mt-8 mb-4'>
                      <button
                        className="bg-[#3061AF] rounded text-[15px] font-bold text-white py-2 px-[6.5rem]"
                    onClick={handleSubmit(onSubmit)}
                    >
                        Start chatting
                    </button>
                  </div>
                    }
                    </form>
                        </>}
                    </div>
                </div>
                : ""}
            <div className='flex justify-end mr-3 mt-[44rem]' onClick={() => setIsOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chat-right-text" viewBox="0 0 16 16">
                    <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                    <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div>
        </div>
    )
}
export default Chatbox;


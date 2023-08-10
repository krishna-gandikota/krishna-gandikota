import { Button, Modal, Fade } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
import ModalCloseButton from "../ModalCloseButton";
import Image from 'next/image';

function PrayatnaPopup({ show, handleClose }:any) {
    

    return (
        <div>
            <Modal show={show} onHide={handleClose} backdrop="static" dialogClassName='sm:!fixed sm:!bottom-0 sm:!left-0 sm:!right-0 sm:!top-0' contentClassName='sm:!rounded-t-xl'>
                <div className="mb-[10px] p-6 flex justify-between">
                    <h1 className='font-poppins font-medium text-[20px] leading-[30px] text-[#242424]'>Share  </h1>
                    <ModalCloseButton handleClose={handleClose} />
                </div>
                <Modal.Body>
                    <div className='flex justify-around'>
                        <p className='flex flex-col justify-center items-center'>
                            <div className='w-[50px] h-[50px] bg-[#25D366] rounded-[50%] flex items-center justify-center'><img src={`/images/whatsapp.svg`} alt="social" className='md:w-[100%] sm:w-[100%]' /></div>
                            <span className='font-sans font-medium text-[12px] leading-[24px] text-[#183B56]'>Whatsapp</span>
                        </p>
                        <p className='flex flex-col justify-center items-center'>
                            <div className='w-[50px] h-[50px] bg-[#3B5998] rounded-[50%] flex items-center justify-center'> <img src={`/images/facebook.svg`} alt="social" className='md:w-[100%] sm:w-[100%]' /></div>
                            <span className='font-sans font-medium text-[12px] leading-[24px] text-[#183B56]'>Facebook</span>
                        </p>
                        <p className='flex flex-col justify-center items-center'>

                            <div className='w-[50px] h-[50px] bg-[#CFD8DC] rounded-[50%] flex items-center justify-center'> <img src={`/images/email.svg`} alt="social" className='md:w-[100%] sm:w-[100%]' /></div>
                            <span className='font-sans font-medium text-[12px] leading-[24px] text-[#183B56]'>Email</span>
                        </p>
                        <p className='flex flex-col justify-center items-center'>
                            <div className='w-[50px] h-[50px] bg-[#2FA3D9] rounded-[50%] flex items-center justify-center'> <img src={`/images/telegram.svg`} alt="social" className='md:w-[100%] sm:w-[100%]' /></div>
                            <span className='font-sans font-medium text-[12px] leading-[24px] text-[#183B56]'>Telegram</span>
                        </p>
                    </div>
                    <h2 className='p-2 font-poppins font-medium text-[14px] leading-[30px] text-[#242424] mb-[20px]'>Page Link</h2>
                    <div className='min-h-[44px] w-full bg-[#F4F6FC] rounded-[4px] sm:text-xs text-[#686E70] flex justify-between items-center px-[10px] dark:bg-[#373839] dark:text-[#ffff]'>
                     <p className="pt-3 font-sans text-[14px] leading-[18px] font-[500] ">http://visionias.in/resources/...</p>
                    <Image src={"/images/checkmark.svg"} alt=" checkmarksocial" width={15} height={15} className='text-[0.5rem]' />
                    </div>
                </Modal.Body>
            </Modal>
           
        </div>

    )
}

export default PrayatnaPopup;
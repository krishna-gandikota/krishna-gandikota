import React, { useState } from "react";
import Image from "next/image";
import ModalCloseButton from "../ModalCloseButton";
import { Modal } from "react-bootstrap";
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const AdmitCard = ({ show, onClose }: any) => {

    const defaultValues = {
        email: '',
        number: ''
    }
    const validationSchema: any = Yup.object().shape({
        email: Yup.string().email('Email is invalid')
            .required('Email Id is required')
            .min(5)
            .max(150)
            .matches(/^[a-zA-Z0-9+_.-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,4}$/, 'Invalid email'),
        number: Yup.string().required('Mobile Number required')
            .min(10, 'Invalid Number')
            .max(10, 'Please Enter 10 Digits')
            .matches(/^[1-9]{1}[0-9]*$/i, 'Invalid Number'),
    });
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues,
    });
    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
        <div>
            <Modal
                show={show}
                onHide={onClose}
                backdrop="static"
                centered={true}
                dialogClassName=" md:!p-[50px] sm:!min-h-0 !max-h-[90vh] sm:!w-[100%] sm:!right-0  lg:!max-w-[40vw] md:p-[20px] "
            >
                <div className=" p-[1rem]">

                    <Modal.Body>
                        <div className="flex justify-end items-end">
                            <ModalCloseButton handleClose={onClose} />
                        </div>
                        <h1 className="font-poppins font-medium text-[24px] leading-[30px] tracking-[0.2px] text-[#183B56]">ADMIT CARD</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-2 mt-4">
                                <label className="block text-[#5A7184]  text-[12px] md:text-[16px] font-semibold mb-2">Email ID*</label>
                                <input type="email" placeholder="Enter Email ID" className="w-full px-3 py-2 text-[#959EAD] font-sans md:text-[16px] text-[12px] leading-[21.79px] font-[600] rounded-[8px] h-[56px] outline-none  border"
                                   {...register('email')}
                                />
                                {errors.email && (
                                    <div className="text-red-500">{errors.email.message}</div>
                                )}
                            </div >
                            <div className="mb-4">
                            <label className="block text-[#5A7184]  text-[12px] md:text-[16px] font-semibold mb-2">Mobile No*</label>
                            <div className="flex items-center rounded-[8px] h-[56px] outline-none border">
                                <span className="pl-3 pr-1 text-[#959EAD] font-sans md:text-[16px] text-[12px] leading-[21.79px] font-[600]">+91</span>
                                <input type="number" placeholder="Enter mobile number" className="w-full  py-2 bg-transparent text-[#959EAD] font-sans md:text-[16px] text-[12px] leading-[21.79px] font-[600] border-none focus:ring-0 focus:outline-none"
                                    {...register('number')}
                                />
                              
                            </div>
                            {errors.number && (
                                    <div className="text-red-500">{errors.number?.message}</div>
                                )}
                            </div>
                            <button onClick={handleSubmit(onSubmit)} className="border border-[#3362CC]  hover:text-white  hover:bg-[#3362CC] flex justify-center items-center h-[56px] w-full text-[#3362CC] font-bold py-2 px-4 rounded-[8px]"><span className="text-[18px] sm:text-[16px]">Download</span></button>
                        </form>
                    </Modal.Body>
                </div>
            </Modal>


        </div>
    );
};
export default AdmitCard;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image'
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
const FormValidation = () => {
  const [showPassword, setShowPassword] = useState(false);

  const defaultValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    file: '',
  };
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
    .required('First name is required')
      .min(3)
      .max(50),
    lastName: Yup.string()
    .required('Last name is required')
    .min(3)
    .max(50),
    phoneNumber: Yup.string()
    .required('Mobile number is required')
      .min(10, 'Invalid Number')
      .max(10, 'Please Enter 10 Digits ')
      .matches(/^[1-9]{1}[0-9]*$/i, 'Enter correct order Number'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email Id is required')
      .min(5)
      .max(254)
      .matches(/^[a-zA-Z0-9+_.-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,4}$/, 'Invalid email'), 
    password: Yup.string().required('Please enter password')
     .min(6, `* Password at least 6 characters\n`)
     .max(16, `* Password is too long - should be 16 chars maximum\n`)
     .matches(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-~`/\\\]\[\:;"'<,>.?}\{-]+([\s]+[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-~`/\\\]\[\:;"'<,>.?}\{-]+)*$/i, 
     `* Password should not contain Emoji\n* Space not allowed in start/end.`),
    file: Yup.mixed()
    .required('Please upload file')
    .test("type", "Only the following formats are accepted:  .pdf ", (value:any) => {
      return value && (
          value[0].type === 'application/pdf'  
      )
    })
    .test('fileSize', 'File size should be 10KB and 500KB', (value:any) => {
      
      if (!value) return true; 
      return value[0].size >= 10000 && value[0].size <= 500000;
    }),

  });

  const onSubmit = (values:any) => {
    console.log(values);
    return true;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });
  const handleReset = () => {
    reset(); 
  };
  return (
    <div className="flex justify-center">
      <div className="block rounded-lg  border-solid bg-green-100 border-[2px] p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="col mb-4">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter name"
              className="py-2 min-w-full pl-3"
              {...register('firstName')}
            />
            {errors.firstName && (
              <div className="text-red-500">{errors.firstName.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last name"
              className="py-2 min-w-full pl-3"
              {...register('lastName')}
            />
            {errors.lastName && (
              <div className="text-red-500">{errors.lastName.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber">Phone number</label>
            <input
              type="number"
              id="phoneNumber"
              placeholder="Phone number"
              className="py-2 min-w-full pl-3"
              {...register('phoneNumber')}
            />
            {errors.phoneNumber && (
              <div className="text-red-500">{errors.phoneNumber.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email">Enter Email Id</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email id"
              className="py-2 min-w-full pl-3"
              {...register('email')}
            />
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <img onClick={() => setShowPassword(!showPassword)} className='absolute ml-[27rem] mt-[0.7rem]' src={showPassword ? '/images/password.svg' : '/images/hidepassword.svg'} alt='password' width='18px' height='18px' />
            <input
              type={showPassword ? "text" : "password"} 
              placeholder="Enter password"
              className="py-2 min-w-full pl-3"
              {...register('password')}
            />
            {errors.password && (
              <div className="text-red-500">{errors.password.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="file">Upload your file</label>
            <input
              type="file"
              id="file"
              placeholder="upload file"
              className="py-2 min-w-full pl-3 bg-white"
              {...register('file')}
            />
            {errors.file && (
              <div className="text-red-500">{errors.file.message}</div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="submit"
              className="inline-block rounded w-full bg-[#3B71CA] hover:bg-sky-700 text-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal"
            >
              Submit
            </button>
            <button
              type="reset"
              className="rounded w-full bg-[#3B71CA] hover:bg-sky-700 text-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormValidation;

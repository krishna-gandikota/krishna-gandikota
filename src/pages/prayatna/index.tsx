import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css'
import PrayatnaPopup from '../PrayatnaPopup';
import AdmitCard from '../AdmitCard';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


const Prayatna = () => {
    const [open, setOpen] = useState(false);
    const [popup, setPopup] = useState<any>(false);

    const handleClose = () => {
        setOpen(!open);

    }

    const closePopup = () => {
        setPopup(!popup)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    }

    const validationRules = {
        test: {
          required: 'Please select an option', 
        },
      };
    const defaultValues = {
        name:'',
        number:'',
        email:'',
        test:'',
        
    }

    const validationSchema:any = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        number: Yup.string().required('Mobile Number required')
        .min(10, 'Invalid Number')
        .matches(/^[1-9]{1}[0-9]*$/i, 'Invalid Number'),
        email: Yup.string().email('Email is invalid')
        .required('Email Id is required')
        .min(5)
        .max(150),
        test: Yup.string().required('Test is requied'),
      });
      const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues,
      }); 
      const onSubmit = (data:any) => {
        console.log(data);
    };
    return (
        <section>

            <div className='relative'>
                <div className="flex justify-between min-w-fit bg-[#e0eae6] flex-col lg:flex-row h-auto min-h-[530px] md:min-h-[865px]">
                    <div className="container flex justify-between min-w-fit flex-col lg:flex-row h-auto min-h-[530px] md:min-h-[700px] sm:pt-5">
                        <div className="lg:flex md:flex-row xl:gap-52 lg:gap-0 sm:flex-row justify-center lg:items-center ">
                            <div className='p-4'>
                                <h1 className="text-[#183B56]  font-sans text-[36px] md:text-[60px] lg:text-[100px] font-bold leading-[30px] md:leading-[60px]">Prayatna</h1>
                                <h4 className="text-[#183B56] font-sans text-[20px] font-semibold md:text-[30px] lg:text-[36px] pt-[18px] leading-[50px] md:leading-[81px] tracking-[0.2px]">A VisionIAS CSR Initiative</h4>
                                <p className="text-[#183B56] w-[315] font-sans md:w-[522px] text-[12px] lg:w-[590px] md:text-[18px] lg:text-[21px] leading-[36px] font-medium tracking-[0.2px]">
                                    <span className="text-[#36B37E] font-bold">VisionIAS</span> , in Collaboration with the District Magistrate of Betul, Madhya Pradesh.
                                </p>
                                <button onClick={scrollToBottom} className="pt-8 w-[58px] lg:block outline-none hidden">
                                    <Image src={"/images/Button_down.svg"} width={56} height={56} alt='buttondown' className='lg:w-[89%] md:w-[77%] w-[57%]' />
                                </button>
                                <div>
                                    <button onClick={scrollToBottom} className=" hidden md:block lg:hidden  outline-none">
                                        <Image src={"/images/Button_down.svg"} width={56} height={56} alt='buttondown' className='lg:w-[89%] md:w-[77%] w-[57%]' />
                                    </button>
                                  
                                </div>
                                <div className=' absolute right-0 top-[27px] '>
                                    <button onClick={scrollToBottom} className=" lg:hidden md:hidden block outline-none">
                                        <Image src={"/images/Button_down.svg"} width={56} height={56} alt='buttondown' className='lg:w-[89%] md:w-[77%] w-[57%]' />
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-center flex-row md:flex-col lg:flex-col pt-[70px]  md:pt-0" >
                                <div className="bg-white  md:mt-[30px] w-full md:w-full lg:w-[368px] xl:w-[456px] rounded-[8px] p-6 shadow-lg">
                                    <h3 className="text-[#183B56]  text-[18px] md:text-[24px] font-bold leading-[32px] pb-[20px] tracking-[0.2px]">Prayatna Registration</h3>
                                     <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-2">
                                            <label className="block text-[#5A7184] font-sans text-[12px] md:text-[16px] font-semibold mb-2">Your name*</label>
                                            <input
                                                type="text"
                                                placeholder="John"
                                                className="w-full px-3 py-2  rounded-[8px] h-[56px] text-[#959EAD] font-sans md:text-[16px] text-[12px] leading-[21.79px] font-[600] outline-none border"
                                                {...register('name')}
                                                />
                                                {errors.name && (
                                                  <div className="text-red-500">{errors.name.message}</div>
                                                )}                                        
                                                 </div>

                                        <div className="row-md-6 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label text-[#5A7184] font-sans text-[12px] md:text-[16px]  leading-[21.79px] font-[600]">
                                                    Mobile No*
                                                </label>
                                                <input
                                                    type="number"
                                                    placeholder="+91"
                                                    className="form-control text-[#959EAD] font-sans  md:text-[16px] text-[12px] leading-[21.79px] font-[600] h-[56px] "
                                                    {...register('number')}
                                                    />
                                                    {errors.number && (
                                                      <div className="text-red-500">{errors.number.message}</div>
                                                    )} 
                                                 </div>
                                        </div>
                                        <div className="row-md-6 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label text-[#5A7184] font-sans text-[12px] md:text-[16px]  leading-[21.79px] font-[600]">
                                                    Email ID*
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder="Email id"
                                                    className="form-control text-[#959EAD] font-sans text-[12px] md:text-[16px] leading-[21.79px] font-[600]  h-[56px] "
                                                    minLength={5}
                                                    maxLength={150}
                                                    {...register('email')}
                                                    />
                                                    {errors.email && (
                                                      <div className="text-red-500">{errors.email.message}</div>
                                                    )} 
                                                 </div>
                                        </div>
                                        <div className="row-md-6 mb-4">
                                            <label className="form-label text-[#5A7184] font-sans text-[12px] md:text-[16px]  leading-[21.79px] font-[600]">
                                                Test Centers*
                                            </label>
                                            <div className="relative">
                                                <select {...register('test', validationRules.test)} className="block appearance-none w-full border rounded-md border-gray-200 text-[#959EAD] font-sans xl:text-[16px] sm:text-[12px] leading-[21.79px] font-[600] py-3 px-4 pr-8 focus:outline-none bg-white ">
                                                    <option selected>Select Test Centers</option>
                                                    <option>one</option>
                                                    <option>two</option>
                                                    <option>three</option>
                                                    </select>
                                                  {errors.test && (
                                                    <div className="text-red-500">{errors.test.message}</div>
                                            )} 
                                            
                                             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                </div>
                                            </div>
                                            <p className='text-[#5A7184] font-sans text-[12px]  leading-[20px] font-[600] mt-1'>Note: No seats are left in the following center:</p>
                                            <p className='text-[#5A7184] font-sans text-[12px] leading-[20px] font-[600] mt-[-7px]'>Govt ex hss Alirajpur</p>
                                            <div onSubmit={handleSubmit(onSubmit)} className="row-md-6 bg-[#3362CC] h-[56px] rounded-md mt-4 flex justify-between px-6">
                                                <button  className='text-white font-sans text-[18px] leading-[24.55px] font-[700]'>APPLY</button>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="51px" fill="currentColor" className="bi bi-arrow-right-short text-white" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className=" absolute w-fit sm:top-[240px] md:top-[132px] lg:top-[640px] right-[20px]  lg:right-[37%]" >
                                    <Image src={"/images/man_help.svg"} width={35} height={30} alt='circle_images' className="lg:w-[100%] lg:h-[100%] md:w-[68%] w-[25%] ml-auto mt-[-50px]  flex justify-center items-center md:hidden" />
                                    <Image src={"/images/man_help.svg"} width={35} height={30} alt='circle_images' className="lg:w-[100%] lg:h-[100%] md:w-[68%] w-[25%]  hidden md:flex md:ml-auto md:mt-10" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' container mx-auto mt-12 '>
                <div className='flex lg:justify-end justify-center md:justify-center' onClick={() => setOpen(true)}>
                    <span className="text-[#5A7184] font-sans text-[16px] leading-[21.79px] font-[600] p-1 ">Click to share</span>
                    <label className="relative inline-flex items-center cursor-pointer" >
                        <input type="checkbox" className="sr-only peer" />

                        <div className="w-16 h-8 bg-white shadow-xl border peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-[#868EAF] after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all"></div>
                        <span className="ml-3 text-[#5A7184] font-sans text-[16px] leading-[21.79px] font-[600]">Prayatna</span>
                    </label>

                </div>
                <div className='flex flex-col pt-10'>
                    <h1 className="  text-[#183B56] font-poppins text-[20px] md:text-[26px] lg:text-[36px]  font-[700] tracking-[0.2px] mb-4 mt-10 ">What is Prayatna ?</h1>
                    <p className="pt-3 sm:pt-5 text-[12px] md:text-[14px] lg:text-[18px] text-[#3D3D3D] leading-[22px] md:leading-[32px]">Prayatna is a CSR Initiative of Vision IAS, in Collaboration with the District Magistrate of Betul, Madhya Pradesh. Through this project, we strive to reach the remotest areas of the countries to search and identify talented minds, who are currently not able to reach the big cities and institutions of excellence, due to the lack of resources or other socio-economic constraints. We will be providing these candidates with training, individual attention and one-to-one mentorship.</p>
                </div>

                <div className="flex flex-col mt-[40px] sm:mt-[50px]">
                    <p className="text-[#183B56] text-[20px] md:text-[26px] lg:text-[36px] font-bold tracking-[0.2px] leading-[52px]">Admit Card</p>
                    <p className="pt-3 sm:pt-5 text-[12px] md:text-[14px] lg:text-[18px] text-[#3D3D3D] leading-[22px] md:leading-[32px]">If you have already registered for Prayatna. Please click on the Download Admit Card Button and fill the required fields to get your admit card.</p>
                    <div className="flex flex-col sm:flex-row gap-0 sm:gap-10">
                        <button onClick={() => setPopup(true)} className=" bg-[#3362CC] mt-[30px] md:text-[16px] flex justify-between items-center h-[56px]  sm:w-[330px] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-[8px] outline-none ">
                            <span className="md:ml-6 sm:ml-0 sm:text-[14px] uppercase">Download Admit Card</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="51px" fill="currentColor" className="bi bi-arrow-right-short text-white" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>

                        </button>
                    </div>
                </div>
                <div className='flex flex-col mt-[40px] lg:mt-[50px] '>
                    <h1 className="  text-[#183B56] font-poppins leading-[52px] text-[20px] md:text-[26px] lg:text-[36px]  tracking-[0.2px] font-[700] mb-4">Selection Procedure</h1>
                    <p className=" text-[12px] md:text-[14px] lg:text-[18px] text-[#3D3D3D] leading-[22px] md:leading-[32px] ">The selection process will consist of two stages. The first stage will include an objective test. After that, an interview (called the personality test) will be held by the board.</p>
                </div>

                <div className='sm:flex lg:flex  md:flex-row justify-between gap-8'>
                    <div className='flex flex-col mt-[40px] flex-[.6] lg:mt-[70px] lg:w-[80%] md:w-[100%]'>
                        <h1 className="text-[#3C4852] font-poppins text-[20px] md:text-[26px] lg:text-[36px] leading-[52px] font-[700] tracking-[0.2px] mb-4">Stage l : Screening Test</h1>
                        <h3 className="text-[#3C4852] font-poppins text-[16px] md:text-[16px] lg:text-[30px] leading-[52px] font-[600] tracking-[0.2px] mb-8 ">General Knowledge Aptitude Test</h3>
                        <p className="pt-3 md:pt-0 lg:pt-5 text-[12px] md:text-[14px] lg:text-[18px] w-full text-[#3D3D3D] leading-[22px] md:leading-[32px]">The test will be based on the same knowledge required for the preliminary stage of the civil services examination. The syllabus for both the papers of UPSC Prelims- General studies and CSAT- has been amalgamated into one test paper.</p>
                    </div>
                    <div className='flex flex-col flex-[.4] mt-5 md:mt-[40px] lg:mt-[70px] gap-3'>
                        <div className=" bg-[#f3f4f6] w-full flex flex-col rounded-[8px] p-[2rem] ">
                            <div className='flex '>
                                <div className='circle bg-[#36B37E] w-[18px] md:w-[16px] h-[18px] md:h-[16px] rounded-full'></div>
                                <span className='ml-[15px] mt-[-4px] font-bold text-[#183B56] dark:text-[#e7ebee] text-[16px] lg:text-[18px] leading-[20px] tracking-[0.225px]'>Duration of the paper</span>
                            </div>
                            <span className="pt-[10px] ml-[5px] leading-[28px] text-[12px] md:text-[14px] lg:text-[16px] text-[#183B56] dark:text-[#d0d7dd] ">2 hours, stay focused, and give your best effort to excel in the test.</span>

                        </div>
                        <div className=" bg-[#f3f4f6] w-full flex flex-col rounded-[8px] p-[2rem] ">
                            <div className='flex'>
                                <div className='circle bg-[#36B37E] w-[18px] md:w-[16px] h-[18px] md:h-[16px] rounded-full'></div>
                                <span className='ml-[15px] mt-[-4px] font-bold text-[#183B56] dark:text-[#e7ebee] text-[16px] lg:text-[18px] leading-[20px] tracking-[0.225px]'>Number of questions</span>
                            </div>

                            <ul className='list-disc list-outside '>
                                <li className="pt-[10px] leading-[28px] text-[12px] md:text-[14px] lg:text-[16px] text-[#183B56] dark:text-[#d0d7dd] ">50 questions will be from General Awareness (NCERTs, Classes 6 to 10, and basic General knowledge)</li>
                                <li className="pt-[10px] leading-[28px] text-[12px] md:text-[14px] lg:text-[16px] text-[#183B56] dark:text-[#d0d7dd] ">50 questions from CSAT (reasoning, reading comprehension and mathematics)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-[40px] sm:mt-[10px]">
                    <h1 className=" text-[#3C4852] font-poppins text-[20px] md:text-[26px] lg:text-[36px] font-bold leading-[52px] tracking-[0.2px] ">Stage ll: Personality Test</h1>
                    <h3 className="text-[#3C4852] font-poppins text-[16px] md:text-[16px] lg:text-[30px] leading-[52px] font-[600] tracking-[0.2px] mb-4 ">Interview</h3>
                    <p className=" sm:pt-5 text-[12px] md:text-[14px] lg:text-[18px] text-[#3D3D3D] leading-[22px] md:leading-[32px]">To understand the candidate better a personality test will be conducted, which would be aligned to the criteria prescribed by UPSC.</p>
                    <h3 className="pt-[30px] text-[16px] lg:text-[24px] text-[#183B56]  font-medium leading-[30px] sm:leading-[24px]">The selected candidates</h3>
                    <p className="pt-3 sm:pt-5 text-[12px] md:text-[14px] lg:text-[18px] text-[#3D3D3D] leading-[22px] md:leading-[32px]">Based on these two stages mentioned above, we will select a total of 50 candidates from the district of Jalaun, who will be provided with coaching and guidance for the prestigious UPSC Civil Services Examinations.</p>
                    <p className="pt-3 sm:pt-5 text-[12px] md:text-[14px] lg:text-[18px] text-[#3D3D3D] leading-[22px] md:leading-[32px]">We will conduct online classes and provide test series and mentorship to these students at the Orai premise, under the guidance of our VisionIAS Team.</p>
                </div>
                <div className=" relative lg:pb-[5rem] pb-[4rem]">
                    <div className="flex relative z-[11] flex-col mt-[20px] md:mt-[50px] lg:mt-[100px] mb-5 md:mb-[15px] lg:mb-[50px]">
                        <h1 className="text-[#183B56] text-[20px] lg:text-[36px] md:text-[26px] font-bold tracking-[0.2px] leading-[48px]">Test Overview</h1>
                    </div>
                    <div className=" sm:p-0 lg:p-16 lg:grid-cols-3 md:grid-cols-2 justify-center md:gap-8 lg:gap-6 sm:gap-2  text-left sm:mt-[-1.5rem] relative flex flex-wrap gap-[15px] ">
                        <div className='flex border rounded-xl h-[141px] bg-white shadow-md w-full md:w-[326px] lg:w-[361px] !p-5 mb-4  sm:h-[141px] sm:mb-4 gap-4'>
                            <div><Image src={"/images/circle_one.svg"} width={40} height={40} alt='circle_images' /></div>
                            <div> <p className=" text-[#183B56] font-sans text-[16px] lg:text-[18px] tracking-[0.2px] leading-[26px] font-[700] ">Registration Start Date</p>
                                <p className=" text-[#5A7184] font-sans text-[14px] leading-[19.7px] font-[600] ">1st January 2022</p></div>

                        </div>
                        <div className='flex border rounded-xl h-[141px] bg-white shadow-md w-full md:w-[326px] lg:w-[361px] !p-5 mb-4 sm:h-[141px] sm:mb-4 gap-4'>
                            <div><Image src={"/images/Polygon.svg"} width={30} height={30} alt='circle_images' /></div>
                            <div>
                                <p className=" text-[#183B56] font-sans text-[16px] lg:text-[18px] tracking-[0.2px] leading-[26px] font-[700] ">Closing Date of Registrations</p>
                                <p className=" text-[#183B56] font-sans text-[14px] leading-[19px] font-[600] ">25th January 2022</p>
                            </div>

                        </div>
                        <div className='flex border rounded-xl h-[141px] bg-white shadow-md w-full md:w-[326px] lg:w-[361px] !p-5 mb-4 sm:h-[141px] sm:mb-4 gap-4'>
                            <div><Image src={"/images/box_Shape.svg"} width={35} height={35} alt='circle_images' /></div>
                            <div>
                                <p className=" text-[#183B56] font-sans text-[16px] lg:text-[18px] tracking-[0.2px] leading-[26px] font-[700] ">Date of Examination</p>
                                <p className=" text-[#183B56] font-sans text-[14px] leading-[19.7px] font-[600] ">30 Jan 2022, Sunday, 10 AM</p>
                            </div>

                        </div>
                        <div className='flex border rounded-xl h-[141px] bg-white shadow-md w-full md:w-[326px] lg:w-[361px] !p-5 mb-4 sm:h-[141px] sm:mb-4 gap-4 '>
                            <div><Image src={"/images/admin_shape.svg"} width={60} height={60} alt='circle_images' /></div>
                            <div>
                                <p className=" text-[#183B56] font-sans text-[16px] lg:text-[18px] tracking-[0.2px] leading-[26px] font-[700] ">Admit Card Release Date</p>
                                <p className=" text-[#183B56] font-sans text-[14px] leading-[19.7px] font-[600] ">Approximately, 5 days before the date of examination</p>
                            </div>

                        </div>
                        <div className='flex border rounded-xl h-[141px] bg-white shadow-md w-full md:w-[326px] lg:w-[361px] !p-5 mb-4 sm:h-[141px] sm:mb-4 gap-4'>
                            <div><Image src={"/images/piramid_shape.svg"} width={60} height={60} alt='circle_images' /></div>
                            <div>
                                <p className=" text-[#183B56] font-sans text-[16px] lg:text-[18px] tracking-[0.2px] leading-[26px] font-[700] ">Eligibility</p>
                                <p className=" text-[#183B56] font-sans text-[14px] leading-[19.7px] font-[600] ">The candidates should have passed class 12th examination.</p>
                            </div>

                        </div>
                    </div>
                    <div className="absolute bg-[#F9FBFE] top-0 h-full w-[57%] lg:w-[64%] rounded-l-[100px] lg:right-[-100px] md:right-[-50px] right-[-20px] z-[-1]"></div>

                </div>
                <div>
                    <h5 className="flex gap-[10px] text-[#183B56] font-sans text-[20px] md:text-[18px] lg:text-[24px] leading-[20px] font-[700] mb-4 "><span><Image src={"/images/Shape.svg"} alt='circle_svg' width={10} height={10} /></span>Note</h5>
                    <p className='text-[#3D3D3D] font-sans text-[12px] md:text-[14px] lg:text-[20px] leading-[32px] font-[600]'>The Admit cards will be mailed to the students’ registered e-mail IDs.</p>
                    <p className='text-[#3D3D3D] font-sans text-[12px] md:text-[14px] lg:text-[20px] leading-[32px] font-[600]'>For more information call us at <span className='text-[#3362CC] font-sans text-[12px] md:text-[14px] lg:text-[20px] leading-[32px] font-[600]'>9425144629</span> or mail your queries at <span className='text-[#3362CC] font-sans text-[12px] md:text-[14px] lg:text-[20px] leading-[32px] font-[600]'>prayatna@visionias.in.</span></p>
                </div>
                <div className='flex gap-4 absolute right-0'>
                    <p className=" text-[#5A7184] font-sans text-[12px] md:text-[14px] lg:text-[16px] leading-[21.79px] font-[700] mt-[18px]">Click to Registration</p>
                    <span onClick={scrollToTop}><Image src={"/images/Button.svg"} alt='circle_svg' width={56} height={56} className='lg:w-[89%] md:w-[77%] w-[77%]' /></span>
                </div>
            </div>
            {open && <PrayatnaPopup handleClose={handleClose} show={open} />}
            {popup && <AdmitCard onClose={closePopup} show={popup} />}

            <footer className='bg-[#F8FBFF] h-[165px] '>
                    <div className='flex text-center justify-center mt-16 pt-12'>
                        <Image src={"/images/Visionias_logos.svg"} alt='visionias_logo' width={67} height={50} className="lg:w-[3%] md:w-[6%] w-[9%]" />
                    </div>
                    <div className='flex text-center justify-center '>
                        <p className='text-[#5A7184] font-sans text-[10px] mb-0 md:text-[14px] lg:text-[16px] leading-[21.79px] font-[600] mt-4'>Copyright © 2023 Ajayvision Education Pvt. Ltd. All Rights Reserved.</p>
                    </div>
                </footer>
        </section>
    )
}

export default Prayatna;

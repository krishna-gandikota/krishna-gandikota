import React from 'react'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer.'
import styles from "./buttonanimation.module.scss";

function Index() {
  return (
    <div>
    <Header />
    {/* <div className="container">
  <a href="#" className={styles.button}>
    <div className={styles.plate}></div>
    <div className={styles.plate}></div>
    <div className={styles.plate}></div>
    <div className={styles.plate}></div>
    <div className={styles.plate}></div>
    <div className={styles.button__wrapper}>
      <span className={` ${styles.button__text} text-center`}>ENTRY</span>
    </div>
    <div className={styles.button__box}>
      <div className={` ${styles.inner__top} inner`}></div>
      <div className={`${styles.inner__front} inner`}></div>
      <div className={` ${styles.botton} inner`}></div>
      <div className={ ` ${styles.inner__back} inner`}></div>
      <div className={` ${styles.inner__left} inner `}></div>
      <div className={` ${styles.inner__right} inner`}></div>
    </div>
  </a>
</div> */}
<div className={` ${styles.calendar}`}>
  <div className={styles.calendar__opts}>
    <select name={` ${styles.calendar__month} ${styles.select} ${styles.button} `} id="calendar__month">
      <option>Jan</option>
      <option>Feb</option>
      <option>Mar</option>
      <option selected>Apr</option>
      <option>May</option>
      <option>Jun</option>
      <option>Jul</option>
      <option>Aug</option>
      <option>Sep</option>
      <option>Oct</option>
      <option>Nov</option>
      <option>Dec</option>
    </select>

    <select name={` ${styles.calendar__year} ${styles.select} `} id="calendar__year">
      <option>2017</option>
      <option>2018</option>
      <option>2019</option>
      <option>2020</option>
      <option>2021</option>
      <option>2022</option>
      <option selected>2023</option>
      <option>2024</option>
      <option>2025</option>
    </select>
  </div>

  <div className={`  ${styles.body}`}>
    <div className={` ${styles.calendar__days} flex gap-8`}>
      <div>M</div>
      <div>T</div>
      <div>W</div>
      <div>T</div>
      <div>F</div>
      <div>S</div>
      <div>S</div>
    </div>

    <div className={` ${styles.calendar__date} grid grid-cols-7 gap-7 mt-[-15px] `}>

      <div className={styles.calendar__date}><span className=' relative z-[1] '>1</span></div>
      <div className={styles.calendar__date}><span className=' relative z-[1] '>2</span></div>
      <div className={styles.calendar__date}><span className=' relative z-[1] '>3</span></div>
      <div className={styles.calendar__date}><span className=' relative z-[1] '>4</span></div>
      <div className={styles.calendar__date}><span className=' relative z-[1] '>5</span></div>
      <div className={styles.calendar__date}><span className=' relative z-[1] '>6</span></div>
      <div className={styles.calendar__date}><span className=' relative z-[1] '>7</span></div>
      <div className={styles.calendar__date}><span className=' relative z-[1] '>8</span></div>
      <div className={styles.calendar__date}><span className=' relative z-[1] '>9</span></div>
      <div className={styles.calendar__date}><span className=' relative z-[1] '>10</span></div>
      <div className={styles.calendar__date}><span className=' relative z-[1] '>11</span></div>
      <div className={styles.calendar__date}><span className=' relative z-[1] '>12</span></div>
      <div className={styles.calendar__date}><span className=' relative z-[1] '>13</span></div>
      <div className={styles.calendar__date}><span className=' relative z-[1] '>14</span></div>
      <div className={styles.calendar__date}><span className=' relative z-[1] '>15</span></div>
      <div className={` ${styles.calendar__date} calendar__date--selected calendar__date--first-date calendar__date--range-start `}><span className=' relative z-[1] '>16</span></div>
      <div className={` ${styles.calendar__date} calendar__date--selected calendar__date--last-date `}><span className=' relative z-[1] '>17</span></div>
      <div className={` ${styles.calendar__date} calendar__date--selected calendar__date--first-date `}><span className=' relative z-[1] '>18</span></div>
      <div className={` ${styles.calendar__date} calendar__date--selected `}><span className=' relative z-[1] '>19</span></div>
      <div className={` ${styles.calendar__date} calendar__date--selected `}><span className=' relative z-[1] '>20</span></div>
      <div className={` ${styles.calendar__date} calendar__date--selected calendar__date--last-date calendar__date--range-end `}><span className=' relative z-[1] '>21</span></div>
      
    </div>
  </div>

  <div className={` ${styles.calendar__buttons} focus:bg-blue-500 `}>
    <button className={ ` ${styles.calendar__button} calendar__button--grey `}>Back</button>

    <button className={` ${styles.calendar__button}  calendar__button--primary   `}>Apply</button>
  </div>
</div>
    <Footer />

    </div>
  )
}

export default Index

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Author() {
  return (
    <div className="author flex py-5">
          <Image src={"/images/author_image.png"}  className="rounded-full" width={40} height={40} alt="text_series" />
      <div className='flex flex-col Justify-center px-4'>
      <Link href={"/"} className="text-md font-bold text-gray-600">Flying High </Link>
      <span className="text-sm text-gray-500"> CEO and Founder</span>
      </div>
    </div>
  )
}

import React from 'react'

export default function Details() {
  return (
    <section className='h-[8vh] w-full pt-1 text-xs items-center font-medium flex justify-between  md:text-base md:gap-[390px] gap-2'>
        <ul className='flex-1 md:list-disc flex-wrap flex justify-between gap-3'>
            <li className='list-none '>KELVIN WARUINGE</li>
            <li>FULL-STACK</li>
            <li>DESIGNER</li>
        </ul>
        <ul className='flex-1 flex-wrap flex flex-row-reverse md:flex-row gap-3 justify-between'>
            <li>KENYA,</li>
            <li>NAIROBI</li>
            <li>DESIGNER</li>
            <li>2026</li>
        </ul>
    </section>
  )
}

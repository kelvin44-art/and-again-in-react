import { useState } from 'react'
import home from './assets/icons8-home.svg'
import work from './assets/icons8-work-50.png'
import message from './assets/message-svgrepo-com.svg'
import person from './assets/Person.svg'


function NavigationBar({handleClick, isActive}) {

    const items = [
        {img : home, name : "Home"},
        {img : work, name : "Work"},
        {img : person, name : "About"},
        {img : message, name : "Message"},
    ]
  return (
    <div className='bg-brown w-full bg-green-700'>
      <ul className='flex rounded-xl  left-1/2 bottom-2 md:-bottom-4 h-14 items-center -translate-x-1/2 bg-black/[0.637] absolute w-[85%] md:w-[25%] gap-1  p-1'>
        {
            items.map(item => {
                return <li  key={item.name} className='flex-grow flex  item-center w-fit  hover:cursor-pointer  hover:flex-2 hover:pointer'>
                    <NavigationItems 
                        onClick={() => handleClick(item.name)} 
                        img={item.img} 
                        name={item.name}
                        isOpened={isActive === item.name}
                    />
                    </li>
            })
        }
      </ul>
    </div>
  )
}

export default NavigationBar



const NavigationItems = ({img, name, onClick, isOpened}) =>{
    return(
        <button onClick={onClick} 
        className={`group  flex flex-grow justify-center items-center rounded-md text-white gap-1 ${isOpened ? 'bg-gray-700 py-2 px-1' : ''} `}>
            <img className='md:h-6 h-5' src={img} alt="" />
            <span className={`text-xs md:text-sm font-normal md:font-medium  ${isOpened ? 'block' : 'hidden'}`}>{name}</span>
        </button>
    )
}
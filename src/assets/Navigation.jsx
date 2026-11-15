import { useState } from 'react'
import home from '../assets/icons8-home.svg'



function NavigationBar() {
    const [isActive, setIsActive] = useState('')

    const handleClicked = (item) => {
        setIsActive(item)
    }
    const items = [
        {img : home, name : "Home"},
        {img : home, name : "Work"},
        {img : home, name : "About"},
        {img : home, name : "Message"},
    ]
  return (
    <div className='bg-brown'>
<p>{isActive}</p>
      <ul className='flex items-baseline bg-yellow-500 gap-1 w-3/4 md:w-[30%] p-1'>
        {
            items.map(item => {
                return <li  key={item.name} className='flex-grow flex  item-center w-fit  hover:cursor-pointer  hover:flex-2 hover:pointer'>
                    <NavigationItems 
                        onClick={() => handleClicked(item.name)} 
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
        className={`group  flex flex-grow justify-center items-center rounded-md text-white gap-1 ${isOpened ? 'bg-gray-700 p-1' : ''} `}>
            <img className='md:h-6 h-5' src={img} alt="" />
            <span className={`text-xs md:text-sm font-normal md:font-medium  ${isOpened ? 'block' : 'hidden'}`}>{name}</span>
        </button>
    )
}

import logo from './assets/Bear.svg'
function CurrentWorkPlace() {
  return (
    <section className='w-[58%] md:w-[22%] md:h-[9vh] h-[4vh] justify-center items-center rounded-xl bg-white flex gap-3 absolute top-5 left-1/2 -translate-x-1/2'>
        <p className='font-medium'>Currently at</p>
        <img className='h-7' src={logo} alt="" />
        <p className='font-bold'>BEAR</p>
    </section>
  )
}

export default CurrentWorkPlace

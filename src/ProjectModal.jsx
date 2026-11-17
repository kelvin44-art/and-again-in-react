import arrow from './assets/left-arrow-svgrepo-com.svg'

function ProjectModal() {
  return (
    <section aria-label='modal' className='w-[95%] rounded-t-2xl md:w-[60%] xl:w-[60%] h-[80vh] md:h-[80vh] m-auto bg-blue-500'>
        <div className='w-full h-[60px] rounded-t-2xl border-b flex justify-between items-center pl-5 pr-5'>
            <button className='bg-slate-600 text-xs pr-3 pl-3 pt-1 pb-1 rounded-md flex gap-1 text-white'>
                <img className='w-3' src={arrow} alt="Left arrow" />
                Work
            </button>
            <button className='bg-slate-600 text-xs text-white pr-3 pl-3 pt-2 pb-2 rounded-full'>X</button>
        </div>
        <section className='pt-4 pl-5 pr-5 md:flex  gap-2'>
            <div aria-label='left-side' className='md:border-r md:w-1/3 h-100% md:pr-5 text-white flex flex-col gap-2 overflow-y-scroll'>
                <h2 className='font-semibold text-2xl'>Oyster</h2>
                <div className='flex flex-col gap-1'>
                    <h6 className='text-xs text-gray-600 font-medium'>ROLE</h6>
                    <p className='text-sm text-white'>Creative Designer / Director of Brand Design</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <h6 className='text-xs text-gray-600 font-medium'>TEAM</h6>
                    <p className='text-sm text-white'>Jason Yim, Natalie Harris, Kate Masancay, Sudiksha Khanduja, Stephanie Huynh, Ayesha Renard, Michelle Kirk, Nneka Daly, Hiba Abdillahi</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <h6 className='text-xs text-gray-600 font-medium'>ABOUT</h6>
                    <p className='text-sm text-white'>
                        At Oyster HR, held the role of Director of Brand Design for over two transformative years — 
                        leading the team from its foundational stages to 15 designers,
                        animators, and developers. Oversaw brand strategy, a web design system,
                        targeted campaigns, 
                        and brand overhauls. Metrics showed a 67% growth in brand reach.
                    </p>
                </div>
            </div>
            <div aria-label='right-side' className='md:w-2/3 bg-slate-700 h-[100%]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Laudantium quae commodi, tempora quam, omnis minima magnam 
                voluptatem hic quis ex
                 accusamus deleniti quo vel quia quidem, inventore deserunt? Minus, quo.
            </div>
        </section>
    </section>
  )
}

export default ProjectModal

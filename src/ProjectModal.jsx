import { act, useEffect, useState } from 'react'
import arrow from './assets/left-arrow-svgrepo-com.svg'

function ProjectModal({currentProject, isProjectClicked, setIsProjectClicked }) {
    let active = false;

    if(isProjectClicked !== ''){
        active = true
    }
    const handleClose = () => {
        setIsProjectClicked('')
    }
    
  return active ? ( 
    // 1. Added 'flex flex-col' to stack header and content vertically
    <section aria-label='modal' className='w-[95%] rounded-2xl md:w-[60%] xl:w-[60%] h-[85vh] md:h-[88vh] absolute left-1/2 -translate-x-1/2 -bottom-2 bg-blue-500 flex flex-col'>
        
        {/* 2. Added 'shrink-0' so the header doesn't get compressed */}
        <div className='w-full h-[60px] shrink-0 rounded-t-2xl border-b flex justify-between items-center pl-5 pr-5'>
            <button className='bg-slate-600 text-xs pr-3 pl-3 pt-1 pb-1 rounded-md flex gap-1 text-white'>
                <img className='w-3' src={arrow} alt="Left arrow" />
                Work
            </button>
            <button
             className='bg-slate-600 text-xs text-white pr-3 pl-3 pt-2 pb-2 rounded-full'
                onClick={handleClose}
             >X</button>
        </div>

        {/* 3. Added 'flex-1 overflow-hidden min-h-0' to constrain height and allow inner scrolling */}
        <div className='flex-1 overflow-hidden flex flex-col md:flex-row gap-2  pl-5 pr-5  min-h-0'>
            {currentProject && currentProject.map(project => (
                // 4. Added 'flex-1 min-h-0' to ensure this wrapper respects the parent's height
                <div key={project.abbreviation} className='flex-1 pt-4 flex flex-col md:flex-row gap-2 min-h-0'>
                    
                    {/* 5. Removed h-[100%], added w-full for mobile, kept overflow-y-auto */}
                    <div aria-label='left-side' className='md:w-1/3 h-full w-full overflow-y-auto text-white md:border-r flex flex-col gap-4 [scrollbar-width:none]'>
                        <h2 className='font-semibold pb-2 text-2xl'>{project.title}</h2>
                        <div className='flex flex-col gap-1'>
                            <h6 className='text-xs text-gray-600 font-medium'>ROLE</h6>
                            <p className='text-sm text-white'>Creative Designer / Director of Brand Design</p>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h6 className='text-xs text-gray-600 font-medium'>TEAM</h6>
                            <p className='text-sm text-white'>{project.team}</p> {/* Changed currentProject.team to project.team */}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h6 className='text-xs text-gray-600 font-medium'>ABOUT</h6>
                            <p className='text-sm text-white'>
                                {project.about}
                            </p>
                        </div>
                    </div>

                    {/* 6. Added shrink-0 to the inner boxes so they don't get compressed by flexbox */}
                    <div aria-label='right-side' className='md:w-2/3 w-full overflow-y-auto flex flex-col gap-3 [scrollbar-width:none]'>
                        <div className='w-full h-64 shrink-0 rounded-xl bg-yellow-950'></div>
                        <div className='w-full h-64 shrink-0 rounded-xl bg-yellow-950'></div>
                        <div className='w-full h-64 shrink-0 rounded-xl bg-yellow-950'></div>
                        <div className='w-full h-64 shrink-0 rounded-xl bg-yellow-950'></div>
                    </div>
                </div>
            ))}
        </div>
    </section> 
  ) : null
}

export default ProjectModal
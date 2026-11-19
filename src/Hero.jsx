import { useState } from 'react'
import heroVideo from './assets/videos/night.mp4'
import WorkModal from './WorkModal'
import ProjectModal from './ProjectModal'
import NavigationBar from './Navigation'
import data from './assets/MockData'
import CurrentWorkPlace from './CurrentWorkPlace'

function Hero() {

    const [isActive, setIsActive] = useState('')
    const [isProjectClicked, setIsProjectClicked] = useState('')

    const handleClick = (item) => {
        setIsActive(item)
    }
    const [currentProject, setCurrentProject] = useState([])

    const handleClickedProject = (item) => {
        setIsProjectClicked(item)
        const project= data.filter(project => project.abbreviation === item)
        setCurrentProject(project)
    }

  return (
    <section className='h-[92vh] md:h-[88vh] relative bg-black w-[100%] border'>
        <video 
        className='w-[100%] h-[100%] object-cover'
        autoPlay muted loop playsInline>
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
        </video>
        <CurrentWorkPlace/>
        <NavigationBar handleClick={handleClick} isActive={isActive} />
        <WorkModal isActive={isActive} handleClickedProject={handleClickedProject}/>
        <ProjectModal currentProject={currentProject} isProjectClicked={isProjectClicked} setIsProjectClicked={setIsProjectClicked}/>
    </section>

  )
}

export default Hero

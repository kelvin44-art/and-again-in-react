import data from "./assets/MockData";
import instagram from './assets/instagram.svg'
import linkedIn from './assets/linkedIn.svg'


const WorkModal = ({isActive, handleClickedProject}) =>{
    const RenderContent = (state) => {
        switch (state) {
            case 'Work':
                return (
                    <section className="h-[330px] w-[85%] bg-black/[0.637] shadow-[3px_3px_3px_rgba(23,22,22,0.462)] absolute left-1/2 -translate-x-1/2 bottom-14 md:bottom-7 z-1 md:w-[25%] rounded-t-xl text-white pt-8 backdrop-filter: blur(8px) pl-5  pr-5 flex flex-col gap-3">
                        {
                            data.map(project => {
                                return <Project key={project.abbreviation}  onClick={() => handleClickedProject(project.abbreviation)} title={project.title}  abbreviation={project.abbreviation}/>
                            })
                        }  
                    </section>
                )
                
            case 'About':
                return <AboutSection />

            default:
                break;
        }
    }
    return(
        <>
         { RenderContent(isActive) }
        </>
    )
}
export default WorkModal

const Project = ({abbreviation, title, role1, role2, onClick}) =>{
    return(
        <section className="flex cursor-pointer gap-4 w-full"
            onClick={onClick}
        >
            <div className="h-[40px] w-[20%]  rounded-md font-bold text-white bg-teal-700  border flex items-center justify-center">
                {abbreviation}
            </div>
            <div className="flex items-center justify-between w-full">
                <div className="">
                    <p className="font-bold text-sm">{title}</p>
                    <ul className="text-gray-400 text-xs flex gap-1">
                        <li>Creative Director</li>
                        <li>{role2}</li>
                    </ul>
                </div>
                <span className="text-xs text-gray-400">2026</span>
            </div>

        </section>
    )
}


const AboutSection = () =>{
    return(
        <section className="h-40 w-[85%] absolute left-1/2 -translate-x-1/2 bottom-14 md:bottom-[32px] bg-black/[0.637] shadow-[3px_3px_3px_rgba(23,22,22,0.462)] md:w-[25%] text-white  pt-6 rounded-t-2xl pl-4 pb-2  pr-4 flex flex-col gap-3">
            <p className="text-xs">Designer and Developer with a focus on visual identity, art direction and design systems.</p>
            <ul className="flex gap-1 ">
                <li className="flex-1 ">
                    <a className="flex items-center justify-center pt-2 gap-1 pb-2 pl-3 pr-3 border" href="#">
                            <img className="h-7 w-auto" src={instagram} alt="instagram Image" />
                            <div className="text-xs font-medium ">Instagram</div>
                    </a>
                </li>
                <li className="flex-1">
                    <a className="flex items-center gap-1 justify-center pt-2 pb-2 pl-3 pr-3 border" href="#">
                            <img className="h-7 w-auto" src={linkedIn} alt="instagram Image" />
                            <div className="text-xs font-medium ">LinkedIn</div>
                    </a>
                </li>
            </ul>
        </section>
    )
}


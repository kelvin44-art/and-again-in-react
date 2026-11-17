import ProjectModal from "./ProjectModal"
import WorkModal from "./WorkModal"
import NavigationBar from "./assets/Navigation"

const App = ( ) =>{
    return(
        <div className="border-2 h-[100vh]">
            <NavigationBar/>
            <WorkModal/>
            <ProjectModal/>
        </div>
    )
}

export default App
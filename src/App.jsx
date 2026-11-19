import { useState } from "react"
import ProjectModal from "./ProjectModal"
import WorkModal from "./WorkModal"
import NavigationBar from "./Navigation"
import data from "./assets/MockData"
import Hero from "./Hero"
import Details from "./Details"

const App = ( ) =>{
    
    return(
        <div className="border-2 h-[100vh] px-2 md:px-4 pt-2 md:pt-4 overflow-hidden">
            <Hero/>
            <Details/>
        </div>
    )
}

export default App
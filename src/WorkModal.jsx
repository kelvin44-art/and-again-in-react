const WorkModal = () =>{
    const data = true;
    return(
        <>
         {
            data ? (<section className="h-96 w-3/4 md:w-[30%] border-2 pt-2 pl-4  pr-4 flex flex-col gap-3">
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                
            </section>)
            : ( <div className="h-3 bg-black w-3/4 md:w-[30%]"></div>)
         }
        </>
    )
}

export default WorkModal

const Project = () =>{
    return(
        <section className="flex gap-2 w-full">
            <div className="h-[40px] w-[12%] rounded-md font-bold text-white bg-teal-700  border flex items-center justify-center">
                TY
            </div>
            <div className="flex items-center justify-between w-full">
                <div className="">
                    <p className="font-bold text-sm">TinyWins</p>
                    <ul className="text-gray-400 text-xs flex gap-1">
                        <li>Creative Designer</li>
                        <li>Identity</li>
                    </ul>
                </div>
                <span className="text-gray-400 text-xs">2026</span>
            </div>
        </section>
    )
}
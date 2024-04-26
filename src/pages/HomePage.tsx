import { Link } from "react-router-dom"

export default function HomePage() {
    return (   
        <div className="flex flex-col items-center">
            <h1 className="text-6xl">👹WELCOME TO MONSTER UNIVERSITY👹</h1>
            <div className="animate-pulse text-4xl mt-80"> 
            <Link to ="/add">👻Press to Enter👻</Link>
             </div>
          
        </div>
    )}
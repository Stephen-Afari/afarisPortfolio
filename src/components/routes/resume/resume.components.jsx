import './resume.styles.scss'
import { ResumeCard } from "../../resumeCard/resumeCard"

const portfolio = [
    {
        id:1,
        name:'FullStack Note App',
        description: "This is a MERN stack application built with a React/ Redux front end and a NodeJS and MongoDB backend. The front end connects to the database through CreateAsyncThunk which updates the Redux store when action is dispatched to enable us access data between sessions. It has a robust backend built with the REST and MVC architecture.",
        website: "https://note-app-client-a1pt.onrender.com/",
        github: "https://github.com/Stephen-Afari/note_app_client",
        image: "https://onedrive.live.com/embed?resid=DB8B44FCBA927998%213453&authkey=%21AFDaXky2QYHtd8o&width=589&height=388"
    },
    {
        id:2,
        name:'Safari App',
        description: "The Safari App is an Ecommerce frontend platform for showcasing, marketing and selling interesting tour experiences. It is built using React and styled with Sass. It provides three broad categories of tours : Adventure, Sporty and Exploratory.",
        website: "https://safari-xi.vercel.app/",
        github: "https://github.com/Stephen-Afari/safari",
        image: "https://onedrive.live.com/embed?resid=DB8B44FCBA927998%213455&authkey=%21AIDQCCU4s_Ywphg&width=583&height=427"
    },
    {
        id:3,
        name:'Movie App',
        description: "This is a movie database website that combines the power of NextJS and Tailwind CSS. It has a sleek and intuitive design with a powerful search bar that enables you to search for any movie of your choice. Daily movie updates are provided by the trending and top rated sections. It seemlessly integrates Server side and client side components.",
        website: "https://imdb-clone-afari.vercel.app/",
        github: "https://github.com/Stephen-Afari/imdb",
        image: "https://onedrive.live.com/embed?resid=DB8B44FCBA927998%213454&authkey=%21AAiYiJSLsUcuXU8&width=513&height=361"
    }
    
]

export const Resume=()=>{
    return(
     <div className="resumeContainer">
        {portfolio.map((project)=>(            
    <ResumeCard key={project.id}  details={project}/>

    ) )}
  
     </div>
    )
}
import './resumeCard.styles.scss'
import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

export const ResumeCard = ({details})=>{
    const {name, description, website,github, image} = details;
return (

         <div className='cardContainer'>
           
            <div className=" image-container" style={{backgroundImage:`url(${image})`, width:'100%', height: '200px', backgroundSize: "cover",  backgroundPosition: "center", borderRadius:"9px 9px 0 0"} }>
            
            </div>
            <p className='appName'>{name}</p>
            <p className='appDescription'>{description}</p>
            <div className='externalLinks'>
             <a href={website}   target='_blank'> <TbWorldWww className='website'/> </a> 
             <br/>
             <a href={github}   target='_blank'> <FaGithub className='github1'/> </a>
          
            </div>
          
                </div>
    
)
}
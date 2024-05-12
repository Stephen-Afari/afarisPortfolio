import { IoPersonOutline } from "react-icons/io5";
import './aboutme.styles.scss'

export const AboutMe=()=>{
    return(
        <div>
            <h1 className="personIcon"><IoPersonOutline /></h1>
          <div className="allDetailsAboutMe">
          <section>
                <p className="par1">I am a full-stack Javascript developer . I have built a couple of interesting and feature-rich frontend and backend applications using React/Redux/Redux saga, Typescript, Javascript, Node JS, MongoDB and related technologies all of which have deepened my skills and experience.</p>
                <p className="par2">My initial training in Mathematics/Statistics equipped me with strong appreciation of logical reasoning and problem solving skills . Whilst working in Finance, I was constantly looking for ways to simplify my work and so I stumbled on VBA programming, went on to have a stint with Java and Android app development and then made a brief foray into Python/Data Science. Through that journey of self-discovery, I fell in love with the MERN stack (MongoDb, Express, React and Node) and have committed myself to it for the long haul.</p>
            </section>
            <aside className="educationData"> 
            <p className="par3">
                {/* Education <br/> */}
                Degrees: Mathematics <br/> 
                Statistics<br/> 
                 Finance <br/> 
                 FullStack Development

            </p>
           
            </aside>
          </div>
          
            
        </div>
      
    )
}
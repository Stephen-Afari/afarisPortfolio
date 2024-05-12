
//We don't want to render the App component directly, hence we create this Home Component to act as the App Component
import { SplitScreen } from "../../split-screen/split-screen.component";
import { Outlet } from "react-router-dom";
import './home.styles.scss'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";


const LinksComponent =()=>{
return (<div className="mySocialMediaLinks"> 
<a></a>
<a href="https://www.linkedin.com/in/stephen-afari-ba0425262/" target="_blank"><CiLinkedin className="linkedIn"/></a>
<a href="https://github.com/Stephen-Afari" target="_blank"><FaGithub className="gitHub"/></a>
<a href="https://x.com/StephenAfari14?t=OzaknhFXvYtVGOaQCPdtiw&s=08" target="_blank"><FaXTwitter className="twitter"/></a>
  
  
</div>)
}

const ImageComponent =()=>{
  return (
    <div>
        
        {/* <div className="rightItem">
        Image
        </div> */}
     
    </div>
  )
  }

const ProfileComponent =()=>{
  return(<div>
    <p className="myName">STEPHEN AFARI
    <p className="role-tag">FullStack JavaScript Developer</p>
    </p>
    <Link to='/contactme'><Button className='contactButton' label="CONTACT US"/></Link>
    
  </div>)
}
function Home() {
  return (
    <div>
   <Outlet/>
 <SplitScreen left={LinksComponent} middle={ProfileComponent} right={ImageComponent}
  
    />
    </div>
   
  );
}

export default Home;

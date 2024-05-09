//We don't want to render the App component directly, hence we create this Home Component to act as the App Component
import { SplitScreen } from "../../split-screen/split-screen.component";
import { Outlet } from "react-router-dom";
import './home.styles.scss'

//https://onedrive.live.com/embed?resid=DB8B44FCBA927998%213438&authkey=%21ACXUQ_NoRxrE8ro&width=475&height=424
const LinksComponent =()=>{
return (<div>Left!!</div>)
}

const ImageComponent =()=>{
  return (
    <div>
        Image
        {/* <div className="rightItem">
        Image
        </div> */}
     
    </div>
  )
  }

const ProfileComponent =()=>{
  return(<div>Middle!!</div>)
}
function Home() {
  return (
    <div>
   <Outlet/>
 <SplitScreen left={LinksComponent} middle={ProfileComponent} right={ImageComponent}
    leftWeight={1} 
    rightWeight={2}
    middleWeight={3}
    />
    </div>
   
  );
}

export default Home;

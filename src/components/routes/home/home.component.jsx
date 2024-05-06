//We don't want to render the App component directly, hence we create this Home Component to act as the App Component
import { SplitScreen } from "../../split-screen/split-screen.component";
import { Outlet } from "react-router-dom";
const LinksComponent =()=>{
return (<h1>Left!!</h1>)
}

const ImageComponent =()=>{
  return (<h1>Right!</h1>)
  }

const ProfileComponent =()=>{
  return(<p>Middle!!</p>)
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

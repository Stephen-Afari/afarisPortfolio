import { SplitScreen } from "./components/split-screen/split-screen.component";
const LinksComponent =()=>{
return (<h1>Left!!</h1>)
}

const ImageComponent =()=>{
  return (<h1>Right!</h1>)
  }

const ProfileComponent =()=>{
  return(<p>Middle!!</p>)
}
function App() {
  return (
    <SplitScreen left={LinksComponent} middle={ProfileComponent} right={ImageComponent}
    leftWeight={1} 
    rightWeight={2}
    middleWeight={3}
    />
  );
}

export default App;

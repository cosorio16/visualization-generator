import Aside from "./components/Aside";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-screen min-h-scree flex text-white">
      <Aside></Aside>
      <Outlet></Outlet>
    </div>
  );
}

export default App;

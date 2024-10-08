import Levels from "../components/Levels";
import Sublevel from "../components/Sublevel";
import useVis from "../store/vis";

function Home() {
  const { levels, currentSub } = useVis();

  return (
    <div className="p-8 w-full overflow-y-scroll scroll-smooth transition-all flex flex-col gap-4 relative max-h-screen">
      <Levels></Levels>
      {levels.map((level, index) => (
        <Sublevel
          key={index}
          theme={level}
          active={currentSub == index ? true : false}
          onClick={() => console.log(currentSub)}
        ></Sublevel>
      ))}
    </div>
  );
}

export default Home;

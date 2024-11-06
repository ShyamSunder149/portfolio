import About from "../components/about";
import FirstBanner from "../components/FirstBanner";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import StatusBar from "../components/Status";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 px-10 py-10 sm:px-10 sm:py-6 md:px-30 md:py-24 lg:px-40 lg:py-24 font-sans">
      <StatusBar/>
      <FirstBanner/>
      <About/>
      {/* <Skills/> */}
      <Projects/>
    </div>
  );
}

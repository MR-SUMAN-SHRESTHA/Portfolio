import Image from "next/image";
import Navbar from "../../components/main/Navbar";
import Hero from "../../components/main/Hero";
import Skills from "../../components/main/Skills";
import Encryption from "../../components/main/Encryption";
import Projects from "../../components/main/Projects";
import StarsCanvas from "../../components/main/StarBackground";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Navbar />
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}


import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./components/navbar";
import { Container } from "./components/container";
import { Hero } from "./components/hero";
import { HamIcon } from "./icons/icon";
import { MoonIcon,SunIcon } from "./icons/moonIcon";

export default function Home() {

  return (
    <div className="p-3 rounded-xl w-full ">
      <Container>
        <Navbar/>
        <Hero/>
      </Container>
            
    </div>
  );
}

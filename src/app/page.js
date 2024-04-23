'use client'
// import styles from "./page.module.css";
import Main from "@/components/Main/Main";
import About from "@/components/About/About";
import Sections from "@/components/Sections/Sections";
import Portfolio from "@/components/Portfolio/Portfolio";
import RotatingPhoto from "@/components/RotatingPhoto/RotatingPhoto";

export default function Home() {

  return (
    <>
      <Main />
      <About />
      <Sections />
      <RotatingPhoto />
      <Portfolio />
    </>
  )
}

import { useEffect, useState } from "react";

export default function useScroll() {

  const [positionY, setPositionY] = useState()
  
  const handleScroll = () => {
    setPositionY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return (() => {
      window.removeEventListener("scroll", handleScroll)
    })
  }, []);

  return { positionY };
}


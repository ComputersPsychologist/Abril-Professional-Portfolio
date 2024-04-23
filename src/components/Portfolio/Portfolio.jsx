import styles from "./Portfolio.module.css";
import Marquee from "@/components/Marquee/Marquee";
import useMarquee from "@/hooks/useMarquee";

export default function Portfolio () {
  
  const { forwardStyle } = useMarquee()
  
  return (
    <section className={styles.section}>
      <Marquee
        text={`-PERSONAL PORTFOLIO` } 
        direction={forwardStyle} 
      />
      <div className={styles.imgCont}>

      </div>

    </section>
  )
}
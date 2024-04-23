'use client'
import styles from './Marquee.module.css'

export default function Marquee({text, direction}) {
  
  const textToArray = text.split(' ')
  // repeat 10 times
  const elements = Array(10).fill().map((_, index) => (
    <p key={index} className={styles.text} style={direction}>
      <span>{` ${textToArray[0]} `}</span>
      {`${textToArray[1]}`}
    </p>
  ));

  return (
    <div className={styles.cont}>
      {elements}
    </div>
  )
}
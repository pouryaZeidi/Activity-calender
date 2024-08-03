/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '@/styles/Card.module.scss'
import { BsThreeDots } from "react-icons/bs";
import { cardprops } from '@/types/type';

const Card = ({src,colorClass}:cardprops) => {
  return (
    <div className={`${styles.cardContainer} ${styles[colorClass]}`}>
        <img src={src} alt="title-icone" className={styles.titleicone} />
        <div className={styles.Subjects} >
            <div className={styles.suptitle}><h3>title</h3><span className={styles.option}><BsThreeDots /> </span></div>
            <h3 className={styles.middleText}><span className={styles.number}>2</span>comlete</h3>
            <div className={styles.subtitle}><span>Lastweek:</span><span>12</span><span>complete</span></div>
        </div>
    </div>
  )
}

export default Card
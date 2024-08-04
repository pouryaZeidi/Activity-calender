/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '@/styles/Card.module.scss'
import { BsThreeDots } from "react-icons/bs";
import { cardprops } from '@/types/type';
import { PiMoneyThin } from 'react-icons/pi';

const Card = ({src,colorClass,data,category}:cardprops) => {
  const priod = category === 'daily' ? 'Day' : category === 'weekly' ? 'Week' : 'Month'
  return (
    <div className={`${styles.cardContainer} ${styles[colorClass]}`}>
        <img src={src} alt="title-icone" className={styles.titleicone} />
        <div className={styles.Subjects} >
            <div className={styles.suptitle}><h3>{data?.title}</h3><span className={styles.option}><BsThreeDots /> </span></div>
            <h3 className={styles.middleText}><span className={styles.number}>{data?.timeframes[category]?.current}</span>comlete</h3>
            <div className={styles.subtitle}><span>Last {priod} :</span><span>{data?.timeframes[category]?.previous}</span><span>complete</span></div>
        </div>
    </div>
  )
}

export default Card
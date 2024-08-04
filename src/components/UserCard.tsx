/* eslint-disable @next/next/no-img-element */
import React from 'react';
import style from '@/styles/UserCard.module.scss';

const UserCard = ({setCategory}:{setCategory:any}) => {
  return (
    <div className={style.userContainer}>
        <div className={style.userDetail}>
            <div className={style.user}>
              <img src="/avatar.png" alt="Profile" className={style.profileImage} />
              <h3 className={style.report}>Report for</h3>
          
            </div>
              <div className={style.userName}>
              <h3 className={style.name}>Stacey</h3>
              <h3 className={style.family}>Castillo</h3>
              </div>
        </div>
            <div className={style.calender}>
            <h3 onClick={()=>setCategory('daily')} className={style.calTxt}>Daily</h3>
            <h3 onClick={()=>setCategory('weekly')} className={style.calTxt}>Weekly</h3>
            <h3 onClick={()=>setCategory('monthly')} className={style.calTxt}>Monthly</h3>
            </div>
            
    </div>
  );
};

export default UserCard;

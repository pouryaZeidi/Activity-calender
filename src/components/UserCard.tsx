/* eslint-disable @next/next/no-img-element */
import React from 'react';
import style from '@/styles/UserCard.module.scss';

const UserCard = () => {
  return (
    <div className={style.userContainer}>
        <div className={style.userDetail}>
            <div className={style.user}>
              <img src="/avatar.png" alt="Profile" className={style.profileImage} />
              <h3>Report for</h3>
          
            </div>
              <div className={style.userName}>
              <h3 className={style.name}>Stacey</h3>
              <h3 className={style.family}>Castillo</h3>
              </div>
        </div>
            <div className={style.calender}>
            <h3 className={style.calTxt}>Daily</h3>
            <h3 className={style.calTxt}>Weekly</h3>
            <h3 className={style.calTxt}>monthly</h3>
            </div>
            
    </div>
  );
};

export default UserCard;

import React from 'react';
import netflixImg from '../images/netflix.png';
import netflixAvatarImg from '../images/Netflix-avatar.png';
import '../app/assets/header.css';

export const Header = ({ blackGroundHeader }) => {
  return (
    <header className={blackGroundHeader ? 'black' : ''}>
      <div className="header--logo">
        <img src={netflixImg} alt="netflixImg" />
      </div>
      <div className="header--user">
        <img src={netflixAvatarImg} alt="avatarNetflix" />
      </div>
    </header>
  );
};

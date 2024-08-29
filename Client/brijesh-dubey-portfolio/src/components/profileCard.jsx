import React from "react";
import '../ProfileCard.css';
import ProfilePhoto from '../assets/images/profile.jpg';

const ProfileCard = () => {
    return (
        <div className="profile-card">
            <div className="profile-image-container">
                <img src={ProfilePhoto} alt="Brijesh Dubey" className="profile-image" />
                <div className="profile-text-overlay">
                    <h2>Brijesh Dubey</h2>
                    <p>Full Stack Developer</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;

import React from 'react';
import './Card.css';

function Card({ photonumber, imageUrl, title,language, description, url, githublogo }) {
  return (
    <div>
        <div className="card">
            <img id={photonumber} src={imageUrl} alt="" />
            <div className="card-overlay">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={url}>
                    <i id='third-github' className={githublogo}></i>
                </a>
                <h4>{language}</h4>

        </div>
        </div>
    </div>
  );
}

export default Card;

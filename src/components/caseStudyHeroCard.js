import React from "react";

const CaseStudyHeroCard = (props) => {
  return (
    <div id="case-study-wrapper">
      <div className="titleHero">
        {/* <p className='sno'>● 00{props.sno}</p> */}
        <p className="sno">/00{props.sno}</p>
        <h3 className="project-name">{props.projectName}</h3>
        {/* <div className='tag-wrapper'>
                    <span className='tag'>Branding</span>
                    <span className='tag'>Product Design</span>
                    <span className='tag'>UI/UX</span>
                    <span className='tag'>Frontend (React Native)</span>
                </div> */}
        <div className="overview-wrapper">
          <div className="overview">
            <p className="title">Project Overview</p>
            <hr />
            <p className="description">{props.overview}</p>
          </div>
          <div className="myrole-wrapper">
            <p className="title">My Role & Duration</p>
            <hr />
            <ul className="description">
              {props.tags &&
                props.tags.map((singleTag, i) => (
                  <li key={`uitags-${props.sno}--${i}`} className="myrole">
                    {singleTag}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyHeroCard;

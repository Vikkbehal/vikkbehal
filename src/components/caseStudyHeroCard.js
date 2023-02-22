import React from 'react'

const CaseStudyHeroCard = (props) => {
    return (
        <div id='case-study-wrapper'>
            <div className='titleHero'>
                <p className='sno'>● 001</p>
                <h3 className='project-name'>Coinmax (Web/Mobile)</h3>
                {/* <div className='tag-wrapper'>
                    <span className='tag'>Branding</span>
                    <span className='tag'>Product Design</span>
                    <span className='tag'>UI/UX</span>
                    <span className='tag'>Frontend (React Native)</span>
                </div> */}
                <div className='overview-wrapper'>
                    <div className='overview'>
                        <p className='title'>Project Overview</p>
                        <hr/>
                        <p className='description'>Tartu City History Museums, established in 1955 is the umbrella organisation for five museums: Tartu City Museum, Song Celebration Museum, KGB Cells Museum, Oskar Lots House Museum, and 19th Century Citizen's Museum. Together, the museums uniquely tell the story of Tartu focussing solely on the city and its progress throughout history.</p>
                    </div>
                    <div className='myrole-wrapper'>
                        <p className='title'>My Role & Duration</p>
                        <hr/>
                        <ul className='description'>
                            <li>01 Branding</li>
                            <li>02 Product Design</li>
                            <li>03 UI/UX</li>
                            <li>04 Frontend (React Native)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
  };

export default CaseStudyHeroCard;
import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import CaseStudyHeroCard from '../../components/caseStudyHeroCard'

import cm1 from '../../assets/img/case-study/coinmax1.png'
import typography from '../../assets/img/case-study/typo-coinmax.png'

const Coinmax = () => {
  return (
    <div id="case-study" className='main-wrapper'>
        <Header />
        <div className='case-study-body-wrapper'>
          <CaseStudyHeroCard 
            sno="1"
            projectName="Coinmax (Web/Mobile)"
            overview="Tartu City History Museums, established in 1955 is the umbrella organisation for five museums: Tartu City Museum, Song Celebration Museum, KGB Cells Museum, Oskar Lots House Museum, and 19th Century Citizen's Museum. Together, the museums uniquely tell the story of Tartu focussing solely on the city and its progress throughout history."
          />
          <img src={cm1} className='case-study-hero' alt="Vishal Behal | UI / UX Designer" />
          <section className='content-wrapper'>
            <h3 className='title'><span>01/</span>The Problem(Brief)</h3>
            <p>Tartu City History Museums, established in 1955 is the umbrella organisation for five museums: Tartu City Museum, Song Celebration Museum, KGB Cells Museum, Oskar Lots House Museum, and 19th Century Citizen's Museum. Together, the museums uniquely tell the story of Tartu focussing solely on the city and its progress throughout history.</p>
          </section>
          <section className='content-wrapper'>
            <h3 className='title'><span>02/</span>The Goal</h3>
            <p>Tartu City History Museums, established in 1955 is the umbrella organisation for five museums: Tartu City Museum, Song Celebration Museum, KGB Cells Museum, Oskar Lots House Museum, and 19th Century Citizen's Museum. Together, the museums uniquely tell the story of Tartu focussing solely on the city and its progress throughout history.</p>
          </section>
          <section className='content-wrapper'>
            <h3 className='title'><span>03/</span>Design Process</h3>
            <div className='processWrapper'>
              <div className='processWrap'>
                <h4>Identify the problem or need</h4>
              </div>
              <div className='processWrap'>
                <h4>Conduct research</h4>
              </div>
              <div className='processWrap'>
                <h4>Define the scope of the project</h4>
              </div>
              <div className='processWrap'>
                <h4>Brainstorm potential solutions</h4>
              </div>
              <div className='processWrap'>
                <h4>Develop and prototype concepts</h4>
              </div>
              <div className='processWrap'>
                <h4>Test and refine</h4>
              </div>
              <div className='processWrap'>
                <h4>Evaluate and iterate</h4>
              </div>
            </div>
          </section>
          <section className='content-wrapper'>
            <h3 className='title'><span>04/</span>Personas(User Flows)</h3>
            <p>Tartu City History Museums, established in 1955 is the umbrella organisation for five museums: Tartu City Museum, Song Celebration Museum, KGB Cells Museum, Oskar Lots House Museum, and 19th Century Citizen's Museum. Together, the museums uniquely tell the story of Tartu focussing solely on the city and its progress throughout history.</p>
          </section>
          <section className='content-wrapper'>
            <h3 className='title'><span>05/</span>Typography & Colors</h3>
            <div>
              <img src={typography} alt="Vishal Behal | UI / UX Designer" />
            </div>
          </section>
          {/* <section className='content-wrapper'>
            <h3 className='title'><span>06/</span>Wireframes</h3>
            <p>Tartu City History Museums, established in 1955 is the umbrella organisation for five museums: Tartu City Museum, Song Celebration Museum, KGB Cells Museum, Oskar Lots House Museum, and 19th Century Citizen's Museum. Together, the museums uniquely tell the story of Tartu focussing solely on the city and its progress throughout history.</p>
          </section> */}
          <section className='content-wrapper'>
            <h3 className='title'><span>06/</span>The Result</h3>
            <div>

            </div>
          </section>
        </div>
        <Footer/>
    </div>
  )
}

export default Coinmax
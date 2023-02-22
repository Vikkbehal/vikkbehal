import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import CaseStudyHeroCard from '../../components/caseStudyHeroCard'

import cm1 from '../../assets/img/case-study/coinmax1.png'

const Coinmax = () => {
  return (
    <div id="case-study" className='main-wrapper'>
        <Header />
        <div className='case-study-body-wrapper'>
          <CaseStudyHeroCard />
          <img src={cm1} className='case-study-hero' />
          <section className='content-wrapper'>
            <h3 className='title'><span>01</span> Brief/Problem</h3>
            <p>Tartu City History Museums, established in 1955 is the umbrella organisation for five museums: Tartu City Museum, Song Celebration Museum, KGB Cells Museum, Oskar Lots House Museum, and 19th Century Citizen's Museum. Together, the museums uniquely tell the story of Tartu focussing solely on the city and its progress throughout history.</p>
          </section>
          <section className='content-wrapper'>
            <h3 className='title'><span>02</span> The Goal</h3>
            <p>Tartu City History Museums, established in 1955 is the umbrella organisation for five museums: Tartu City Museum, Song Celebration Museum, KGB Cells Museum, Oskar Lots House Museum, and 19th Century Citizen's Museum. Together, the museums uniquely tell the story of Tartu focussing solely on the city and its progress throughout history.</p>
          </section>
          <section className='content-wrapper'>
            <h3 className='title'><span>03</span> My Process</h3>
            <p>Tartu City History Museums, established in 1955 is the umbrella organisation for five museums: Tartu City Museum, Song Celebration Museum, KGB Cells Museum, Oskar Lots House Museum, and 19th Century Citizen's Museum. Together, the museums uniquely tell the story of Tartu focussing solely on the city and its progress throughout history.</p>
          </section>
          <section className='content-wrapper'>
            <h3 className='title'><span>04</span> User Flows/Personas</h3>
            <p>Tartu City History Museums, established in 1955 is the umbrella organisation for five museums: Tartu City Museum, Song Celebration Museum, KGB Cells Museum, Oskar Lots House Museum, and 19th Century Citizen's Museum. Together, the museums uniquely tell the story of Tartu focussing solely on the city and its progress throughout history.</p>
          </section>
          <section className='content-wrapper'>
            <h3 className='title'><span>05</span> Typography & Colors</h3>
            <p>Tartu City History Museums, established in 1955 is the umbrella organisation for five museums: Tartu City Museum, Song Celebration Museum, KGB Cells Museum, Oskar Lots House Museum, and 19th Century Citizen's Museum. Together, the museums uniquely tell the story of Tartu focussing solely on the city and its progress throughout history.</p>
          </section>
          <section className='content-wrapper'>
            <h3 className='title'><span>06</span> Wireframes</h3>
            <p>Tartu City History Museums, established in 1955 is the umbrella organisation for five museums: Tartu City Museum, Song Celebration Museum, KGB Cells Museum, Oskar Lots House Museum, and 19th Century Citizen's Museum. Together, the museums uniquely tell the story of Tartu focussing solely on the city and its progress throughout history.</p>
          </section>
          <section className='content-wrapper'>
            <h3 className='title'><span>07</span> The Result</h3>
            <p>Tartu City History Museums, established in 1955 is the umbrella organisation for five museums: Tartu City Museum, Song Celebration Museum, KGB Cells Museum, Oskar Lots House Museum, and 19th Century Citizen's Museum. Together, the museums uniquely tell the story of Tartu focussing solely on the city and its progress throughout history.</p>
          </section>
        </div>
        <Footer/>
    </div>
  )
}

export default Coinmax
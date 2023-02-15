import React from 'react'
import { Coinmax, Coinshift, Coinshop, Cyber, Drives, FortisForma, Max, Iterative, Peercoin, Techalpha, Vevsa  } from '../assets/img/companyIcon'
import WorkWithCard from './workWithCard'

const IWorkWith = () => {
    return (
        <section id='iWorkWith' className='main-wrapper'>
            <p className='title'>Brands & Company’s <span>i’ve worked with as</span> UX/UI Designer, Product Designer, Graphic Designer :</p>
            <div className='workWithCardWrapper'>
                <WorkWithCard
                    CompanyLogo={Coinmax}
                    MyRoll="UI & Graphic Designer"
                    MyRollExp="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
                />
                <WorkWithCard
                    CompanyLogo={Coinshop}
                    MyRoll="Product Design/ UX Developer"
                    MyRollExp="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
                />
                <WorkWithCard
                    CompanyLogo={Coinmax}
                    MyRoll="Product Designer"
                    MyRollExp="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
                />
                <WorkWithCard
                    CompanyLogo={Techalpha}
                    MyRoll="UI/UX Designer"
                    MyRollExp="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
                />
                <WorkWithCard
                    CompanyLogo={FortisForma}
                    MyRoll="UI/UX Designer"
                    MyRollExp="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
                />
                <WorkWithCard
                    CompanyLogo={Drives}
                    MyRoll="UI Designer / UI Developer"
                    MyRollExp="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
                />
                <WorkWithCard
                    CompanyLogo={Peercoin}
                    MyRoll="UI/UX Designer"
                    MyRollExp="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
                />
                <WorkWithCard
                    CompanyLogo={Vevsa}
                    MyRoll="Product Deisgner"
                    MyRollExp="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
                />
                <WorkWithCard
                    CompanyLogo={Iterative}
                    MyRoll="UI Developer"
                    MyRollExp="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
                />
                <WorkWithCard
                    CompanyLogo={Cyber}
                    MyRoll="UI/UX Developer"
                    MyRollExp="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
                />
                <WorkWithCard
                    CompanyLogo={Max}
                    MyRoll="UI/UX Designer"
                    MyRollExp="Assisted in Dashboard Design/Redesign Landing Page/ Designed Graphics & Assets"
                />
                <div className='workWithCard'>
                    <p className='manymoreTitle'><span>& Many More</span> 😇</p>
                </div>
            </div>
        </section>
    )
  }
  
  export default IWorkWith;
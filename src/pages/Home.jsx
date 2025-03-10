import React from 'react'
import {Hero} from "../components/Home/Hero"
import { Project } from '../components/common/Project'
import { Introduction } from '../components/Home/Introduction'
import { TechSkills } from '../components/Home/TechSkills'
import {Self_info} from '../components/Home/Self_info'
import { Statistic } from '../components/Home/Statistic'
import { Team } from '../components/Home/Team'
import { Testimonial } from '../components/Home/Testimonial'
import { Client } from '../components/Home/Client'
import { Contact } from '../components/Home/Contact'
import { Faqs } from '../components/Home/Faqs'
import {ServiceOffering} from '../components/Home/ServiceOfferings'

export const Home = () => {
  return (
    // Home page
    <div>
    
      <Hero />
      <Project/>
      <Introduction/>
      <TechSkills/>
      <Self_info/>
      <Team/>
      <Testimonial/>
      <Statistic/>
      <Client/>
      <Contact/>
      <ServiceOffering/>
      <Faqs/>
    </div>
  )
}

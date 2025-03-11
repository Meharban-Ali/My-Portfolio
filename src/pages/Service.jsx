import React from 'react'
import { ServicesSection } from '../components/Service/ServicesSection'
import { Offer_Service } from '../components/Service/Offer_Service'
import { Type_Of_Service } from '../components/Service/Type_Of_Service'
import { Contact_form } from '../components/Project/Contact_form'

export const Service = () => {
  return (
    <div className='mt-10'>
      <ServicesSection/>
      <Offer_Service/>
      <Type_Of_Service/>
      <Contact_form/>
    </div>
  )
}

import React from 'react'
import { Project_Info } from '../components/Project/Project_Info'
import { Project } from '../components/common/Project'
import { Contact_form } from '../components/Project/Contact_form'

export const Projects = () => {
  return (
    <div>
      
      <Project_Info/>
      <Project/>
      <Contact_form/>
    </div>
  )
}

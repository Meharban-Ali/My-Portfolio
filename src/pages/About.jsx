import React from 'react'
import { About_Me } from '../components/About/About_Me';
import { Schooling } from '../components/About/Schooling';
import { Academics } from '../components/About/Academics';
import { Learn_Tech } from '../components/About/Learn_Tech';
export const About = () => {
  return (
    <div>
      <About_Me/>
      <Schooling/>
      <Academics/>
      <Learn_Tech/>
    </div>
  )
};

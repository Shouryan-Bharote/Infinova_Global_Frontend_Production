import React from 'react'
// import EduventuresForUniversitiesNavbar from '../../components/EduventuresForUniversitiesNavbar'
import EduventuresForUniversitiesNavbar from '../../components/EduventuresForUniversitiesNavbarNew'
import EduventuresForUniversitiesHeroSection from './EduventuresForUniversitiesHeroSection'
import EduventuresUniversitiesContact from './EduventuresUniversitiesContact'
import EduventuresCourses from './EduventuresCourses'
import EduventuresTrainers from './EduventuresTrainers'
import EduventuresTestimonials from './EduventuresTestimonials'
const EduventuresForUniversities = () => {
  return (
   <>
   <div className='w-[100vw] min-h-[100vh] '>
    <EduventuresForUniversitiesNavbar/>
    <EduventuresForUniversitiesHeroSection/>
    <EduventuresUniversitiesContact/>
    <EduventuresCourses/>
    <EduventuresTrainers/>
    <EduventuresTestimonials/>
   </div>
      

   </>
  )
}

export default EduventuresForUniversities

import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CourseCard from './CourseCard'
import { AppContext } from '../../context/AppContext'
const CoursesSection = () => {
  const {allCourses}=useContext(AppContext)
  return (
    <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3xl font-medium text-gray-800'>Learn from the best</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3'>
        Discover our top-rated courses across various domains, designed to help you excel in your career.<br/> Whether you're looking to upskill or start a new journey, we have the right course for you.
        
      </p>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] px-4 md:px-0 md:my-16 my-10 gap-4'>
        {allCourses.slice(0, 4).map((course, index) => (<CourseCard key={index} course={course}/>))}
      </div>
      <Link to="/course-list/" onClick={()=>scrollT0(0,0)} className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded">
      Show all courses
      </Link>
    </div>
  )
}

export default CoursesSection

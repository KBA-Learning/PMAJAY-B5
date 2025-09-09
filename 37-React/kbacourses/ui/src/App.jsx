import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TopCourses from './components/TopCourses'
import CourseGrid from './components/CourseGrid'
import coursesData from './assets/data/courses.json'
import AllCoursesButton from './components/AllCoursesButton'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TopCourses />
      <CourseGrid />
      <AllCoursesButton />

    </div>
  )
}

export default App
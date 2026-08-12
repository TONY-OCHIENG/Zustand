import React, { useState } from 'react'
import useCourseStore from '../store/store'

function CourseForm() {
    const addCourse = useCourseStore((state) => state.addCourses)
    const [courseTitle,setCourseTitle] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault()
        if (!courseTitle) {
            return window.alert("Add course title")
        }

        addCourse({
            id: Math.ceil(Math.random() * 10000),
            title: courseTitle
        })

        setCourseTitle("")
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" value={courseTitle} name="title" onChange={(event) => setCourseTitle(event.target.value)} id="title" placeholder='Course title'/>
            <button>Add course</button>
        </form>
    </div>
  )
}

export default CourseForm
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

    const handleChange = (event) => {
        const { name, value} = event.target
        setCourseTitle((prev) => ({
            ...prev,
            [name] : value
        }))
    }
    console.log(courseTitle)
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="title" onChange={handleChange} id="title" placeholder='Course title'/>
            <button>Add course</button>
        </form>

    </div>
  )
}

export default CourseForm
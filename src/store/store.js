import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const courseStore =  (set) => ({
    courses: [],
    addCourses: (course) => {
        set((state) => ({
            courses: [course, ...state.courses]
        }))
    },
    removeCourses: (courseId) => {
        set((state) => ({
            courses: state.courses.filter((course) => course.id !== courseId)
        }))
    },
    toggleCourseStatus: (courseId) => {
        set((state) => ({
            courses: state.courses.map((course) => course.id === completed ? {
                ...course,
                completed: !course.completed
            } : course)
        }))
    }
})

const useCourseStore = create(
    devtools(
        persist(courseStore,{
            name:"courses"
        })
    )
)

export default useCourseStore
import "./CoursesList.css"
import CourseCard from "./CourseCard"
import courses from "../data/courses"

export const CoursesList = () => {
  return (
    <>
      <section className="courses">
        <div className="title-projects">
          <h2>Mis cursos</h2>
        </div>

        <div>
          <h2 className="title-courses">Rutas</h2>
          <div className="courses-section">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                description={course.description}
                image={course.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

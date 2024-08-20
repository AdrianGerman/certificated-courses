import "./CoursesContent.css"
import CourseCard from "./CourseCard"

const courses = [
  {
    title: "Curso 1",
    description: "Descripción del curso 1",
    image:
      "https://pbs.twimg.com/profile_images/1776312145816227840/ISlE225__400x400.jpg"
  },
  {
    title: "Curso 2",
    description: "Descripción del curso 2",
    image:
      "https://pbs.twimg.com/profile_images/1776312145816227840/ISlE225__400x400.jpg"
  },
  {
    title: "Curso 2",
    description: "Descripción del curso 2",
    image:
      "https://pbs.twimg.com/profile_images/1776312145816227840/ISlE225__400x400.jpg"
  },
  {
    title: "Curso 2",
    description: "Descripción del curso 2",
    image:
      "https://pbs.twimg.com/profile_images/1776312145816227840/ISlE225__400x400.jpg"
  }
]

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

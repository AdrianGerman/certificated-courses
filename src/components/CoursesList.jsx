import "./CoursesList.css"
import CourseCard from "./CourseCard"
import courses from "../data/courses"
import React, { useState } from "react"

export const CoursesList = () => {
  // Estado para la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState("rutas")
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Función para manejar el cambio de categoría
  const handleCategoryChange = (category) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setSelectedCategory(category)
      setIsTransitioning(false)
    }, 200)
  }

  return (
    <>
      <section className="courses">
        {/* Botones para los filtros */}
        <div className="titles-sections">
          {["rutas", "frontend", "backend", "otros"].map((category) => (
            <a
              key={category}
              className={`ancore-section-title ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault()
                handleCategoryChange(category)
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </a>
          ))}
        </div>

        <div>
          <h2 className="title-courses">
            {selectedCategory.charAt(0).toUpperCase() +
              selectedCategory.slice(1)}
          </h2>
          <div
            className={`courses-section ${
              isTransitioning ? "fade-out" : "fade-in"
            }`}
          >
            {courses[selectedCategory].map((course, index) => (
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

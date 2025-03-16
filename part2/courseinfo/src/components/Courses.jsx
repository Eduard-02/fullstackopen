import React from 'react'

const Header = ({ course }) => <h1>{course}</h1>

const Content = ({ parts }) => {
    const partSection = parts.map((section) =>
        <Part key={section.id} part={section} />
    )
    
    return (
        <div>{partSection}</div>
    )
}

const Part = ({ part }) => {
    return (
        <p>{part.name} {part.exercises}</p>
    )
}

const Total = ({ parts }) => {
    const total = parts.reduce((sum, exTotal) => {
        return sum + exTotal.exercises
    }, 0)

    return (
        <p><b>total of {total} exercises</b></p>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const Courses = ({ courses }) => {
    return (
        <div>
            {courses.map(course =>
                <Course key={course.id} course={course} />
            )}
        </div>
    )
}

export default Courses
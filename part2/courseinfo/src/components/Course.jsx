import React from 'react'

const Header = ({ name }) => <h1>{name}</h1>

const Content = ({ parts }) => {
    const partSection = parts.map(section =>
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

const Course = ({ courses }) => {
    return (
        <div>
            <Header name={courses.name} />
            <Content parts={courses.parts} />
            <Total parts={courses.parts} />
        </div>
    )
}

export default Course
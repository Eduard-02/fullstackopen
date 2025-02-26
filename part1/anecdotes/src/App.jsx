import { useState } from 'react'

const Display = (props) => <h1>{props.text}</h1>
const Button = (props) => {
  return (
      <button onClick={props.onClick}>{props.text}</button>
  )
}

const VotesCount = (props) => <div>has {props.value} votes</div>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ] 
  const [selected, setSelected] = useState(0)

  const random = (max) => Math.floor(Math.random() * max)
  const nextAne = () => {
    const randomNum = random(7)
    setSelected(randomNum)
    console.log(randomNum)
    console.log(copy, "and", votes)
  }

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const copy = [...votes]
  const vote = () => {
    copy[selected] += 1
    setVotes(copy)
    console.log(copy, "and", votes)
  }

  const highestVotes = Math.max(...votes)
  const highestIndex = votes.indexOf(highestVotes)
  const highestVoteAne = anecdotes[highestIndex]

  if (highestIndex === 0) {
    return (
      <div>
        <Display text="Anecdote of the day"/>
        {anecdotes[selected]} <br/>
        <VotesCount value={copy[selected]}/>
        <Button onClick={vote} text="vote"/>
        <Button onClick={nextAne} text="next anecdote"/>
        <Display text="Anecdote with most votes"/>
        There is no votes yet.
      </div>
    )
  }

  return (
    <div>
      <Display text="Anecdote of the day"/>
      {anecdotes[selected]} <br/>
      <VotesCount value={copy[selected]}/>
      <Button onClick={vote} text="vote"/>
      <Button onClick={nextAne} text="next anecdote"/>
      <Display text="Anecdote with most votes"/>
      {anecdotes[highestIndex]}
      <VotesCount value={copy[highestIndex]}/>
    </div>
  )
}

export default App
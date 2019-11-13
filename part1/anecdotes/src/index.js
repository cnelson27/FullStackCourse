import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const Display = ({anecdote, voteCount}) => {
    return (
        <div>
            <blockquote>{anecdote}</blockquote>
            <p>This quote has {voteCount} votes.</p>
        </div>
    )
  }


const HighVoteAnecdote = (anecdotes) => {
    let highVoteAnecdote = 0
    for ( let i = 0; i < anecdotes.anecdotes.length; i+=1) {
        if (anecdotes.votes[i] > anecdotes.votes[highVoteAnecdote]){
            highVoteAnecdote = i
        }
    }
    return (
        <Display anecdote={anecdotes.anecdotes[highVoteAnecdote]} voteCount={anecdotes.votes[highVoteAnecdote]} />
    )
}


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
  })



  const nextAnecdote = () => {
      setSelected(Math.floor(Math.random() * props.anecdotes.length))
  }

  const addVote = (selected) => () => {
      const newVotes = { ...votes }
      newVotes[selected] += 1
      setVotes(newVotes)
  }

  return (
    <div>
      <Display anecdote={props.anecdotes[selected]} voteCount={votes[selected]}/>
      <Button onClick={addVote(selected)} text='Vote Up' />
      <Button onClick={nextAnecdote} text='Next Anecdote' />
      <HighVoteAnecdote anecdotes={props.anecdotes} votes={votes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

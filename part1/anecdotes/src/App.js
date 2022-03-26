
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

export default App
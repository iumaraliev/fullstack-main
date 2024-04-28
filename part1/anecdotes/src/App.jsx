import { useState } from 'react'


function App() {
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0)
  const initialVotes = Array(anecdotes.length).fill(0);
  const [vote, setVotes] = useState(initialVotes);

  function chooseRandomAnecdote() {
    let randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  }
  
  function handleVotes() {
    const newVotes = [...vote];
    newVotes[selected] += 1;
    setVotes(newVotes);
  }
  
  const maxVotes = vote.indexOf(Math.max(...vote));

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <button onClick={handleVotes}>Vote</button>
      <button onClick={chooseRandomAnecdote}>Next Anecdote</button>
      <div>
        {anecdotes[maxVotes]} has {vote[maxVotes]} votes
      </div>
    </div>
  )
}

export default App

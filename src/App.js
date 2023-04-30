import React from 'react';
import { comments } from './commentData';
import Card from './Card';

// https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-front-end-development/tracks/fscj-22-react-part-ii/modules/wdcp-22-components-interacting-218cf398-22f2-4666-97bc-52d6789f0a78/projects/codey-overflow-forum
// part 6

function App() {
  return (
     comments.map(comment =>
      <Card commentObject={comment}/>)
  )
 
}

export default App
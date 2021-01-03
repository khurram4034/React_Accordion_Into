import React, { useState } from 'react';
import data from './data';
import Question from './Question'
import './App.css';

function App() {
  const [questions] = useState(data);
  return (
    <main>
      <div className='container'>
          <h3>Questions and Answears about Login</h3>
          <section className='info'>
            {
              questions.map((question) => {
                return <Question key={question.id}
                {...question} />
              })
            }

          </section>
      </div>
    </main>
  );
}

export default App;

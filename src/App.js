import React from 'react';
import './style.css';

import React, { useEffect, useState, useLayoutEffect } from 'react';

function Comp(props) {
  const [l] = useState(props.t);
  console.log('prop is ', props);
  console.log('local is ', l);

  return <button>{'Secondary Component'}</button>;
}

const Mcomp = React.memo(Comp);

function App() {
  const [st, setSt] = useState(0);
  useEffect(() => console.log('effect called with no deps'), []);
  useEffect(() => console.log('effect called with deps'), [st]);

  useEffect(() => {
    console.log('effect chain -- ', st);
    if (st === 1) {
      setSt(2);
    }
  }, [st]);

  useEffect(() => {
    console.log('effect chain 2 -- ', st);
  }, [st]);

  useLayoutEffect(() => console.log('layout effect called with no deps'), []);
  useLayoutEffect(() => console.log('layout effect called with deps'), [st]);

  console.log('rendering -- ', st);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={() => setSt((p) => p + 1)}>{'test'}</button>
        <Mcomp key={st} t={st} />
      </header>
    </div>
  );
}

export default App;

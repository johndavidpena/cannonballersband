import React from 'react';
import appStyles from './App.module.css';

function App() {
  return (
    <div className={appStyles.app}>
      <header className={appStyles.header}>
        <h1 className={appStyles.title}>cannonballers</h1>
        <p className={appStyles.subtitle}>nerd jam band</p>
      </header>

      <main className={appStyles.main}>
        <section className={appStyles.section}>
          <h2>Elements</h2>
          <p>Catchy, fun, nerdy melodies</p>
          <p>Meaningful, well-crafted arrangements</p>
          <p>Danceable grooves</p>
        </section>
        <section className={appStyles.section}>
          <h2>Tunes</h2>
          <p>Games of Thrones</p>
        </section>
      </main>
    </div>
  );
}

export default App;

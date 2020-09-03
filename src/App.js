import React from 'react';
import styles from './stylesheet.module.css';

function App() {
  const sayHello = () => {
    console.log("hello");
  };
  
  return ( 
    <div className={styles.container}>

    <div className={styles.header}>
      <h1>Logo</h1>
      <div className={styles.headerBar}>
        <div><button>Home</button>
        <button>About</button>
        <button>Benefits</button>
        <button>Contact</button>
        </div>
      </div>

      </div>

      <div className={styles.body}>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>

      </div>
    </div>
   );
}

export default App;

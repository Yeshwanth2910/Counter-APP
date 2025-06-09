import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>React Counter</h1>
      <div style={styles.counterDisplay}>{count}</div>
      <div style={styles.buttonGroup}>
        <button onClick={() => setCount(count + 1)} style={{ ...styles.button, ...styles.increase }}>+</button>
        <button onClick={() => setCount(0)} style={{ ...styles.button, ...styles.reset }}>Reset</button>
        <button onClick={() => setCount(count - 1)} style={{ ...styles.button, ...styles.decrease }}>−</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
    background: 'linear-gradient(135deg, #ece9e6, #ffffff)',
    borderRadius: '12px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
    width: '90%',
    maxWidth: '400px',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '1rem',
  },
  counterDisplay: {
    fontSize: '4rem',
    color: '#2d2d2d',
    margin: '1rem 0',
    fontWeight: 'bold',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1.5rem',
  },
  button: {
    padding: '0.8rem 1.6rem',
    fontSize: '1.2rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'transform 0.2s, background 0.2s',
  },
  increase: {
    backgroundColor: '#4CAF50',
    color: 'white',
  },
  decrease: {
    backgroundColor: '#f44336',
    color: 'white',
  },
  reset: {
    backgroundColor: '#2196F3',
    color: 'white',
  },
};

export default App;

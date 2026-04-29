import React, { useState, useEffect } from 'react';
import './App.css';

// 1. Types of Components
// Functional Component
const FunctionalComponent = () => <div>This is a Functional Component</div>;

// Class Component (legacy)
class ClassComponent extends React.Component {
  render() {
    return <div>This is a Class Component</div>;
  }
}

// 2. Props Concept
const Greeting = ({ name, age }) => {
  return (
    <div>
      <p>Hello {name}, you are {age} years old.</p>
    </div>
  );
};

// 3. State Concept (2 Examples)
const StateExample1 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>State Example 1: Counter</h4>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

const StateExample2 = () => {
  const [text, setText] = useState('');
  return (
    <div>
      <h4>State Example 2: Input Tracker</h4>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type something..." />
      <p>You typed: {text}</p>
    </div>
  );
};

// 4. Hooks Concept (useEffect)
const HooksExample = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    // Cleanup function
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <h4>Hooks Example: Window Resize (useEffect)</h4>
      <p>Current window width: {windowWidth}px</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>React Activities</h1>
      <hr />
      <h2>1. Types of Components</h2>
      <FunctionalComponent />
      <ClassComponent />
      <hr />
      <h2>2. Props Concept</h2>
      <Greeting name="Alice" age={25} />
      <Greeting name="Bob" age={30} />
      <hr />
      <h2>3. State Concept</h2>
      <StateExample1 />
      <StateExample2 />
      <hr />
      <h2>4. Hooks Concept</h2>
      <HooksExample />
    </div>
  );
}

export default App;

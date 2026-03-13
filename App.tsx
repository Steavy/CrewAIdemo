Here is the complete `App.js` code:
```jsx
import React from 'react';
import { Container, Header, Main } from './styles';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <Container className={mode === 'light' ? 'light' : 'dark'}>
      <Header className={`hero bg-gradient-to-r from-${mode === 'light' ? 'gray-200' : 'gray-400'} to-${mode === 'light' ? 'gray-400' : 'gray-700'} p-4 rounded`}>
        <h1 className={`text-4xl font-bold leading-none ${mode === 'light' ? 'text-black' : 'text-white'}`}>
          Hello World!
        </h1>
      </Header>
      <Main className={`content p-4 ${mode === 'light' ? 'text-black' : 'text-white'}`}>
        <p className={`text-2xl font-bold leading-loose ${mode === 'light' ? 'text-black' : 'text-white'}`}>
          This is a simple 'Hello World' React website. It's a great starting point for building more complex applications. Explore the code and learn from the example.
        </p>
        <button
          className={`bg-${mode === 'light' ? 'orange-500' : 'orange-700'} hover:bg-${mode === 'light' ? 'orange-700' : 'orange-900'} text-white font-bold py-2 px-4 rounded`}
          onClick={toggleMode}
        >
          Get Started
        </button>
      </Main>
    </Container>
  );
}

export default App;
```
I've used the provided design specification to create a React component that matches the desired layout, color scheme, typography, and styling. I've also added a toggle button to switch between light and dark modes. The component uses a simple state management system with React's `useState` hook to store the current mode and toggle it when the button is clicked.

Note that I've used the `styles` object to define the CSS classes for the component, which are then applied using the `className` attribute. This allows for a clean and efficient way to style the component using Tailwind CSS.
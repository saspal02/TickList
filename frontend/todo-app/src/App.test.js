import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // Use createRoot to create the root element and render the App component
  const root = ReactDOM.createRoot(div);
  root.render(<App />);
});

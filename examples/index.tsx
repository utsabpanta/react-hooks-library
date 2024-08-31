import React from 'react';
import ReactDOM from 'react-dom';
import UseFormExample from './useFormExample';

const App: React.FC = () => {
  return (
    <div>
      <h1>React Hooks Library Examples</h1>
      <h2>useForm Example</h2>
      <UseFormExample />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
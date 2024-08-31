import React from 'react';
import ReactDOM from 'react-dom';
import UseFormExample from './useFormExample';
import UseLocalStorageExample from './useLocalStorageExample';
import UseThemeExample from './useThemeExample';

const App: React.FC = () => {
  return (
    <div>
      <h1>React Hooks Library Examples</h1>
      <h2>useForm Example</h2>
      <UseFormExample />
      <UseLocalStorageExample />
      <UseThemeExample />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
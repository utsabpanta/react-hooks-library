import React, { useState } from 'react';
import { useClipboard } from '../src';

const UseClipboardExample: React.FC = () => {
  const { copyToClipboard, copiedText } = useClipboard();
  const [inputText, setInputText] = useState('');

  const handleCopy = async () => {
    const success = await copyToClipboard(inputText);
    if (success) {
      alert('Text copied to clipboard!');
    } else {
      alert('Failed to copy text.');
    }
  };

  return (
    <div>
      <h2>useClipboard Example</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to copy"
      />
      <button onClick={handleCopy}>Copy to Clipboard</button>
      {copiedText && <p>Last copied text: {copiedText}</p>}
      <p>Try pasting here to test:</p>
      <textarea rows={3} cols={30} placeholder="Paste copied text here"></textarea>
    </div>
  );
};

export default UseClipboardExample;
import { useState } from 'react';

interface UseClipboardReturn {
  copyToClipboard: (text: string) => Promise<boolean>;
  copiedText: string | null;
}

/**
 * A hook for copying text to the clipboard.
 *
 * @returns {Object} An object containing:
 *   - copyToClipboard: A function to copy text to clipboard
 *   - copiedText: The last successfully copied text
 *
 * @example
 * const { copyToClipboard, copiedText } = useClipboard();
 *
 * return (
 *   <div>
 *     <button onClick={() => copyToClipboard('Hello, World!')}>
 *       Copy "Hello, World!"
 *     </button>
 *     {copiedText && <p>Last copied text: {copiedText}</p>}
 *   </div>
 * );
 */
const useClipboard = (): UseClipboardReturn => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = async (text: string): Promise<boolean> => {
    if (!navigator.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn('Copy failed', error);
      setCopiedText(null);
      return false;
    }
  };

  return { copyToClipboard, copiedText };
};

export default useClipboard;
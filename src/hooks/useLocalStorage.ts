import { useState, useEffect } from 'react';

/**
 * A hook that manages a value in localStorage.
 * 
 * @template T The type of the value being stored
 * @param {string} key The key under which the value is stored in localStorage
 * @param {T} initialValue The initial value to use if no value is found in localStorage
 * @returns {[T, (value: T | ((val: T) => T)) => void]} A tuple containing:
 *   - The current value
 *   - A function to update the value
 * 
 * @example
 * const [name, setName] = useLocalStorage<string>('name', 'John Doe');
 * 
 * // Update the value
 * setName('Jane Doe');
 * 
 * // Update the value using the previous value
 * setName(prevName => prevName + ' Jr.');
 */
const useLocalStorage = <T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] => {
  const readValue = (): T => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(readValue);

  const setValue = (value: T | ((val: T) => T)) => {
    if (typeof window == 'undefined') {
      console.warn(`Tried setting localStorage key "${key}" even though environment is not a client`);
    }

    try {
      const newValue = value instanceof Function ? value(storedValue) : value;
      window.localStorage.setItem(key, JSON.stringify(newValue));
      setStoredValue(newValue);
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  useEffect(() => {
    setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [storedValue, setValue];
};

export default useLocalStorage;
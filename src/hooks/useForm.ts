import { useState, ChangeEvent, FormEvent } from 'react';

/**
 * Represents the structure of form errors.
 * Keys are field names, values are error messages.
 */
interface FormErrors {
  [key: string]: string;
}

/**
 * Type for the validation function.
 * It takes the form values and returns an object with any validation errors.
 */
type ValidateFunction<T> = (values: T) => FormErrors;

/**
 * A custom hook for managing form state and validation.
 *
 * @template T - The type of the form values object.
 * @param {T} initialValues - The initial values for the form fields.
 * @param {ValidateFunction<T>} validate - A function to validate the form values.
 * @returns An object containing form state and handlers.
 */
const useForm = <T extends Record<string, any>>(
  initialValues: T,
  validate: ValidateFunction<T>
) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  /**
   * Handles changes to form inputs.
   * 
   * @param {ChangeEvent<HTMLInputElement>} event - The change event from the input.
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  /**
   * Handles form submission.
   * 
   * @param {(values: T) => void} onSubmit - Function to call with form values if validation passes.
   * @returns {(event: FormEvent<HTMLFormElement>) => void} - Event handler for form submission.
   */
  const handleSubmit = (onSubmit: (values: T) => void) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values);
    }
  };

  return { values, errors, handleChange, handleSubmit };
};

export default useForm;
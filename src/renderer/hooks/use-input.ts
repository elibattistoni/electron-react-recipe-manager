import { useEffect, useState } from 'react';

export default function useInput(validateFn: (input: string) => boolean) {
  const [value, setValue] = useState<string>('');
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  // debouncing for field validation
  useEffect(() => {
    const identifierTimer = setTimeout(() => {
      setIsValid(validateFn(value));
    }, 500);
    return () => {
      clearTimeout(identifierTimer);
    };
  }, [value]);
  const hasError = !isValid && isTouched;

  function valueChangeHandler(
    e: React.FormEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void {
    const newValue = (e.target as HTMLInputElement).value;
    setValue(newValue);
  }

  function inputBlurHandler(): void {
    setIsTouched(true);
  }

  function clearField(): void {
    setValue('');
    setIsTouched(false);
  }

  return {
    value,
    isValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    clearField,
  };
}

import React, { useCallback } from 'react';

function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChangeInput = useCallback(
    (evt) => {
      const input = evt.target;
      const { name } = input;
      const { value } = input;
      const error = input.validationMessage;
      const isFormValid = input.closest('form').checkValidity();

      setValues((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      // записываем ошибки
      setErrors((prevState) => ({
        ...prevState,
        [name]: error,
      }));
      // записываем валидность формы
      setIsValid(isFormValid);
    }, [setValues],
  );

  const resetFrom = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  return {
    values, setValues, handleChangeInput, errors, isValid, resetFrom,
  };
}

export default useFormWithValidation;
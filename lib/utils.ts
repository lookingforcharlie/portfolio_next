// function to check the form input neither a null or undefined value nor a string
export const validateString = (value: unknown, maxLength: number): boolean => {
  if (!value || typeof value !== 'string' || value.length > maxLength) {
    return false;
  }
  return true;
};

// handle error message, read error message and return relative message
export const getErrorMessage = (error: unknown): string => {
  let errorMessage: string;
  if (error instanceof Error) {
    errorMessage = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    errorMessage = String(error.message);
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'Something went wrong';
  }

  return errorMessage;
};

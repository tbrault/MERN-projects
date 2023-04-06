import { useState, useEffect, useRef } from 'react';

interface AlertState {
  showAlert: boolean;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useAlert = (initialShow = false): AlertState => {
  const [showAlert, setShowAlert] = useState(initialShow);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  if (showAlert) {
    timeoutRef.current = setTimeout(() => setShowAlert(false), 3000);
    clearTimeout(timeoutRef.current);
  }

  return { showAlert, setShowAlert };
};

import { useEffect, useRef } from 'react';
import { IAlert } from '../interfaces';

interface AlertProps {
  alert: IAlert;
  clearAlert: React.Dispatch<React.SetStateAction<IAlert>>;
}

function Alert({ alert, clearAlert }: AlertProps) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(
      () => clearAlert({ message: '', type: '', isShowingAlert: false }),
      3000
    );
  }, [alert.isShowingAlert]);

  return <div className={`alert alert-${alert.type}`}>{alert.message}</div>;
}
export default Alert;

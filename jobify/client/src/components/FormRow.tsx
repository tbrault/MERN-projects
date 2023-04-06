import { ChangeEvent } from 'react';

interface FormRowProps {
  type: string;
  name: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function FormRow({
  type,
  name,
  value,
  handleChange,
}: FormRowProps): JSX.Element {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {name}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
}
export default FormRow;

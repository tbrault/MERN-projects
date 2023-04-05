interface FormRowProps {
  type: string;
  lableName: string;
}

function FormRow({ type, lableName }: FormRowProps): JSX.Element {
  return (
    <div className="form-row">
      <label htmlFor={lableName} className="form-label">
        {lableName}
      </label>
      <input name={lableName} type={type} className="form-input" />
    </div>
  );
}
export default FormRow;

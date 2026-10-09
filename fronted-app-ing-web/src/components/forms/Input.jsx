import './Input.css';
export default function Input({ label, error, hint, ...props }) {
  return (
    <div className="input-group">
      {label && <label className="input-label">{label}</label>}
      <input className={`input ${error ? 'input-error' : ''}`} {...props} />
      {error && <span className="input-error-text">{error}</span>}
      {hint && <span className="input-hint">{hint}</span>}
    </div>
  );
}

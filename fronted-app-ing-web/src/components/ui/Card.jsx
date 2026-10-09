import './Card.css';
export default function Card({ children, header, ...props }) {
  return (
    <div className="card" {...props}>
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
    </div>
  );
}

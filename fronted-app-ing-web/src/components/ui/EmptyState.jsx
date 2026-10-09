import './EmptyState.css';
export default function EmptyState({ title = 'No items found', description, action }) {
  return (
    <div className="empty-state">
      <svg className="empty-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
      <h2 className="empty-title">{title}</h2>
      <p className="empty-desc">{description}</p>
      {action && <div className="empty-action">{action}</div>}
    </div>
  );
}

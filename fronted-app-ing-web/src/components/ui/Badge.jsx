import './Badge.css';

export default function Badge({ children, category }) {
  const raw = category || (typeof children === 'string' ? children : 'general');
  const norm = raw
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();

  const cls = `badge badge-${norm || 'general'}`;
  return <span className={cls}>{children}</span>;
}

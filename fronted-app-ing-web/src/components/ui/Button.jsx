import './Button.css';

export default function Button({ children, variant = 'primary', size = 'md', ...props }) {
  const classes = `btn btn-${variant} btn-${size}`;
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

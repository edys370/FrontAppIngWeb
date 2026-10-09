import './SearchBar.css';
export default function SearchBar({ placeholder = 'Search products...', ...props }) {
  return (
    <div className="search-bar">
      <input className="search-input" placeholder={placeholder} {...props} />
    </div>
  );
}

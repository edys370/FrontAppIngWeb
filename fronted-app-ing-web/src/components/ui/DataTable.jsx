import './DataTable.css';
export default function DataTable({ columns, data }) {
  return (
    <div className="table-container">
      <table className="table">
        <thead><tr>{columns.map(c => <th key={c}>{c}</th>)}</tr></thead>
        <tbody>{data.map((row, i) => <tr key={i}>{columns.map((c, j) => <td key={j}>{row[c] || ''}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

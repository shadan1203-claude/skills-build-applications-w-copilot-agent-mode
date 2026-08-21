import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

function displayValue(value) {
  if (value === null || value === undefined) return '—'
  if (typeof value === 'object') return value.name || value.email || value._id || JSON.stringify(value)
  return String(value)
}

export default function CollectionPage({ component, endpoint, title, description, columns }) {
  const [items, setItems] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCollection(component, endpoint)
      .then(setItems)
      .catch((requestError) => setError(requestError.message))
      .finally(() => setLoading(false))
  }, [component, endpoint])

  return (
    <section className="container py-4">
      <div className="mb-4">
        <p className="eyebrow">OctoFit Tracker</p>
        <h1>{title}</h1>
        <p className="lead text-secondary">{description}</p>
      </div>
      {loading && <div className="alert alert-info">Loading {title.toLowerCase()}...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && (
        <div className="card shadow-sm">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead>
                <tr>{columns.map((column) => <th key={column.key}>{column.label}</th>)}</tr>
              </thead>
              <tbody>
                {items.length === 0 && <tr><td colSpan={columns.length} className="text-center py-4">No records yet.</td></tr>}
                {items.map((item, index) => (
                  <tr key={item._id || item.id || index}>
                    {columns.map((column) => <td key={column.key}>{displayValue(item[column.key])}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  )
}

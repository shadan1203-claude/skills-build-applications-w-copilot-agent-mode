const codespaceName = import.meta.env.VITE_CODESPACE_NAME

// Vite proxies /api requests during development, avoiding Codespaces gateway auth.
export const apiBaseUrl = import.meta.env.DEV
  ? ''
  : codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000'

export async function fetchCollection(component, endpoint = `${apiBaseUrl}/api/${component}/`) {
  const response = await fetch(endpoint)
  if (!response.ok) {
    throw new Error(`Unable to load ${component}`)
  }

  const payload = await response.json()
  if (Array.isArray(payload)) return payload

  const collection = payload.results || payload.items || payload.data
  if (Array.isArray(collection)) return collection
  if (collection && typeof collection === 'object') {
    return collection.results || collection.items || collection.data || []
  }
  return []
}

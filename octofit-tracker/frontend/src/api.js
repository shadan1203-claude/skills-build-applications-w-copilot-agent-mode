const codespaceName = import.meta.env.VITE_CODESPACE_NAME

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

export async function fetchCollection(component) {
  const response = await fetch(`${apiBaseUrl}/api/${component}/`)
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

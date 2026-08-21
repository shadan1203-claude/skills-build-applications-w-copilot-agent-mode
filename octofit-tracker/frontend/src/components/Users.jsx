import CollectionPage from './CollectionPage'
import { apiBaseUrl } from '../api'

export default function Users() {
  // Codespaces endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/
  return (
    <CollectionPage
      component="users"
      endpoint={`${apiBaseUrl}/api/users/`}
      title="Athletes"
      description="Manage profiles and discover your fitness community."
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'fitnessLevel', label: 'Fitness level' },
      ]}
    />
  )
}

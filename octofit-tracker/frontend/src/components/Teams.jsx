import CollectionPage from './CollectionPage'
import { apiBaseUrl } from '../api'

export default function Teams() {
  // Codespaces endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/
  return (
    <CollectionPage
      component="teams"
      endpoint={`${apiBaseUrl}/api/teams/`}
      title="Teams"
      description="Connect with teammates and build momentum together."
      columns={[
        { key: 'name', label: 'Team' },
        { key: 'description', label: 'About' },
        { key: 'members', label: 'Members' },
      ]}
    />
  )
}

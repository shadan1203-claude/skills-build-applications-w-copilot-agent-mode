import CollectionPage from './CollectionPage'
import { apiBaseUrl } from '../api'

export default function Activities() {
  // Codespaces endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/
  return (
    <CollectionPage
      component="activities"
      endpoint={`${apiBaseUrl}/api/activities/`}
      title="Activities"
      description="Review completed movement and celebrate your consistency."
      columns={[
        { key: 'type', label: 'Activity' },
        { key: 'durationMinutes', label: 'Minutes' },
        { key: 'calories', label: 'Calories' },
        { key: 'completedAt', label: 'Completed' },
      ]}
    />
  )
}

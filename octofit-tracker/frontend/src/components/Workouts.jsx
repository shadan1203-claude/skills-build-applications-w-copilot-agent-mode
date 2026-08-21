import CollectionPage from './CollectionPage'
import { apiBaseUrl } from '../api'

export default function Workouts() {
  // Codespaces endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/
  return (
    <CollectionPage
      component="workouts"
      endpoint={`${apiBaseUrl}/api/workouts/`}
      title="Workouts"
      description="Find a guided session that fits your goals today."
      columns={[
        { key: 'name', label: 'Workout' },
        { key: 'difficulty', label: 'Difficulty' },
        { key: 'durationMinutes', label: 'Minutes' },
        { key: 'description', label: 'Description' },
      ]}
    />
  )
}

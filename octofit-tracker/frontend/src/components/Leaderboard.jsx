import CollectionPage from './CollectionPage'
import { apiBaseUrl } from '../api'

export default function Leaderboard() {
  // Codespaces endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/
  return (
    <CollectionPage
      component="leaderboard"
      endpoint={`${apiBaseUrl}/api/leaderboard/`}
      title="Leaderboard"
      description="See how your team is progressing this season."
      columns={[
        { key: 'rank', label: 'Rank' },
        { key: 'user', label: 'Athlete' },
        { key: 'team', label: 'Team' },
        { key: 'points', label: 'Points' },
      ]}
    />
  )
}

import CollectionPage from './CollectionPage'

export default function Leaderboard() {
  return (
    <CollectionPage
      component="leaderboard"
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

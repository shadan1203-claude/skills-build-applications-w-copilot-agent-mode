import CollectionPage from './CollectionPage'

export default function Workouts() {
  return (
    <CollectionPage
      component="workouts"
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

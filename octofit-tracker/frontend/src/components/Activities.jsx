import CollectionPage from './CollectionPage'

export default function Activities() {
  return (
    <CollectionPage
      component="activities"
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

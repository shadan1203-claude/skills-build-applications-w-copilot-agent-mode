import CollectionPage from './CollectionPage'

export default function Users() {
  return (
    <CollectionPage
      component="users"
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

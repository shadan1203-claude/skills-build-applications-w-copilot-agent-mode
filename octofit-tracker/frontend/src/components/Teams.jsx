import CollectionPage from './CollectionPage'

export default function Teams() {
  return (
    <CollectionPage
      component="teams"
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

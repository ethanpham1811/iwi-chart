import Card from '@/components/Card'

const withCard = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return function WithCardWrapper(props: P) {
    return (
      <Card>
        <WrappedComponent {...props} />
      </Card>
    )
  }
}
export default withCard

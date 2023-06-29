import GridVector from '@/components/grid-vector/grid-vector'

const styles = {
  main: [
    'flex',
    'flex-col',
    'justify-between',
    'items-center',
    'min-h-screen',
    'p-24',
  ].join(' '),
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className='absolute top-0 -z-10'>
        <GridVector />
      </div>

      <h1>Latest Legal Wrapper</h1>
    </main>
  )
}

import GridVector from '@/components/grid-vector/grid-vector';
import Teaser from '@/components/teaser/teaser';

const styles = {
  main: [
    'flex',
    'flex-col',
    'items-center',
    'min-h-screen',
    'p-24',
  ].join(' '),
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="absolute top-0 -z-10">
        <GridVector />
      </div>

      <Teaser />

      <h1 className='text-lg'>Latest Legal Wrapper</h1>
    </main>
  );
}

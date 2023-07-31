import Link from 'next/link';
import IconLink from '../icons/link';

const styles = {
  link: [
    'block',
    'relative',
    'px-3',
    'py-2',
    'transition',
    'transition-color',
  ].join(' '),
  teaser: [
    'inline-flex',
    'w-full',
    'items-center',
    'rounded-full',
    'border',
    'border-white/10',
    'bg-black/80',
    'text-sm',
    'p-1',
    'backdrop-blur-md',
    'delay-200',
    'hover:transition-all',
    'hover:shadow-md',
    'hover:shadow-zinc-800/50',
    'hover:animate-backgroundShine',
    'hover:bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%]',
  ].join(' '),
  button: [
    'flex',
    'items-center',
    'gap-1',
    'rounded-full',
    'bg-white/10',
    'px-3',
    'py-1',
    'whitespace-nowrap',
  ].join(' '),
};

const Teaser = () => {
  return (
    <div>
      <Link
        className="transition-transform"
        target="_blank"
        rel="noreferrer noopener"
        href="https://swissdao.space/"
      >
        <span className={styles.teaser}>
          <div className="pl-3 pr-2">Announcing our Launch Event</div>{' '}
          <div className={styles.button}>
            Join the waitlist
            <IconLink />
          </div>
        </span>
      </Link>
    </div>
  );
};

export default Teaser;

import Logo from '../logo/logo';

const Feature = () => {
  const styles = {
    wrapper: ['flex', 'flex-col', 'gap-5', 'items-center'].join(' '),
    iconWrapper: [
      'inline-flex',
      'justify-center',
      'items-center',
      'h-16',
      'w-16',
      'rounded-full',
      'bg-gradient-to-tr from-black via-black to-white',
      'p-[2px]',
      'backdrop-blur-sm',
    ].join(' '),
    icon: [
      'flex',
      'justify-center',
      'items-center',
      'w-full',
      'h-full',
      'rounded-full',
      'bg-black/80',
    ].join(' '),
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>
        <div className={styles.icon}>
          <Logo height={24} width={24} />
        </div>
      </div>

      <span className="font-bold">Share team box</span>

      <p>Lorem ipsum dolor sit amet consectetur. Donec mi sit varius et.</p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="grid gap-10 grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2">
      <Feature />
      <Feature />
      <Feature />
      <Feature />
      <Feature />
      <Feature />
    </div>
  );
};

export default Features;

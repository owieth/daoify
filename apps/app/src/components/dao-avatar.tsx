import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
};

export default function DaoAvatar({ src, alt }: Props) {
  return (
    <Image
      height={100}
      width={100}
      src={src}
      alt={alt}
      className="mr-2 h-10 w-10 rounded-lg"
    />
  );
}

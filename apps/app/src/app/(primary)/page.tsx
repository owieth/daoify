import ListItem from '@/src/components/overview/listitem';
import { DaoType } from '@/src/shared/types/models';
import { Metadata } from 'next';
import Menubar from './menubar';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Example dashboard app built using the components.',
};

async function getAllDAOs(): Promise<DaoType[]> {
  return [
    {
      name: 'swissDAO',
      image: 'https://picsum.photos/500',
      members: [
        {
          name: 'Jon Doe',
          image: 'https://picsum.photos/500',
        },
      ],
    },
    {
      name: 'swissDAO',
      image: 'https://picsum.photos/500',
      members: [
        {
          name: 'Jon Doe',
          image: 'https://picsum.photos/500',
        },
      ],
    },
    {
      name: 'swissDAO',
      image: 'https://picsum.photos/500',
      members: [
        {
          name: 'Jon Doe',
          image: 'https://picsum.photos/500',
        },
      ],
    },
    {
      name: 'swissDAO',
      image: 'https://picsum.photos/500',
      members: [
        {
          name: 'Jon Doe',
          image: 'https://picsum.photos/500',
        },
      ],
    },
  ];
}

export default async function DashboardPage() {
  const daos = await getAllDAOs();

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <Menubar />

      <div className="flex flex-col gap-4">
        {daos.map(dao => (
          <ListItem item={dao} />
        ))}
      </div>
    </div>
  );
}

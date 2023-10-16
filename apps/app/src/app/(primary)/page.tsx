import { Card, CardContent } from '@ui/components/ui/card';
import { Metadata } from 'next';
import { MainNav } from '../../components/dashboard/main-nav';
import { DaoType } from '@/src/shared/types/models';
import ListItem from '@/src/components/overview/listitem';

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
    <>
      <div className="flex h-16 items-center px-4">
        <MainNav className="mx-6" />
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>
        <div className="flex flex-col gap-4">
          {daos.map(dao => (
            <ListItem item={dao} />
          ))}
        </div>
      </div>
    </>
  );
}

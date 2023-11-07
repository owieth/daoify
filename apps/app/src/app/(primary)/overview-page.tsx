'use client';

import { CONTRACT } from '@/src/contracts/contracts';
import { DaoType } from '@/src/shared/types/models';
import { useContractRead } from 'wagmi';
import Menubar from './menubar';
import ListItem from '@/src/components/overview/listitem';

function getAllDAOs(): DaoType[] {
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

export default function OverviewPage() {
  // const {
  //   data: daos,
  //   isError,
  //   isLoading,
  // } = useContractRead({
  //   ...CONTRACT,
  //   functionName: 'getDAOs',
  // }) as any;

  const daos = getAllDAOs();

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <Menubar />

      <div className="flex flex-col gap-4">
        {daos?.map(dao => <ListItem item={dao} />)}
      </div>
    </div>
  );
}

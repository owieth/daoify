import ListItem from '@/src/components/overview/listitem';
import { DaoType } from '@/src/shared/types/models';
import { Button } from '@ui/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@ui/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { Metadata } from 'next';

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
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Overview</h1>

        <div className="flex gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Sort By <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <span>Created At</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>A - Z</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button>Issue new DAO</Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {daos.map(dao => (
          <ListItem item={dao} />
        ))}
      </div>
    </div>
  );
}

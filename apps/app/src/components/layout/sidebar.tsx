'use client';

import { CONTRACT } from '@/src/contracts/contracts';
import { Button } from '@ui/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@ui/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@ui/components/ui/form';
import { Input } from '@ui/components/ui/input';
import { cn } from '@ui/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useState } from 'react';
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';
import Logo from '../logo/logo';
import { UserNav } from './user-nav';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useModal } from 'connectkit';

type SidebarItemType = {
  label: string;
  link: string;
  cta?: () => void;
  icon: ReactNode;
};

const FormSchema = z.object({
  name: z.string(),
});

export function Sidebar() {
  const pathname = usePathname();

  const [dialogOpen, setDialogOpen] = useState(false);

  const { setOpen } = useModal();

  const { address } = useAccount();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { watch } = form;

  const formData = watch();

  const { config, error } = usePrepareContractWrite({
    ...CONTRACT,
    functionName: 'safeMint',
    args: [address],
    onSuccess() {
      setDialogOpen(false);
    },
  });

  const { write, error: writeError, isLoading } = useContractWrite(config);

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    write?.();
  };

  const navbar = {
    ctas: [
      {
        label: 'Create DAO',
        link: '/new',
        icon: null,
        cta: () => (address ? setDialogOpen(true) : setOpen(true)),
      },
    ],
    phases: [
      {
        label: 'Dashboard',
        link: '/dashboard',
        icon: null,
      },
      {
        label: 'Payments',
        link: '/payments',
        icon: null,
      },
      {
        label: 'Maintenance',
        link: '/maintenance',
        icon: null,
      },
    ],
    sites: [
      {
        label: 'Overview',
        link: '/',
        icon: null,
      },
    ],
  };

  const renderLinkItem = (item: SidebarItemType, i: number) => {
    const isActive = pathname === item.link;

    const LinkWrapper = ({ children }: { children: ReactNode }) =>
      item.cta ? (
        children
      ) : (
        <Link href={item.link} className="flex w-full">
          {children}
        </Link>
      );

    return (
      <Button
        key={i}
        variant={isActive ? 'outline' : 'ghost'}
        className={cn(
          'w-full justify-start',
          isActive && 'bg-white text-black',
        )}
        onClick={item.cta}
      >
        <LinkWrapper>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
          >
            <circle cx="12" cy="12" r="10" />
            <polygon points="10 8 16 12 10 16 10 8" />
          </svg>
          {item.label}
        </LinkWrapper>
      </Button>
    );
  };

  return (
    <>
      <div className="flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-4">
            <Logo
              height={25}
              width={25}
              className="text-black dark:text-white"
            />
            <h1 className="text-md font-bold">DAOify</h1>
          </div>

          <div className="my-2 w-full border" />

          <div className="mt-2 space-y-2">
            {navbar.ctas.map(renderLinkItem)}
          </div>

          <div className="my-2 w-full border" />

          <div className="mt-2 space-y-2">
            {navbar.phases.map(renderLinkItem)}
          </div>

          <div className="my-2 w-full border" />

          <div className="mt-2 space-y-2">
            {navbar.sites.map(renderLinkItem)}
          </div>
        </div>

        <UserNav />
      </div>

      <Dialog open={dialogOpen} onOpenChange={() => setDialogOpen(!dialogOpen)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create your DAO</DialogTitle>
            <DialogDescription>
              Enter your DAO's name here. Click mint when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-2/3 space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="DAO Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" disabled={!write}>
                  Mint
                </Button>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

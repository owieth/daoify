'use client';

import { CONTRACT } from '@/src/contracts/contracts';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@ui/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@ui/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@ui/components/ui/dropdown-menu';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@ui/components/ui/form';
import { Input } from '@ui/components/ui/input';
import { Label } from '@ui/components/ui/label';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';
import * as z from 'zod';

const FormSchema = z.object({
  name: z.string(),
});

export default function Menubar() {
  const [open, setOpen] = useState(false);

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
      setOpen(false);
    },
  });

  const { write, error: writeError, isLoading } = useContractWrite(config);

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    write?.();
  };

  return (
    <>
      <Dialog open={open} onOpenChange={() => setOpen(!open)}>
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

          <Button onClick={() => setOpen(true)}>Issue new DAO</Button>
        </div>
      </div>
    </>
  );
}

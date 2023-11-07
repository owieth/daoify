'use client';

import { CONTRACT } from '@/src/contracts/contracts';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@ui/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@ui/components/ui/form';
import { Input } from '@ui/components/ui/input';
import { cn } from '@ui/lib/utils';
import { useFieldArray, useForm } from 'react-hook-form';
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';
import * as z from 'zod';

type Props = {
  onSuccess: () => void;
};

const FormSchema = z.object({
  name: z.string(),
  owner: z.string(),
  members: z.array(
    z.object({
      value: z.string(),
    }),
  ),
  imageUri: z.string(),
});

type FormValues = z.infer<typeof FormSchema>;

export default function CreateDaoForm({ onSuccess }: Props) {
  const { address } = useAccount();

  const defaultValues: Partial<FormValues> = {
    owner: address,
    members: [{ value: '' }],
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { fields, append } = useFieldArray({
    name: 'members',
    control: form.control,
  });

  const { watch } = form;

  const formData = watch();

  const { config, error } = usePrepareContractWrite({
    ...CONTRACT,
    functionName: 'createDAO',
    args: [formData.owner, formData.name, formData.members, formData.imageUri],
    onSuccess() {
      onSuccess;
    },
  });

  const { write, error: writeError, isLoading } = useContractWrite(config);

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    write?.();
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormDescription>Give your DAO a name.</FormDescription>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="owner"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Owner</FormLabel>
              <FormDescription>Give your DAO an onwer.</FormDescription>
              <FormControl>
                <Input placeholder="Owner" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`members.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && 'sr-only')}>
                    Members
                  </FormLabel>
                  <FormDescription className={cn(index !== 0 && 'sr-only')}>
                    Add your Member's addresses.
                  </FormDescription>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => append({ value: '' })}
          >
            Add URL
          </Button>
        </div>

        <FormField
          control={form.control}
          name="imageUri"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image Uri</FormLabel>
              <FormDescription>Give your DAO an image.</FormDescription>
              <FormControl>
                <Input placeholder="Image" {...field} />
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
  );
}

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useTranslations } from 'next-intl';
import { Separator } from '@shadcn/separator';
import { Header } from '@@/ui-custom/header';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  fullName: z.string().min(5, {
    message: 'Full name is required.',
  }),
  cpus: z.number().min(1, {
    message: 'CPUs must be at least 1.',
  }),
  ram: z.number().min(1, {
    message: 'RAM must be at least 1 GB.',
  }),
  storage: z.number().min(1, {
    message: 'Storage must be at least 1 GB.',
  }),
  storageType: z.enum(['SSD', 'HDD', 'NVMe']),
  os: z.enum(['Windows', 'Linux', 'FreeBSD']),
  bandwidth: z.number().min(1, {
    message: 'Bandwidth must be at least 1 GB.',
  }),
  backup: z.enum(['Yes', 'No']),
  sla: z.enum(['Basic', 'Standard', 'Premium']),
  location: z.enum(['Montpellier', 'Nîmes', 'Paris', 'Lyon', 'Marseille']),
  scalability: z.enum(['Basic', 'Standard', 'Premium']),
  pricing: z.enum(['Hourly', 'Monthly']),
  support: z.enum(['Free', 'Premium']),
});

export default function NewEstimate() {
  const t = useTranslations();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <>
      <Header
        title={t('Estimate.new.title')}
        subtitle={t('Estimate.new.description')}
      />
      <Separator className="my-4" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {quoteInputs.map((input, i) => (
            <FormField
              key={i}
              control={form.control}
              name={input.name as any}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{input.placeholder}</FormLabel>
                  <FormControl>

                    <Input
                      placeholder={input.placeholder}
                      {...field}
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
}

interface QuoteInput {
  name: string;
  type: string;
  placeholder: string;
}

const quoteInputs: QuoteInput[] = [
  {
    name: 'fullName',
    type: 'text',
    placeholder: 'Full name of the person in charge',
  },
  {
    name: 'cpus',
    type: 'number',
    placeholder: 'Number of CPUs',
  },
  {
    name: 'ram',
    type: 'number',
    placeholder: 'Amount of RAM (GB)',
  },
  {
    name: 'storage',
    type: 'number',
    placeholder: 'Storage capacity (GB)',
  },
  {
    name: 'bandwidth',
    type: 'number',
    placeholder: 'Monthly data transfer (MB)',
  },
];

const selectInputs = [
  {
    name: 'storageType',
    type: 'text',
    placeholder: 'Storage type (SSD, HDD, etc.)',
  },
  {
    name: 'os',
    placeholder: 'Operating system',
  },
  {
    name: 'backup',
    placeholder: 'Backup and disaster recovery options',
  },
  {
    name: 'sla',
    placeholder: 'Desired service level agreement terms',
  },
  {
    name: 'location',
    placeholder: 'Desired server location',
  },
  {
    name: 'scalability',
    placeholder: 'Scalability requirements',
  },
  {
    name: 'pricing',
    placeholder: 'Desired pricing model',
  },
  {
    name: 'support',
    placeholder: 'Support requirements',
  },
];

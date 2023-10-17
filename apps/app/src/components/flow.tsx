import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@ui/components/ui/tabs';
import { kebabCase } from 'lodash';
import { ReactNode } from 'react';

type Props = {
  value?: string;
  className?: string;
  children?: ReactNode;
};

const Flow = ({ children, className }: Props) => (
  <Tabs className={className}>{children}</Tabs>
);

const FlowTriggers = ({ children }: Props) => <TabsList>{children}</TabsList>;

const FlowTrigger = ({ value }: Props) => (
  <TabsTrigger value={kebabCase(value)}>{value}</TabsTrigger>
);

const FlowContent = ({ value, children }: Props) => (
  <TabsContent value={kebabCase(value)}>{children}</TabsContent>
);

export { Flow, FlowTriggers, FlowTrigger, FlowContent };

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@ui/components/ui/tabs';
import { kebabCase } from 'lodash';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

type Props = {
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
};

type FlowTriggerProps = {
  onClick: () => void;
} & Props;

const Flow = ({ defaultValue, children, className }: Props) => (
  <Tabs defaultValue={kebabCase(defaultValue)} className={className}>
    {children}
  </Tabs>
);

const FlowTabs = ({ children }: Props) => <TabsList>{children}</TabsList>;

const FlowTab = ({ value }: Props) => (
  <TabsTrigger value={kebabCase(value)} disabled>
    {value}
  </TabsTrigger>
);

const FlowTrigger = ({ value, disabled, onClick }: FlowTriggerProps) => (
  <TabsTrigger value={kebabCase(value)} disabled={disabled} onClick={onClick}>
    {value === 'front' ? <ArrowRight /> : <ArrowLeft />}
  </TabsTrigger>
);

const FlowContent = ({ value, children }: Props) => (
  <TabsContent value={kebabCase(value)}>{children}</TabsContent>
);

export { Flow, FlowContent, FlowTab, FlowTabs, FlowTrigger };

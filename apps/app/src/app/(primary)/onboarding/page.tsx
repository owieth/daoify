import { Flow, FlowTabs, FlowTab, FlowContent } from '@/src/components/flow';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Onboarding',
  description: 'Example dashboard app built using the components.',
};

export default function OnboardingPage() {
  const flowItems = ['Personal Details', 'DAO Details', 'Legal Details'];

  return (
    <div className="m-auto">
      <Flow defaultValue={flowItems[0]}>
        <FlowTabs>
          {flowItems.map(flow => (
            <FlowTab value={flow} />
          ))}
        </FlowTabs>

        {flowItems.map(flow => (
          <FlowContent value={flow}>
            <p>{flow}</p>
          </FlowContent>
        ))}
      </Flow>
    </div>
  );
}

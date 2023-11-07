import { Metadata } from 'next';
import OverviewPage from './overview-page';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Example dashboard app built using the components.',
};

export default async function DashboardPage() {
  return <OverviewPage />;
}

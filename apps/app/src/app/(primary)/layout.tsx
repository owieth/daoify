import { Sidebar } from '@/src/components/layout/sidebar';
import { Card } from '@ui/components/ui/card';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid h-full gap-4 lg:grid-cols-5">
      <Sidebar />
      <Card className="col-span-3 flex flex-col lg:col-span-4">{children}</Card>
    </div>
  );
}

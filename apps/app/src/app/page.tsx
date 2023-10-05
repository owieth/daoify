import { Metadata } from 'next';
import { Sidebar } from '../components/sidebar';

export const metadata: Metadata = {
  title: 'Music App',
  description: 'Example music app using the components.',
};

export default function MusicPage() {
  return (
    <div className="border-t">
      <div className="bg-background">
        <div className="grid lg:grid-cols-5">
          <Sidebar />
          <div className="col-span-3 lg:col-span-4 lg:border-l">
            <div className="h-full px-4 py-6 lg:px-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

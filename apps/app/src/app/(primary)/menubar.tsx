import { Button } from '@ui/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@ui/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

export default function Menubar() {
  return (
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
      </div>
    </div>
  );
}

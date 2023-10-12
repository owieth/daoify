import { Avatar, AvatarFallback, AvatarImage } from '@ui/components/ui/avatar';
import { Button } from '@ui/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@ui/components/ui/dropdown-menu';
import { Tabs, TabsList, TabsTrigger } from '@ui/components/ui/tabs';
import { useTheme } from 'next-themes';

export function UserNav() {
  const { theme, themes, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative flex gap-5 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatars/01.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>

          <div className="flex flex-col text-start">
            <span>{'Max Mustermann'}</span>
            <span>{'max@mustermann.io'}</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">shadcn</p>
            <p className="text-muted-foreground text-xs leading-none">
              m@example.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>
            <Tabs defaultValue={theme} className="w-full">
              <TabsList>
                {themes.map((value, i) => (
                  <TabsTrigger
                    key={i}
                    value={value}
                    onClick={() => setTheme(value)}
                  >
                    {value}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Sign out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

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
import { useTheme } from 'next-themes';
import { IconMoon } from './icons/moon';
import { IconSun } from './icons/sun';
import { IconSystem } from './icons/system';
import { ConnectKitButton } from 'connectkit';
import { Loader2 } from 'lucide-react';

export function UserNav() {
  const { theme, themes, setTheme } = useTheme();

  return (
    <ConnectKitButton.Custom>
      {({
        isConnected,
        isConnecting,
        show,
        hide,
        truncatedAddress,
        ensName,
      }) => {
        return isConnected ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  {ensName && (
                    <p className="text-sm font-medium leading-none">
                      {ensName}
                    </p>
                  )}
                  <p className="text-muted-foreground text-xs leading-none">
                    {truncatedAddress}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>
                  {themes.map((value, i) => (
                    <Button
                      key={i}
                      variant={theme === value ? 'default' : 'outline'}
                      size="icon"
                      onClick={() => setTheme(value)}
                    >
                      {value === 'light' ? (
                        <IconSun className="h-4 w-4" />
                      ) : value === 'dark' ? (
                        <IconMoon className="h-4 w-4" />
                      ) : (
                        <IconSystem className="h-4 w-4" />
                      )}
                    </Button>
                  ))}
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={show}>
                Sign out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button onClick={show} disabled={isConnecting}>
            {isConnecting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Connecting...
              </>
            ) : (
              <>Connect</>
            )}
          </Button>
        );
      }}
    </ConnectKitButton.Custom>
  );
}

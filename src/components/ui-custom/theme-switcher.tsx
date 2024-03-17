'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@shadcn/button';

type Props = {
  darkLabel?: string;
  lightLabel?: string;
};

export function ThemeSwitcher(props: Props) {
  const { resolvedTheme, setTheme } = useTheme();
  const isDarkTheme = resolvedTheme === 'dark';

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(isDarkTheme ? 'light' : 'dark')}
      size={
        (!isDarkTheme && props.lightLabel) || (isDarkTheme && props.darkLabel)
          ? undefined
          : 'icon'
      }
      className="space-x-1"
    >
      {!isDarkTheme && (
        <>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          {props.lightLabel && <span>{props.lightLabel}</span>}
        </>
      )}
      {isDarkTheme && (
        <>
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          {props.darkLabel && <span>{props.darkLabel}</span>}
        </>
      )}
    </Button>
  );
}

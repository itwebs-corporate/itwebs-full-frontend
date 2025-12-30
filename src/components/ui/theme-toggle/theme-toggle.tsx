'use client';
import { useTheme } from 'next-themes';
import { toast } from 'sonner';

import { Button } from '../button/button';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col gap-2">
      The current theme is: {theme}
      <Button
        onClick={() => {
          setTheme('light');
          toast.success('Saved', {
            description: 'Changes were saved successfully',
          });
        }}
        type="button"
      >
        Light
      </Button>
      <Button onClick={() => setTheme('dark')} type="button">
        Dark
      </Button>
    </div>
  );
}

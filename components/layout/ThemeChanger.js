import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const themes = [{ name: 'Light' }, { name: 'Dark' }];

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex justify-between items-center">
      <button>
        <select
          name="theme"
          id="theme-select"
          className="py-1 px-3 outline-none border-none focus:ring-0 text-tiny"
          onChange={(e) => setTheme(e.currentTarget.value)}
          value={theme}
        >
          {themes.map((t) => (
            <option key={t.name.toLowerCase()} value={t.name.toLowerCase()}>
              {t.name}
            </option>
          ))}
        </select>
      </button>
    </div>
  );
};

export default ThemeChanger;
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

    useEffect(()=>{
        const saveTheme=localStorage.getItem('theme');
        if(saveTheme=== 'dark'){
            setDark(true);
            document.documentElement.classList.add('dark');
        }
    },[])
    const toggleTheme = () => {
        const newDark=!dark;
        setDark(newDark);
        document.documentElement.classList.toggle('dark', newDark);
        localStorage.setItem('theme', newDark ? 'dark' : 'light');
    }
  return (
    <button
      onClick={() => toggleTheme()}
      className="p-2 rounded-md hover:bg-muted transition"
    >
      {dark ? (
        <Sun className="h-5 w-5 text-yellow-700" />
      ) : (
        <Moon className="h-5 w-5 text-gray-500" />
      )}
    </button>
  );
};
export default ThemeToggle;

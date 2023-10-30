import { useState, useEffect } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
const Toggle = () => {
  const themes = { winter: "winter", dracula: "dracula" };
  const getThemeFromLocalStorage = () => {
    return localStorage.getItem("theme") || themes.dracula;
  };
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    const { winter, dracula } = themes;
    const newTheme = theme === winter ? dracula : winter;
    setTheme(newTheme);
  };

  return (
    <label className="swap swap-rotate ">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" onChange={handleTheme} />

      {/* sun icon */}
      <BsSunFill className="swap-on h-4 w-4" />

      {/* moon icon */}
      <BsMoonFill className="swap-off h-4 w-4" />
    </label>
  );
};

export default Toggle;

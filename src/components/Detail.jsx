import { LangContext } from "@/contexts/LangContext";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export const Detail = () => {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  let detail = lang.detail.lightActivated;
  if (theme.name === "light") detail = lang.detail.lightActivated;
  else detail = lang.detail.darkActivated;
  return (
    <p className="text-center" style={{ color: theme.fgColor }}>
      {detail}
    </p>
  );
};

import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        orange: {
          500: "#db8016",
        },
        yellow: {
          200: "#fffbd8",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

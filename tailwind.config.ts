import type { Config } from "tailwindcss";

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

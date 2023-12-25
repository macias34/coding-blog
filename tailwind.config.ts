import type { Config } from "tailwindcss";

const config: Config = {
  content: ["{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  corePlugins: { preflight: false },
  plugins: [],
};
export default config;

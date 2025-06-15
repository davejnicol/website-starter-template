import postcssPresetEnv from "postcss-preset-env";
import { purgeCSSPlugin } from "@fullhuman/postcss-purgecss";

export default {
  plugins: [
    purgeCSSPlugin({
      content: ["./**/*.html"],
    }),
    postcssPresetEnv({
      stage: 2,
      features: {
        "logical-properties-and-values": false,
        "opacity-percentage": true,
        "text-decoration-shorthand": true
      }
    }),
  ],
};
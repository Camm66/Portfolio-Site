import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

// eslint-config-next v16 ships native flat configs, so FlatCompat is no longer needed.
const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    // Pin the React version. eslint-plugin-react's auto-detection calls
    // context.getFilename(), which ESLint 10 removed — pinning skips that path.
    settings: { react: { version: "19.2" } },
  },
  {
    ignores: [".next/**", "out/**", "node_modules/**"],
  },
];

export default eslintConfig;

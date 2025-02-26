import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "max-len": ["error", { code: 80 }], // Limita a linha a 80 caracteres
      "quotes": ["error", "double"], // Força o uso de aspas duplas
      "semi": ["error", "always"], // Exige ponto e vírgula no final das linhas
    },
  },
];

export default eslintConfig;

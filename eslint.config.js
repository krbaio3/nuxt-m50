// // @ts-check

import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import eslintXo from 'eslint-config-xo';
import eslintXoTs from 'eslint-config-xo-typescript';
import eslintPluginPrettier from 'eslint-plugin-prettier';

const { eslintRecommended, recommendedTypeChecked, strictTypeChecked, stylistic, stylisticTypeChecked, strict } =
    tsEslint.configs;

export default tsEslint.config({
    ignores: ['**/build/**', '**/dist/**', 'node_modules/**'],
    files: ['** /*.ts'],
    languageOptions: {
        parserOptions: {
            project: true,
            tsconfigRootDir: import.meta.dirname,
        },
    },
    extends: [
        eslint.configs.recommended,
        eslintRecommended,
        recommendedTypeChecked,
        stylistic,
        strict,
        strictTypeChecked,
        stylisticTypeChecked,
        eslintXo,
        eslintXoTs,
        eslintPluginPrettier,
    ],
    rules: {},
});

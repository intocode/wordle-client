module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    // если не убрать функции выглядят по-уродски
    'arrow-body-style': 'off',

    // чтобы не оставляли лишние логи
    'no-console': 'warn',

    'react/function-component-definition': 'off',
    
    // отключаем, т.к. правило считается устаревшим, typescript справляется сам без proptypes
    'react/require-default-props': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
};

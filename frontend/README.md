# 🍕 Pizza - Frontend

### TypeScript:  
`npx create-react-app --template typescript front`  

### Tailwind:  
`npm install tailwindcss postcss autoprefixer -D`  
`npx tailwindcss init -p`  

**tailwind.config.js**  
```js
content: [
  "./src/**/*.{ts,tsx}",
],
```

**index.css**  
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Storybook:  
`npm i @storybook/react`  
`npx storybook init`  
`npm run storybook`  

### Craco:  
> (Get all the benefits of Create React App and customization without using 'eject' by adding a single configuration (e.g. craco.> config.js) file at the root of your application and customize your ESLint, Babel, PostCSS configurations and many more.)  
`npm i @craco/craco -D`  

React-app-alias (oklas)  
https://github.com/oklas/react-app-alias  
`npm install react-app-alias -D`

**tsconfig.paths.json**  
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@app/*": ["src/*"]
    }
  }
}
```

**tsconfig.json**  
```json
"extends": "./tsconfig.paths.json" // tsconfig! not jsconfig
```

**craco.config.js**  
```js
const { CracoAliasPlugin } = require('react-app-alias')

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {}
    }
  ]
}
```

**package.json**  
> Change react-scripts to craco
```json
  // "scripts": {
  //   "start": "react-scripts start",
  //   "build": "react-scripts build",
  //   "test": "react-scripts test",
  //   "storybook": "start-storybook -p 6006 -s public",
  //   "build-storybook": "build-storybook -s public"
  // },

  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "storybook": "start-storybook -p 6006 -s public",
    "build-storybook": "build-storybook -s public"
  },
````

> Try to change path in index.tsx

**index.tsx**  
```tsx
import { App } from '@app/App';
```

### tsconfig-paths-webpack-plugin  
Fix Error:  
"Module not found: Can't resolve '@app/mocks/pizza.json'  
> Storybook doesn't see path @app/..."  

`npm install --save-dev tsconfig-paths-webpack-plugin`

**.storybook/main.js**  
```js
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

webpackFinal: (config) => {
  config.resolve.plugins = [new TsconfigPathsPlugin()]
  return config
}
```

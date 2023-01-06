# 🍕 Pizza - Frontend


TypeScript:  
`npx create-react-app --template typescript front`  

Tailwind:  
`npm install tailwindcss postcss autoprefixer -D`  
`npx tailwindcss init -p`  

tailwind.config.js  
```js
content: [
  "./src/**/*.{ts,tsx}",
],
```

index.css  
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Storybook:  
`npm i @storybook/react`  
`npx storybook init`  
`npm run storybook`  
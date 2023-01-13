# Admin

$ `npx create-react-app admin --template typescript`  
## React Admin:  
$ `npm install react-admin`  
## Material UI:  
$ `npm install @mui/material @emotion/react @emotion/styled`  
## GraphQL & ra-data-hasura
$ `npm i graphql ra-data-hasura`  

Get URI from Hasura console -> http://localhost:8080/v1/graphql  

**App.tsx**
```jsx
const buildDataProvider = async () => {
  const dp = await buildHasuraProvider({
    clientOptions: { uri: 'http://localhost:8080/v1/graphql' },
  });
};
```



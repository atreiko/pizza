# Hasura

Get docker compose file  

https://hasura.io/docs/latest/getting-started/docker-simple/  
> in a new directory run  
`wget https://raw.githubusercontent.com/hasura/graphql-engine/stable/install-manifests/docker-compose/docker-compose.yaml`  

---

**docker-compose.yaml**  
```yaml
  postgres:
    container_name: pizza_pg

  graphql-engine:
    container_name: pizza_hasura
```

$ `docker-compose up`

====  

Open: http://localhost:8080/  
Create DATA - default  
Copy HASURA_GRAPHQL_METADATA_DATABASE_URL from docker-compose.yaml
Paste in Database URL -> postgres://postgres:postgrespassword@postgres:5432/postgres  
Push "Connect database"  

====  

"Create Table"   
Frequently used columns -> UUID  
Configure fields  
"Add Table"  

====  

"Insert Row"  
Enter fields  
"Save"  

====  

API  
Add fields to GriphiQL from menu  
Push PLAY to get json  

====  

## Hasura cli

**docker-compose.yaml**
```yaml
  HASURA_GRAPHQL_ENABLE_CONSOLE: "false"
```
$ `Ctrl+C`  
$ `npm init -y`  

**package.json**
```json
  "version": "0.1.0",
  "main: "index.js" //! DELETE
```

Add .gitignore  
$ `npm install --save-dev hasura-cli`  

====  
Doc: Migrations, Metadata and Seeds/Setup  

$ `docker-compose up` (console should be disabled)  

> Open new terminal in hasura dir:  
$ `npx hasura init pizza --endpoint http://localhost:8080`  

====
> Move folders 'metadata', 'migrations', 'seeds' and file 'config.yaml' to root directory  
> Delete empty folder  

**package.json**
```json
  "scripts": {
    "start": "hasura console"
  },
```

Open console with `npm start`  
Hasura started at `http://localhost:9695/`  

### Create Seed file
https://hasura.io/docs/latest/migrations-metadata-seeds/manage-seeds/  

$ `npx hasura seed create menuSeed --from-table menu`  

Create sql file in 'seeds' folder  
Delete files from data in hasuras console  
Open new terminal to add files from seeds to hasuras console    
$ `npx hasura seed apply`
# keypath-assessment

### To run the project

### requirement

`docker`

```
I'm pretty sure docker-cli is installed as well when installing the core docker so yea
```

`docker compose up -d --build`

Or: run the start.sh script provided in the root file

`bash ./start.sh`

or just

`./start.sh`

## Running the project in dev environment

### backend

Need at least `=> node 18`

`npm i`
`npm run dev-r`

### frontend

`npm i`
`npm run dev`

### DB: [mongodb]

## To make it easier to create data after build you can

```
navigate to "/set-data" on frontend webpage and you'll see two buttons (initData & resetData)
- They do exactly that
- "Init data" will insert all the necessary data into "Question" "Answers" & "Characters"
- "reset data" will delete all the data in "Question" "Answers" & "Characters"
- I did not put any constraint in that page so pls dont spam [might need to do only admin]
```

### Or you can trigger it through backend all

```
- call '<backend-uri>/reset-data'
- call '<backend-uri>/init-data'
```

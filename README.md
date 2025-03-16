# keypath-assessment

## Pls navigate to: `http://128.199.161.154:8080` for viewing. I will take this down in 2 weeks time. Thank you ~

### To run the project

### requirement

- `docker`
- `docker-compose-plugin` (follow this to install manually: <https://docs.docker.com/compose/install/linux/#install-the-plugin-manually>)

then if you want to manually trigger the docker compose:

`docker compose up -d --build`

Or (recommended): run the start.sh script provided in the root file: (dont worry they are just docker compose command)

`bash ./start.sh`

or just

`./start.sh`

## Running the project in dev environment

### backend

fill up `.env` file based on `.env.sample`. Pls provide 2048bits for the secrets as I used RSA256 for the JWT token generation. Other than that it should be explanatory by it's name.

Need at least `=> node 18`

`npm i`
`npm run dev-r`

### frontend

provide an `.env` file based on the `.env.sample`. The content should only be `VITE_BACKEND_URL` which pointing to the backend

`npm i`
`npm run dev`

### DB: [mongodb]

create one with default port (27017) and use the url for backend env

## To make it easier to create data after build you can

```
navigate to "/set-data" on frontend webpage and you'll see two buttons (initData & resetData)
- They do exactly that
- "Init data" will insert all the necessary data into "Question" "Answers" & "Characters"
- "reset data" will delete all the data in "Question" "Answers" & "Characters"
- I did not put any constraint in that page so pls dont spam [might need to do only admin]
```

### Or you can trigger it through backend call

```
- call '<backend-uri>/reset-data'
- call '<backend-uri>/init-data'
```

disclaimer:

1. For simplicity, I did not make this deployment to be https & I only use docker nginx directly after compose. I did not set a domain name etc.
2. This is my first time using `VueJs` although it is interesting, I kinda took too much time learning it and I dont think I managed to do everything thoroughly.
3. The login feature will only be used to save the result in database with the current logged in user.
4. Improvement if I have time, I would do:

   - unit test for backend
   - input validation
   - set refresh/access token into cookie from api
   - add protected api (through authentication)
   - properly set up the cors to only allow FE calls from the deployed uri
   - able to revisit result page and fetch current logged in user record properly
   - properly set up nginx & use domain & tls/https
   - cater for different screen resolution

5. As mentioned above, this current code work best for full screen that is more than > 1200px (preferably desktop size), i did not have time to cater for different screen size
6. I'm not good in UI/UX so they probably bad, pls excuse them haha
7. AND, I know I shouldnt push the secret like that (in docker compose yml file) but yea I just want to make it simple :p

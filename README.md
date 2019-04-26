# Saphir

## Getting started :

To fully use the dev env, you need a unix env (in order to use traefik)

**Build**
```
docker-compose build
```
or 

**run**
```
make run
```

**Congrats ! Your app is running**

Front : myproject.test (port = 7000)

Back : api.myproject.test (back = 3000)

*You can change the urls in the docker-compose.yml & in .docker/traefik/traefik.toml*



## Others commands :

**Start**
```
make up
```

**Install front packages**
```
make install
```

**Stop the project**
```
make down
```

**Create the database**
```
make create-db
```

**Run the migration**
```
make migrate-db
```

**Drop the database**
```
make drop-db
```

**Bash for ruby  API**
```
make bash
```

**Clean front packages**
```
make clean-front
```

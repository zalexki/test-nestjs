DM_IP=$(shell command -v docker-machine 1> /dev/null && docker-machine ip || echo 127.0.0.1)

help:
	@egrep "^#" Makefile


# target: docker-up|du                           - Start docker containers
du: docker-up
docker-up: docker-compose-build

docker-compose-force-rebuild:
	docker-compose build --no-cache --pull
	docker-compose up -d --force-recreate

docker-compose-build:
	docker-compose up -d --build

# target: docker-down|db               	         - Stop docker containers
dd: docker-down
docker-down:
	docker-compose down

# target: bash-app                               - Connect to the app docker container
ba: bash-app
bash-app:
	docker-compose exec app bash

# target: watch-app                               - Watch app files and restart server
watch-app:
	nodemon -L -e js,ts,pug,json --exec "make restart-app && make logs-app"

restart-app:
	docker-compose restart app

la: logs-app
logs-app:
	docker-compose logs -f app

# target: docker-build                           - Build app
docker-build: build-npm

build-npm:
	docker-compose exec app sh -c "npm install"

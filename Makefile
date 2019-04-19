up:
	[ -f api/tmp/pids/server.pid ] && rm api/tmp/pids/server.pid || echo "File does not exist"
	docker-compose up -d --build

down:
	docker-compose down

run:
	[ -f api/tmp/pids/server.pid ] && rm api/tmp/pids/server.pid || echo "File does not exist"
	docker-compose up --build

install:
	cd front && docker exec react-front yarn install
	docker exec ruby-api bundle install

create-db:
	docker-compose run ruby rake db:create

migrate-db:
	docker-compose run ruby rake db:migrate

drop-db:
	docker-compose run ruby rake db:drop

bash:
	docker exec -it ruby-api bash

clean-front:
	cd front && \
	rm yarn.lock && \
	rm -rf node_modules && \
	docker exec react-front yarn install

restart-react:
	docker restart react-front

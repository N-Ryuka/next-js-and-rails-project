build:
	docker-compose build

setup:
	docker-compose exec api bundle exec rake db:create db:migrate db:seed

console:
	docker-compose exec api bundle exec rails console

up:
	docker-compose up

stop:
	docker-compose stop

down:
	docker-compose down

install:
	docker-compose exec api bundle install --jobs=4 --retry=3
# docker-compose exec api yarn install

migrate:
	docker-compose exec api rake db:migrate

reset-db:
	docker-compose exec api bundle exec rake db:drop db:create db:migrate db:seed

fixture_dump:
	docker-compose exec api bundle exec rake db:fixtures:dump

rspec:
	docker-compose exec api bundle exec rspec

fix:
	docker-compose exec api bundle exec rubocop -A
#	docker-compose exec api yarn lint --fix

bash:
	docker-compose exec api /bin/bash 

test: fix rspec

# staging_deploy:
# docker-compose exec api ./bin/staging_deploy.sh


# Docker-compose development tasks
# Used to aid local development

build:
	docker-compose --env-file .env build --no-cache
up:
	docker-compose --env-file .env up -d

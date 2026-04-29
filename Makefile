.PHONY: help build up down test lint migrate cluster-bootstrap

help:
	@echo "Hybrid Kubernetes Platform - Management Commands"
	@echo "------------------------------------------------"
	@echo "build             : Build all containers"
	@echo "up                : Start all services"
	@echo "down              : Stop all services"
	@echo "test              : Run all tests"
	@echo "lint              : Run linting checks"
	@echo "migrate           : Run database migrations"
	@echo "cluster-bootstrap : Run cluster discovery and bootstrap"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

cluster-bootstrap:
	docker-compose exec api python scripts/cluster/bootstrap_all.py

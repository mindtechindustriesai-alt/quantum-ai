.PHONY: help install test run docker-up docker-down clean

help:
	@echo "Commands: make install, make test, make run, make docker-up, make docker-down, make clean"

install:
	pip install -r backend/requirements.txt

test:
	pytest tests/ -v

run:
	cd backend && uvicorn main:app --reload --port 8000

docker-up:
	docker-compose up -d

docker-down:
	docker-compose down

clean:
	find . -type d -name "__pycache__" -exec rm -rf {} + 2>/dev/null || true

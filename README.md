# NGINX Load Balancer with Docker Compose
Implementing Layer 4 and Layer 7 load balancer with nginx reverse proxy 


This repository contains a Docker Compose setup for load balancing HTTP and TCP traffic using NGINX.

## Prerequisites
- Docker
- Docker Compose

nginx.conf (for HTTP Load Balancing)
nlb.conf (for TCP Load Balancing)

To run the setup run 
```bash
docker compose up -d
```
By default it runs Http load balancing to switch to network load balancing change the `nginx.conf` with `nlb.conf` in `docker-compose.yml`

Run below cmd to restart the nginx server
```bash
docker-compose restart nginx
```
## Testing

Access the load balancer at http://localhost/ or http://localhost/app2 for HTTP load balancing.

Test TCP load balancing on port http://localhost:80 .

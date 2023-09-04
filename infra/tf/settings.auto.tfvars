cidr = "10.0.0.0/16"
private_subnets = ["10.0.1.0/24"]
public_subnets = ["10.0.0.0/24","10.0.2.0/24"]
availability_zones = ["eu-north-1a","eu-north-1b"]
environment = "prod"
name = "gp2"
container_port = 80
image_name = "ghcr.io/ua92-devops-apprentices-org/gp2-frontend"
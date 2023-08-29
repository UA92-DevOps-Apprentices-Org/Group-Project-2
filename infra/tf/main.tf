
provider "aws" {
    region = "eu-north-1"
    access_key = var.aws_access_key
    secret_key = var.aws_secret_key
}

resource "aws_vpc" "main" {
    cidr_block = "10.0.0.0/16"
    instance_tenancy = "default"
    tags = {
      Name = "main"
    }
}

resource "aws_internet_gateway" "ig" {
    vpc_id = aws_vpc.main.id
}

resource "aws_subnet" "public" {
    vpc_id = aws_vpc.main.id
    cidr_block = "10.0.0.0/24"
    availability_zone = "eu-north-1a"
    map_public_ip_on_launch = true
}

resource "aws_subnet" "public_2" {
    vpc_id = aws_vpc.main.id
    cidr_block = "10.0.64.0/24"
    availability_zone = "eu-north-1b"
    map_public_ip_on_launch = true
}

resource "aws_subnet" "private" {
    vpc_id = aws_vpc.main.id
    cidr_block = "10.0.128.0/24"
    availability_zone = "eu-north-1b"
}

resource "aws_route_table" "rt" {
    vpc_id = aws_vpc.main.id

    route {
        cidr_block = "0.0.0.0/0"
        gateway_id = aws_internet_gateway.ig.id
    }
}

resource "aws_route_table_association" "rt-a-1" {
    subnet_id = aws_subnet.private.id
    route_table_id = aws_route_table.rt.id
}

resource "aws_route_table_association" "rt-a-2" {
    subnet_id = aws_subnet.public.id
    route_table_id = aws_route_table.rt.id
}

resource "aws_route_table_association" "rt-a-3" {
    subnet_id = aws_subnet.public_2.id
    route_table_id = aws_route_table.rt.id
}

module "ecs-fargate" {
    source = "cn-terraform/ecs-fargate/aws"
    version = "2.0.52"

    container_image = "ghcr.io/ua92-devops-apprentices-org/gp2-frontend"
    port_mappings = [{
      containerPort = 3000
      hostPort = 3000
      protocol = "tcp"
    }]
    vpc_id = aws_vpc.main.id
    public_subnets_ids = [aws_subnet.public.id, aws_subnet.public_2.id]
    private_subnets_ids = [ aws_subnet.private.id ]
    container_name = "gp2-frontend"
    name_prefix = "gp2"
    enable_s3_logs = false
    lb_http_ports = {
      "default_http" : {
        "listener_port" : 80,
        "target_group_port" : 3000
      }
    }
    lb_https_ports = {}
}


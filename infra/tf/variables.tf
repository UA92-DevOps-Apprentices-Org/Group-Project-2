
variable "aws_access_key" {
    type = string
}

variable "aws_secret_key" {
    type = string
}

// settings
variable "cidr" {}
variable "private_subnets" {}
variable "public_subnets" {}
variable "availability_zones" {}
variable "environment" {}
variable "name" {}
variable "container_port" {}
variable "image_name" {}

<h1 align="center">
  NestJS | gRPC | Kafka
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/GabrielCordeiroDev/nestjs-grpc-kafka">

  <a href="https://www.linkedin.com/in/dev-gabriel-cordeiro/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Gabriel%20Cordeiro-gree">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/GabrielCordeiroDev/nestjs-grpc-kafka">
  
  <img alt="GitHub" src="https://img.shields.io/github/license/GabrielCordeiroDev/nestjs-grpc-kafka">
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## 👨🏻‍💻 About the project

Project developed to deepen knowledge about NestJS and learn more about gRPC and Kafka.

## 🚀 Technologies

Technologies that I used to develop this API:

- [Node.js](https://nodejs.org/en/)
- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [gRPC](https://grpc.io/)
- [Kafka](https://kafka.apache.org/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Class Transformer](https://github.com/typestack/class-transformer)
- [Class Validator](https://github.com/typestack/class-validator#readme)

## 💻 Getting started

You can download the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) Extension for Visual Studio Code and test the API in the [api.http](https://github.com/GabrielCordeiroDev/nestjs-grpc-kafka/blob/main/api.http) file

**Clone the project and access the folder**

```bash
$ git clone https://github.com/GabrielCordeiroDev/nestjs-grpc-kafka
$ cd nestjs-grpc-kafka

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables
$ cp .env.example .env
```

**Run the application**

```bash
$ docker-compose up
```

**Run Kafka**

```bash
$ cd kafka
$ docker-compose up -d
```

> The API will be available at localhost:3000

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/GabrielCordeiroDev/nestjs-grpc-kafka/blob/main/LICENSE) file for details.

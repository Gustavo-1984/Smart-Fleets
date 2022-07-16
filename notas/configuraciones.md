# Documentacion Smart-Fleets

## Correo y comandos

- smartfleets.mx@gmail.com
- Smartfl33ts@mx
- www.smartfleeets.tech
- instancia amazon
- ssh ubuntu@44.239.71.90 -i Documents/smartFleets.pem

## Descargar EMQX a Amazon

- wget https://www.emqx.com/en/downloads/broker/4.4.3/emqx-4.4.3-otp24.1.5-3-ubuntu18.04-amd64.zip
- apt install unzip
- unzip emqx-4.4.3-otp24.1.5-3-ubuntu18.04-amd64.zip
- ./bin/emqx start   \* iniciar instancia emqx \*
- ./bin/emqx stop     \* parar instancia emqx \*
- usuario mqtt: admin
- password mqtt: public
- chown ubuntu:ubuntu -R /emqx/ \* Permiso para modificar cartpeta ftps\*

## Comandos Docker

- docker-compose up -d \* levantar contenedor docker emqx \*
- docker-compose down \* bajar contenedor docker emqx \*
- 
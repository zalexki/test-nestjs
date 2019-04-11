FROM node:10.15

RUN apt-get update && apt-get install -y \
    git \
    zip \
    openssl \
    procps

COPY .bashrc /root/.bashrc

WORKDIR /var/www/html

ENTRYPOINT [ "npm" , "start"]

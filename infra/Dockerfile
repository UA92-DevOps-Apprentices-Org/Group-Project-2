FROM node:18-alpine
WORKDIR /usr/src/app
ADD ./devnexus /usr/src/app

EXPOSE 3000
RUN npm i

CMD [ "npm" , "start" ]
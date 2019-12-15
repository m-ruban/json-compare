# nodejs
FROM node:11

WORKDIR /var/www/json-compare

# env
RUN echo " \n\
APP_PORT=3001\n\
NODE_ENV=production\n\
" >> .env

# dependencies (server)
COPY . .
RUN npm install

# dependencies (client)
RUN cd client/ &&\
    npm install &&\
    npm run build

#run
CMD npm run start


FROM node:8.12.0 as build
RUN mkdir /usr/src/webapp
WORKDIR /usr/src/webapp


#COPY ./package.json /usr/src/webapp/package.json
COPY . ./

RUN npm install npm -g
RUN npm install


ENV PATH /usr/src/webapp/node_modules/.bin:$PATH

RUN npm run build


FROM nginx:1.15
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/webapp/build /usr/share/nginx/html
COPY --from=build /usr/src/webapp/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

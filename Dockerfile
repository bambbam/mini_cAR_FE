#builder
FROM node:16.15

RUN mkdir -p /mini_car
COPY ./mini_car_fe /mini_car
WORKDIR /mini_car
RUN npm install
CMD ["npm", "run", "start"]


#production
FROM nginx
RUN mkdir /app
WORKDIR /app
RUN mkdir ./build
COPY --from=Builder /mini_car/build ./build/
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

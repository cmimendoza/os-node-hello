FROM alpine:3.18

RUN apk update && apk add nodejs npm

WORKDIR /app

COPY . .

EXPOSE 3000

CMD [ "node", "./app.js" ]

#setting the node js version
FROM node:8

#setting the working environment
WORKDIR /home/nodejs/app

#begin to copy and setup applicaiton
COPY . .
RUN npm install

CMD ["node", "store.js", "add", "1", "ahmed1"]
CMD ["node", "store.js", "add", "2", "ahmed2"]
CMD ["node", "store.js", "add", "4", "ahmed3"]
CMD ["node", "store.js", "list"]
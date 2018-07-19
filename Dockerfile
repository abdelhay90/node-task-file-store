#setting the node js version
FROM node:8

#setting the working environment
WORKDIR /home/nodejs/app

#begin to copy and setup applicaiton
COPY . .
RUN npm install

CMD ["node", "index.js", "add", "1", "ahmed1"]
CMD ["node", "index.js", "add", "2", "ahmed2"]
CMD ["node", "index.js", "add", "4", "ahmed3"]
CMD ["node", "index.js", "list"]
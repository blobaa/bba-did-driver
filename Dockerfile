FROM node:12.18.3-alpine3.11

# Set working directory
WORKDIR /usr/src/app


# Install git
RUN apk update && apk upgrade && \
    apk add --no-cache bash git


# Copy files
COPY src ./
COPY .env .
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .


# Build driver project
RUN npm install
RUN npm run build


# Remove obsolete files
RUN rm -rf src
RUN rm -f tsconfig.json


# Start driver
CMD [ "npm", "start" ]
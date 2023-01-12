FROM node:16-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
RUN npm install serve@14.1.2
EXPOSE 3000
CMD ["npx","serve","build"]
# DevOps-Microservices-App

Microservices app is split into three parts:

- React Frontend Application
- Java Spring Boot MVC Application
- Python WebApi for Sentiment Analysis

## Getting Started

`git clone https://github.com/girasedi-spring2020/DevOps-Microservices-App.git`

## Prerequisites

- Node.js Installation - https://nodejs.org/en/download/
- Visual Studio (IDE) - https://visualstudio.microsoft.com/downloads/
- JDK: https://www.oracle.com/java/technologies/javase-downloads.html
- Maven: https://maven.apache.org/download.cgi
- Python 3.7

## Run and Build

- Build React Frontend `npm run build`
- Run React Frontend `npm start`. To run with nginx instead `start nginx`
- Build Java Backend App `mvn install`
- Run Java Backend App `java -jar sentiment-analysis-web-0.0.1-SNAPSHOT.jar`
- Run Python Backend App `python sentiment_analysis.py`
- Clean up `nginx -s quit`

## How to test:

- Run all 3 apps
- Go to python web page and test testHealth endpoint
- Go to springboot web page and test testHealth endpoint
- Go to python web page and test testComms endpoint
- Go to springboot web page and test testComms endpoint
- Go to python web page and test http://localhost:5000/analyse?sentence=i am so happy!
- Go to springboot web page and test testSentiment endpoint
- Finally, go to ReactJS webpage and test a happy/sad sentence!

## Built with

- Akshay Phapale
- Vidhi Nagda
- Divya Girase

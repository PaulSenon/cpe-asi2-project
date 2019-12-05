# build
FROM maven
WORKDIR /usr/src/app

COPY pom.xml .
RUN mvn dependency:go-offline

COPY . .
RUN mvn clean install

# package without maven
FROM openjdk:8-alpine
COPY --from=0 /usr/src/app/target/*.jar ./ROOT.jar

ENV BROCKER_HOST=$BROCKER_HOST
ENV BROCKER_IP=$BROCKER_IP
ENV BROCKER_USER=$BROCKER_USER
ENV BROCKER_PWD=$BROCKER_PWD

EXPOSE 8080

ENTRYPOINT ["java","-jar","ROOT.jar"]

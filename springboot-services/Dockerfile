# build
FROM maven
# copy everything
# WORKDIR /usr/share/maven/ref/
# COPY ./settings.docker.xml .

WORKDIR /usr/src/app/
COPY . .

WORKDIR /usr/src/app/Common/common
RUN mvn clean install 

WORKDIR /usr/src/app/CardService/card-parent/card-lib
RUN mvn clean install

WORKDIR /usr/src/app/UserService/user-parent
RUN mvn dependency:go-offline 

WORKDIR /usr/src/app/UserService/user-parent/user-lib
RUN mvn clean install


WORKDIR /usr/src/app/UserService/user-parent/user-service
RUN mvn clean install
# # COPY UserService/user-parent/* ./user-parent/
# # COPY CardService/card-parent/* ./card-parent/
# # COPY StoreService/store-parent/* ./store-parent/
# # COPY Common/common/* ./common/

# # common
# WORKDIR /usr/src/app/Common/common
# RUN mvn -B -f pom.xml -s /usr/share/maven/ref/settings-docker.xml dependency:resolve
# RUN mvn dependency:go-offline
# RUN mvn clean install

# # clients
# WORKDIR /usr/src/app/UserService/user-parent/user-lib
# RUN mvn -B -f pom.xml -s /usr/share/maven/ref/settings-docker.xml dependency:resolve
# # RUN mvn dependency:go-offline
# RUN mvn install
# WORKDIR /usr/src/app/CardService/card-parent/card-lib
# RUN mvn -B -f pom.xml -s /usr/share/maven/ref/settings-docker.xml dependency:resolve
# # RUN mvn dependency:go-offline
# RUN mvn install
# WORKDIR /usr/src/app/StoreService/store-parent/store-lib
# RUN mvn -B -f pom.xml -s /usr/share/maven/ref/settings-docker.xml dependency:resolve
# # RUN mvn dependency:go-offline
# RUN mvn install

# WORKDIR /usr/src/app/UserService/user-parent
# RUN mvn -B -f pom.xml -s /usr/share/maven/ref/settings-docker.xml dependency:resolve
# RUN mvn dependency:go-offline
# RUN mvn install

# # the service we wanna run
# # WORKDIR /usr/src/app/UserService/user-parent/user-service
# # RUN mvn dependency:go-offline
# # RUN mvn clean install

# # WORKDIR /usr/src/app/UserService/store-parent/store-service
# # RUN mvn dependency:go-offline
# # RUN mvn clean install

# # WORKDIR /usr/src/app/UserService/card-parent/card-service
# # RUN mvn dependency:go-offline
# # RUN mvn clean install

# # parents
# # WORKDIR /usr/src/app/UserService/user-parent
# # RUN mvn dependency:go-offline
# # RUN mvn clean install
# # WORKDIR /usr/src/app/CardService/card-parent
# # RUN mvn dependency:go-offline
# # RUN mvn clean install
# # WORKDIR /usr/src/app/StoreService/store-parent
# # RUN mvn dependency:go-offline
# # RUN mvn clean install



# package without maven
FROM openjdk:8-alpine
COPY --from=0 /usr/src/app/UserService/user-parent/user-service/target/*.jar ./ROOT.jar

ENV SERVER_IP=$SERVER_IP
ENV SERVER_PORT=$SERVER_PORT
ENV DATABASE_USER=$DATABASE_USER
ENV DATABASE_PW=$DATABASE_PWD
ENV DATABASE_HOST=$DATABASE_HOST
ENV DATABASE_PORT=$DATABASE_PORT
ENV DATABASE_NAME=$DATABASE_NAME
ENV BROCKER_HOST=$BROCKER_HOST
ENV BROCKER_PORT=$BROCKER_PORT
ENV BROCKER_USER=$BROCKER_USER
ENV BROCKER_PWD=$BROCKER_PWD

EXPOSE $SERVER_PORT

ENTRYPOINT ["java","-jar","ROOT.jar"]

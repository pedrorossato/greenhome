FROM maven:3-amazoncorretto-17 AS maven

WORKDIR /greenhomeapi
COPY . /greenhomeapi
RUN mvn clean package -X -DskipTests

FROM openjdk:17-jdk-alpine
WORKDIR /opt/app

COPY --from=maven /greenhomeapi/target/api-0.0.1-SNAPSHOT.jar /opt/app/

ENTRYPOINT ["java","-jar","api-0.0.1-SNAPSHOT.jar"]
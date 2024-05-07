FROM maven:3.8.3-openjdk-17 AS MAVEN_JAR
WORKDIR /code
COPY . .
RUN mvn clean package -DskipTests
 


FROM openjdk:17-jdk-alpine
WORKDIR /opt
COPY --from=MAVEN_JAR /code/target/*.jar /opt/web.jar
EXPOSE 9003
ENTRYPOINT ["java","-jar","/opt/web.jar"]
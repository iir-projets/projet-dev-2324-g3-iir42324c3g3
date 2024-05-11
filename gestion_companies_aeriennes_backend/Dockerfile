FROM maven:3.8.7-openjdk-18 AS build

WORKDIR /build

COPY pom.xml .

RUN mvn dependency:go-offline

COPY src ./src

RUN mvn clean package -DskipTests

# Runtime
FROM amazoncorretto:17

WORKDIR /app

COPY --from=build /build/target/gestion_companies_aeriennes_backend-*.jar /app/

EXPOSE 8080

ENV DB_URL=jdbc:mysql://mysql-cn:3306/gestion_ca

ENTRYPOINT ["java", "-jar", "/app/gestion_companies_aeriennes_backend-0.0.1-SNAPSHOT.jar"]


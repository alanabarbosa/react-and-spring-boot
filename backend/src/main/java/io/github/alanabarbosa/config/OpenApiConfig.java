package io.github.alanabarbosa.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;

@Configuration
public class OpenApiConfig {
	
	@Bean
	OpenAPI customOPenAPI() {
		return new OpenAPI()
				.info(new Info()
						.title("Restful API with Java 19 and Spring Boot 3")
						.version("v1")
						.termsOfService("Some description here...")
						.license(
								new License()
									.name("Apache 2.0")
									.url("")));
	}
}

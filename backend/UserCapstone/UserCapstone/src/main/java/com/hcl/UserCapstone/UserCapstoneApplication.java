package com.hcl.UserCapstone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class UserCapstoneApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserCapstoneApplication.class, args);
	}

}

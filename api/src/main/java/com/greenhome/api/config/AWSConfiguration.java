package com.greenhome.api.config;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Data
@Configuration
@ConfigurationProperties(prefix = "spring.aws")
public class AWSConfiguration {

    String accessKey;
    String secretKey;
    String userPhotoBucket;
    String propertyDocumentBucket;

    public AWSCredentials credentials() {
        return new BasicAWSCredentials(accessKey, secretKey);
    }

    @Bean
    public AmazonS3 amazonS3() {
        return AmazonS3ClientBuilder
                .standard()
                .withCredentials(new AWSStaticCredentialsProvider(credentials()))
                .withRegion(Regions.SA_EAST_1)
                .build();
    }
    
    @Bean
    public String userPhotoBucket() {
        return userPhotoBucket;
    }
    
    @Bean
        public String propertyDocumentBucket() {
        return propertyDocumentBucket;
    }
    
}

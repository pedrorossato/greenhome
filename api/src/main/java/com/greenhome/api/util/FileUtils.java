package com.greenhome.api.util;

import com.amazonaws.services.s3.model.S3ObjectInputStream;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Date;

public class FileUtils {
    public static File convertMultiPartToFile(MultipartFile file) throws IOException {
        File convFile = new File(file.getOriginalFilename());
        FileOutputStream fos = new FileOutputStream(convFile);
        fos.write(file.getBytes());
        fos.close();
        return convFile;
    }

    public static void deleteFile(File file) {
        file.delete();
    }

    public static byte[] toByteArray(S3ObjectInputStream objectContent) {
        try {
            return objectContent.readAllBytes();
        } catch (IOException e) {
            return null;
        }
    }
}

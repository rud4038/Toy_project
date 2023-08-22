package backend.backend.projects.service;

import java.io.File;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;



@Service
public class FileService {
	
	@Value("${file.dir}")
	private String dir;
	
	public Resource getImage(String imageName) {
		try {
			return new UrlResource("file:" + dir + imageName);
		} catch (Exception e) {
			return null;
		}
	}
	
	public String fileUpload(MultipartFile file) {
		if(file.isEmpty()) return null;
		
		String originalFileName = file.getOriginalFilename();
		String extension = originalFileName.substring(originalFileName.lastIndexOf("."));
		String uuid = UUID.randomUUID().toString();
		String saveName = uuid + extension;
		String savePath = dir + saveName;
		try {
			file.transferTo(new File(savePath));
		} catch (Exception e) {
			return null;
		}
		
		return saveName;
	}
}

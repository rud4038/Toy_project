package backend.backend.projects.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import backend.backend.projects.service.FileService;

@CrossOrigin(originPatterns = "http://localhost:3000")
@RestController
@RequestMapping("/file")
public class FileController {
	
	@Autowired FileService fileService;
	
	@GetMapping(value = "{imageName}", produces = {MediaType.IMAGE_PNG_VALUE, MediaType.IMAGE_JPEG_VALUE})
	public Resource getImag(@PathVariable("imageName") String imagName) {
		System.out.println(imagName);
		return fileService.getImage(imagName);
	}
	
	@PostMapping("upload")
	public String fileUpload(@RequestParam("file") MultipartFile file) {
		System.out.println("hi");
		return fileService.fileUpload(file);
	}
}

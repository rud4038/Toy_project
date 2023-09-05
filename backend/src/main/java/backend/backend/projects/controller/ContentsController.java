package backend.backend.projects.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.backend.projects.dto.ResponsDto;
import backend.backend.projects.dto.UploadPostDto;
import backend.backend.projects.entity.ContentsEntity;
import backend.backend.projects.service.ContentsService;

@CrossOrigin(originPatterns = "http://localhost:3000")
@RestController
@RequestMapping("/contents")
public class ContentsController {
	
	@Autowired ContentsService contentsService;
	
	@PostMapping("UploadPost")
	public ResponsDto<String> UploadPost (@RequestBody UploadPostDto uploadPostDto) {
		System.out.println(uploadPostDto.toString());
		return contentsService.UploadPost(uploadPostDto);
	}
	
	@GetMapping("LoadPostList")
	public ResponsDto<List<ContentsEntity>> LoadPostList () {
		return contentsService.LoadPostList();
	}
	
	@GetMapping("LoadPage/{contents_number}")
	public ResponsDto<ContentsEntity> LoadPage(@PathVariable("contents_number") int contents_number) {
		return contentsService.LoadPage(contents_number);
	}
	
}

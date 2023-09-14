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

import backend.backend.projects.dto.RecommendationResponseDto;
import backend.backend.projects.dto.RecommendationUploadDto;
import backend.backend.projects.dto.ResponsDto;
import backend.backend.projects.service.RecommendationService;

@RestController
@RequestMapping("/recommendation")
@CrossOrigin(originPatterns = "http://localhost:3000")
public class RecommendationController {
	
	@Autowired RecommendationService recommendationService;
	
	@PostMapping("upload")
	public ResponsDto<String> RecommendationUpload(@RequestBody RecommendationUploadDto uploadDto) {
		return recommendationService.RecommendationUpload(uploadDto);
	}
	
	@GetMapping("load/{nickname}")
	public ResponsDto<List<Integer>> RecommendationListLoad(@PathVariable("nickname") String nickname) {
		System.out.println(nickname);
		return recommendationService.RecommendationListLoad(nickname); 
	}
}

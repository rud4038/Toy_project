package backend.backend.projects.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import backend.backend.projects.dto.ContentsImgDto;
import backend.backend.projects.dto.ResponsDto;
import backend.backend.projects.service.ContentsService;

@CrossOrigin(originPatterns = "http://localhost:3000")
@RestController
@RequestMapping("/contents")
public class ContentsController {
	
	@Autowired ContentsService contentsService;
	
}

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
import backend.backend.projects.dto.UploadCommentDto;
import backend.backend.projects.entity.CommentEntity;
import backend.backend.projects.service.CommentService;

@RestController
@RequestMapping("/comment")
@CrossOrigin(originPatterns = "http://localhost:3000")
public class CommentController {
	
	@Autowired CommentService commentService;

	@PostMapping("upload")
	public ResponsDto<String> UploadComment(@RequestBody UploadCommentDto commentDto){
		System.out.println(commentDto.toString());
		return commentService.UploadComment(commentDto);
	}
	
	@GetMapping("load/{contents_number}")
	public ResponsDto<List<CommentEntity>> LoadComment(@PathVariable("contents_number") int contents_number) {
		System.out.println(contents_number);
		return commentService.LoadComment(contents_number);
	}
	
	
}

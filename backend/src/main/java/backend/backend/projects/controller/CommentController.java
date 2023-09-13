package backend.backend.projects.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.backend.projects.dto.ResponsDto;
import backend.backend.projects.dto.UpdateCommentDto;
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
		return commentService.UploadComment(commentDto);
	}
	
	@GetMapping("load/{contents_number}")
	public ResponsDto<List<CommentEntity>> LoadComment(@PathVariable("contents_number") int contents_number) {
		return commentService.LoadComment(contents_number);
	}
	
	@PostMapping("update")
	public ResponsDto<String> UpdateComment(@RequestBody UpdateCommentDto commentDto) {
		return commentService.UpdateComment(commentDto);
		
	}
	
	@DeleteMapping("delete/{comment_number}")
	public ResponsDto<String> DeleteComment(@PathVariable("comment_number") int comment_number) {
		return commentService.DeleteComment(comment_number);
	}
	
	
}

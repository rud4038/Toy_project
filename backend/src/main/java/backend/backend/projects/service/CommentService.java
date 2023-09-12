package backend.backend.projects.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.backend.projects.dto.ResponsDto;
import backend.backend.projects.dto.UploadCommentDto;
import backend.backend.projects.entity.CommentEntity;
import backend.backend.projects.repository.CommentRepository;

@Service
public class CommentService {
	@Autowired CommentRepository commentRepository;
	
	public ResponsDto<String> UploadComment(UploadCommentDto commentDto) {
		try {
			SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
			CommentEntity commentEntity = CommentEntity
					.builder()
					.commentNumber(0)
					.contentsNumber(commentDto.getContentsNumber())
					.nickname(commentDto.getNickname())
					.commentCon(commentDto.getCommentCon())
					.commentDate(simpleDateFormat.format(new Date()))
					.build();
			
			commentRepository.save(commentEntity);
			
			return ResponsDto.setSucces(null, "댓글 작성 성공");
			
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터베이스 오류: " + e);
		}
	}
	
	public ResponsDto<List<CommentEntity>> LoadComment(int contentsNumber) {
		try {
			List<CommentEntity> commentList = commentRepository.findByContentsNumber(contentsNumber);
			
			return ResponsDto.setSucces(commentList, "댓글 불러오기");
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터베이스 오류: " + e);
		}
	}
	
}
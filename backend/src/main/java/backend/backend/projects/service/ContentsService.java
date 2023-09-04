package backend.backend.projects.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.backend.projects.dto.ContentsImgDto;
import backend.backend.projects.dto.ResponsDto;
import backend.backend.projects.dto.UploadPostDto;
import backend.backend.projects.entity.ContentsEntity;
import backend.backend.projects.repository.ContentsRepository;

@Service
public class ContentsService {
	
	@Autowired ContentsRepository contentsRepository;
	
	public ResponsDto<String> UploadPost(UploadPostDto uploadPostDto) {
		
		try {
			ContentsEntity contentsEntity = ContentsEntity
					.builder()
					.contents_number(0)
					.contents_title(uploadPostDto.getTitle())
					.contents_con(uploadPostDto.getValue())
					.contents_mainimg(uploadPostDto.getMainimg())
					.contents_nickname(uploadPostDto.getNickname())
					.contents_recommendation(0)
					.build();
			contentsRepository.save(contentsEntity);
			return ResponsDto.setSucces("글작성 완료", null);
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터베이스 오류: " + e);
		}
	}
	
}

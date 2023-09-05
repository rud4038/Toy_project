package backend.backend.projects.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

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
			SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
			ContentsEntity contentsEntity = ContentsEntity
					.builder()
					.contents_number(0)
					.contents_title(uploadPostDto.getTitle())
					.contents_con(uploadPostDto.getValue())
					.contents_mainimg(uploadPostDto.getMainimg())
					.contents_nickname(uploadPostDto.getNickname())
					.contents_recommendation(0)
					.contents_date(simpleDateFormat.format(new Date()))
					.build();
			System.out.println(contentsEntity.toString());
			contentsRepository.save(contentsEntity);
			return ResponsDto.setSucces("글작성 완료", null);
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터베이스 오류: " + e);
		}
	}
	
	public ResponsDto<List<ContentsEntity>> LoadPostList() {
		List<ContentsEntity> contentsList =  contentsRepository.findAll();
		return ResponsDto.setSucces(contentsList, "전체 글 목록 불러오기");
	}
	
	public ResponsDto<ContentsEntity> LoadPage(int contents_number) {
		try {
			ContentsEntity contentsEntity = contentsRepository.findById(contents_number);
			return ResponsDto.setSucces(contentsEntity, "페이지 불러오기");
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터베이스 오류 : " + e);
		}
	}
}

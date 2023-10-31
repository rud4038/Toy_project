package backend.backend.projects.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.backend.projects.dto.ResponsDto;
import backend.backend.projects.dto.UpdateNicknameDto;
import backend.backend.projects.dto.UploadPostDto;
import backend.backend.projects.entity.ContentsEntity;
import backend.backend.projects.repository.ContentsRepository;
import backend.backend.projects.repository.RecommendationRepository;

@Service
public class ContentsService {
	
	@Autowired ContentsRepository contentsRepository;
	@Autowired RecommendationRepository recommendationRepository;
	
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
					.contents_views(0)
					.build();
			contentsRepository.save(contentsEntity);
			return ResponsDto.setSucces("글작성 완료", null);
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터베이스 오류: " + e);
		}
	}
	
	public ResponsDto<List<ContentsEntity>> LoadPostList() {
		try {
			
			List<ContentsEntity> contentsList =  contentsRepository.findAll();
			return ResponsDto.setSucces(contentsList, "전체 글 목록 불러오기");
			
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터베이스 오류: " + e);
		}
	}
	
	public ResponsDto<List<ContentsEntity>> LoadPostListViews() {
		try {
			
			List<ContentsEntity> contentsList =  contentsRepository.findAll();
			Collections.sort(contentsList, new Comparator<ContentsEntity>() {
				@Override
				public int compare(ContentsEntity o1, ContentsEntity o2) {
					if(o2.getContents_views() - o1.getContents_views() == 0) {
						return o1.getContents_number() - o2.getContents_number();
					}
					return o2.getContents_views() - o1.getContents_views();
				}
			});
			
			return ResponsDto.setSucces(contentsList, "조회수순 글 목록 불러오기");
			
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터베이스 오류: " + e);
		}
	}
	
	public ResponsDto<List<ContentsEntity>> LoadPostListRecommendation() {
		try {
			
			List<ContentsEntity> contentsList =  contentsRepository.findAll();
			Collections.sort(contentsList, new Comparator<ContentsEntity>() {
				@Override
				public int compare(ContentsEntity o1, ContentsEntity o2) {
					if(o2.getContents_recommendation() - o1.getContents_recommendation() == 0) {
						return o1.getContents_number() - o2.getContents_number();
					}
					return o2.getContents_recommendation() - o1.getContents_recommendation();
				}
			});
			
			return ResponsDto.setSucces(contentsList, "조회수순 글 목록 불러오기");
			
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터베이스 오류: " + e);
		}
	}
	
	public ResponsDto<List<ContentsEntity>> LoadPostListMyRecommendation(String nickname){
		try {
			
			List<ContentsEntity> contentsList = new ArrayList<ContentsEntity>();
			List<Integer> recommendationList = recommendationRepository.findAllByNickname(nickname);
			Collections.sort(recommendationList, (o1,o2) -> o1-o2);
			
			for(int num : recommendationList) {
				contentsList.add(contentsRepository.findById(num));
			}
			
			return ResponsDto.setSucces(contentsList, "나의 추천 글 목록 불러오기");
			
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터베이스 오류: " + e);
		}
		
	}
	
	public ResponsDto<ContentsEntity> LoadPage(int contents_number) {
		try {
			ContentsEntity contentsEntity = contentsRepository.findById(contents_number);
			return ResponsDto.setSucces(contentsEntity, "페이지 불러오기");
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터베이스 오류 : " + e);
		}
	}
	
	public ResponsDto<String> ViewsCount (int contents_number) {
		try {
			ContentsEntity contentsEntity = contentsRepository.findById(contents_number);
			contentsEntity.setContents_views(contentsEntity.getContents_views() + 1);
			contentsRepository.save(contentsEntity);
			
			return ResponsDto.setSucces(null, "조회수 카운트");
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터베이스 오류 : " + e);
		}
	}
	
	public ResponsDto<String> RecommendationCountUp (int contents_number) {
		try {
			ContentsEntity contentsEntity = contentsRepository.findById(contents_number);
			contentsEntity.setContents_recommendation(contentsEntity.getContents_recommendation() + 1);
			contentsRepository.save(contentsEntity);
			return ResponsDto.setSucces(null, "추천완료");
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터베이스 오류 : " + e);
		}
	}
	
	public ResponsDto<String> RecommendationCountDown (int contents_number) {
		try {
			ContentsEntity contentsEntity = contentsRepository.findById(contents_number);
			contentsEntity.setContents_recommendation(contentsEntity.getContents_recommendation() - 1);
			contentsRepository.save(contentsEntity);
			return ResponsDto.setSucces(null, "추천취소");
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터베이스 오류 : " + e);
		}
	}
	
	public ResponsDto<Integer> UpdateNickname(UpdateNicknameDto nicknameDto) {
		try {
			int num = contentsRepository.updateNickname(nicknameDto.getNewNickName(), nicknameDto.getOldNickName());
			
			return ResponsDto.setSucces(num, "닉네임 변경 완료");
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터베이스 오류: " + e);
		}
	}
	
	public ResponsDto<String> ContentsDeleteAll(String nickname) {
		try {
			contentsRepository.deleteAllByNcikname(nickname);
			return ResponsDto.setSucces(null, "전체 게시물 삭제 완료");
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터베이스 오류: " + e);
		}
	}
	
	
}

package backend.backend.projects.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.backend.projects.dto.RecommendationResponseDto;
import backend.backend.projects.dto.RecommendationUploadDto;
import backend.backend.projects.dto.ResponsDto;
import backend.backend.projects.entity.RecommendationEntity;
import backend.backend.projects.repository.RecommendationRepository;

@Service
public class RecommendationService {
	
	@Autowired RecommendationRepository recommendationRepository;
	
	public ResponsDto<String> RecommendationUpload(RecommendationUploadDto uploadDto) {
		try {
			RecommendationEntity entity = RecommendationEntity
					.builder()
					.recommendationNumber(0)
					.contentsNumber(uploadDto.getContents_number())
					.nickname(uploadDto.getNickname())
					.build();
			System.out.println(entity.toString());
			recommendationRepository.save(entity);
			
			return ResponsDto.setSucces(null, "추천 완료");
			
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터베이스 오류: " + e);
		}
	}
	
	public ResponsDto<List<Integer>> RecommendationListLoad(String nickname) {
		try {
			System.out.println("hi");
			if(!recommendationRepository.existsByNickname(nickname)) {
				return ResponsDto.setFailed("추천 목록 없음");
			}
			System.out.println("hi2");
			List<Integer> recommendationList =  recommendationRepository.findAllByNickname(nickname);
			return ResponsDto.setSucces(recommendationList, "추천 목록");
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터베이스 오류: " + e);
		}
	}
	
}

package backend.backend.projects.dto;

import backend.backend.projects.entity.RecommendationEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class RecommendationResponseDto {
	private int contents_number;
	
	public RecommendationResponseDto(RecommendationEntity entity) {
		System.out.println(entity.toString());
			this.contents_number = entity.getContentsNumber();
		}
}

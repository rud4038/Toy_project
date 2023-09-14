package backend.backend.projects.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Entity(name = "recommendation")
@Table(name = "recommendation")
public class RecommendationEntity {
	@Id
	@Column(name = "recommendation_number")
	private int recommendationNumber;
	@Column(name = "contents_number")
	private int contentsNumber;
	private String nickname;
}

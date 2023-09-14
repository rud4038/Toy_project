package backend.backend.projects.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import backend.backend.projects.dto.RecommendationResponseDto;
import backend.backend.projects.entity.RecommendationEntity;

@Repository
public interface RecommendationRepository extends JpaRepository<RecommendationEntity, Integer> {
	
	public boolean existsByNickname(String nickname);
	@Query("SELECT r.contentsNumber  FROM recommendation r WHERE r.nickname = ?1")
	public List<Integer> findAllByNickname(String nickname);

}


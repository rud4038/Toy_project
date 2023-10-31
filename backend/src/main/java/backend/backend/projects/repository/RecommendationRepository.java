package backend.backend.projects.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import backend.backend.projects.dto.RecommendationResponseDto;
import backend.backend.projects.entity.RecommendationEntity;
import jakarta.transaction.Transactional;

@Repository
public interface RecommendationRepository extends JpaRepository<RecommendationEntity, Integer> {
	
	public boolean existsByNickname(String nickname);
	@Query("SELECT r.contentsNumber  FROM recommendation r WHERE r.nickname = ?1")
	public List<Integer> findAllByNickname(String nickname);
	public RecommendationEntity findByContentsNumberAndNickname(int contentsNumber, String nickname);
	
	@Modifying(clearAutomatically = true)
	@Query("update recommendation r set r.nickname = ?1 where r.nickname = ?2")
	int updateNickname(String newNickname, String oldNickname);
	
	@Transactional
	@Modifying
	public void deleteAllByNickname(String nickname);
	

}


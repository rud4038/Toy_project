package backend.backend.projects.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import backend.backend.projects.entity.CommentEntity;

@Repository
public interface CommentRepository extends JpaRepository<CommentEntity, Integer> {

	List<CommentEntity> findByContentsNumber(int contentsNumber);
	
	@Modifying(clearAutomatically = true)
	@Query("update comment c set c.nickname = ?1 where c.nickname = ?2")
	int updateNickname(String newNickname, String oldNickname);

}

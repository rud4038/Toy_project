package backend.backend.projects.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import backend.backend.projects.entity.ContentsEntity;

@Repository
public interface ContentsRepository extends JpaRepository<ContentsEntity, Integer> {
	public ContentsEntity findById(int contents_number);
	
	@Modifying(clearAutomatically = true)
	@Query("update contents c set c.contents_nickname = ?1 where c.contents_nickname = ?2")
	int updateNickname(String newNickname, String oldNickname);

}

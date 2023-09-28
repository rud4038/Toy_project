package backend.backend.projects.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import backend.backend.projects.entity.ContentsEntity;

@Repository
public interface ContentsRepository extends JpaRepository<ContentsEntity, Integer> {
	public ContentsEntity findById(int contents_number);

}

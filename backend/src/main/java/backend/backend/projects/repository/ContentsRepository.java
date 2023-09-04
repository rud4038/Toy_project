package backend.backend.projects.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.backend.projects.entity.ContentsEntity;

@Repository
public interface ContentsRepository extends JpaRepository<ContentsEntity, Integer> {

}

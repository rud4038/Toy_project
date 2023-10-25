package backend.backend.projects.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.backend.projects.entity.MemberEntity;

@Repository
public interface MemberRepository extends JpaRepository<MemberEntity, String>{
	public boolean existsByNumber(String number);
	public boolean existsByNickname(String ncikname);
	public boolean existsByPassword(String password);
	public MemberEntity findByNickname(String nickname);
	public MemberEntity findByName(String name);
	public MemberEntity findByNumber(String name);
	public MemberEntity findByPassword(String password);
}

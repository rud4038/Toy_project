package backend.backend.projects.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.backend.projects.dto.MemberDto;
import backend.backend.projects.dto.MemberResponsDto;
import backend.backend.projects.entity.MemberEntity;
import backend.backend.projects.repository.MemberRepository;

@Service
public class MemberService {

	@Autowired MemberRepository memberRepository;
	
	public MemberResponsDto SignUP(MemberDto memberDto) {
		try {
			if(memberRepository.existsById(memberDto.getId())) {
				return MemberResponsDto.setFailed("동일한 아이디가 존재합니다.");
			}
			
		} catch (Exception e) {
			return MemberResponsDto.setFailed("데이터 베이스 문제발생");
		}
		
		try {
			if(memberRepository.existsByNumber(memberDto.getNumber())) {
				return MemberResponsDto.setFailed("동일한 번호가 존재합니다.");
			}
			
		} catch (Exception e) {
			return MemberResponsDto.setFailed("데이터 베이스 문제발생");
		}
		MemberEntity memberEntity = MemberEntity
				.builder()
				.id(memberDto.getId())
				.name(memberDto.getName())
				.number(memberDto.getNumber())
				.password(memberDto.getPassword())
				.build();
		memberRepository.save(memberEntity);
		return MemberResponsDto.setSucces(null, "회원가입 완료");
					
	}
}

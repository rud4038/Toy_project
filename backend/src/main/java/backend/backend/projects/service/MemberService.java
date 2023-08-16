package backend.backend.projects.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.backend.projects.dto.FindIdDto;
import backend.backend.projects.dto.FindPasswordDto;
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
			
			if(memberRepository.existsByNickname(memberDto.getNickname())) {
				return MemberResponsDto.setFailed("동일한 닉네임이 존재합니다.");
			}
			
			if(memberRepository.existsByNumber(memberDto.getNumber())) {
				return MemberResponsDto.setFailed("동일한 전화번호가 존재합니다.");
			}
			
			MemberEntity memberEntity = MemberEntity
					.builder()
					.id(memberDto.getId())
					.nickname(memberDto.getNickname())
					.name(memberDto.getName())
					.number(memberDto.getNumber())
					.password(memberDto.getPassword())
					.build();
			memberRepository.save(memberEntity);
			return MemberResponsDto.setSucces(null, "회원가입 완료");
			
		} catch (Exception e) {
			return MemberResponsDto.setFailed("데이터 베이스 문제발생:  " + e);
		}
		
	}
	
	public MemberResponsDto FindId(FindIdDto findIdDto) {
		MemberEntity memberEntity;
		try {
			memberEntity = memberRepository.findByNickname(findIdDto.getNickname());
			
			if(memberEntity == null) {
				return MemberResponsDto.setFailed("입력하신 이름의 회원이 존재하지 않습니다.");
			}
			
			if(!memberEntity.getName().equals(findIdDto.getName())) {
				return MemberResponsDto.setFailed("입력하신 정보와 일치하는 회원이 존재하지 않습니다.");
			}
			
			if(!memberEntity.getNumber().equals(findIdDto.getNumber())) {
				return MemberResponsDto.setFailed("입력하신 정보와 일치하는 회원이 존재하지 않습니다.");
			}
			
			return MemberResponsDto.setSucces(memberEntity.getId(),"아이디는" + memberEntity.getId() + " 입니다.");
		} catch (Exception e) {
			return MemberResponsDto.setFailed("데이터 베이스 문제 발생: " + e);
		}
		
	}
	
	public MemberResponsDto FindPassword(FindPasswordDto findPasswordDto) {
		MemberEntity memberEntity;
		try {
			memberEntity = memberRepository.findById(findPasswordDto.getId()).get();
			if(memberEntity == null) {
				return MemberResponsDto.setFailed("입력하신 아이디가 존재하지 않습니다."); 
			}
			
			if(!memberEntity.getName().equals(findPasswordDto.getName())) {
				return MemberResponsDto.setFailed("입력하신 정보와 일치하는 회원이 존재하지 않습니다.");
			}
			
			if(!memberEntity.getNumber().equals(findPasswordDto.getNumber())) {
				return MemberResponsDto.setFailed("입력하신 정보와 일치하는 회원이 존재하지 않습니다.");
			}
			return MemberResponsDto.setSucces(memberEntity.getPassword(), "비밀번호는 : " + memberEntity.getPassword() + " 입니다.");
			
		} catch (Exception e) {
			return MemberResponsDto.setFailed("데이터 베이스 문제 발생: " + e);
		}
	}
	
}

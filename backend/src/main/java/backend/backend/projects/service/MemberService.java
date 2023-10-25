package backend.backend.projects.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.backend.projects.dto.FindIdDto;
import backend.backend.projects.dto.FindPasswordDto;
import backend.backend.projects.dto.LogInResponseDto;
import backend.backend.projects.dto.LoginDto;
import backend.backend.projects.dto.MemberDto;
import backend.backend.projects.dto.MemberInfoResponseDto;
import backend.backend.projects.dto.ResponsDto;
import backend.backend.projects.dto.UpdateNameDto;
import backend.backend.projects.dto.UpdateNicknameDto;
import backend.backend.projects.dto.UpdateNumberDto;
import backend.backend.projects.dto.UpdatePasswordDto;
import backend.backend.projects.entity.MemberEntity;
import backend.backend.projects.repository.MemberRepository;
import backend.backend.projects.security.TokenProvider;

@Service
public class MemberService {

	@Autowired MemberRepository memberRepository;
	
	@Autowired TokenProvider tokenProvider;
	
	public ResponsDto<String> SignUP(MemberDto memberDto) {
		try {
			if(memberRepository.existsById(memberDto.getId())) {
				return ResponsDto.setFailed("동일한 아이디가 존재합니다.");
			}
			
			if(memberRepository.existsByNickname(memberDto.getNickname())) {
				return ResponsDto.setFailed("동일한 닉네임이 존재합니다.");
			}
			
			if(memberRepository.existsByNumber(memberDto.getNumber())) {
				return ResponsDto.setFailed("동일한 전화번호가 존재합니다.");
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
			return ResponsDto.setSucces(null, "회원가입 완료");
			
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터 베이스 문제발생:  " + e);
		}
		
	}
	
	public ResponsDto<String> FindId(FindIdDto findIdDto) {
		MemberEntity memberEntity;
		try {
			memberEntity = memberRepository.findByNickname(findIdDto.getNickname());
			
			if(memberEntity == null) {
				return ResponsDto.setFailed("입력하신 이름의 회원이 존재하지 않습니다.");
			}
			
			if(!memberEntity.getName().equals(findIdDto.getName())) {
				return ResponsDto.setFailed("입력하신 정보와 일치하는 회원이 존재하지 않습니다.");
			}
			
			if(!memberEntity.getNumber().equals(findIdDto.getNumber())) {
				return ResponsDto.setFailed("입력하신 정보와 일치하는 회원이 존재하지 않습니다.");
			}
			
			return ResponsDto.setSucces(memberEntity.getId(),"아이디는" + memberEntity.getId() + " 입니다.");
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터 베이스 문제 발생: " + e);
		}
		
	}
	
	public ResponsDto<String> FindPassword(FindPasswordDto findPasswordDto) {
		MemberEntity memberEntity;
		try {
			memberEntity = memberRepository.findById(findPasswordDto.getId()).get();
			if(memberEntity == null) {
				return ResponsDto.setFailed("입력하신 아이디가 존재하지 않습니다."); 
			}
			
			if(!memberEntity.getName().equals(findPasswordDto.getName())) {
				return ResponsDto.setFailed("입력하신 정보와 일치하는 회원이 존재하지 않습니다.");
			}
			
			if(!memberEntity.getNumber().equals(findPasswordDto.getNumber())) {
				return ResponsDto.setFailed("입력하신 정보와 일치하는 회원이 존재하지 않습니다.");
			}
			return ResponsDto.setSucces(memberEntity.getPassword(), "비밀번호는 : " + memberEntity.getPassword() + " 입니다.");
			
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터 베이스 문제 발생: " + e);
		}
	}
	
	public ResponsDto<LogInResponseDto> LogIn(LoginDto loginDto) {
		MemberEntity memberEntity;
		try {
			memberEntity = memberRepository.findById(loginDto.getId()).get();
			
			if(memberEntity == null) {
				return ResponsDto.setFailed("아이디를 잘못 입력하셨습니다.");
			}
			
			if(!memberEntity.getPassword().equals(loginDto.getPassword())) {
				return ResponsDto.setFailed("비밀번호를 잘못 입력하셨습니다.");
			}
			
			memberEntity.setPassword("");
			
			String token = tokenProvider.create(loginDto.getId());
			int exprTime = 3600000;
			
			LogInResponseDto logInResponseDto = new LogInResponseDto(token,exprTime,memberEntity);
			return ResponsDto.setSucces(logInResponseDto, "로그인 성공");
			
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터 베이스 문제 발생: " + e);
		}
	}
	
	public ResponsDto<MemberInfoResponseDto> LoadInfo(String id) {
		try {
			MemberEntity memberEntity = memberRepository.findById(id).get();
			MemberInfoResponseDto infoResponseDto = new MemberInfoResponseDto(memberEntity);
			
			return ResponsDto.setSucces(infoResponseDto, "회원 정보 불러오기");
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터 베이스 문제 발생: " + e);
		}
	}
	
	public ResponsDto<String> UpdateName(UpdateNameDto nameDto) {
		try {
			MemberEntity memberEntity = memberRepository.findByName(nameDto.getOldName());
			memberEntity.setName(nameDto.getNewName());
			memberRepository.save(memberEntity);
			
			return ResponsDto.setSucces(null, "이름 변경 완료");
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터 베이스 문제 발생: " + e);
		}
	}
	
	public ResponsDto<String> UpdateNickname(UpdateNicknameDto updateNicknameDto){
		try {
			boolean check = true;
			check = memberRepository.existsByNickname(updateNicknameDto.getNewNickname());
			
			if(check) {
				return ResponsDto.setFailed("변경하실 닉네임과 동일한 닉네임이 존재합니다.");
			}
			
			MemberEntity memberEntity = memberRepository.findByNickname(updateNicknameDto.getOldNickname());
			memberEntity.setNickname(updateNicknameDto.getNewNickname());
			
			memberRepository.save(memberEntity);
			
			return ResponsDto.setSucces(null, "닉네임 변경 완료");
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터 베이스 문제 발생: " + e);
		}
	}
	
	public ResponsDto<String> UpdateNumber(UpdateNumberDto updateNumberDto){
		try {
			boolean check = true;
			check = memberRepository.existsByNumber(updateNumberDto.getNewNumber());
			
			if(check) {
				return ResponsDto.setFailed("변경하실 전화번호와 동일한 번호가 존재합니다.");
			}
			
			MemberEntity memberEntity = memberRepository.findByNumber(updateNumberDto.getOldNumber());
			memberEntity.setNumber(updateNumberDto.getNewNumber());
			
			memberRepository.save(memberEntity);
			
			return ResponsDto.setSucces(null, "전화번호 변경 완료");
			
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터 베이스 문제 발생: " + e);
		}
	}
	
	public ResponsDto<String> UpdatePassword(UpdatePasswordDto updatePasswordDto){
		try {
			boolean check = false;
			check = memberRepository.existsByPassword(updatePasswordDto.getOldPassword());
			
			if(!check) {
				return ResponsDto.setFailed("비밀번호를 잘못 입력하셨습니다.");
			}
			
			MemberEntity memberEntity = memberRepository.findByPassword(updatePasswordDto.getOldPassword());
			memberEntity.setPassword(updatePasswordDto.getNewPassword());
			
			memberRepository.save(memberEntity);
			
			return ResponsDto.setSucces(null, "비밀번호 변경 완료");
			
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터 베이스 문제 발생: " + e);
		}
	}
	
	public ResponsDto<String> DeleteMember(String id) {
		try {
			memberRepository.deleteById(id);
			return ResponsDto.setSucces(null, "회원 탈퇴 완료");
		} catch (Exception e) {
			return ResponsDto.setFailed("데이터 베이스 문제 발생: " + e);
		}
	}
	
}

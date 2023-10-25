package backend.backend.projects.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
import backend.backend.projects.service.MemberService;

@RestController
@RequestMapping("/member")
@CrossOrigin(originPatterns = "http://localhost:3000")
public class MemberContriller {
	
	@Autowired MemberService memberService;

	@PostMapping("/SignUp")
	public ResponsDto<String> SignUp(@RequestBody MemberDto memberDto) {
		System.out.println(memberDto.getId());
		return memberService.SignUP(memberDto);
	}
	
	@PostMapping("/FindId")
	public ResponsDto<String> FindId(@RequestBody FindIdDto findIdDto) {
		return memberService.FindId(findIdDto);
	}
	
	@PostMapping("/FindPassword")
	public ResponsDto<String> FindPassword(@RequestBody FindPasswordDto findPasswordDto) {
		return memberService.FindPassword(findPasswordDto);
	}
	
	@PostMapping("/LogIn")
	public ResponsDto<LogInResponseDto> LogIn(@RequestBody LoginDto loginDto) {
		return memberService.LogIn(loginDto);
	}
	
	@GetMapping("/LoadInfo/{id}")
	public ResponsDto<MemberInfoResponseDto> LoadInfo(@PathVariable("id") String id) {
		return memberService.LoadInfo(id);
	}
	
	@PostMapping("/UpdateName")
	public ResponsDto<String> UpdateName(@RequestBody UpdateNameDto updateNameDto) {
		return memberService.UpdateName(updateNameDto);
	}
	
	@PostMapping("UpdateNickname")
	public ResponsDto<String> UpdateNickname(@RequestBody UpdateNicknameDto updateNicknameDto) {
		return memberService.UpdateNickname(updateNicknameDto);
	}
	
	@PostMapping("UpdateNumber")
	public ResponsDto<String> UpdateNickname(@RequestBody UpdateNumberDto updateNumberDto) {
		return memberService.UpdateNumber(updateNumberDto);
	}
	
	@PostMapping("UpdatePassword")
	public ResponsDto<String> UpdateNickname(@RequestBody UpdatePasswordDto updatePasswordDto) {
		return memberService.UpdatePassword(updatePasswordDto);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponsDto<String> DeleteMember(@PathVariable("id") String id) {
		return memberService.DeleteMember(id);
	}
}

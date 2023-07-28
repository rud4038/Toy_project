package backend.backend.projects.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.backend.projects.dto.MemberDto;
import backend.backend.projects.dto.MemberResponsDto;
import backend.backend.projects.service.MemberService;

@RestController
@RequestMapping("/member")
@CrossOrigin(originPatterns = "http://localhost:3000")
public class MemberContriller {
	
	@Autowired MemberService memberService;

	@PostMapping("/SignUp")
	public MemberResponsDto SignUp(@RequestBody MemberDto memberDto) {
		System.out.println(memberDto.getId());
		return memberService.SignUP(memberDto);
	}
}

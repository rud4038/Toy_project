package backend.backend.projects.dto;

import backend.backend.projects.entity.MemberEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class MemberInfoResponseDto {
	String name;
	String nickname;
	String number;
	
	public MemberInfoResponseDto(MemberEntity memberEntity) {
		this.name = memberEntity.getName();
		this.nickname = memberEntity.getNickname();
		this.number = memberEntity.getNumber();
	}
}

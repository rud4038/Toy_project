package backend.backend.projects.dto;

import backend.backend.projects.entity.MemberEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class LogInResponseDto {
	private String token;
	private int exprTime;
	private MemberEntity member;

}

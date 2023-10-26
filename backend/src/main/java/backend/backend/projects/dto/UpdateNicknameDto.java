package backend.backend.projects.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UpdateNicknameDto {
	String id;
	String oldNickName;
	String newNickName;
}

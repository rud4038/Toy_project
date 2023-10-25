package backend.backend.projects.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UpdatePasswordDto {
	String oldPassword;
	String newPassword;
}

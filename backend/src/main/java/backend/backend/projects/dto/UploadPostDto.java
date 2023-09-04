package backend.backend.projects.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UploadPostDto {
	private String title;
	private String value;
	private String mainimg;
	private String nickname;
}

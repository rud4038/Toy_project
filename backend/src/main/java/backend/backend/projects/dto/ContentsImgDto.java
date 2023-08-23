package backend.backend.projects.dto;


import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class ContentsImgDto {
	private String Img;
	
	public ContentsImgDto(String Imgname) {
		this.Img = "http://localhost:4040/file/" + Imgname;
	}
}


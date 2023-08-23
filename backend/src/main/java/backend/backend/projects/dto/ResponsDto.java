package backend.backend.projects.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor(staticName = "set")
@Data
public class ResponsDto<D> {
	private boolean result;
	private D data;
	private String message;
	
	public static <D> ResponsDto<D> setSucces(D data, String message){
		return ResponsDto.set(true, data, message);
	}
	public static <D> ResponsDto<D> setFailed(String message){
		return ResponsDto.set(false, null, message);
	}
	
}

package backend.backend.projects.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Entity(name = "contents")
@Table(name = "contents")
public class ContentsEntity {
	@Id
	private int contents_number;
	private String contents_title;
	private String contents_con;
	private String contents_mainimg;
	private String contents_nickname;
	private int contents_recommendation;
	private String contents_date;
	private int contents_views;
}

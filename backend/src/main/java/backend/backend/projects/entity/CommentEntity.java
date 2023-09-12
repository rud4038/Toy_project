package backend.backend.projects.entity;

import jakarta.persistence.Column;
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
@Entity(name = "comment")
@Table(name = "comment")
public class CommentEntity {
	@Id
	@Column(name = "comment_number")
	private int commentNumber;
	@Column(name = "contents_number")
	private int contentsNumber;
	private String nickname;
	@Column(name = "comment_con")
	private String commentCon;
	@Column(name = "comment_date")
	private String commentDate;
}

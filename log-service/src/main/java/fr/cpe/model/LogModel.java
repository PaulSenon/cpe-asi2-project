package fr.cpe.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import fr.cpe.dto.LogDto;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
public class LogModel implements Serializable {

	private static final long serialVersionUID = 2733795832476568049L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private Date timestamp;
	private String message;
	private String logType;
	private String source;

	public LogModel(){
		this.timestamp = new Date();
	}

	public LogModel(String message, String logType, String source) {
		this();
		this.message = message;
		this.logType = logType;
		this.source = source;
	}

	public LogModel(LogDto dto){
		this();
		this.message = dto.getMessage();

		LogType type = LogType.INFO;
		if(dto.getLogType() != null){
			type = LogType.valueOf(dto.getLogType().toUpperCase());
			System.out.println(dto.getLogType());
		}
		this.logType =  type.name();

		if(dto.getSource() == null){
			this.source = "UNKNOWN";
		}else{
			this.source = dto.getSource();
		}
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Date getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}
}

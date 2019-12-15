package com.cpe.springboot.lib;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@Builder
@JsonInclude(Include.NON_NULL)
public class LogDto implements Serializable {
    private static final long serialVersionUID = 1069270218228032176L;

    public LogDto(String logType, String source, String message){
        this.logType = logType;
        this.source = source;
        this.message = message;
    }

    private String message;
    private String source;
    private String logType;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getLogType() {
        return logType;
    }

    public void setLogType(String logType) {
        this.logType = logType;
    }
}

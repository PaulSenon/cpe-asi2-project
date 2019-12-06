package fr.cpe.controller;

import fr.cpe.dto.LogDto;
import fr.cpe.model.LogModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LogService {

	@Autowired
	private LogRepository logRepository;

	public void addLog(LogDto logDto) {
		LogModel log = new LogModel(logDto);

		// needed to avoid detached entity passed to persist error
		logRepository.save(log);
	}


}

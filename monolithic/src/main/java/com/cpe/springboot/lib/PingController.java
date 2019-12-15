package com.cpe.springboot.lib;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

//ONLY FOR TEST NEED ALSO TO ALLOW CROOS ORIGIN ON WEB BROWSER SIDE
@RestController
public class PingController {

	@Autowired
	private LoggerClient logger;
	
	@RequestMapping("/ping")
	private String ping() {
		logger.info("ping reveived");
		return "pong";
	}
	
}

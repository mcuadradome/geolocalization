package com.uniminuto.object;


import org.springframework.http.HttpStatus;


public class ResponseVO {
	
	private HttpStatus httpStatus;
	private String message;
	private Object result;
	
	public ResponseVO() {		
	}
	
	public ResponseVO(HttpStatus httpStatus, String message, Object result) {
		super();
		this.httpStatus = httpStatus;
		this.message = message;
		this.result = result;
	}
	
	public ResponseVO(HttpStatus httpStatus, String message) {
		super();
		this.httpStatus = httpStatus;
		this.message = message;
	}
	
	public HttpStatus getHttpStatus() {
		return httpStatus;
	}
	public void setHttpStatus(HttpStatus httpStatus) {
		this.httpStatus = httpStatus;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Object getResult() {
		return result;
	}
	public void setResult(Object result) {
		this.result = result;
	}
	
	
	
	
	
	
}

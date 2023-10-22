package com.uniminuto.exception;

import java.util.Date;

public class ErrorDetail {

	private Date date;
	private String messsage;
	private String details;
	
	public ErrorDetail(Date date, String messsage, String details) {
		super();
		this.date = date;
		this.messsage = messsage;
		this.details = details;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getMesssage() {
		return messsage;
	}

	public void setMesssage(String messsage) {
		this.messsage = messsage;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}
}

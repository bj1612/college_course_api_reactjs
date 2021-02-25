package com.example.demo.model;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Course {
	
	@Id
	private long id;
	private String title;
	private String description;
	
	//default Constructor
	public Course() {
		super();
		
	}
	
	//parameterized constructor
	public Course(long id, String title, String description) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
	}
	
	//getter and setter method
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	//toString Method
	@Override
	public String toString() {
		return "Courses [id=" + id + ", title=" + title + ", description=" + description + "]";
	}
	
	

}

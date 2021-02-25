package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Dao.CourseDao;
import com.example.demo.model.Course;

@Service
public class CourseService implements iCourseService {
	
	@Autowired
	private CourseDao courseDao; 
//	List<Course> list;
	
	CourseService(){
//		list = new ArrayList<Course>();
//		list.add(new Course(1,"C++","Balguru Swami"));
//		list.add(new Course(2,"C#","John Smith"));
	}
	
	// get all courses 
	@Override
	public List<Course> getCourses() {
//		return list;
		return courseDao.findAll();
	}

	//get one course
	@Override
	public Course getCourse(long courseId) {
//		Course singleCourse = null;
//		for (Course course : list) {
//			if(course.getId() == courseId) {
//				singleCourse = course;
//				break;
//			}
//		}
//		return singleCourse;
		return courseDao.getOne(courseId);
	}

	// add new course
	@Override
	public Course addCourse(Course course) {
//		list.add(course);
//		return course;
		return courseDao.save(course);
	}

	//update existing course
	@Override
	public Course updateCourse(Course course) {
//		list.forEach(e ->{
//			if(e.getId() == course.getId()) {
//				e.setTitle(course.getTitle());
//				e.setDescription(course.getDescription());
//			}
//		});
//		return course;
		courseDao.save(course);
		return course;
	}

	//delete course
	@Override
	public void deleteCourse(long courseId) {
//		list = this.list.stream().filter(e->e.getId()!=courseId).collect(Collectors.toList());
		 Course entity = courseDao.getOne(courseId);
		 courseDao.delete(entity);
	}

}

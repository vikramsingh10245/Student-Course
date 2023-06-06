package com.student.courses.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.student.courses.dao.CourseDao;
import com.student.courses.entity.Course;

@Service
public class CourseServiceImpl implements CourseService {
	
	@Autowired
	private CourseDao coursedao;
	

	@Override
	public List<Course> getCourses() {
		
		return coursedao.findAll(); 
	}
	@Override
	public Course getCourse(long courseId) {
	return coursedao.findById(courseId).get();
	}
	@Override
	public Course addCourse(Course course) {
		coursedao.save(course);
		return course;
	}
	@Override
	public Course updateCourse(Course course,long courseId) {
		coursedao.save(course);
		return course;
	}
	@Override
	public void deleteCourse(long courseId) {
		coursedao.deleteById(courseId);
		
	}
	@Override
	public Course getCourseByName(String coursetitle) {
	List<Course> allcourse=	coursedao.findAll();
		Course course=null;
		for(Course course1:allcourse)
		{
			if(course1.getTitle().toLowerCase().equals(coursetitle.toLowerCase()))
			{
				course=coursedao.findById(course1.getId()).get();
				System.out.println(course);
				return course;
			}
			
		}
		return course;
		
	}
	

}

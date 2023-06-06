package com.student.courses.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.student.courses.entity.Course;
import com.student.courses.services.CourseService;


@RestController
@CrossOrigin("http://localhost:3000")
public class MyController {
	
	@Autowired
	private CourseService courseservise;
	//get all course
	
	@GetMapping("/Courses")
	public List<Course> getCourses()
	{
		
		return this.courseservise.getCourses();
	}
	
	@GetMapping("/Courses/{courseId}")
	public Course getCourse(@PathVariable String courseId)
	{
		return this.courseservise.getCourse(Long.parseLong(courseId));	
	}
	
	
	@GetMapping("/Courses/title/{coursetitle}")
	public Course getCourseByName(@PathVariable String coursetitle)
	{
		
		return this.courseservise.getCourseByName(coursetitle);
	}
	
	@PostMapping("/Courses")
	public Course addCourse(@RequestBody Course course)
	{
		return this.courseservise.addCourse(course);
	}
	
	@PutMapping("/Courses/{courseId}")
	public Course updateCourse(@RequestBody Course course,@PathVariable String courseId)
	{
		
		return this.courseservise.updateCourse(course,Long.parseLong(courseId));
	}
	
	@DeleteMapping("/Courses/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId)
	{
		try {
		 this.courseservise.deleteCourse(Long.parseLong(courseId));
		return new ResponseEntity<>(HttpStatus.OK);
		}catch(Exception e)
		{
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	

}

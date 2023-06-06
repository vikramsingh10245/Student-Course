package com.student.courses.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.student.courses.entity.Course;

public interface CourseDao extends JpaRepository<Course, Long>{

}

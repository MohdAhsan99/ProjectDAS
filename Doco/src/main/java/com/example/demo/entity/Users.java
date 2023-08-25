package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.ManyToAny;

@Entity
@Table(name="users")
public class Users {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id_;
	
	@Column
	String email_,password_,answer_;
	
	@Column
	int status_;
	
	@ManyToOne
	@JoinColumn(name="role_id_")
	Roles role_id_;
	
	@ManyToOne
	@JoinColumn(name="question_id_")
	Questions question_id_;

	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Users(String email_, String password_, String answer_, int status_, Roles role_id_, Questions question_id_) {
		super();
		this.email_ = email_;
		this.password_ = password_;
		this.answer_ = answer_;
		this.status_ = status_;
		this.role_id_ = role_id_;
		this.question_id_ = question_id_;
	}

	public int getId_() {
		return id_;
	}

	public void setId_(int id_) {
		this.id_ = id_;
	}

	public String getEmail_() {
		return email_;
	}

	public void setEmail_(String email_) {
		this.email_ = email_;
	}

	public String getPassword_() {
		return password_;
	}

	public void setPassword_(String password_) {
		this.password_ = password_;
	}

	public String getAnswer_() {
		return answer_;
	}

	public void setAnswer_(String answer_) {
		this.answer_ = answer_;
	}

	public int getStatus_() {
		return status_;
	}

	public void setStatus_(int status_) {
		this.status_ = status_;
	}

	public Roles getRole_id_() {
		return role_id_;
	}

	public void setRole_id_(Roles role_id_) {
		this.role_id_ = role_id_;
	}

	public Questions getQuestion_id_() {
		return question_id_;
	}

	public void setQuestion_id_(Questions question_id_) {
		this.question_id_ = question_id_;
	}
}

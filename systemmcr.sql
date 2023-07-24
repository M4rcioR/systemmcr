CREATE DATABASE systemmcr;

CREATE TABLE Users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE Contacts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  address VARCHAR(200),
  phone VARCHAR(20),
  instagram VARCHAR(100),
  linkedin VARCHAR(100),
  FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE ProfessionalExperiences (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  company_name VARCHAR(100) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE,
  is_current_job TINYINT(1) DEFAULT 0,
  position VARCHAR(100),
  FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Education (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  institution_name VARCHAR(100) NOT NULL,
  course_name VARCHAR(100) NOT NULL,
  graduation_year INT,
  FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE ExtracurricularActivities (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  activity_name VARCHAR(100) NOT NULL,
  details VARCHAR(200),
  FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Certifications (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  certification_name VARCHAR(100) NOT NULL,
  institution VARCHAR(100),
  completion_date DATE,
  FOREIGN KEY (user_id) REFERENCES Users(id)
);

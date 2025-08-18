import React from "react";
import { Link, Outlet } from "react-router-dom";

const Courses = () => {
	return (
		<div>
			<h1>Courses</h1>

			<ul className="courses-item">
				<Link className="courses-link" to="cpp">CPP</Link>
				<Link className="courses-link" to="java">JAVA</Link>
				<Link className="courses-link" to="python">PYTHON</Link>
			</ul>

      <div className="course-show">
        <Outlet />
      </div>
		</div>
	);
};

export default Courses;

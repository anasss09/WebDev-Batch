import axios from "axios";
import React, { useRef } from "react";
const BASE_URL = 'http://localhost:4444'

const AddReataurant = () => {
    const nameRef = useRef()
    const imageRef = useRef()
    const locationRef = useRef()

    const formSubmitHandler = async (ev) => {
        ev.preventDefault();
        const name = nameRef.current.value
        const image = imageRef.current.value
        const location = locationRef.current.value

        if(name.trim().length == 0 || image.trim().length == 0 || location.trim().length == 0) {
            alert("Please enter correct details.")
        } else {
            try{
                let data = await axios.post(BASE_URL+ '/admin/add-restaurant', {
                    name,
                    location,
                    image
                });
                console.log(data);
                nameRef.current.value = ""
                imageRef.current.value = ""
                locationRef.current.value = ""
                
            } catch(err) {
                alert(err.message)
            }
        }
    }

	return (
		<div className="container-width">
			<h1>Add Reataurant </h1>

			<form onSubmit={formSubmitHandler}>
				<div className="mb-3">
					<label className="form-label">
						Name
					</label>
					<input
						type="text"
						className="form-control"
						aria-describedby="emailHelp"
                        ref={nameRef}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">
						Image
					</label>
					<input
						type="text"
						className="form-control"
                        ref={imageRef}
					/>
				</div>

                <div className="mb-3">
					<label className="form-label">
						Location
					</label>
					<input
						type="text"
						className="form-control"
                        ref={locationRef}
					/>
				</div>

				{/* <div className="mb-3 form-check">
					<input
						type="checkbox"
						className="form-check-input"
					/>
					<label className="form-check-label" >
						Check me out
					</label>
				</div> */}
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};

export default AddReataurant;

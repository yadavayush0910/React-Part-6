import { useState } from "react";

export default function CommentsForm() {
    const [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((currData) => ({
            ...currData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData); // Handle form submission logic here
    };

    return (
        <div>
            <h4>Give a comment</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    placeholder="username"
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                />
                <br /><br /><br />
                <label htmlFor="remarks">Remark:</label>
                <textarea
                    id="remarks"
                    name="remarks"
                    placeholder="add a few remarks"
                    value={formData.remarks}
                    onChange={handleInputChange}
                />
                <br /><br /><br />
                <label htmlFor="rating">Rating:</label>
                <input
                    id="rating"
                    name="rating"
                    placeholder="rating"
                    type="number"
                    min={1}
                    max={5}
                    value={formData.rating}
                    onChange={handleInputChange}
                />
                <br /><br /><br />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}

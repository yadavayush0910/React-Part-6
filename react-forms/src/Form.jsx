import { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",
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
        console.log(formData); // You can do something with the form data here
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input
                placeholder="Enter your full name"
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
            />
            <br />
            <label htmlFor="username">Username</label>
            <input
                placeholder="Enter your username"
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
            />
            <br /><br />
            <label htmlFor="password">Password</label>
            <input
                placeholder="Enter your password"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

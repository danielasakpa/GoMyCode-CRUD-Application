import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [studentDate, setStudentDate] = useState({});

    let { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:4000/student/${id}`)
            .then((response) => response.json())
            .then((json) => {
                setStudentDate(json)
            })
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log({
        //     id: id,
        //     name: name ? name : studentDate.name,
        //     email: email ? email : email,
        // })

        if (studentDate) {
            await fetch(`http://localhost:4000/student/${id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    id: id,
                    name: name ? name : studentDate.name,
                    email: email ? email : email,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
        }

        navigate("/");
    }

    console.log(studentDate.name);

    return (
        <div className="container">
            <form className="mt-4 w-50 border p-5">
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Full Name</label>
                    <input type="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Update;
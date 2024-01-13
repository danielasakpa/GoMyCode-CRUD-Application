import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {

    // const [name, setName] = useState("Janet")
    // const [newPosition, setNewPosition] = useState("front end develope")
    // const [newSalary, setNewSalary] = useState("300K")
    const [data, setData] = useState([])

    const fetchData = async () => {
        await fetch('http://localhost:4000/student')
            .then((response) => response.json())
            .then((json) => {
                setData(json)
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchData();
    }, []);

    // const handleChange = () => {
    //     setName("Engineer Janet");
    //     setNewPosition("Chief Technology Officer")
    //     setNewSalary("800k")
    // };

    const handleDelete = (id) => {
        fetch(`http://localhost:4000/student/${id}`, {
            method: 'DELETE',
        })
            .finally(() => fetchData());
    }


    return (
        <div className="container mt-5 ">
            {/* <div className="mx-auto row row-cols-3 g-4">
                {
                    data?.map(item => (
                        <div key={item?.id} className="card col" style={{ width: "18rem" }}>
                            <img src={item?.url} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item?.title}</h5>
                                <p className="card-text">{item?.id}</p>
                            </div>
                        </div>
                    ))
                }
            </div> */}
            {/* <h1 className="h1">My name is {name}, I am a {newPosition} and I currently earn {newSalary}</h1>
            <button onClick={handleChange} className="btn btn-primary mt-3">Promotion</button> */}
            {/* <button onClick={fetchData} className="btn btn-primary mt-3">Fetch Data</button> */}
            <h1 className="text-center text-decoration-underline">CRUD Application</h1>

            <div className="d-flex justify-content-end mt-3">
                <Link to="/create">
                    <button className="btn btn-success">Create +</button>
                </Link>
            </div>

            <table class="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(student => (
                            <tr>
                                <th scope="row">{student.id}</th>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>
                                    <Link to={`/update/${student.id}`}>
                                        <button className="btn btn-primary me-3">Update</button>
                                    </Link>
                                    <button className="btn btn-danger" onClick={() => handleDelete(student.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home;
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Student() {

    const [listS, setListS] = useState([]);


    useEffect(() => {

        //  setBlog(Data)
        // goi API từ https://62abf1f4bd0e5d29af17c89e.mockapi.io/student
        axios.get('https://62abf1f4bd0e5d29af17c89e.mockapi.io/student')
            .then((response) => {
                setListS(response.data);
            }).catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div className="container">
            <Link to="/add-student">
                <a className="btn btn-success">Thêm mới sinh viên</a>
            </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>MSV</th>
                        <th>Lớp</th>
                        <th>Họ và tên</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listS.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <td scope="row">{index + 1}</td>
                                    <td>{item.id}</td>
                                    <td>{item.className}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <a className="btn btn-primary">Edit</a>
                                        <a className="btn btn-danger">Delete</a>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    );
}

export default Student;
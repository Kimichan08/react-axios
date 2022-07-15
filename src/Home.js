import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Data from "./Data";

function Home() {
    const [blog, setBlog] = useState([]);

    useEffect(() => {

      //  setBlog(Data)
      // goi API từ https://62abf1f4bd0e5d29af17c89e.mockapi.io/blog
      axios.get('https://62abf1f4bd0e5d29af17c89e.mockapi.io/blog')
      .then((response) => {
        setBlog(response.data);
      }).catch((error) =>{
        console.log(error)
      })
    }, [])


    return (

        <>

            <div className="album py-5 bg-light">
                <div className="container">

                    <div className="row">
                        {blog.map(item => {
                            return (
                                <div key={item.id} className="col-md-4">
                                    <div className="card mb-4 shadow-sm">
                                        <img src={item.avatar} />

                                        <div className="card-body">
                                            <p className="card-text">{item.title}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <Link to={`detail/${item.id}`}>
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>

                                                    </Link>
                                                </div>
                                                <small className="text-muted">9 mins</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>);
}

export default Home;
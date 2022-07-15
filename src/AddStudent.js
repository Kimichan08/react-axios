import { useState } from "react";

function AddStudent() {

    const[control,setControl] = useState({});
    return (
        <>
            <form onSubmit={onSubmitForm}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">FullName</label>
                    <input type="text" className="form-control" name="name" id="exampleInputfullName" aria-describedby="fullNameHelf " onChange={inputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">ClassName</label>
                    <input type="text" className="form-control" name="className" id="exampleInputPassword1" onChange={inputChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default AddStudent;
import React, {useState} from 'react';
const LPhome = () => {
    const [value, setValue] = useState("");
    return (
        <div class="alert alert-danger" role="alert">
            <h5 className="display-4">{value}</h5>
            <hr className="my-4"/>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button" onClick={() => setValue("ALERT")}>Pokaż</a>
                    <hr className="my-4" />
                    <a className="btn btn-primary btn-lg" href="#" role="button" onClick={() => setValue("")}>Schowaj</a>
                </p>
        </div>
    )
};
export default LPhome;




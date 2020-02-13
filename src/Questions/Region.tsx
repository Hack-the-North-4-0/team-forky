import React from "react";
import {History} from "history";
import {useHistory} from "react-router-dom";
import Button from "../Common/Button";

const Region = () => {
    const history: History = useHistory();
    const start = (): void => history.push('EmploymentStatus');
    return (
        <div>
            <Button text="Next" onClick={start} arrow={false}/>
        </div>
    )
};

export default Region;

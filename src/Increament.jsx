import React from "react";
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


const Increment = () => {
    return (
        <>
            <div className="main_div">
            <div className="center_div">
            <h1>0</h1>
            <div className="two_btn">
            <Tooltip title="Add" aria-label="add">
            <Button className="one">
            <AddRoundedIcon/>
            </Button>
            </Tooltip>
            <button className="">
            <DeleteForeverRoundedIcon/>
            </button>
            </div>

            </div>

            </div>
        </>
    )

}

export default Increment;
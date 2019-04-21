import React from 'react';

function EditPositions(props) {
    return (
        <div className="EditPositions">
            <div
                onClick={props.handlePositionBox}
                style={props.box ? {opacity: 1} : null}>
                <p>box</p>
            </div>
            <div
                onClick={props.handlePositionCat}
                style={props.cat ? {opacity: 1} : null}>
                <p>cat</p>
            </div>
            <div
                onClick={props.handlePositionFloor}
                style={props.floor ? {opacity: 1} : null}>
                <p>floor</p>
            </div>
        </div>
    )
}

export default EditPositions;
import React, { forwardRef, useImperativeHandle } from "react";
import { Checkbox } from "primereact/checkbox";

const ReadRender = forwardRef((params, ref) => {
    useImperativeHandle(ref, () => ({
        getReactContainerStyle() {
            return {
                width: "100%",
                height: "100%",
                justifyContent: "center",
                display: "flex",
                alignItems: "center"
            };
        }
    }));
    const { data } = params;
    if (!data) {
        return (<></>);
    }

    return (
        <Checkbox
            name="read"
            checked={data?.read}
        />
    );
});

export default ReadRender;

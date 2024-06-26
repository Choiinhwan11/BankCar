import React from "react";
import { Toast } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

export const ToastComponent = (props) => {
    const { notif } = props;
    const dispatch = useDispatch();

    return (
        <Toast
            style={{
                color: "white",
                fontSize: "20px",
                borderRadius: 8,
                backgroundColor: "#2E68FF",
            }}
            key={notif.id}
            autohide={true}
            delay={3500}
        >
            <Toast.Body>{notif.content}</Toast.Body>
        </Toast>
    );
};

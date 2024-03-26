import React from "react";
import { RequestManager } from "../controllers/RequestManager";

export default class RouteBanners extends React.Component {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        RequestManager.get("admin/banner").then(data => {
            console.log(data);
        });
    }

    render() {
        return (
            <>
            </>
        );
    }
}

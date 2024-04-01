export const RequestManager = {
    hostname: "http://" + location.hostname + ":3000/",

    get(route: string): Promise<any> {
        return fetch(this.hostname + route, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(response => {
            if (!response.ok)
                window.location.href = "/";
            return response.json()
        });
    },

    post(route: string, data: any): Promise<any> {
        return fetch(this.hostname + route, {
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
            mode: "cors",
            method: "POST",
            body: JSON.stringify(data),
        }).then(response => {
            if (!response.ok)
                window.location.href = "/";
            return response.json()
        });
    }
}
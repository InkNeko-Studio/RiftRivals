import { Card, CardContent, Grid, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import React from "react";

type RouteDashboardState = {
    usersCount: any[]
};

export default class RouteDashboard extends React.Component {
    state: RouteDashboardState = {
        usersCount: [],
    };

    componentDidMount() {
        fetch("http://" + location.hostname + ":3000/admin/users/count", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState(() => ({
                    usersCount: data
                }));
            })
            .catch(() => {
                window.location.href = "/login";
            });
    }

    render() {
        return (
            <>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Users Count
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {this.state.usersCount}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Profit Gain
                                </Typography>
                                <Typography variant="h5" component="div">
                                    R$ 5231,95
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Daily Users
                                </Typography>
                                <Typography variant="h5" component="div">
                                    207
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Message of the Day
                                </Typography>
                                <Typography variant="h6" component="div">
                                    Nós não deveríamos nos culpar pelas coisas ruins que aconteceram conosco. Algumas vezes, não importa o que façamos, nós somos vítimas das circunstâncias. A gente só deveria ter que sair dessas situações.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Users Count Timeline
                                </Typography>
                                <LineChart
                                    xAxis={[
                                        {
                                            data: [0, 1, 2, 3, 4, 5],
                                            valueFormatter: (d) => {
                                                switch(d) {
                                                    case 0:
                                                        return "Out/23";
                                                    case 1:
                                                        return "Nov/23";
                                                    case 2:
                                                        return "Dec/23";
                                                    case 3:
                                                        return "Jan/24";
                                                    case 4:
                                                        return "Fev/24";
                                                    case 5:
                                                        return "Mar/24";
                                                }
                                                return "1999"
                                            },
                                        }
                                    ]}
                                    series={[
                                        {
                                            curve: 'linear',
                                            data: [212, 752, 1002, 3432, 4012, 5343],
                                        },
                                    ]}
                                    width={340}
                                    height={300}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Profit Gain
                                </Typography>
                                <LineChart
                                    margin={{left: 60}}
                                    xAxis={[
                                        {
                                            data: [0, 1, 2, 3, 4, 5],
                                            valueFormatter: (d) => {
                                                switch(d) {
                                                    case 0:
                                                        return "Out/23";
                                                    case 1:
                                                        return "Nov/23";
                                                    case 2:
                                                        return "Dec/23";
                                                    case 3:
                                                        return "Jan/24";
                                                    case 4:
                                                        return "Fev/24";
                                                    case 5:
                                                        return "Mar/24";
                                                }
                                                return "1999"
                                            },
                                        }
                                    ]}
                                    series={[
                                        {
                                            curve: 'linear',
                                            data: [3421, 4824, 5212, 6742, 5965, 7523],
                                            valueFormatter: (d) => {
                                                return "R$ "+ d;
                                            }
                                        },
                                    ]}
                                    yAxis={[
                                        {
                                            valueFormatter: (d) => {
                                                return "R$ "+ d;
                                            }
                                        }
                                    ]}
                                    width={340}
                                    height={300}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Daily Users Timeline
                                </Typography>
                                <LineChart
                                    xAxis={[
                                        {
                                            data: [0, 1, 2, 3, 4, 5],
                                            valueFormatter: (d) => {
                                                switch(d) {
                                                    case 0:
                                                        return "15/03";
                                                    case 1:
                                                        return "16/03";
                                                    case 2:
                                                        return "17/03";
                                                    case 3:
                                                        return "18/03";
                                                    case 4:
                                                        return "19/03";
                                                    case 5:
                                                        return "20/03";
                                                }
                                                return "1999"
                                            },
                                        }
                                    ]}
                                    series={[
                                        {
                                            curve: 'linear',
                                            data: [21, 42, 307, 221, 752, 622],
                                        },
                                    ]}
                                    width={340}
                                    height={300}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </>
        );
    }
}
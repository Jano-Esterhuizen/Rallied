import { Grid2, List, ListItem, ListItemText } from "@mui/material";
import ActivityList from "./ActivityList";

type Props ={
    activities: Activity[]
}

export default function ActivityDashboard({activities}: Props) {
    return (
        <Grid2 container>
            <Grid2 size={9}>
                <ActivityList activities={activities}/>

            </Grid2>
        </Grid2>
    )
}
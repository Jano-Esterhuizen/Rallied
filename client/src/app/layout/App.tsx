import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import {useEffect, useState } from "react"
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(Response => setActivities(Response.data))

      return () => {}
  }, [])

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find(x => x.id === id));
  }

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined)
  }


  return (
    <>
    <Box sx={{bgcolor: '#eeeeee'}}>
      <CssBaseline/> 
    {/* Used to remove padding around the NavBar, Normalize styles across browsers
    Removes inconsistencies in things like default margins, font sizes, and line heights. */}
      <NavBar/>
      <Container maxWidth='xl' sx={{mt: 3}}>
        <ActivityDashboard 
          activities={activities} 
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          selectedActivity={selectedActivity}
        />

      </Container>
    </Box>
    
      
    </>

  )
}

export default App

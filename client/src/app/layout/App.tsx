import { Container, CssBaseline, List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";
import {useEffect, useState } from "react"
import NavBar from "./NavBar";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(Response => setActivities(Response.data))

      return () => {}
  }, [])


  return (
    <>
    
    <CssBaseline/> 
    {/* Used to remove padding around the NavBar, Normalize styles across browsers
    Removes inconsistencies in things like default margins, font sizes, and line heights. */}
      <NavBar/>
      <Container maxWidth='xl' sx={{mt: 3}}>
        <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </List>

      </Container>
      
    </>

  )
}

export default App

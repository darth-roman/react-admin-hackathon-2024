import {Resource, Admin, ShowGuesser, EditGuesser, ListGuesser} from "react-admin"
import restProvider from "ra-data-simple-rest"
import { authProvider } from "./providers/authProvider"
import PeopleList from "./components/people/PeopleList"
import PeopleCreate from './components/people/PeopleCreate'
import PeopleEdit from "./components/people/PeoplEdit"
import { PayrolList } from "./components/payrols/PayrolList"
import { PayrolShow } from "./components/payrols/PayrolShow"
import { PayrolEdit } from "./components/payrols/PayrolEdit"
import { PayrolCreate } from "./components/payrols/PayrolCreate"

import PeopleIcon from "@mui/icons-material/Groups"
import PayrolIcon from "@mui/icons-material/Summarize"
import { LeaveList } from "./components/leaves/LeaveList"
import { LeaveEdit } from "./components/leaves/EditLeave"


function App() {
  return <Admin 
  authProvider={authProvider}
  dataProvider={restProvider("http://localhost:3000")} 
  
  >
    <Resource 
      name="people" 
      list={PeopleList} 
      create={PeopleCreate} 
      edit={PeopleEdit} 
      show={ShowGuesser}
      icon={PeopleIcon}
      /> 
    <Resource 
      name="payrols" 
      create={PayrolCreate}
      list={PayrolList} 
      edit={PayrolEdit} 
      show={PayrolShow}
      icon={PayrolIcon}
    />
    <Resource 
      name="leaves"
      list={LeaveList}
      edit={LeaveEdit}
    />
  </Admin>
}

export default App;

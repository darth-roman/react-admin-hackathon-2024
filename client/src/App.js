import {Resource, Admin, ShowGuesser, EditGuesser, ListGuesser} from "react-admin"
import restProvider from "ra-data-simple-rest"
import PeopleList from "./components/people/PeopleList"
import PeopleCreate from './components/people/PeopleCreate'
import PeopleEdit from "./components/people/PeoplEdit"
import { PayrolList } from "./components/payrols/PayrolList"
import { PayrolShow } from "./components/payrols/PayrolShow"
import { PayrolEdit } from "./components/payrols/PayrolEdit"
function App() {
  return <Admin dataProvider={restProvider("http://localhost:3000")}>
    <Resource name="people" list={PeopleList} create={PeopleCreate} edit={PeopleEdit} show={ShowGuesser} /> 
    <Resource name="payrols" list={PayrolList} edit={PayrolEdit} show={PayrolShow} />
  </Admin>
}

export default App;

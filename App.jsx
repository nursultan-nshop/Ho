import './App.css';
import { useReducer } from 'react';
import Add from "./components/Add";
import Toggle from './components/Toggle';
import Delete from './components/Delete';
import Edit from './components/Edit';


function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, {
          id: Date.now(),
          text: action.text,
          completed: false
        }]
      };
    case 'DELETE_TODO':
      return {
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map(todo =>
          todo.id == action.id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case 'EDIT_TODO':
      return {
        todos: state.todos.map(todo =>
          todo.id ==action.id ? { ...todo, text: action.newText } : todo
        )
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] });

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Add dispatch={dispatch} />
      
      <div>
        {state.todos.map(todo => (
          <div key={todo.id} >
            <Toggle
              id={todo.id}
              completed={todo.completed}
              dispatch={dispatch}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <div>
              <Edit
                id={todo.id}
                text={todo.text}
                dispatch={dispatch}
              />

              <Delete
                id={todo.id}
                dispatch={dispatch}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;








// let initialState = {
//   Language: 'en'
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case 'tildi_austyru':
//       return { ...state, Language: action.til }
//     default:
//       return state
//   }
// }



{/* <FlightContext.Provider value={{ flights}}>
<BrowserRouter>
    <Routes>
        <Route path="/" element={<FlightList />} />
        <Route path="/flightId" element={<FlightBooking />} />
    </Routes>
</BrowserRouter>

</FlightContext.Provider> */}



// import { BrowserRouter,Routes, Route } from 'react-router-dom';



//   const [flights, setFlights] = useState([
//     { id: 1, from: 'Almaty', to: 'Astana', price: 25000, time: '10:00', airline: 'Air Astana', seats: 50 },
//     { id: 2, from: 'Almaty', to: 'Shymkent', price: 30000, time: '14:30', airline: 'SCAT', seats: 45 },
//     { id: 3, from: 'Astana', to: 'Almaty', price: 28000, time: '16:00', airline: 'Qazaq Air', seats: 60 },
//   ])


// let [isAuthenticated, setIsAuthenticated] = useState(() => {
//   return JSON.parse(localStorage.getItem('user')) ? true : false
// })

{/* <AuthContext.Provider value={{ setIsAuthenticated, isAuthenticated }}>
<BrowserRouter>
<Routes>
<Route path='/' element={
<Login setAuth={setIsAuthenticated} />
} />
<Route path='/home' element={
<Home setAuth={setIsAuthenticated} isAuth={isAuthenticated} />
} />
</Routes>
</BrowserRouter>
</AuthContext.Provider> */}

  // const [movies, setMovies] = useState([])
  // 
  //  let [text , settext] = useState("Amjilt Cyber Academy")



     // <BrowserRouter>
    // <Search nursSearch = {setMovies}/>  
    //   <Routes>
    //     <Route path='/' element={<MovieList filmder={movies}/>} />
    //     <Route path='/movie/:id' element={<MovieDetail/>} />
    //         {/* <Route path='/search' element={<h1>Search</h1>} /> */}
    //   </Routes>
    // </BrowserRouter>
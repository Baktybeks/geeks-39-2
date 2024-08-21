import './App.css';
import MainPage from './pages/mainPage/MainPage';
import TodoPage from './pages/todoPage/TodoPage';
import UsersPage from './pages/usersPage/UsersPage';
import PokemonPage from './pages/pokemonPage/PokemonPage';
import FormPage from './pages/formPage/FormPage';
import Fetch from './pages/fetch/Fetch';


function App() {
    return (
        <div className="App">
            {/*<MainPage/>*/}
            {/*<TodoPage/>*/}
            {/*<UsersPage/>*/}
            {/*<PokemonPage/>*/}
            <FormPage/>
            <Fetch/>
        </div>
    );
}


export default App;

import React, { useEffect, useState } from 'react';
import { getData } from '../todoPage/TodoPage';
import PokemonList from '../../components/pokemonList/PokemonList';
import classes from './PokemonPage.module.scss';
import Pagination from '../../components/pagination/Pagination';


const PokemonPage = () => {
    const [ pokemons, setPokemons ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    console.log(pokemons, 'pokemons');


    const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
    const limit = 12
    const [offset, setOffset] = useState(0)

    const page = Math.floor(offset/limit)+1

    const handlePrev = () => {
        return setOffset(prev=>prev-limit)
    }
    const handleNext = () => {
        return setOffset(prev=>prev+limit)
    }
    const getPokemons = async() => {
        setLoading(true);
        try {
            const response = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);
            const data = await response.json();
            return data.results;
        } catch(e) {
            console.log(e.message(e));
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getPokemons().then(data => setPokemons(data));
    }, [offset]);

    return (
        <div className={classes.wrapper}>
            {
                loading
                    ?
                    <div>loading....</div>
                    :
                    <PokemonList pokemons={pokemons}/>
            }
            <Pagination page={page} prev={handlePrev} next={handleNext}/>
        </div>
    );
};

export default PokemonPage;
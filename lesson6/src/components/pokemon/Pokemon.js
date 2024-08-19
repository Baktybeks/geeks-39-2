import React, { useEffect, useState } from 'react';
import classes from './Pokemon.module.scss';


const Pokemon = ({ pokemon }) => {
    const [pokemonOne, setPokemonOne] = useState({})
    const BASE_URL = pokemon.url;

    const getPokemonOne = async() => {
        try {
            const response = await fetch(`${BASE_URL}`);
            const data = await response.json();
            return data;
        } catch(e) {
            console.log(e.message(e));
        }
    };

    useEffect(() => {
        getPokemonOne().then(data => setPokemonOne(data));
    }, []);
    return (
        <li className={classes.card}>
            <div className={classes.info}>
                <img className={classes.img} src={pokemonOne?.sprites?.other?.dream_world?.front_default} alt=""/>
                <p className={classes.title}>{pokemon.name}</p>
            </div>

            <button className={classes.btn}
                onClick={console.log('подробнее')}>
                <p className={classes.btn_title}>подробнее</p>
            </button>
        </li>
    );
};

export default Pokemon;
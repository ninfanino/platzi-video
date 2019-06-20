import React from 'react'
import './search.css';

/*function Search(props) {
    return(

    )
}*/

const Search = (props) => (
    <form className="Search" onSubmit={props.handleSubmit}>
        <input 
            ref={props.setRef}
            type="text" 
            className="Search-input"
            placeholder="Busca tu video favorito"
            name="search"
            onChange={props.handleChange}
            defaultValue={props.value}
        />
    </form>
)

export default Search;
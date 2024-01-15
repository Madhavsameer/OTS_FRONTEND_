import '../Styles/Search.css';

const Search = () =>{
    return(
        <div className="search1">
            <input type="text"placeholder="Ex: React" />
            <button className='s_b1' type='submit'>Search</button>
        </div>
    );
}

export default Search;
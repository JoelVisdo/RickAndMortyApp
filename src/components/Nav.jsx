import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css"

export default function  Nav({onSearch}) {
    return (
        <div className={styles.Nav}>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/">Home</NavLink>
            <SearchBar onSearch={onSearch} />
            <button onClick={()=>onSearch(Math.floor(Math.random()*826))}>Random</button>
        </div>
    )
}
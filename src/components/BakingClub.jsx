import { useState, useEffect } from "react"
import BakingNavBar from "./nav/BakingNavBar"
import { Outlet } from "react-router"

import BakingClubDataContext from "../context/BakingClubDataContext";

export default function BakingClub (props) {
    const [recipes, setRecipes] = useState({});

    useEffect(() => {
        fetch("https://cs571api.cs.wisc.edu/rest/f25/bucket/recipes", {
            headers: {
                "X-CS571-ID": "bid_9ebe6b12cffb689205c3e948a50b4e66907a5b780824f8c6c6a8a243b88a2c2c"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setRecipes(data.results);
        })
    }, [])

    return <div>
        <BakingNavBar/>
        <div style={{ margin: "1rem" }}>
            <BakingClubDataContext.Provider value={recipes}>
                <Outlet />
            </BakingClubDataContext.Provider>
        </div>
    </div>
}
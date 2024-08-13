// create your App component here
import React, {useEffect, useState} from "react";

function App(){
    const [dogImage, setDogImage] = useState(<p>Loading...</p>)
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            setDogImage(<img src={data.message} alt="A Random Dog"/>)
        })
    }, [])

    return (
        dogImage
    )


}


export default App
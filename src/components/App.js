import React, { useEffect, useState } from "react"

function App() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [dog, setDog] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => response.json())
          .then((data) => {
              console.log(data)
              setDog(data)
              setIsLoaded(true)
          });
      }, []);
    
      if (!isLoaded) return <p>Loading...</p>

      return <img src={dog.message} alt="A Random Dog"/>
}
export default App
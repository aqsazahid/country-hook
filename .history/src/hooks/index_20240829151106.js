import { useState, useEffect } from 'react'
import axios from 'axios'

const useCountry = (name) => {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    if (!name) {
      return
    }

    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
      .then(response => {
        setCountry({ data: response.data[0], found: true })
      })
      .catch(error => {
        setCountry({ found: false })
      })
  }, [name])

  return country
}

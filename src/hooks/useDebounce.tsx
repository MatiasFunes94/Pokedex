import React, { useEffect, useState } from 'react'

const useDebounce = (input: string = '', time: number = 500) => {

  const [debouncedValue, setDebouncedValue] = useState(input)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(input);
    }, time);
    return () => {
      clearTimeout( timeout );
    }
  }, [input])
  
  return debouncedValue
}


export default useDebounce;
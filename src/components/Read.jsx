import React from 'react'

function Read() {

  const [data, setData] =  useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/user")
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  })
  
  return (
    <div>
      read
    </div>
  )
}

export default Read

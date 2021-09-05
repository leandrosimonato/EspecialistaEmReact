function HelloWorld() {
  const name = 'Leandro'
  const title = <h1>Hello, {name}!</h1>

  if(name === 'Leandro') {
    return <div>
        <h1 style={{background: 'red'}}>{name}</h1>
      </div>  
  }

  return <div>
    {title}
  </div>
}

export default HelloWorld
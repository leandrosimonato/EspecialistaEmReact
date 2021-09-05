function HelloWorld() {
  const name = 'Leandro'
  return <div>
    <h1>Hello, { name === 'Leandro' ? 'leandro' : name }!!!</h1>
  </div>
}

export default HelloWorld
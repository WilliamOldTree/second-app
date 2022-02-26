export default ({ num = 0 })=>{

    return (
      <div>
        <h2> "It's number"</h2>
          {
           num % 2 === 0
           ? <h3>par</h3>
           : <h3>impar</h3>   
          }
      </div>
    );
  }
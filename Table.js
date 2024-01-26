import Row from "./Row";

const Table = ({list}) => {
return(
  <div className="table-container">
     <table>
      <tbody>
        {list.map(item=>(
          <Row key={item.id} item ={item} />
        ))}
      </tbody>

     </table>



  </div>


)


}

export default Table;
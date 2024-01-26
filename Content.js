

const List = ({ list }) => {
    return (
        
            <ul className="list">
                {list.map((item,index) => (
                    <li key={index}> {JSON.stringify(item)}</li>
                ))}
            </ul>
        
    );
}

export default List;

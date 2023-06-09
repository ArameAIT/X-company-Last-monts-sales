export default function Product(props){
    return(
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.date}</td>
            <td>{props.count}</td>
            <td>{props.price}</td>
            <td>{props.count * props.price}</td>
        </tr>
    )
}
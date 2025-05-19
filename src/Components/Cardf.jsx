export default function Card(props) {
  return (
    <div className="card">
      <img className="card-img" src={props.img} alt="" /> 
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
        <div className="list">
          <ul>
            <li>{props.list}</li>
            <li>{props.list2}</li>
            <li>{props.list3}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

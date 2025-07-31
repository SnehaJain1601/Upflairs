

function Todolist({id,title,description,category,completed}) {
    return (
        <div className="todo-card" style={{margin: "10px"}}>
            <div className="todo-header">
                <span className="todo-id">{id}</span>
                <span className="todo-category work">{title}</span>
            </div>
            <h2 className="todo-title">{description}</h2>
            <p className="todo-description">{category}</p>
            <div className="todo-status completed">{completed}</div>
        </div>

    )
}
export default Todolist;



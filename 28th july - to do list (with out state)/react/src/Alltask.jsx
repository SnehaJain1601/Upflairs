import task from "./data.json"
import Todolist from "./todolist"

function AllTask() {
    
    
        return (
            <div>
                {task.map((v, i) => {
                    return <Todolist key={i} {...v} />
                })}
            </div>

        )

    }

    export default AllTask;

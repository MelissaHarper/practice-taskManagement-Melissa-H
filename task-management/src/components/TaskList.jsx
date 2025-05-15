import { Link } from 'react-router-dom';
import data from "../data/data.json";

function TaskList() {
    let testData = data.map(task => {
        return {...task};
    });

    return (
<div className="container">
    <h1 className="title">Task List</h1>
    <ul className="task-list">
    {testData.map((task) => (
        <li key={task.id} className="task-item">
        <Link to={`/task/${task.id}`} className="task-link">
            {task.title}
        </Link>
        </li>
    ))}
    </ul>
</div>
);
}

export default TaskList;
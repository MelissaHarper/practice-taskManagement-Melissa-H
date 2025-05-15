import { useParams, Link } from 'react-router-dom';
import data from "../data/data.json"


function TaskDetail() {
    const tasks = data.map(task => {
        return {...task};
    });
    const { taskId } = useParams();
    const task = tasks.find((t) => t.id === taskId);
    if (!taskId || isNaN(taskId) || !task) {
    return (
        <div className="container">
        <h1 className="title">Task Not Found</h1>
        <p className="error">Invalid or missing task ID.</p>
        <Link to="/" className="back-link">Back to Task List</Link>
        </div>
    );
    }
    return (
    <div className="container">
        <h1 className="title">{task.title}</h1>
        <p className="description">{task.description}</p>
        <Link to="/" className="back-link">Back to Task List</Link>
    </div>
    );
}

export default TaskDetail;
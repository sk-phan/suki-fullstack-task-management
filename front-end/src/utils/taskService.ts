import api from "./api"
import { Task } from "../types";

const taskService = {
    getAll(projectId: string) {
        return api.get<Task[]>('/tasks/' + projectId);
    },
    update(task: Task){
        return api.put('/tasks/update/' + task.id, task)
    },
    delete(taskId: string){
        return api.put('/tasks/delete/' + taskId)
    }
};

export default taskService;

import ButtonIcon from "../componentes/button-icon";
import Card from "../componentes/card";
import InputCheckBox from "../componentes/input-check-box";
import Text from "../componentes/text";
import Trash from "../assets/icons/trash.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import React from "react";
import InputText from "../componentes/input-text";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/use-task";
import Skeleton from "../componentes/skeleton";


interface TaskItemProps {
    task: Task
    loading?: boolean
}

export default function TaskItem({task, loading}: TaskItemProps) {
    const [isEditing, setIsEditing] = React.useState(
        task?.state === TaskState.Creating
    );

    const [taskTitle, setTaskTitle] = React.useState(task.title || "");
    const {updateTask, updateTaskStatus, deleteTask, isUpdatingTask, isDeletingTask} = useTask();

    function handEditTask(){
        setIsEditing(true);
    }

    function handleExitEditTask() {
        if (task.state === TaskState.Creating) {
            deleteTask(task.id)
        }
        setIsEditing(false);
    }

    function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
        setTaskTitle(e.target.value || "")
    }

    async function handleSaveTask(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        await updateTask(task.id,{title: taskTitle})
        setIsEditing(false)
    }

    function handleChangeTaskStatus (e: React.ChangeEvent<HTMLInputElement>) {
        const checked = e.target.checked;

       updateTaskStatus(task.id, checked)
    }

    async function handleDeleteTask() {
        await deleteTask(task.id)
        console.log(deleteTask(task.id))
    }

    return (
    <Card size="md">
        {!isEditing ? (
            <div className="flex items-center gap-4">
        <InputCheckBox 
            checked={task?.concluded} 
            onChange={handleChangeTaskStatus}
            loading={loading}
            />
        {!loading ? <Text className={cx("flex-1", { 
            "line-through": task?.concluded,
            })}
            >
            {task?.title}</Text>: (
                <Skeleton className="flex-1 h-6"/>
           )}
        <div className="flex gap-1">
            <ButtonIcon 
            type="button" 
            icon={Trash} 
            variant="tertiary" 
            onClick={handleDeleteTask}
            loading={loading}
            handling={isDeletingTask}
            />
            <ButtonIcon 
                type="button"
                icon={PencilIcon} 
                variant="tertiary" 
                onClick={handEditTask}
                loading={loading}
            />
        </div>
        </div>
    ): (
        <form onSubmit={handleSaveTask} className="flex items-center gap-4">
            <InputText 
            value={taskTitle}
            className="flex-1" 
            onChange={handleChangeTaskTitle} 
            required 
            autoFocus
        />
            <div className="flex gab-1">
                <ButtonIcon 
                    type="button"
                    icon={XIcon} 
                    variant="secondary"
                    onClick={handleExitEditTask}
                />
                <ButtonIcon 
                    type="submit"
                    icon={CheckIcon} 
                    variant="primary" 
                    handling={isUpdatingTask}
                />
            </div>
        </form>
    )}
    </Card>
    );
}
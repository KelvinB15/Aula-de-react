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


interface TaskItemProps {
    task: Task
}

export default function TaskItem({task}: TaskItemProps) {
    const [isEditing, setIsEditing] = React.useState(
        task?.state === TaskState.Creating
    );

    const [taskTitle, setTaskTitle] = React.useState("");

    function handEditTask(){
        setIsEditing(true);
    }

    function handleExitEditTask() {
        setIsEditing(false)
    }

    function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
        setTaskTitle(e.target.value || "")
    }

    return (
    <Card size="md" className="flex items-center gap-4">
        {!isEditing ? (
            <>
        <InputCheckBox 
            value={task?.concluded?.toString()} 
            checked={task?.concluded} 
            />
        <Text className={cx("flex-1", { 
            "line-through": task?.concluded,
            })}
            >
            {task?.title}</Text>
        <div className="flex gap-1">
            <ButtonIcon icon={Trash} variant="tertiary"/>
            <ButtonIcon 
                icon={PencilIcon} 
                variant="tertiary" 
                onClick={handEditTask}
            />
        </div>
        </>
    ): (
        <form>
            <InputText 
            className="flex-1" 
            onChange={handleChangeTaskTitle} 
            required 
            autoFocus
        />
            <div className="flex gab-1">
                <ButtonIcon 
                    type="submit"
                    icon={XIcon} 
                    variant="secondary"
                    onClick={handleExitEditTask}
                />
                <ButtonIcon 
                    type="submit"
                    icon={CheckIcon} 
                    variant="primary" 
                />
            </div>
        </form>
    )}
    </Card>
    );
}
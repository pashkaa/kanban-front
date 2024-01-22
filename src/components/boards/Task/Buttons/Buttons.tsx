import s from "./Buttons.module.css"
import { IoTrashBinOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { TaskType } from "../../Boards";
import {useAppDispatch, useAppSelector} from '../../../../app/store'
import { removeTaskFromArrayTC, updateTaskTC } from "../../../../features/TodolistsList/boards-reducer";

type ButtonsType = {
    _id: string,
    title: string,
    description: string,
    boardId: string,
    changeIsGood: () => void,
    droppableId: string,
    disabled: boolean
}

export const Buttons: React.FC<ButtonsType> = ({_id, title, description, boardId, changeIsGood, droppableId, disabled}) => {

    const dispatch = useAppDispatch()

    const editHandler = () => {
        changeIsGood()
    }

    const deleteHandler = () => {
        const taskId = _id;

        const arrayName = droppableId
    
        const thunk = removeTaskFromArrayTC(taskId, boardId, arrayName)
        dispatch(thunk)
    }

    return (
        <div className={s.buttonsContainer}>
            <button onClick={editHandler} disabled={disabled}>
                <CiEdit />
            </button>
            <button onClick={deleteHandler} disabled={disabled}>
                <IoTrashBinOutline />
            </button>
        </div>
    )
}
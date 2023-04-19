import { boardData } from "../pages/Task-Page/data/boards"; 
import { useState } from 'react'
import {Droppable, Draggable} from "react-beautiful-dnd"


export default function BoardCard(prop) {
    const [boards, setBoards] = useState(() => boardData)

    // This function removes the dropped item from one array, adds it to another, then re-writing as the updated array
    const handleDragDrop = (results) => {
        const { source, destination, type } = results
        const boardSourceIndex = boards.findIndex((board) => board.id === source.droppableId)
        const boardDestinationIndex = boards.findIndex((board) => board.id === destination.droppableId) // index of board that item is in
        
        const newSourceItems = [...boards[boardSourceIndex].items]
        const newDestinationItems = 
            source.droppableId !== destination.droppableProps 
            ? [...boards[boardSourceIndex].items] 
            : newSourceItems

        const [deletedItem] = newSourceItems.splice(source.index, 1)
        newDestinationItems.splice(destination.index, 0, deletedItem)

        const newBoards = [...boards]

        newBoards[boardSourceIndex] = {
            ...boards[boardSourceIndex],
            items: newSourceItems
        }

        newBoards[boardDestinationIndex] = {
            ...boards[boardDestinationIndex],
            items: newDestinationItems
        }
    }
    return (
        <Droppable droppableId={prop.id}>
            {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="task-container">
                <div id="board"> {prop.progress} </div >
                <div className="curr-tasks">
                    {prop.items.map((item, index) => (
                        <Draggable draggableId={"draggable-item-" + item.id.toString()} index={index} key={item.id}>
                            {(provided) => (
                                <div className="curr-task-container" {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                                    <p>{item.task}</p>
                                </div>
                            )}
                        </Draggable>
                    ))}
                </div>
                {provided.placeholder}
            </div>
            )}
        </Droppable>
        
    )
}
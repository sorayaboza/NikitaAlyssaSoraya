import { useState } from 'react'
// import BoardCards from "../../components/BoardCards"
import { boardData } from "./data/boards"
import Head from 'next/head'
import Layout from "../layout/layout.js"
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"

function Tasks() {
    const [boards, setBoards] = useState(() => boardData)

    // This function makes it so that when an item is dropped, it will stay where it was dropped.
    const handleDragDrop = (results) => {
        const { source, destination, type } = results

        if (!destination) return

        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
          )
            return;

        if (type === "group"){
            const reorderedBoards = [...boards]

            const boardSourceIndex = source.index
            const boardDestinationIndex = destination.index

            // This temporarily removes a 'board' item from the array that's being dragged
            const [removedBoard] = reorderedBoards.splice(boardSourceIndex, 1)
            reorderedBoards.splice(boardDestinationIndex, 0, removedBoard)

            return setBoards(reorderedBoards)
        }

        // functions below remove the dropped item from one array, add it to another, then re-write as the updated array
    
        const boardSourceIndex = boards.findIndex((board) => board.id === source.droppableId)
        const boardDestinationIndex = boards.findIndex((board) => board.id === destination.droppableId) // index of board that item is in
        
        const newSourceItems = [...boards[boardSourceIndex].items]
        const newDestinationItems = 
            source.droppableId !== destination.droppableId
            ? [...boards[boardDestinationIndex].items] 
            : newSourceItems

        const [deletedItem] = newSourceItems.splice(source.index, 1)
        newDestinationItems.splice(destination.index, 0, deletedItem)

        const newBoards = [...boards]

        newBoards[boardSourceIndex] = {
            ...boards[boardSourceIndex],
            items: newSourceItems,
        }

        newBoards[boardDestinationIndex] = {
            ...boards[boardDestinationIndex],
            items: newDestinationItems,
        }

        setBoards(newBoards)
    }

    function clicked() {
        console.log("clicked!")
    }

    return (
        <Layout>
            <Head>
                <title>TaskBoard</title>
            </Head>
            <div className="task-board">
            <div className="add">
                <button onClick={clicked} className="add-item" id="add-btn">+</button>
                <div className="add-item">ADD TASK</div>
            </div>
            <DragDropContext onDragEnd={handleDragDrop}>
                <Droppable droppableId="ROOT" type="group">
                    {(provided) => ( // 'provided' gives intoformation of the current state of app
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            <div className="board--container">
                                {boards.map((board, i) => (
                                    <div className="board--card" {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                                        <BoardCards {...board} key={board.id} index={i}/> 
                                    </div>
                                ))}
                                {provided.placeholder}
                            </div>
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            </div>
        </Layout>
    )
}

function BoardCards({ progress, items, id }) {
    return (
        <Droppable droppableId={id}>
            {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="task-container">
                <div id="progress">{progress}</div >
                <div className="curr-tasks">
                    {items.map((item, i) => (
                        <Draggable draggableId={"draggable-item-" + item.id.toString()} index={i} key={item.id}>
                            {(provided) => (
                                <div className="curr-task-container" 
                                    {...provided.dragHandleProps} 
                                    {...provided.draggableProps} 
                                    ref={provided.innerRef}
                                >
                                    <p>{item.task}</p>
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            </div>
            )}
        </Droppable>
    )
}

export default Tasks

// CREDIT: Laith Academy -- https://www.youtube.com/watch?v=YJ5EMzyimfc 
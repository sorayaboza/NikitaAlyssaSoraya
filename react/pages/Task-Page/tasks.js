import { useState, createContext } from 'react'
import StudentCard from "../../components/StudentCard"
import CourseCard from "../../components/CourseCard"
import { taskData } from "./data/tasklist"; 
import { boardData } from "./data/boards"
import Head from 'next/head'
import Layout from "../layout/layout.js"

export default function Tasks() {
    
    return (
        <Layout>
            <Head>
                <title>TaskBoard</title>
            </Head>
            <div className="task--boards">
                <div className="task-container">
                    <div id="board"> Task List </div >
                    <div className="add">
                        <div id="add-item">+</div>
                        <div id="add-item">ADD ITEM</div>
                    </div>
                </div>
                <div className="task-container">
                    <div id="board"> In Progress </div>
                </div>
                <div className="task-container">
                    <div id="board"> Complete </div>
                </div>
            </div>
        </Layout>
    )
}
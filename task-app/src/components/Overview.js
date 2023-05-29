import { Fragment } from "react"

export default function Overview({tasks}){
    return (<Fragment>
        <ol>
        {tasks.map((task, index) => <li id={index}>{task}</li>)}
        </ol>
    </Fragment>)
}
import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed';

export type todolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

// export type TasksType = {
//     todolistsType[]: TaskType[]
// }

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'active'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Rest API', isDone: false},
            {id: v1(), title: 'GraphQL', isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: 'HTML&CSS2', isDone: true},
            {id: v1(), title: 'JS2', isDone: true},
            {id: v1(), title: 'ReactJS2', isDone: false},
            {id: v1(), title: 'Rest API2', isDone: false},
            {id: v1(), title: 'GraphQL2', isDone: false},
        ]
    });


    function removeTask(todolistId:string, id: string) {
        setTasks({...tasks, [todolistId]:tasks[todolistId].filter(task => task.id !== id)})
    }

    function addTask(todolistId: string, title: string) {
        setTasks({...tasks, [todolistId]:[{id: v1(), title: title, isDone: false},...tasks[todolistId]]})

    }

    function changeStatus(todolistId:string, taskId: string, isDone: boolean) {
        setTasks({...tasks, [todolistId]: tasks[todolistId].map(td=> td.id === taskId ? {...td, isDone: isDone} : td)})

    }


    function changeFilter(todolistId:string, value: FilterValuesType) {
       setTodolists(todolists.map((td) => td.id === todolistId ? {...td, filter: value} : td ))
    }


    return (
        <div className="App">

            {todolists.map(todolist => {

                let tasksForTodolist = tasks[todolist.id];

                if (todolist.filter === 'active') {
                    tasksForTodolist = tasks[todolist.id].filter(t => !t.isDone);
                }
                if (todolist.filter === 'completed') {
                    tasksForTodolist = tasks[todolist.id].filter(t => t.isDone);
                }


                return (
                    <Todolist
                        key={todolist.id}
                        todolistID={todolist.id}
                        title={todolist.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={todolist.filter}
                    />
                );
            })}

        </div>
    );
}

export default App;

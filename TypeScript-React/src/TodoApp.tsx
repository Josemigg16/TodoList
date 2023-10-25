import useAddTask from "./Hooks/useAddTask";
import List from "./components/List";
import Form from "./components/Form";
import {useEffect} from 'react'


const TodoApp = () => {
  
    const { list, setList, addTask } = useAddTask()

    useEffect(() => {
        document.title = `[${[list.length]}] To do List`;
      }, [list]);
    
    return (
        <main>
            <h1>To do List App</h1>
            <article>
                <Form addTask={addTask}></Form>
                <section>
                    <h2>To do List:</h2>
                    <List list={list} setList={setList}></List>
                </section>
            </article>
        </main>
    )
}

export default TodoApp
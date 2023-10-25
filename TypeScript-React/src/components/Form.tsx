import useHandleSubmit from "../Hooks/useHandleSubmit";
import { FormEvent } from "react";

type Props = {
    addTask: Function
}

const Form = (props: Props) => {
    const {addTask} = props
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        useHandleSubmit(event, addTask)
    }

    return (
        <form onSubmit={handleSubmit} aria-label="add task">
            <label>Add here:
                <input
                    name="input"
                    type="text"
                    placeholder="Enter a task"
                />
            </label>
            <button>add Task</button>
        </form>
    )
}

export default Form

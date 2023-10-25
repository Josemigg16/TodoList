import Item from '../Helpers/Item'


const addTask = (text: string, setList: Function) => {
        setList((items:Item[]) => [...items, {
            id: crypto.randomUUID(),
            timestamp: Date.now(),
            text: text.trim()
        }
        ]
        )
    }

export default addTask
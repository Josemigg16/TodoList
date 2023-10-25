import Item from "./Item"
import Id from "./ID"

const createHandleDeleteButton = (id:Id, setList: Function)=> ()=>{
    () => {
        setList((items: Item[]) => {
            return items.filter(currentItem => currentItem.id !== id)
        })
    }
}

export default createHandleDeleteButton
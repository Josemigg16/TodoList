// import deleteButton from '../Helpers/deleteButton'
import Item from "../Helpers/Item"
import Id from '../Helpers/ID'
type Props = {
    list: Item[]
    setList: React.Dispatch<React.SetStateAction<Item[]>>
}

const List = (props: Props) => {

    const {list, setList} = props
    const createHandleDeleteButton = (id:Id)=>() => {
            
            setList((items: Item[]) => {
                return items.filter(currentItem => currentItem.id !== id)
            })
        }
    

    return (
        <>
            {
                list.length < 1
                    ? <p>There are not items yet</p>
                    :
                    <ul>
                        {list.map((item) => {
                            return (<li
                                key={item.id}>{item.text}
                                <button onClick={createHandleDeleteButton(item.id)}
                                            className="rmv"><i className='bx bxs-trash-alt'></i></button>
                            </li>)
                        }
                        )}
                    </ul>
            }

        </>
    )
}

export default List

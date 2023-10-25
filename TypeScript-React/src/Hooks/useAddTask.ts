import { useState } from 'react'
import Item from '../Helpers/Item'

// type Props = {}

const useAddTask = () => {
  const INITIAL_ITEMS: Item[] = []

  const [list, setList] = useState<Item[]>(INITIAL_ITEMS)

  const addTask = (text: string) => {
    setList(items => [...items, {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      text: text.trim()
    }
    ]
    )
  }
  return {
    list,
    setList,
    addTask
  }
}

export default useAddTask
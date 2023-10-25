import { FormEvent } from 'react'

const useHandleSubmit = (event: FormEvent<HTMLFormElement>, addTask: Function) => {
    
    event.preventDefault()
    const { elements } = event.currentTarget
    const input = elements.namedItem('input')


    const isInput = input instanceof HTMLInputElement
    if (!isInput || input === null) return


    const item = input.value
    if (input.value.length < 1) return
    addTask(item)
    input.value = ''
}


export default useHandleSubmit
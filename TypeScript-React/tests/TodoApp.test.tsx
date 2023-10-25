import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import TodoApp from '../src/TodoApp'
import React from 'react'
import userEvent from '@testing-library/user-event'


describe('<TodoApp/>', () => {
    test('should work', async () => {
        render(<TodoApp />)

        const input = screen.getByRole('textbox')
        expect(input).toBeDefined()

        const form = screen.getByRole('form')
        expect(form).toBeDefined()

        const button = form.querySelector('button')
        expect(button).toBeDefined()

        const voidList = screen.getByText('There are not items yet')
        expect(voidList).toBeDefined()

        await userEvent.type(input,'first element')
        await userEvent.click(button!)

        const list = screen.getByRole('list')
        expect(list).toBeDefined()
        
        expect(list.childNodes.length).toBe(1)
        
        await userEvent.type(input,'second element')
        await userEvent.click(button!)
                
        expect(list.childNodes.length).toBe(2)
        
        const remover = list.querySelector('button')
        await userEvent.click(remover!)
        expect(list.childNodes.length).toBe(1)
        
        const list2 = screen.getByRole('list')
        expect(list2).toBeDefined()

        expect(list2.childNodes.length).toBe(1)
        const remover2 = list2.querySelector('button')
        await userEvent.click(remover2!)
        screen.debug()

        const voidList2 = screen.getByText('There are not items yet')
        expect(voidList2).toBeDefined()
    })    
})
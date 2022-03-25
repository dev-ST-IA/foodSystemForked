
import React from 'react';
import { render,  screen,fireEvent } from '@testing-library/react'
import SortOrdersOptions from './SortOrdersOptions'




it('display all sort options  with correct value', ()=>{
const setSortPreferece = jest.fn()
render(<SortOrdersOptions setSortPreferece={setSortPreferece}/>)

expect(screen.getByText('most recent')).toHaveValue('-createdAt')
expect(screen.getByText('oldest')).toHaveValue('createdAt')
expect(screen.getByText('Lower Amount')).toHaveValue('total')
expect(screen.getByText('Greater Amount')).toHaveValue('-total')



})

it('to have -createdAt as default value',()=>{
const setSortPreferece = jest.fn();

  render(<SortOrdersOptions  setSortPreferece={setSortPreferece}/>)

 expect(screen.getByRole('combobox')).toHaveDisplayValue('most recent')

})

it('triggers setSortPreferece function passing the correct value on change',()=>{

const setSortPreferece = jest.fn();

render(<SortOrdersOptions  setSortPreferece={setSortPreferece}/>)

fireEvent.change(screen.getByRole('combobox'), {
  target: {
    value:'-total'
  },
})
 expect(setSortPreferece.mock.calls.length).toBe(1)

 expect(screen.getByRole('combobox')).toHaveDisplayValue('Greater Amount')

 fireEvent.change(screen.getByRole('combobox'), {
  target: {
    value:'-createdAt'
  },
})
 expect(setSortPreferece.mock.calls.length).toBe(2)

 expect(screen.getByRole('combobox')).toHaveDisplayValue('most recent')

})

import React from 'react';
import { render,  screen,fireEvent } from '@testing-library/react'
import SortProductsOptions from './SortProductsOptions'



it('display all sort options  with correct value', ()=>{
const setSortPreferece = jest.fn()

render(<SortProductsOptions setSortPreferece={setSortPreferece}/>)

expect(screen.getByText('most recent')).toHaveValue('-createdAt')
expect(screen.getByText('oldest')).toHaveValue('createdAt')
expect(screen.getByText('lower price')).toHaveValue('price')
expect(screen.getByText('higher price')).toHaveValue('-price')
expect(screen.getByText('popular')).toHaveValue('-sold')


})

it('to have -createdAt as default value',()=>{
const setSortPreferece = jest.fn();

  render(<SortProductsOptions  setSortPreferece={setSortPreferece}/>)

 expect(screen.getByRole('combobox')).toHaveDisplayValue('most recent')

})

it('triggers setSortPreferece function passing the correct value on change',()=>{

const setSortPreferece = jest.fn();

render(<SortProductsOptions  setSortPreferece={setSortPreferece}/>)

fireEvent.change(screen.getByRole('combobox'), {
  target: {
    value:'-sold'
  },
})
 expect(setSortPreferece.mock.calls.length).toBe(1)

 expect(screen.getByRole('combobox')).toHaveDisplayValue('Populares')

fireEvent.change(screen.getByRole('combobox'), {
  target: {
    value:'-price'
  },
})
 expect(setSortPreferece.mock.calls.length).toBe(2)

 expect(screen.getByRole('combobox')).toHaveDisplayValue('Mayor precio')
})


import App from '../../App'
import { render } from '../../../test-setup/test-utils'
import {describe, expect ,it} from 'vitest'
import Search from './Search'
import '@testing-library/jest-dom/extend-expect'


describe('DataFormat', () => {
  beforeEach(async () => {
      render(`<label>
      <input class='search type='text' placeholder='Search'/>
    </label>`)
  })
  it('test-test', ()=>{
  expect(document.querySelector('.search')).toBeInTheDocument()
  })
  
  
})
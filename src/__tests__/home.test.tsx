import { create } from 'react-test-renderer'
import Page from '../pages/home'

describe('Home', () => {
  it('shoud match snapshot', () => {
    const component = create(<Page />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})

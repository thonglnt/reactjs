import { splitTitle } from './splitTitle'

describe('Test function split title', () => {
  test('It should be input match output', () => {
    expect(splitTitle('Nio Soars Toward Buy Point As Analyst Cites Two Key Drivers')).toEqual(
      'Nio Soars Toward Buy Point As ...',
    )
  })
})

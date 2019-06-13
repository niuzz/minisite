import * as React from 'react'

import { ComponentExt } from '@utils/reactExt'
import Counter from '@components/Counter'

class Home extends ComponentExt {
  render() {
    return (
      <div>
        <div> HOME  1OO </div>
        <Counter value={ 2131 } />
      </div>
    )
  }
}

export default Home

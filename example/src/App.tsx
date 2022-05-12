import React from 'react'

import ViewportProvider from 'view-detector'
import Sample from "./Sample";


const App = () => {
  return <ViewportProvider>
    <Sample/>
  </ViewportProvider>
}

export default App

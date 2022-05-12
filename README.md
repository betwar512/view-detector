# view-detector

> View size dector

[![NPM](https://img.shields.io/npm/v/view-detector.svg)](https://www.npmjs.com/package/view-detector) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Using as a context provider to detect screen size and orientation in one place.



## Install

```bash
npm install --save view-detector
```

## Usage

accessible by using hook or with context.
Use context provider to check the view size.


```tsx
import React, { FC } from 'react'
import { ViewportContext , ViewPortState } from 'view-detector';


const Sample: FC<SampleProps> = () => {
  return (
    <ViewportContext.Consumer>
      {(t:ViewPortState)=> t.isMobile ?  <h2>I Am mobile view</h2> :<div>{t.isTable ? "Table" : "Desktop"}</div>}
    </ViewportContext.Consumer>
  )
}

```

## License

MIT © [betwar512](https://github.com/betwar512)

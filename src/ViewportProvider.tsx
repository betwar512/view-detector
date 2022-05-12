import React, { FC } from 'react'

export type Orientation = 'Portrait' | 'LandScape'

export interface ViewPortState {
  width: number
  height: number
  isMobile: boolean
  isDesktop: boolean
  isTable: boolean
  isPortrait: boolean
  orientation: Orientation
}

const ViewportContext = React.createContext<ViewPortState>({
  width: 0,
  height: 0,
  isDesktop: true,
  isMobile: false,
  isTable: false,
  isPortrait: true,
  orientation: 'Portrait'
})

const maxMobileWidth = 515
const maxTableWidth = 820
// const desktopWidth = 120

const ViewportProvider: FC<{children:JSX.Element | JSX.Element[] | undefined }> = ({ children }) => {

  // const isSSR = typeof window !== 'undefined'

  const [details, setDetails] = React.useState<ViewPortState>({
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth < maxMobileWidth,
    isTable:
      window.innerWidth > maxMobileWidth && window.innerWidth <= maxTableWidth,
    isDesktop: window.innerWidth > maxTableWidth,
    isPortrait: window.innerWidth < window.innerHeight,
    orientation:
      window.innerWidth > window.innerHeight ? 'LandScape' : 'Portrait'
  })

  const handleWindowResize = () => {
    const isPortrait = window.innerWidth < window.innerHeight
    const width = isPortrait ? window.innerWidth : window.innerHeight
    setDetails({
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: width < maxMobileWidth,
      isTable: width > maxMobileWidth && width <= maxTableWidth,
      isDesktop: width > maxTableWidth,
      isPortrait: window.innerWidth < window.innerHeight,
      orientation:
        window.innerWidth > window.innerHeight ? 'LandScape' : 'Portrait'
    })
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  /*  with a context instead of a Hook */
  return (
    <ViewportContext.Provider value={details}>
      {children}
    </ViewportContext.Provider>
  )
}

/* "useViewport" hook  */
const useViewport = () => {
  return React.useContext<ViewPortState>(ViewportContext)
}

export default ViewportProvider
export { useViewport, ViewportContext }

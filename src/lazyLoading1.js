
import { lazy, Suspense } from "react"

const MyComponent = lazy(
    ()=> import('./dynamicStyling')
)

const MainComponent = () => {
     return(
        <Suspense fallback={<div> Loading..... </div>}>
            <MyComponent />
        </Suspense>
     )
}

export default MainComponent
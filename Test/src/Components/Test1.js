import React,{Suspense, useEffect, useRef} from 'react'

//const articale = React.lazy(()=>import('ClassTest1'))

function Test1(){
    const inputRef = useRef()
    useEffect(()=>{
        inputRef.current.value="hhhhh"
    })
    return(
        <div>
            {/* <Suspense fallback={<div>Loading...</div>}>

            </Suspense> */}
            <input type="text" ref={inputRef}/>
        </div>
    )
}

export default Test1
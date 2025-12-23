import { useState } from "react";
import { ToastContainer, toast } from "react-toastify" 

const UseState = () => {

    console.log(useState())
    const intialValue = 0
    const [count, setCount] = useState(intialValue)


    return(
        <>
        <ToastContainer/>
        <div className="flex items-center justify-center flex-col">
            <h1 className="border border-amber-300 text-5xl mt-50 px-6 py-2">{count}</h1>
            <div className="flex gap-8" >
                <div onClick={()=>{setCount(count+1)}}className="text-4xl border border-amber-600 cursor-pointer mt-20 px-4">+</div>
            <div onClick={()=>{setCount(count-1)}}className="text-4xl border border-amber-600 cursor-pointer mt-20 px-4">-</div>
            <div onClick={()=>{setCount(0)}}className="text-4xl border border-amber-600 cursor-pointer mt-20 px-4">Reset</div>  
            </div>
            
                    
        </div>
        </>
    )
}

export default UseState
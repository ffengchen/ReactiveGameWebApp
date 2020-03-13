import { bindActionCreators } from "redux"

export const handleInput =(e)=>{
    return{
        type:'INPUT_CHANGE',
        guess:e.target.value
    }
        
    
}

export const handleguess =()=>{
    
    return{

        type:'INPUT_CHANGE',
        guess:e.target.value
    }
        
    
}
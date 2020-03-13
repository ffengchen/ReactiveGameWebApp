const iState = {
    matching_number:"4/4",
    matching_number1:"2/4",
    matching_number2:"2/4",
    matching_number3:"0/4",
    matching_number4:"2/4",
    matching_number5:"1/4",
    matching_number6:"1/4",
    matching_number7:"1/4",
    matching_number8:"1/4",


}

const reducerOne = (state=iState,action)=>{
console.log(action);
    return state;
}

export default reducerOne;


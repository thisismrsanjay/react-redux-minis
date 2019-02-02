//action creator 

//action must be plain object

//after happening ageUp we come here  
export const ageUpAsync = (val)=>{
    return {type:"AGE_UP",value:val};
}
//new action which changes code async
export const ageUp = val=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(ageUpAsync(val));
        },5000);
    }
}



export const ageDown = (val)=>{
    return {type:"AGE_DOWN",value:val};
}
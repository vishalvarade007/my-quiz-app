import ActionType from "./ActionType";

export const addQuiz = (data)=>{
    return {
        type:ActionType.ADDQUIZ,
        payload:data,
    };
};

export const toggleActive = (id)=>{
    return {
        type:ActionType.TOGGLEACTIVE,
        payload:id,
    };
};

export const deleteQuiz = (id)=>{
    return {
        type:ActionType.DELETEQUIZ,
        payload:id,
    };
};

export const playQuiz = (id)=>{
    return {
        type:ActionType.PLAYQUIZ,
        payload:id,
    };
};

export const getName = (name)=>{
    return {
        type:ActionType.ADDQUIZ,
        payload:name,
    };
};

export const getAnswer = (ans)=>{
    return {
        type:ActionType.GETANSWER,
        payload:ans,
    };
};

export const resetQuiz = ()=>{
    return {
        type:ActionType.RESET,
    };
};
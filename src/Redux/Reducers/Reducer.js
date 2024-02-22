import ActionType from "../Actions/ActionType";

const initialState = {
    //this is the initial state of our app:
    quiz:[],
    name:"",
    playQuiz:[],
    answers:[],
};

const reducer = (state = initialState,actions)=>{
    //this reducer is responsible for updating the state;
    if(actions.type === ActionType.ADDQUIZ){
        return { ...state, quiz:[...state.quiz,actions.payload] };
    }

    if(actions.type === ActionType.TOGGLEACTIVE){
        const quizEl = state.quiz.find((el) => el.id === actions.payload);
        const filteredArr = state.quiz.filter((el)=>el.id !== actions.payload);
        const newArr = [{...quizEl,isActive: !quizEl.isActive},...filteredArr];
        return {
            ...state,
            quiz:newArr,
        }
    }
    
    if(actions.type === ActionType.DELETEQUIZ){
        const filteredArr = state.quiz.filter((el) => el.id !== actions.payload);
        return {
            ...state,
            quiz:filteredArr,
        }
    }

    if(actions.type === ActionType.GETNAME){
        return {
            ...state,
            name:actions.payload,
        }
    }

    if(actions.type === ActionType.PLAYQUIZ){
        const quizEl = state.quiz.find((el)=> el.id === actions.payload);
        return {
            ...state,
            playQuiz : quizEl,
            title:quizEl.title,
        }
    }

    if(actions.type === ActionType.GETANSWER){
        return {
            ...state,
            answers:[...state.answers,actions.payload],
        }
    }

    if(actions.type === ActionType.RESET){
        return {
            ...state,
            name:"",
            playQuiz:[],
            answers:[],
        }
    }

    return state;
}

export default reducer;
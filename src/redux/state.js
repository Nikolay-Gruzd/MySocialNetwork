let state = {
    profilePage:{
        posts : [
            {id: 1, message: "Hi. how are you?", likesCounts: 15},
            {id: 2, message: "I am fine, thanks.", likesCounts: 32},
            {id: 2, message: "Yo", likesCounts: 5}
        ]
    },
    dialogsPage:{
        dialogs : [
            {id: 1, name: "Maks"},
            {id: 2, name: "Vano"},
            {id: 3, name: "Anna"},
            {id: 4, name: "Andrey"},
            {id: 5, name: "Vitalya"}
        ],
        messages :[
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Cool"},
            {id: 3, message: "Yo"}
        ]
    }
};

export default state;
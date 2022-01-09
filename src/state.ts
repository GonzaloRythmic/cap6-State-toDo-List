const state = {
    data: {
        list:[],
    },
    listener: [], 
    getState(){
        return this.data;
    },
    setState(newState){
        this.data = newState;
        for (const cb of this.listener) {
            cb();
        }
        console.log(this.data);
    },
    suscribe(callback: (any)=> any ){   
        this.listener.push(callback);   
    },
    addItem(item){
        const currentState = this.getState();
        currentState.list.push(item);
        this.setState(currentState);
    }   
};

export {state};
import Stack from './Stack';

class History {
    constructor() {
        this.prevStack = new Stack();
        this.forwardStack = new Stack();
    }

    push (item) {
        this.prevStack.push(item);
        this.forwardStack.clear();
    }

    backward() {
        const popItem = this.prevStack.pop();

        this.forwardStack.push(popItem);
    }

    forward() {
        const prevPop = this.forwardStack.pop();

        this.prevStack.push(prevPop);
    }

    checkDirection(item) {
        const prevPop = this.prevStack.pop();
        const prevPop1 = this.prevStack.pop();
        const forwardPop = this.forwardStack.pop();
        let result = "";

        if(item === prevPop1){
            result = "backward";
        }else{
            result = "forward";
        }

        this.prevStack.push(prevPop1);
        this.prevStack.push(prevPop);
        this.forwardStack.push(forwardPop);

        return result;
    }
}

export default History;
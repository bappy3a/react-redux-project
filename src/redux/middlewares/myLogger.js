const myLogger = (store) => (next) => (actions) => {
    console.log(`Action: ${JSON.stringify(actions)}`);
    console.log(`Before: ${JSON.stringify(store.getState())}`);
    //console.log(`After: ${JSON.stringify(next)}`);

    //pass action 
    return next(actions);
}

export default myLogger;
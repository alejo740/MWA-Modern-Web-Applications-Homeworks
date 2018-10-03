{
    setTimeout(() => { console.log('timeout'); }, 2);
    setImmediate(() => { console.log('immediate'); });
    setTimeout(() => { console.log('timeout 2'); 
    }, 0);
    process.nextTick(() => console.log('nexttick'));
    
/*
    function step(iteration) {
        if (iteration === 10) return;
        setImmediate(() => {
            console.log(`setImmediate iteration: ${iteration}`);
            step(iteration + 1); // Recursive call from setImmediate handler.
        });
        process.nextTick(() => {
            console.log(`nextTick iteration: ${iteration}`);
        });
    }
    step(0);*/
}
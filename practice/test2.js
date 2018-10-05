{
    const { Observable, from } = require('rxjs');
    const { map, filter } = require('rxjs/operators');
    const data = [{ id: 0, name: 'Learning Node', topic: 'Node JS', },
    { id: 1, name: 'Learning MongoDB', topic: 'MongoDB', },
    { id: 2, name: 'Learning TypeScript', topic: 'TypeScript', }]

    from(data)
        .pipe(
            map((obj) => ({
                msg: `${obj.name} is awesome!`
            })
            )
        )
        .subscribe((obj) => console.log(obj.msg))
}
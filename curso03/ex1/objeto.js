    //const data = [4,8,12 ['a', 'b', 'c' ] [null, false, 'javascript'] ]
    //const data = ['a', 'b', 'c']
    //const data = {'band': 'iron Maiden', 'Album': 'Killers', 'year': 1982}
    
    
    for (const prop in data) {
        console.log(prop, data[prop])
    }
    
    
    for (let i = 0 ; i <= 10; i++) {
     console.log(i)   
    }


    for (item of data) {
        console.log(item)
    }
    
    var i = 0
    while (i < 10) {
        i ++
        if ( i == 2) continue
        console.log(i)

    }
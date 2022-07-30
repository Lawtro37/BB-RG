class createObject{
    constructor(player1IsTrue, player2IsTrue, x, y, w, h, hasPhisics, isVisible, Isbuton, image, r, f, s)
    {
        this.cankill = 
        {
            player1 :player1IsTrue,
            player2: player2IsTrue
        }
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.hasPhisics = hasPhisics
        this.isVisible = isVisible
        this.button = Isbuton
        this.image = image
        this.objOpts = 
        {
            restitution: r,
            frictionAir: f,
            isStatic: s
        }
        this.object
    }

    create()
    {
        if(this.hasPhisics = true)
        {
            this.object = Bodies.rectangle(this.x, this.y, this.w, this.h, this.objOpts)
            World.add(world, this.object)
        }
    }

    display()
    {
        push()
        rectMode(CENTER);
        if(this.hasPhisics = true)
        {
            rect(this.x, this.y, this.w, this.h)
        }
        else
        {
            rect(this.x, this.y, this.w, this.h)
        }
        pop()
    }

    showPropertys()
    {
        console.log('player1 :player1IsTrue')
        console.log('player2: player2IsTrue')
        console.log('x:'+ x)
        console.log('y:'+ y)
        console.log('w:'+ w)
        console.log('h:'+ h)
        console.log('hasPhisics:'+ hasPhisics)
        console.log('isVisible:'+ isVisible)
        console.log('button:'+ Isbuton)
        console.log('image:'+ image)
        console.log('restitution:'+ r)
        console.log('frictionAir:'+ f)
        console.log('isStatic:'+ s)
        
    }

    killPlayer()
    {
        var left = this.x - this.w
        var right = this.x + this.w
        var top = this.y - this.h
        var bottom = this.y + this.h

        if(this.cankill.player1 == true)
        {
            if(player1X > left
            && player1X < right
            && player1Y > top
            && player1Y < bottom) 
            {
                reset()
            }
        }
        else if(this.cankill.player2 == true)
        {
            if(player2X > left
            && player2X < right
            && player2Y > top
            && player2Y < bottom) 
                {
                    reset()
                    zap.setVolume(sfxVolume)
                    zap.play()
                    player2Y = 99999999999999999999999999999999999999999999
                }
        }
    }

    update()
    {
        this.display()
        this.killPlayer()
    }
    
}

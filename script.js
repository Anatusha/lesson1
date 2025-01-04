function differenceVarlet()
{
    block:{
        var x = 10;
        let z = 10;
    }
    console.log(x);
    console.log(z);
}

function constTest()
{
    const y = 10;
    y = y + 10;
    console.log(y);
}

function typeData()
{
    let x = 5, y = 10.5, z = NaN;
    console.log(typeof(x), typeof(y), typeof(z));

    let und = undefined; 
    console.log(typeof(und), und);
    console.log(und + 2);
    console.log(und + "hello");

    let hi = "Hello";
    console.log(typeof(hi));

    let NPC =
    {
        name: "Chicken",
        health: 100,
        stamina: 50,
        lvl: 5
    }

    console.log(typeof(NPC));
    let player =
    {
        name: "Gladiator",
        health: 200,
        stamina: 100,
        lvl: 10,
        damage: 15.3,
        attack: function(object)
        {
            object.health -= this.damage;
        }
    }

    player.attack(NPC);
    console.log(NPC,health);

    let flag = true;
    console.log(typeof(flag));
}
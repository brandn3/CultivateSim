let Main = document.createElement('div');
let Tabs = document.createElement('div');
let ActionDiv = document.createElement('div');
let MortalDiv = document.createElement('div');

let Mortals = {};






function setUp()
{
    Main.setAttribute("id", "Main");
    Tabs.setAttribute("id", "Tabs");
    ActionDiv.setAttribute("id", "ActionDiv");
    MortalDiv.setAttribute("id", "MortalDiv");

    Mortals["john"] = new Mortal;
    Mortals["john1"] = new Mortal;



    document.body.appendChild(Main)

    Main.appendChild(Tabs)
    Main.appendChild(ActionDiv)
    Main.appendChild(MortalDiv)
}


class Mortal
{
    MainDiv = document.createElement("div");
    NameDiv = document.createElement("div");
    StatDiv = document.createElement("div");
    SkillDiv = document.createElement("div");
    StaminaDiv = document.createElement("div");

    constructor()
    {
        
        this.CreateHtml()
    }

    CreateHtml()
    {
        this.MainDiv.classList.add("MainDiv");
        this.NameDiv.classList.add("NameDiv");
        this.StatDiv.classList.add("StatDiv");
        this.SkillDiv.classList.add("SkillDiv");
        this.StaminaDiv.classList.add("StaminaDiv");

        this.MainDiv.appendChild(this.NameDiv);
        this.MainDiv.appendChild(this.StatDiv);
        this.MainDiv.appendChild(this.SkillDiv);

        MortalDiv.appendChild(this.MainDiv)
    }
}


setUp()
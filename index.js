let Main = document.createElement('div');
let Tabs = document.createElement('div');
let ActionDiv = document.createElement('div');
let MortalDiv = document.createElement('div');
let ToolTipDiv = document.createElement('div')
let LogDiv = document.createElement('div');

let Mortals = {};
let Actions = {};





function setUp()
{
    Main.setAttribute("id", "Main");
    Tabs.setAttribute("id", "Tabs");
    ActionDiv.setAttribute("id", "ActionDiv");
    MortalDiv.setAttribute("id", "MortalDiv");
    ToolTipDiv.setAttribute("id", "ToolTipDiv");
    LogDiv.setAttribute("id", "LogDiv");

    Mortals["john"] = new Mortal;
    Mortals["john1"] = new Mortal;

    Actions["test"] = new Action;
    Actions["test2"] = new Action;
    Actions["test3"] = new Action;


    document.body.appendChild(Main)

    Main.appendChild(Tabs)
    Main.appendChild(ActionDiv)
    Main.appendChild(MortalDiv)
    Main.appendChild(ToolTipDiv);
    Main.appendChild(LogDiv)
}


class Mortal
{
    MainDiv = document.createElement("div");
    NameDiv = document.createElement("div");
    StatDiv = document.createElement("div");
    SkillDiv = document.createElement("div");
    StaminaDiv = document.createElement("div");
    StaminaBarDiv = document.createElement("div");

    constructor()
    {
        
        this.CreateHtml()
    }

    CreateHtml()
    {
        this.MainDiv.classList.add("MortalMainDiv");
        this.NameDiv.classList.add("MortalNameDiv");
        this.StatDiv.classList.add("MortalStatDiv");
        this.SkillDiv.classList.add("MortalSkillDiv");
        this.StaminaDiv.classList.add("MortalStaminaDiv");
        this.StaminaBarDiv.classList.add("MortalStaminaBarDiv")
        

        this.NameDiv.innerText = "John";
        this.StatDiv.innerText = "Stat"
        this.SkillDiv.innerText = "Skill"
        this.StaminaDiv.innerText = "100/100"

        this.StaminaDiv.appendChild(this.StaminaBarDiv)

        this.MainDiv.appendChild(this.NameDiv);
        this.MainDiv.appendChild(this.StatDiv);
        this.MainDiv.appendChild(this.SkillDiv);
        this.MainDiv.appendChild(this.StaminaDiv)
        

        MortalDiv.appendChild(this.MainDiv)
    }
}
class Action
{
    MainDiv = document.createElement('div')
    constructor()
    {

        this.CreateHtml();
    }
    CreateHtml()
    {

        this.MainDiv.classList.add("ActionMainDiv");

        ActionDiv.appendChild(this.MainDiv);
    }
}

setUp()
const Names = [
    "SMITH",
    "JOHNSON",
    "WILLIAMS",
    "BROWN",
    "JONES",
    "MILLER",
    "DAVIS",
    "GARCIA",
    "RODRIGUEZ",
    "WILSON",
    "MARTINEZ",
    "ANDERSON",
    "TAYLOR",
    "THOMAS",
    "HERNANDEZ",
    "MOORE",
    "MARTIN",
    "JACKSON",
    "THOMPSON",
    "WHITE",
    "LOPEZ",
    "LEE",
    "GONZALEZ",
    "HARRIS",
    "CLARK",
    "LEWIS",
    "ROBINSON",
    "WALKER",
    "PEREZ",
    "HALL",
    "YOUNG",
    "ALLEN",
    "SANCHEZ",
    "WRIGHT",
    "KING",
    "SCOTT",
    "GREEN",
    "BAKER",
    "ADAMS",
    "NELSON",
    "HILL",
    "RAMIREZ",
    "CAMPBELL",
    "MITCHELL",
    "ROBERTS",
    "CARTER",
    "PHILLIPS",
    "EVANS",
    "TURNER",
    "TORRES",
    "PARKER",
    "COLLINS",
    "EDWARDS",
    "STEWART",
    "FLORES",
    "MORRIS",
    "NGUYEN",
    "MURPHY",
    "RIVERA",
    "COOK",
    "ROGERS",
    "MORGAN",
    "PETERSON",
    "COOPER",
    "REED",
    "BAILEY",
    "BELL",
    "GOMEZ",
    "KELLY",
    "HOWARD",
    "WARD",
    "COX",
    "DIAZ",
    "RICHARDSON",
    "WOOD",
    "WATSON",
    "BROOKS",
    "BENNETT",
    "GRAY",
    "JAMES",
    "REYES",
    "CRUZ",
    "HUGHES",
    "PRICE",
    "MYERS",
    "LONG",
    "FOSTER",
    "SANDERS",
    "ROSS",
    "MORALES",
    "POWELL",
    "SULLIVAN",
    "RUSSELL",
    "ORTIZ",
    "JENKINS",
    "GUTIERREZ",
    "PERRY",
    "BUTLER",
    "BARNES",
    "FISHER",
    "HENDERSON"
]
const Actions = [
    {
        "Name": "Wake Up",
        "Desc":"You need to Wake up",
        "MaxProgress":100,
        "MaxAmount": 1,
        "Completion": () => 
        {
            console.log(CurrentTicks)
        },
        "Reqs":{
            "Acts":{

            }
        }

    },
    {
        "Name": "Walk around",
        "Desc":"You need to Wake up",
        "MaxProgress":100,
        "MaxAmount": 1,
        "test": () => {console.log(CurrentTicks)},
        "Reqs":{
            "Acts":{
                "Wake Up": 1
            },
            "Mats":
            {

            }
        }

    },
]
let Main = document.createElement('div');
let Tabs = document.createElement('div');
let ActionDiv = document.createElement('div');
let MortalDiv = document.createElement('div');
let MaterialDiv = document.createElement('div')
let LogDiv = document.createElement('div');
//let CurrentDate = new Date();
//CurrentDate.getDate();
let TimerName;
let Start = 0;
let End = 0;


let CurrentTicks = 0;
let TickRate = 0.01
let currentlydragging;

let Mortals = {};
let ActiveActions = {} ;





function setUp()
{
    Main.setAttribute("id", "Main");
    Tabs.setAttribute("id", "Tabs");
    ActionDiv.setAttribute("id", "ActionDiv");
    MortalDiv.setAttribute("id", "MortalDiv");
    MaterialDiv.setAttribute("id", "MaterialDiv");
    LogDiv.setAttribute("id", "LogDiv");
    
    new Mortal;



    



    MortalDiv.addEventListener("dragover", ()=>{
       MortalDiv.appendChild(currentlydragging.MainDiv);
    })



    document.body.appendChild(Main)

    Main.appendChild(Tabs)
    Main.appendChild(ActionDiv)
    Main.appendChild(MortalDiv)
    Main.appendChild(MaterialDiv);
    Main.appendChild(LogDiv)
    //CurrentTicks += 0.10;
    requestAnimationFrame(update)
}
function update()
{
   // StartTime("Update Function");
    for(let i = 0; i< Actions.length; i++)
    {
        let CurrentAction = Actions[i];
        if (ActiveActions[CurrentAction.Name] == undefined)
        {
            let Create = true;
            for(let x = 0; x < Object.keys(CurrentAction.Reqs.Acts).length; x++)
            {
                let CheckAction = Object.keys(CurrentAction.Reqs.Acts)[x]
                let ActionValue = Object.values(CurrentAction.Reqs.Acts)[x]
                if (ActiveActions[CheckAction].CurrentAmount != ActionValue)
                {
                    Create = false;
                }
            }


            if(Create == true)
            {
                new Action(i)
            }
        }
    }


    let action = Object.values(ActiveActions);
    let mortal = Object.values(Mortals);
    
    for (let i = 0; i < Object.values(ActiveActions).length; i++)
    {
        
        action[i].Progress(TickRate)
        
    }
    for (let i = 0; i < Object.values(Mortals).length; i++)
    {
        
        mortal[i].Progress();
        
    }


    //CurrentTicks -= 0.10
    //EndTime()
    requestAnimationFrame(update);
}
function GenerateName()
{
    return Names[getRandomArbitrary(0,20).toFixed(0)]
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


function StartTime(Name)
{
    TimerName = Name;
    Start = performance.now();
}
function EndTime()
{
    End = performance.now();
 
    console.log(TimerName + " Took " + ((End - Start) /1000).toFixed(5) + "Seconds")
    
}



class Mortal
{
    
    MainDiv = document.createElement("div") ;
    NameDiv = document.createElement("div");
    StatDiv = document.createElement("div");
    SkillDiv = document.createElement("div");
    StaminaDiv = document.createElement("div");
    StaminaBarDiv = document.createElement("div");

    Name = GenerateName();
    Strength = 5;
    MaxStamina = 100;
    CurrentStamina = 100

    constructor()
    {
        Mortals[this.Name] = this;
        this.CreateHtml()
        this.MainDiv.addEventListener("dragstart", ()=> {

            currentlydragging = this;
            this.MainDiv.classList.add("dragging");
        })
        this.MainDiv.addEventListener("dragend", ()=> {

            this.MainDiv.classList.remove("dragging")
        })

    }

    CreateHtml()
    {
        this.MainDiv.classList.add("MortalMainDiv");
        this.NameDiv.classList.add("MortalNameDiv");
        this.StatDiv.classList.add("MortalStatDiv");
        this.SkillDiv.classList.add("MortalSkillDiv");
        this.StaminaDiv.classList.add("MortalStaminaDiv");
        this.StaminaBarDiv.classList.add("MortalStaminaBarDiv")
        

        this.MainDiv.setAttribute("id", this.Name)
        this.MainDiv.setAttribute("draggable", "true");
        this.NameDiv.innerText = this.Name;
        this.StatDiv.innerText = "Stat"
        this.SkillDiv.innerText = "Skill"
        this.StaminaDiv.innerText = "100/100"

        this.StaminaDiv.appendChild(this.StaminaBarDiv)

        this.MainDiv.appendChild(this.NameDiv);
        this.MainDiv.appendChild(this.StatDiv);
        this.MainDiv.appendChild(this.SkillDiv);
        this.MainDiv.appendChild(this.StaminaDiv)
        this.MainDiv.appendChild(this.StaminaBarDiv)
        

        MortalDiv.appendChild(this.MainDiv)
    }
    Progress()
    {
        if(this.MainDiv.parentElement.id == "MortalDiv" && this.CurrentStamina < this.MaxStamina)
        {
            this.CurrentStamina += 0.1;
        }
        if (this.CurrentStamina != 0)
        {
            this.StaminaBarDiv.style.width = ((this.CurrentStamina/this.MaxStamina) * 100) + "%"
            
            this.StaminaDiv.innerText = this.CurrentStamina.toFixed(1) + "/" + this.MaxStamina
        }
        if (this.CurrentStamina <= 0)
        {
            console.log("s");
            MortalDiv.appendChild(this.MainDiv);
            this.StaminaBarDiv.style.width = "0%"
        }

       
    }

}
class Action
{
    MainDiv = document.createElement('div')
    ActionMortalDiv = document.createElement("div");
    ActionNameDiv = document.createElement('div');
    ActionProgressDiv = document.createElement('div');
    ActionProgressTextDiv = document.createElement('div')

    ActiveWorkers = [];

    Name;
    MaxProgress;
    CurrentAmount = 0;
    MaxAmount;


    CurrentProgress = 0;
    
    ProgressRate = 0.01;

    constructor(Num)
    {
        this.MaxProgress = Actions[Num].MaxProgress;
        this.Desc = Actions[Num].Desc;
        this.Name = Actions[Num].Name;


        this.CreateHtml();
        
        
        this.ActionMortalDiv.addEventListener("dragover", ()=>{
            this.ActionMortalDiv.appendChild(currentlydragging.MainDiv);
        })
       
       ActiveActions[this.Name] = this
    }
    CreateHtml()
    {

        this.MainDiv.classList.add("ActionMainDiv");
        this.ActionMortalDiv.classList.add("ActionMortalDiv");
        this.ActionNameDiv.classList.add("ActionNameDiv")
        this.ActionProgressDiv.classList.add("ActionProgressDiv")
        this.ActionProgressTextDiv.classList.add("ActionProgressTextDiv")

        this.ActionNameDiv.innerText = this.Name;

        this.MainDiv.appendChild(this.ActionProgressTextDiv);
        this.MainDiv.appendChild(this.ActionNameDiv);
        this.MainDiv.appendChild(this.ActionProgressDiv)
        this.MainDiv.appendChild(this.ActionMortalDiv);

        ActionDiv.appendChild(this.MainDiv);
    }
    SetProgressRate()
    {
        let MortalsHtml = this.ActionMortalDiv.children;

        for (let x = 0; x < MortalsHtml.length; x++)
        {
            let CurrentMortal = Mortals[MortalsHtml[x].id]
            this.ProgressRate += CurrentMortal.Strength
            CurrentMortal.CurrentStamina -= 0.1
        }
        
    }
    Progress(TickRate)
    {
        
        this.SetProgressRate()
        
        if (this.CurrentProgress != 0)
        {
            this.ActionProgressDiv.style.width = ((this.CurrentProgress/this.MaxProgress) * 100) + "%"
            this.ActionProgressTextDiv.innerText = this.CurrentProgress.toFixed(1) + "/" + this.MaxProgress + " (" + (((this.CurrentProgress/this.MaxProgress) * 100).toFixed(1) + "%") + ")"
            
        }
        else
        {
            this.ActionProgressDiv.style.width = "0%"
        }
        this.CurrentProgress += this.ProgressRate * TickRate

        if(this.CurrentProgress >= this.MaxProgress)
        {
            this.CurrentProgress = 0;
        }
        
        this.ProgressRate = 0;
    }

}

setUp()
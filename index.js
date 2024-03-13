"use strict"
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
const ActionDatabase = [
    {
        Name: "",
        "Desc":"",
        "MaxProgress":100,
        "MaxAmount": 5,
        "Log":"",
        "Reqs":{
            "Acts":
            {
                "Never": -1
            },
            "Mats":
            {

            }
        }

    },
    {
        "Name": "Wake Up",
        "Desc":"Your mind is clouded, you dont know how you got in this situation.",
        "MaxProgress":10,
        "MaxAmount": 1,
        "Log":"You push yourself up to standing position, your body aches all over",
        "Reqs":{
            "Acts":
            {

            },
            "Mats":
            {

            }
        }

    },
    {
        "Name": "Look around",
        "Desc":"Observe your surroundings",
        "MaxProgress":10,
        "MaxAmount": 1,
        "Log":"You're in a forest, the trees are fairly thin and the leaves are abundant",
        "Reqs":{
            "Acts":{
                "Wake Up": 1
            },
            "Mats":
            {

            }
        }

    },
    {
        "Name": "Try to remember",
        "Desc":"You dont know where you are, try to retrace your steps",
        "MaxProgress":10,
        "MaxAmount": 1,
        "Log":"Your memory is blank, but you get the feeling that the forest is very dangerous",
        "Reqs":{
            "Acts":
            {
                "Look around": 1
            },
            "Mats":
            {

            }

        }

    },
    {
        "Name": "Create a plan",
        "Desc":"You are going to need to keep yourself save, try to think of what to do next",
        "MaxProgress":10,
        "MaxAmount": 1,
        "Log":"You decide to stay where you are and build a shelter, but you're going to need wood",
        "Reqs":{
            "Acts":
            {
                "Try to remember": 1
            },
            "Mats":
            {

            }
        }

    },
    {
        "Name": "Gather Sticks",
        "Desc":"Sticks are abundant, covering every peice of grass",
        "MaxProgress":5,
        "MaxAmount": -1,
        "Log":"You have gained 1 Stick",
        "Reqs":{
            "Acts":
            {
                "Create a plan": 1
            },
            "Mats":
            {

            }
        }

    },
]
const BuildDatabase = [
    {
        Name: "",
        "Desc":"",
        "MaxProgress":100,
        "MaxAmount": 5,
        "Log":"",
        "Reqs":{
            "Acts":
            {
                "Never": -1
            },
            "Mats":
            {
                
            }
        }
    },
    {
        Name: "Shelter",
        "Desc":"",
        "MaxProgress":100,
        "MaxAmount": 5,
        "Log":"",
        "Reqs":{
            "Acts":
            {
                
            },
            "Mats":
            {
               Wood: 10 
            }
        }
    }

]


const Main = document.createElement('div');
const Tabs = document.createElement('div');
const ActionTab = document.createElement('div');
const BuildTab = document.createElement('div');
const OptionTab = document.createElement('div');
const ActionDiv = document.createElement('div');
const BuildDiv = document.createElement('div')
const OptionDiv = document.createElement('div')
const MortalDiv = document.createElement('div');
const MaterialDiv = document.createElement('div')
const LogDiv = document.createElement('div');


let TimerName;
let Start = 0;
let End = 0;


let CurrentTicks = 0;

let currentlydragging;

let fps = 60, now = 0, then = performance.now() ,fpsInterval, fpsCounter = 0



let Mortals = {};
let ActiveActions = {} ;
let Materials = {}
let ActiveBuildings ={};



function Complete(Num)
{
    
    switch(Num)
    {
        case 1:
            
        break;
        case "Gather Sticks":
            Materials["Wood"].Amount += 1;
        break;
        case 0:
            
        break;
        case 0:
            
        break;
        
    }
    
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
    InformationDiv = document.createElement("div");
    //InformationDiv = document.createElement("div");
    StaminaDiv = document.createElement("div");
    StaminaBarDiv = document.createElement("div");

    InformationToolTipDiv = document.createElement("div")
    InfoDiv = document.createElement('div')
    StatDiv = document.createElement('div');
    SkillDiv = document.createElement('div');

    Name = Names[getRandomArbitrary(0,20).toFixed(0)];
    age = getRandomArbitrary(16, 35).toFixed(0);


    Strength = getRandomArbitrary(1,2).toFixed(2);
    Agility = getRandomArbitrary(1,2).toFixed(2);
    Perception = getRandomArbitrary(0,2).toFixed(2);
    Endurence = getRandomArbitrary(0,2).toFixed(2)
    Luck = getRandomArbitrary(0,2).toFixed(2)

    MaxStamina = 100;
    CurrentStamina = 100

    constructor()
    {
        Mortals[this.Name] = this;
        this.CreateHtml()
        this.MainDiv.addEventListener("dragstart", e => {
            currentlydragging = this.MainDiv;
            this.MainDiv.classList.add("dragging");
        })
        this.MainDiv.addEventListener("dragend", e => {

            this.MainDiv.classList.remove("dragging")
        })
        this.InformationDiv.addEventListener("mousemove", (e) => {this.ShowToolTip(e) })

        this.InformationDiv.addEventListener("mouseenter", (e) => {this.InformationToolTipDiv.style.display = "block" })
        this.InformationDiv.addEventListener("mouseleave", (e) => {this.InformationToolTipDiv.style.display = "none" })
    }

    CreateHtml()
    {
        this.MainDiv.classList.add("MortalMainDiv");
        this.NameDiv.classList.add("MortalNameDiv");
        this.InformationDiv.classList.add("MortalInformationDiv");
        this.InformationDiv.classList.add("Button")
        this.StaminaDiv.classList.add("MortalStaminaDiv");
        this.StaminaBarDiv.classList.add("MortalStaminaBarDiv")

        this.InformationToolTipDiv.classList.add("InformationToolTipDiv")
        this.InfoDiv.classList.add("InfoDiv");
        this.StatDiv.classList.add("StatDiv");
        this.SkillDiv.classList.add("SkillDiv");

        this.MainDiv.setAttribute("id", this.Name)
        this.MainDiv.setAttribute("draggable", "true");
        this.NameDiv.innerText = this.Name;
        this.InformationDiv.innerText = "Information";
        this.StaminaDiv.innerText = "100/100";

        this.InfoDiv.innerText = 
        "Name: " + this.Name + "\n" +
        "Rank: Mortal \n" +
        "Tier: 0 \n" +
        "Age: " + this.age + "\n";
        this.StatDiv.innerText = 
        "Strength: " + this.Strength + "\n" +
        "Agility: " + this.Agility + "\n" +
        "Endurence: " + this.Endurence + "\n" +
        "Perception: " + this.Perception + "\n" +
        "Luck: " + this.Luck + "\n" 

        Main.appendChild(this.InformationToolTipDiv);
        this.InformationToolTipDiv.appendChild(this.InfoDiv);
        this.InformationToolTipDiv.appendChild(this.StatDiv);
        this.InformationToolTipDiv.appendChild(this.SkillDiv);

        this.StaminaDiv.appendChild(this.StaminaBarDiv)

        this.MainDiv.appendChild(this.NameDiv);
        this.MainDiv.appendChild(this.InformationDiv);
        this.MainDiv.appendChild(this.StaminaDiv)
        this.MainDiv.appendChild(this.StaminaBarDiv)
        

        MortalDiv.appendChild(this.MainDiv)
    }
    Progress()
    {
        if(this.MainDiv.parentElement.id == "MortalDiv" && this.CurrentStamina < this.MaxStamina)
        {
            this.CurrentStamina += 5 / fps;
        }  
    }
    UpdateHTML()
    {
        if (this.CurrentStamina >= 0)
        {
            this.StaminaBarDiv.style.width = ((this.CurrentStamina/this.MaxStamina) * 100) + "%"
            
            this.StaminaDiv.innerText = this.CurrentStamina.toFixed(1) + "/" + this.MaxStamina
        }
        else
        {
            MortalDiv.appendChild(this.MainDiv);
            this.StaminaBarDiv.style.width = "0%"
        }
    }
    ShowToolTip(event)
    {
        if(event.clientX + this.InformationToolTipDiv.getBoundingClientRect().width >= Main.getBoundingClientRect().width )
        {
            this.InformationToolTipDiv.style.left = ""
            this.InformationToolTipDiv.style.right = (Main.getBoundingClientRect().width - event.clientX ) - 5 +"px"
            this.InformationToolTipDiv.style.top = event.clientY + 5 + "px"

        }
        else
        {
            this.InformationToolTipDiv.style.right = ""
            this.InformationToolTipDiv.style.left = event.clientX + 5 +"px"
            this.InformationToolTipDiv.style.top = event.clientY + 5 + "px"
        }
        
        //this.InformationToolTipDiv.style.left = "0px"
    }
}
class Action
{
    MainDiv = document.createElement('div')
    ActionMortalDiv = document.createElement("div");
    ActionNameDiv = document.createElement('div');
    ActionProgressDiv = document.createElement('div');
    ActionProgressTextDiv = document.createElement('div')

    ActionToolTipDiv = document.createElement("div");
    InfoDiv = document.createElement("div")

    //ToolTipDiv = document.createElement("")

    ActiveWorkers = [];
    MortalsHtml;

    Stats;

    Num;
    CurrentAmount = 0;
    Hidden = false;
    CurrentProgress = 0;
    ProgressRate = 0.1;

    constructor(Num)
    {
        this.Stats = ActionDatabase[Num]
        this.Num = Num

        this.CreateHtml();
        
        this.ActionMortalDiv.addEventListener("dragover", ()=>{
            this.ActionMortalDiv.appendChild(currentlydragging);
            
        })

        this.ActionNameDiv.addEventListener("mousemove", (e) => {this.ShowToolTip(e) })

        this.ActionNameDiv.addEventListener("mouseenter", (e) => {this.ActionToolTipDiv.style.display = "block" })
        this.ActionNameDiv.addEventListener("mouseleave", (e) => {this.ActionToolTipDiv.style.display = "none" })
       ActiveActions[this.Stats.Name] = this
    }
    CreateHtml()
    {

        this.MainDiv.classList.add("ActionMainDiv");
        this.ActionMortalDiv.classList.add("ActionMortalDiv");
        this.ActionNameDiv.classList.add("ActionNameDiv")
        this.ActionProgressDiv.classList.add("ActionProgressDiv")
        this.ActionProgressTextDiv.classList.add("ActionProgressTextDiv")

        this.ActionToolTipDiv.classList.add('ActionToolTipDiv')
        this.InfoDiv.classList.add('InfoDiv')
        
        

        this.ActionNameDiv.innerText = this.Stats.Name;

        this.ActionToolTipDiv.appendChild(this.InfoDiv);
        Main.appendChild(this.ActionToolTipDiv)
        this.MainDiv.appendChild(this.ActionProgressTextDiv);
        this.MainDiv.appendChild(this.ActionNameDiv);
        this.MainDiv.appendChild(this.ActionProgressDiv)
        this.MainDiv.appendChild(this.ActionMortalDiv);

        ActionDiv.appendChild(this.MainDiv);
    }
    Progress()
    {
        if ( this.Hidden == false)
        {
            this.MortalsHtml = this.ActionMortalDiv.children;
            for (let x = 0; x < this.MortalsHtml.length; x++)// sets progress rate of Action based off mortals working on it.
            {
                let CurrentMortal = Mortals[this.MortalsHtml[x].id]
                this.ProgressRate += CurrentMortal.Strength
                CurrentMortal.CurrentStamina -= 2 / fps
            }
            if(this.CurrentProgress >= this.Stats.MaxProgress)// when actions completes once
            {
                
                Complete(this.Stats.Name);
                this.CurrentProgress = 0;
                this.CurrentAmount += 1;
            }
            this.CurrentProgress += this.ProgressRate / fps // increments Action Progress
        }
       
        this.ProgressRate = 0;
    }
    UpdateHTML()
    {
        this.InfoDiv.innerText = 
        "Name: " + this.Stats.Name + "\n" +
        "Description: " + this.Stats.Desc  + "\n" +
        "Progress: " + this.CurrentProgress.toFixed(2) + "/" + this.Stats.MaxProgress + "\n" +
        "Completed: " + this.CurrentAmount + "/" + this.Stats.MaxAmount;

        if (this.CurrentProgress != 0)
        {
            this.ActionProgressDiv.style.width = ((this.CurrentProgress/this.Stats.MaxProgress) * 100) + "%"
            this.ActionProgressTextDiv.innerText = this.CurrentProgress.toFixed(1) + "/" + this.Stats.MaxProgress + " (" + (((this.CurrentProgress/this.Stats.MaxProgress) * 100).toFixed(1) + "%") + ")"
            
        }
        else
        {
            this.ActionProgressDiv.style.width = "0%"
        }
        if(this.CurrentProgress >= this.Stats.MaxProgress)// when actions completes once
        {
            gameData.CreateLog(this.Stats.Log);  
        }
        if (this.CurrentAmount == this.Stats.MaxAmount) // when actions reached max actions
            {
                
                this.Hidden = true;
                for(let x = 0; x < this.MortalsHtml.length; x++)
                {
                    MortalDiv.appendChild(this.MortalsHtml[x])
                }
            } 
        if(this.Hidden == true)
        {
            
            this.MainDiv.style.display = "none";
        }
    }
    ShowToolTip(event)
    {
        if(event.clientX + this.ActionToolTipDiv.getBoundingClientRect().width >= Main.getBoundingClientRect().width )
        {
            this.ActionToolTipDiv.style.left = ""
            this.ActionToolTipDiv.style.right = (Main.getBoundingClientRect().width - event.clientX ) - 5 +"px"
            this.ActionToolTipDiv.style.top = event.clientY + 5 + "px"

        }
        else
        {
            this.ActionToolTipDiv.style.right = ""
            this.ActionToolTipDiv.style.left = event.clientX + 5 +"px"
            this.ActionToolTipDiv.style.top = event.clientY + 5 + "px"
        }
    }
}
class Material
{
    MainDiv = document.createElement("div");
    NameDiv = document.createElement("div");
    AmountDiv = document.createElement("div");

    Name;
    Amount = 0;
    MaxAmount = 100;
    Rate;

    constructor(Name)
    {
        this.Name = Name
        this.CreateHtml()
        Materials[Name] = this;
    }
    CreateHtml()
    {
        this.MainDiv.setAttribute("id",this.Name);
        this.NameDiv.classList.add("MaterialNameDiv")
        this.AmountDiv.classList.add("MaterialAmountDiv")


        this.NameDiv.innerText = this.Name;
        this.AmountDiv.innerText = this.Amount + "/" + this.MaxAmount

        this.MainDiv.appendChild(this.NameDiv);
        this.MainDiv.appendChild(this.AmountDiv);

        MaterialDiv.appendChild(this.MainDiv);
    }
    Update()
    {
        
        this.AmountDiv.innerText = this.Amount + "/" + this.MaxAmount
    }
}
class Building
{
    MainDiv = document.createElement('div');
    BuildingMortalDiv = document.createElement("div");
    BuildingNameDiv = document.createElement('div');
    BuildingProgressDiv = document.createElement('div');
    BuildingProgressTextDiv = document.createElement('div')

    BuildingToolTipDiv = document.createElement("div");

    Stats;
    CurrentAmount = 0;
    Hidden = false;
    CurrentProgress = 0;
    ProgressRate = 0.1;

    constructor(Num)
    {
        this.Stats = BuildDatabase[Num]
        this.CreateHtml()

        this.BuildingMortalDiv.addEventListener("dragover", ()=>{
            this.BuildingMortalDiv.appendChild(currentlydragging);
            
        })

        ActiveBuildings[this.Stats.Name] = this
    }
    CreateHtml()
    {
        this.MainDiv.classList.add("BuildingMainDiv");
        this.BuildingMortalDiv.classList.add("BuildingMortalDiv");
        this.BuildingNameDiv.classList.add("BuildingNameDiv");
        this.BuildingProgressDiv.classList.add("BuildingProgressDiv");
        this.BuildingProgressTextDiv.classList.add("BuildingProgressTextDiv");

        this.BuildingNameDiv.innerText = this.Stats.Name
        this.BuildingProgressTextDiv.innerText = "0/100"

        this.MainDiv.appendChild(this.BuildingNameDiv);
        this.MainDiv.appendChild(this.BuildingMortalDiv);
        this.MainDiv.appendChild(this.BuildingProgressDiv);
        this.MainDiv.appendChild(this.BuildingProgressTextDiv);
        

        BuildDiv.appendChild(this.MainDiv);
    }
    Progress()
    {
        if ( this.Hidden == false)
        {
            this.MortalsHtml = this.BuildingMortalDiv.children;
            for (let x = 0; x < this.MortalsHtml.length; x++)// sets progress rate of Action based off mortals working on it.
            {
                let CurrentMortal = Mortals[this.MortalsHtml[x].id]
                this.ProgressRate += CurrentMortal.Strength
                CurrentMortal.CurrentStamina -= 2 / fps
            }
            if(this.CurrentProgress >= this.Stats.MaxProgress)// when actions completes once
            {
                
                Complete(this.Stats.Name);
                this.CurrentProgress = 0;
                this.CurrentAmount += 1;
            }
            this.CurrentProgress += this.ProgressRate / fps // increments Action Progress
        }
       
        this.ProgressRate = 0;
    }
    UpdateHTML()
    {
        if (this.CurrentProgress != 0)
        {
            this.BuildingProgressDiv.style.width = ((this.CurrentProgress/this.Stats.MaxProgress) * 70) + "%"
            this.BuildingProgressTextDiv.innerText = this.CurrentProgress.toFixed(1) + "/" + this.Stats.MaxProgress + " (" + (((this.CurrentProgress/this.Stats.MaxProgress) * 100).toFixed(1) + "%") + ")"
            
        }
        else
        {
            this.BuildingProgressDiv.style.width = "0%"
        }
        if(this.CurrentProgress >= this.Stats.MaxProgress)// when Buildings completes once
        {
            gameData.CreateLog(this.Stats.Log);  
        }
        if (this.CurrentAmount == this.Stats.MaxAmount) // when Buildings reached max Buildings
            {
                
                this.Hidden = true;
                for(let x = 0; x < this.MortalsHtml.length; x++)
                {
                    MortalDiv.appendChild(this.MortalsHtml[x])
                }
            } 
        if(this.Hidden == true)
        {
            
            this.MainDiv.style.display = "none";
        }
    }
}
class Game
{
    constructor()
    {
        Main.setAttribute("id", "Main");
        Tabs.setAttribute("id", "Tabs");
        ActionTab.setAttribute('id', "ActionTab");
        ActionTab.classList.add("Button");
        BuildTab.setAttribute('id', "BuildTab");
        BuildTab.classList.add("Button")
        OptionTab.setAttribute('id',"OptionTab" );
        OptionTab.classList.add("Button")
        ActionDiv.setAttribute("id", "ActionDiv");
        BuildDiv.setAttribute('id', "BuildDiv");
        OptionDiv.setAttribute('id', 'OptionDiv');
        MortalDiv.setAttribute("id", "MortalDiv");
        MaterialDiv.setAttribute("id", "MaterialDiv");
        LogDiv.setAttribute("id", "LogDiv");
        ActionDiv.style.display = "block";
        BuildDiv.style.display = "none";
        OptionDiv.style.display = 'none';


        new Mortal;
        //new Action(1)
        new Material("Wood")
        
    
    
        
        
    
        MortalDiv.addEventListener("dragover", e =>{
            e.preventDefault()
            let afterElement = this.GetElementBelow(MortalDiv, e.clientY);
            if ( afterElement == null)
            {
                MortalDiv.appendChild(currentlydragging);
            }
            else
            {
                MortalDiv.insertBefore(currentlydragging, afterElement)
            }

        })
    
    
        ActionTab.innerText = "Actions"
        BuildTab.innerText = "Build"
        OptionTab.innerText = "Options"

        document.addEventListener("click", (Event) => {this.Onclick(Event)})
        document.body.appendChild(Main)
        
        Main.appendChild(Tabs)
        Main.appendChild(ActionDiv)
        Main.appendChild(BuildDiv);
        Main.appendChild(OptionDiv);
        Main.appendChild(MortalDiv)
        Main.appendChild(MaterialDiv);
        Main.appendChild(LogDiv)

        Tabs.appendChild(ActionTab);
        Tabs.appendChild(BuildTab);
        Tabs.appendChild(OptionTab)
        requestAnimationFrame(() => this.MainLoop())
    }
    MainLoop()
    {
        fpsInterval = 1000 / fps;
        now = performance.now();
        let elapsed = now - then;
        
        if (elapsed > fpsInterval)
        {
            then = now - (elapsed % fpsInterval);
            this.ActionManager()
            this.BuildingManager()

            this.LoopThrough(Object.keys(ActiveActions).length,"Action")
            this.LoopThrough(Object.keys(Mortals).length,"Mortal")
            this.LoopThrough(Object.keys(Materials).length,"Material")
            this.LoopThrough(Object.keys(ActiveBuildings).length, "Building")
        }
       

        requestAnimationFrame(() => this.MainLoop())
    }
    ActionManager()
    {
        this.CheckActionDatabase(ActionDatabase.length - 1)

    }
    CheckActionDatabase(NumOfLoops)
    {
        let CreateAction = [];
        let CurrentAction = ActionDatabase[NumOfLoops];

        if(ActiveActions[CurrentAction.Name] == undefined)
        {
           
            CreateAction.push(this.CheckRequirements(CurrentAction.Reqs.Acts,Object.keys(CurrentAction.Reqs.Acts).length - 1, "Actions"));
            if(this.CheckRequirements(CurrentAction.Reqs.Acts,Object.keys(CurrentAction.Reqs.Acts).length - 1, "Actions") == true)
            {
                //console.log(CurrentAction.Name + " Passed Action Check");
            }
            CreateAction.push(this.CheckRequirements(CurrentAction.Reqs.Mats,Object.keys(CurrentAction.Reqs.Mats).length - 1, "Materials"));
            if(this.CheckRequirements(CurrentAction.Reqs.Mats,Object.keys(CurrentAction.Reqs.Mats).length - 1, "Materials") == true)
            {
                //console.log(CurrentAction.Name + " Passed Material Check");
            }
            if(CreateAction.includes(false) != true )
            {
                new Action(NumOfLoops)
            }
        }

        if (NumOfLoops != 1)// end at 1
        {
            this.CheckActionDatabase(--NumOfLoops);
        }
    }
    BuildingManager()
    {
        this.CheckBuildingDatabase(BuildDatabase.length - 1)
    }
    CheckBuildingDatabase(NumOfLoops)
    {
        let CreateBuilding = [];
        let CurrentBuilding = BuildDatabase[NumOfLoops]
        if(ActiveBuildings[CurrentBuilding.Name] == undefined)
        {
            
            CreateBuilding.push(this.CheckRequirements(CurrentBuilding.Reqs.Acts,Object.keys(CurrentBuilding.Reqs.Acts).length - 1,"Actions"));
            if(this.CheckRequirements(CurrentBuilding.Reqs.Acts,Object.keys(CurrentBuilding.Reqs.Acts).length - 1,"Actions") == true)
            {
                //console.log(CurrentBuilding.Name + " Passed Action Check");
            }
            CreateBuilding.push(this.CheckRequirements(CurrentBuilding.Reqs.Mats,Object.keys(CurrentBuilding.Reqs.Mats).length - 1,"Materials"));
            if(this.CheckRequirements(CurrentBuilding.Reqs.Mats,Object.keys(CurrentBuilding.Reqs.Mats).length - 1,"Materials") == true)
            {
                //console.log(CurrentBuilding.Name + " Passed Material Check");
            }
            if(CreateBuilding.includes(false) != true)
            {
                
                new Building(NumOfLoops)
            }
        }

      

        if (NumOfLoops != 1)// end at 1
        {
            this.CheckBuildingDatabase(--NumOfLoops);
        }
    }
    CheckRequirements(Requirements, NumOfLoops,Type)
    {
        let RequirementCheck = Object.keys(Requirements)[NumOfLoops];
        let ValueCheck = Object.values(Requirements)[NumOfLoops];
        //console.log(NumOfLoops);
        
        if (Type == "Actions")
        {
            
            if(ActiveActions[RequirementCheck] != undefined)
            {
                
                if (ActiveActions[RequirementCheck].CurrentAmount != ValueCheck)
                {
                    
                    return false;
                }
            }
            else if (NumOfLoops == -1)
            {
                return true;
            }
            else
            {
                return false
            }
        }
        if(Type == "Materials")
        {
            //console.log(Materials[RequirementCheck])
            if(Materials[RequirementCheck] != undefined)
            {
                if(Materials[RequirementCheck].Amount <= ValueCheck)
                {
                    
                    return false
                }
            }
            else if (NumOfLoops == -1)
            {
                return true
            }
            else
            {
                return false
            }
        }
        
       


        if (NumOfLoops >= 1)// end at 0
        {
            this.CheckActionRequirements(Requirements,--NumOfLoops);
        }
        return true;
    }
    LoopThrough(NumOfLoops,Type)
    {

        let action =  Object.keys(ActiveActions)[NumOfLoops - 1]
        let mortal = Object.keys(Mortals)[NumOfLoops -1]
        let material = Object.keys(Materials)[NumOfLoops -1] 
        let Building = Object.keys(ActiveBuildings)[NumOfLoops -1]
        if (Type == "Action")
        {
            ActiveActions[action].UpdateHTML();
            ActiveActions[action].Progress()
            
            //Object.values(ActiveActions)[NumOfLoops - 1].Progress(TickRate)
            
        }
        if (Type == "Mortal")
        {
            Mortals[mortal].Progress()
            Mortals[mortal].UpdateHTML()
        }
        if (Type == "Material")
        {
            Materials[material].Update();
        }
        if (Type == "Building")
        {
            ActiveBuildings[Building].Progress()
            ActiveBuildings[Building].UpdateHTML()
        }
        if (NumOfLoops != 1)
        {
            this.LoopThrough(--NumOfLoops, Type)
        }
    }
    CreateLog(Message)
    {
        let NewLog = document.createElement('div');
    
        NewLog.classList.add("LogDiv");
    
        let date = new Date(); 
        NewLog.innerText = date.getHours() + ":" + date.getMinutes() + " - " + Message;
    
        
    
        if(LogDiv.children[0] == undefined)
        {
            //console.log(LogDiv.children[0])
            LogDiv.appendChild(NewLog);
        }
        else
        {
            //console.log(LogDiv.children[0])
            LogDiv.insertBefore(NewLog,LogDiv.children[0])
            //LogDiv.appendChild(NewLog);
        }
    
    
    }
    Onclick(event)
    {
        //console.log(event);
        let element = event.target;
        if(element.id == "ActionTab")
        {
            ActionDiv.style.display = "block";
            BuildDiv.style.display = "none";
            OptionDiv.style.display = "none"
        }
        if(element.id == "BuildTab")
        {
            ActionDiv.style.display = "none";
            BuildDiv.style.display = "block";
            OptionDiv.style.display = "none"
        }
        if(element.id == "OptionTab")
        {
            ActionDiv.style.display = "none";
            BuildDiv.style.display = "none";
            OptionDiv.style.display = "block"
        }

                

        
    }
    GetElementBelow(container, y)
    {
        const elements = [...container.querySelectorAll('.MortalMainDiv:not(.dragging)')]
        return elements.reduce((closestElement, currentElement) => 
        {
            const box = currentElement.getBoundingClientRect()
            const offset = y - box.top - box.height / 2
            if (offset < 0 && offset > closestElement.offset)
            {
                return {offset: offset, element: currentElement}
            }
            else 
            {
                return closestElement
            }

        }, {offset: Number.NEGATIVE_INFINITY}).element;
    }
}

let gameData = new Game;

const accumulator = {"offest": 2}
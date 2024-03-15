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
        Description:"",
        MaxProgress:100,
        Stat: "",
        Log:"",
        Requirements:
        {
            Actions:
            {
                Never: -1
            },
            Materials:
            {

            },
            Buildings:
            {

            }
        },
        Completion:
        {
            Actions:
            {
                
            },
            Materials:
            {

            }
        },
        Cost: //per completion
        {
            Actions:
            {
                
            },
            Materials:
            {

            }
        }
    },
    {
        Name: "Wake Up",
        Description:"",
        MaxProgress:5,
        Stat: "Endurence",
        Log:"",
        Requirements:
        {
            Actions:
            {
                Never: -1
            },
            Materials:
            {

            },
            Buildings:
            {
                
            }
        },
        Completion:
        {
            Actions:
            {
                "Pick Yourself Up": 1
            },
            Materials:
            {
                
            }
        },
        Cost://per completion
        {
            Actions:
            {
                
            },
            Materials:
            {

            }
        }
    },
    {
        Name: "Pick Yourself Up",
        Description:"",
        MaxProgress:5,
        Stat: "Strength",
        Log:"",
        Requirements:
        {
            Actions:
            {
                "Wake Up": 1
            },
            Materials:
            {

            },
            Buildings:
            {
                
            }
        },
        Completion:
        {
            Actions:
            {
                "Look Around": 1
            },
            Materials:
            {
                
            }
        },
        Cost://per completion
        {
            Actions:
            {
                
            },
            Materials:
            {

            }
        }
    },
    {
        Name: "Look Around",
        Description:"",
        MaxProgress:5,
        Stat: "Perception",
        Log:"",
        Requirements:
        {
            Actions:
            {
                "Pick Yourself Up": 1
            },
            Materials:
            {

            },
            Buildings:
            {
                
            }
        },
        Completion:
        {
            Actions:
            {
                "Think Of A Plan": 1
            },
            Materials:
            {

            }
        },
        Cost: //per completion
        {
            Actions:
            {
                
            },
            Materials:
            {

            }
        }
    },
    {
        Name: "Think Of A Plan",
        Description:"",
        MaxProgress:5,
        Stat: "Inteligence",
        Log:"",
        Requirements:
        {
            Actions:
            {
                "Look Around": 1
            },
            Materials:
            {

            },
            Buildings:
            {
                
            }
        },
        Completion:
        {
            Actions:
            {
                "Gather Wood": -1
            },
            Materials:
            {

            }
        },
        Cost: //per completion
        {
            Actions:
            {
                
            },
            Materials:
            {

            }
        }
    },
    {
        Name: "Gather Wood",
        Description:"",
        MaxProgress:5,
        Stat: "Perception",
        Log:" ",
        Requirements:
        {
            Actions:
            {
                
            },
            Materials:
            {

            },
            Buildings:
            {
                
            }
        },
        Completion:
        {
            Actions:
            {
                
            },
            Materials:
            {
                Wood: 1
            }
        },
        Cost: //per completion
        {
            Actions:
            {
                
            },
            Materials:
            {

            }
        }
    },
    
]
const BuildingDatabase = [
    {
        Name: "",
        Description:"",
        MaxProgress:100,
        MaxAmount: 5,
        Stat: "",
        Log:"",
        Requirements:
        {
            Actions:
            {
                Never: -1
            },
            Materials:
            {

            },
            Buildings:
            {
                
            }
        },
        Completion:
        {
            Actions:
            {
                
            },
            Materials:
            {

            }
        },
        Cost: //per completion
        {
            Actions:
            {
                
            },
            Materials:
            {

            }
        }
    },
    {
        Name: "Shelter",
        Description:"",
        MaxProgress:100,
        MaxAmount: 5,
        Stat: "",
        Log:"",
        Requirements:
        {
            Actions:
            {
                
            },
            Materials:
            {
                Wood: 1
            },
            Buildings:
            {
                
            }
        },
        Completion:
        {
            Actions:
            {
                
            },
            Materials:
            {

            }
        },
        Cost: //per completion
        {
            Actions:
            {
                
            },
            Materials:
            {
                Wood: 25
            }
        }
    },

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
let RepeatNum = 1;

let CurrentTicks = 0;

let currentlydragging;

let fps = 60, now = 0, then = performance.now() ,fpsInterval, fpsCounter = 0



let Mortals = {};
let ActiveActions = {} ;
let Materials = {}
let ActiveBuildings ={};

function getRandomArbitrary(min, max) {
    return  Math.random() * (max - min) + min;
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


    Strength = getRandomArbitrary(1,2);
    Agility = getRandomArbitrary(1,2);
    Perception = getRandomArbitrary(0,2);
    Constituion = getRandomArbitrary(1,2)
    Inteligence = getRandomArbitrary(0,2)
    Endurence = getRandomArbitrary(1,2)
    Luck = getRandomArbitrary(0,2)

    
    MaxStamina = (this.Endurence * 10);
    CurrentStamina = this.MaxStamina
    StamingaRegen = this.Constituion/5;

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
        this.MainDiv.classList.add("Border")
        this.NameDiv.classList.add("MortalNameDiv");
        this.NameDiv.classList.add("Border")
        this.InformationDiv.classList.add("MortalInformationDiv");
        this.InformationDiv.classList.add("Border")
        //this.InformationDiv.classList.add("Button")
        this.StaminaDiv.classList.add("MortalStaminaDiv");
        this.StaminaDiv.classList.add("Border")
        this.StaminaBarDiv.classList.add("MortalStaminaBarDiv")

        this.InformationToolTipDiv.classList.add("InformationToolTipDiv")
        this.InformationToolTipDiv.classList.add("Border")
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
        "Strength: " + this.Strength.toFixed(2) + "\n" +
        "Agility: " + this.Agility.toFixed(2) + "\n" +
        "Endurence: " + this.Endurence.toFixed(2) + "\n" +
        "Perception: " + this.Perception.toFixed(2) + "\n" +
        "Luck: " + this.Luck.toFixed(2) + "\n" 

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
        if(this.CurrentStamina < this.MaxStamina)
        {
            this.CurrentStamina += this.Constituion / fps;
        }
        
    }
    UpdateHTML()
    {
        if (this.CurrentStamina >= 0)
        {
            this.StaminaBarDiv.style.width = ((this.CurrentStamina/this.MaxStamina) * 100) + "%"
            
            this.StaminaDiv.innerText = this.CurrentStamina.toFixed(1) + "/" + this.MaxStamina.toFixed(1)
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


    ActiveWorkers = [];
    Stats;

    Num;
    DoCompletion = false
    Completed = 0;
    Amount = 0;
    Hidden = false;
    CurrentProgress = 0;
    ProgressRate = 0;

    constructor(Num)
    {
        if(Num == 5)
        {
            //this.Amount += 1;
            this.Amount = -1
        }
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
        this.MainDiv.classList.add("Border")
        this.ActionMortalDiv.classList.add("ActionMortalDiv");
        this.ActionMortalDiv.classList.add("Border")
        this.ActionNameDiv.classList.add("ActionNameDiv")
        this.ActionNameDiv.classList.add("Border")
        this.ActionProgressDiv.classList.add("ActionProgressDiv")
        this.ActionProgressDiv.classList.add("Border")
        this.ActionProgressTextDiv.classList.add("ActionProgressTextDiv")

        this.ActionToolTipDiv.classList.add('ActionToolTipDiv')
        this.ActionToolTipDiv.classList.add("Border")
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
        
        if( this.DoCompletion == true)
            {
                this.Completion()
                this.DoCompletion = false;
            }
        
        if ( this.Hidden == false)
        {
            
            this.ProgressRate = 0;
            

            for (let x = 0; x < this.ActionMortalDiv.children.length; x++)// sets progress rate of Action based off mortals working on it.
            {
                this.ActiveWorkers[x] = (Mortals[this.ActionMortalDiv.children[x].id])
                this.ProgressRate += 1 + (this.logEffectiveness(this.ActiveWorkers[x][this.Stats.Stat]) * 0.2)
               // CurrentMortal.CurrentStamina -= 2 / fps
            }
            
            if(this.CurrentProgress >= this.Stats.MaxProgress)// when actions completes once
            {
                if ( this.Amount != -1)
                {
                    this.Amount -= 1;
                }
                
                
                this.Completed += 1;
                this.DoCompletion = true;
                
                this.CurrentProgress = 0;

            }
            this.CurrentProgress += this.ProgressRate / fps // increments Action Progress
        }
       
        
    }
    Completion()
    {
        let MaterialGain = 0;
        for(let x = 0; x < this.ActiveWorkers.length; x++)
        {
            MaterialGain += ((this.Stats.Completion.Materials[Object.keys(this.Stats.Completion.Materials)[x]]) * this.logEffectiveness(this.ActiveWorkers[x][this.Stats.Stat]))
        }

        for(let x = 0; x < Object.keys(this.Stats.Completion.Actions).length; x++)
        {
            ActiveActions[Object.keys(this.Stats.Completion.Actions)[x]].Amount += this.Stats.Completion.Actions[Object.keys(this.Stats.Completion.Actions)[x]]
        }
        for(let x = 0; x < Object.keys(this.Stats.Completion.Materials).length; x++)
        {          
            Materials[Object.keys(this.Stats.Completion.Materials)[x]].Amount += MaterialGain    
            gameData.CreateLog("You have Gained " + MaterialGain.toFixed(2) + " " + Object.keys(this.Stats.Completion.Materials)[x])         
        }
        
    }
    UpdateHTML()
    {
        if (this.Hidden == false)
        {
            let TimeTillEnd = this.Stats.MaxProgress / this.ProgressRate - (this.Stats.MaxProgress / this.ProgressRate) * (this.CurrentProgress / this.Stats.MaxProgress)
            if (isNaN(TimeTillEnd))
            {
                TimeTillEnd = 0;
            }
            this.MortalsHtml = this.ActionMortalDiv.children;
            this.InfoDiv.innerText = 
            "Name: " + this.Stats.Name + "\n" +
            "Description: " + this.Stats.Description  + "\n" +
            "Stat: " + this.Stats.Stat + "\n" +
            "Progress: " + this.CurrentProgress.toFixed(2) + "/" + this.Stats.MaxProgress  + "\n" +
            "Progress Rate: " + this.ProgressRate.toFixed(2) + "/s (" + TimeTillEnd.toFixed(2) + " Seconds)" + "\n" +
            "Amount: " + this.Amount +"\n" +
            "Completed: " + this.Completed

            if (this.CurrentProgress != 0)
            {
                this.ActionProgressDiv.style.width = ((this.CurrentProgress/this.Stats.MaxProgress) * 100) + "%"
                this.ActionProgressTextDiv.innerText = this.CurrentProgress.toFixed(1) + "/" + this.Stats.MaxProgress + " (" + (((this.CurrentProgress/this.Stats.MaxProgress) * 100).toFixed(1) + "%") + ")"
                
            }
            else
            {
                this.ActionProgressDiv.style.width = "0%"
                this.ActionProgressTextDiv.innerText = "0.0/" + this.Stats.MaxProgress.toFixed(1);
            }
            if(this.CurrentProgress >= this.Stats.MaxProgress)// when actions completes once
            {
                if(this.Stats.log != undefined)
                {
                    gameData.CreateLog(this.Stats.Log); 
                }
                 
            }
            if (this.Amount == 0) // when actions reached max actions
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
            else
            {
                this.MainDiv.style.display = "block";
            }
        }
        if (this.Amount != 0) // when actions reached max actions
        {

            this.Hidden = false;
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
    logEffectiveness(stat) {
        if (stat < 10.01)// 0 = 1 = 
        {
            let scale = 2
            let shift = 1
            let base = 5
            return (scale * Math.log(stat + shift) / Math.log(base)) + 1;
        }
        if (stat > 10 && stat < 50)
        {
            
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
        this.MainDiv.classList.add("Border")
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
        
        this.AmountDiv.innerText = this.Amount.toFixed(2) + "/" + this.MaxAmount
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

    ActiveWorkers = []
    Stats;
    Level = 0;
    Hidden = false;
    CurrentProgress = 0;
    ProgressRate = 0.1;

    constructor(Num)
    {
        this.Stats = BuildingDatabase[Num]
        this.CreateHtml()

        this.BuildingMortalDiv.addEventListener("dragover", ()=>{
            this.BuildingMortalDiv.appendChild(currentlydragging);
            
        })

        ActiveBuildings[this.Stats.Name] = this
    }
    CreateHtml()
    {
        this.MainDiv.classList.add("BuildingMainDiv");
        this.MainDiv.classList.add("Border")
        this.BuildingMortalDiv.classList.add("BuildingMortalDiv");
        this.BuildingMortalDiv.classList.add("Border")
        this.BuildingNameDiv.classList.add("BuildingNameDiv");
        this.BuildingNameDiv.classList.add("Border")
        this.BuildingProgressDiv.classList.add("BuildingProgressDiv");
        this.BuildingProgressDiv.classList.add("Border")
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
        if (this.Hidden == false)
        {
            
            for (let x = 0; x < this.BuildingMortalDiv.children.length; x++)// sets progress rate of Action based off mortals working on it.
            {
                this.ActiveWorkers[x] = Mortals[this.BuildingMortalDiv.children[x].id]
                this.ProgressRate += 1 + (this.logEffectiveness(this.ActiveWorkers[x][this.Stats.Stat]) * 0.2)
                CurrentMortal.CurrentStamina -= 2 / fps
            }
            if(this.CurrentProgress >= this.Stats.MaxProgress)// when actions completes once
            {
                
                Complete(this.Stats.Name);
                this.CurrentProgress = 0;
                
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
        if(this.Hidden == true)
        {
            
            this.MainDiv.style.display = "none";
        }
    }
    logEffectiveness(stat) {
        if (stat < 10.01)// 0 = 1 = 
        {
            let scale = 2
            let shift = 1
            let base = 5
            return (scale * Math.log(stat + shift) / Math.log(base)) + 1;
        }
        if (stat > 10 && stat < 50)
        {
            
        }
    }
}
class Game
{
    constructor()
    {
        Main.setAttribute("id", "Main");
        Main.classList.add("Border")
        Tabs.setAttribute("id", "Tabs");
        Tabs.classList.add("Border")
        ActionTab.setAttribute('id', "ActionTab");
        ActionTab.classList.add("Button");
        ActionTab.classList.add("Border")
        BuildTab.setAttribute('id', "BuildTab");
        BuildTab.classList.add("Button")
        BuildTab.classList.add("Border")
        OptionTab.setAttribute('id',"OptionTab" );
        OptionTab.classList.add("Button")
        OptionTab.classList.add("Border")
        ActionDiv.setAttribute("id", "ActionDiv");
        ActionDiv.classList.add("Border")
        BuildDiv.setAttribute('id', "BuildDiv");
        BuildDiv.classList.add("Border")
        OptionDiv.setAttribute('id', 'OptionDiv');
        OptionDiv.classList.add("Border")
        MortalDiv.setAttribute("id", "MortalDiv");
        MortalDiv.classList.add("Border")
        MaterialDiv.setAttribute("id", "MaterialDiv");
        MaterialDiv.classList.add("Border")
        LogDiv.setAttribute("id", "LogDiv");
        LogDiv.classList.add("Border")
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
            //this.ActionManager()
            //this.BuildingManager()
            this.CheckDatabase(ActionDatabase.length - 1, "Action")
            this.CheckDatabase(BuildingDatabase.length - 1, "Building")

            this.LoopThrough(Object.keys(ActiveActions).length - 1,"Action")
            this.LoopThrough(Object.keys(Mortals).length - 1,"Mortal")
            this.LoopThrough(Object.keys(Materials).length - 1,"Material")
            this.LoopThrough(Object.keys(ActiveBuildings).length - 1, "Building")
        }
       

        requestAnimationFrame(() => this.MainLoop())
    }
    CheckDatabase(NumOfLoops, Type)
    {
        if (Type == "Action")
        {
            let CreateAction = [];
            let CurrentAction = ActionDatabase[NumOfLoops];

            if(ActiveActions[CurrentAction.Name] == undefined)
            {
                //console.log(CurrentAction.Name + " is trying to pass the action test")
                CreateAction.push(this.CheckRequirements(CurrentAction.Requirements.Actions,Object.keys(CurrentAction.Requirements.Actions).length - 1, "Actions"));
                // if (this.CheckRequirements(CurrentAction.Requirements.Actions,Object.keys(CurrentAction.Requirements.Actions).length - 1, "Actions"))
                // {
                //     console.log(CurrentAction.Name + " has passed the action test")
                // }
                //console.log(CurrentAction.Name + " is trying to pass the Material test")
                CreateAction.push(this.CheckRequirements(CurrentAction.Requirements.Materials,Object.keys(CurrentAction.Requirements.Materials).length - 1, "Materials"));
                CreateAction.push(this.CheckRequirements(CurrentAction.Requirements.Buildings,Object.keys(CurrentAction.Requirements.Buildings).length - 1, "Buildings"));
                if(CreateAction.includes(false) != true )
                {
                    new Action(NumOfLoops)
                }
            }

            if (NumOfLoops != 1)// end at 1
            {
                this.CheckDatabase(--NumOfLoops, "Action");
            }
        }
        if (Type == "Building")
        {
            let CreateBuilding = [];
            let CurrentBuilding = BuildingDatabase[NumOfLoops]
            if(ActiveBuildings[CurrentBuilding.Name] == undefined)
            {
               // console.log(CurrentBuilding.Name + " is trying to pass the action test")
                CreateBuilding.push(this.CheckRequirements(CurrentBuilding.Requirements.Actions,Object.keys(CurrentBuilding.Requirements.Actions).length - 1,"Actions"));
                //console.log(CurrentBuilding.Name + " is trying to pass the material test")
                CreateBuilding.push(this.CheckRequirements(CurrentBuilding.Requirements.Materials,Object.keys(CurrentBuilding.Requirements.Materials).length - 1,"Materials"));
                CreateBuilding.push(this.CheckRequirements(CurrentBuilding.Requirements.Buildings,Object.keys(CurrentBuilding.Requirements.Buildings).length - 1, "Buildings"));
                if(CreateBuilding.includes(false) != true)
                {
                    
                    new Building(NumOfLoops)
                }
            }

            if (NumOfLoops != 1)// end at 1
            {
                this.CheckDatabase(--NumOfLoops, "Building");
            }
        }
    }
    CheckRequirements(Requirements, NumOfLoops,Type)
    {
        let RequirementCheck = Object.keys(Requirements)[NumOfLoops];
        let ValueCheck = Object.values(Requirements)[NumOfLoops];
        //console.log(RequirementCheck)
        //console.log(NumOfLoops);
        
        if (Type == "Actions")
        {
            //console.log(ActiveActions)
           // console.log(ActiveActions[RequirementCheck])
            if(ActiveActions[RequirementCheck] != undefined)
            {
                //console.log("whatsssss")
                if (ActiveActions[RequirementCheck].Completed != ValueCheck)
                {
                   // console.log(RequirementCheck + ": " + ActiveActions[RequirementCheck].Completed + " != " + ValueCheck)
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
        if(Type == "Buildings")
        {
            //console.log(Materials[RequirementCheck])
            if(ActiveBuildings[RequirementCheck] != undefined)
            {
                if(ActiveBuildings[RequirementCheck].Level <= ValueCheck)
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
            this.CheckActionRequirements(Requirements,--NumOfLoops, Type);
        }
        return true;
    }
    LoopThrough(NumOfLoops,Type)
    {

        let action =  Object.keys(ActiveActions)[NumOfLoops]
        let mortal = Object.keys(Mortals)[NumOfLoops]
        let material = Object.keys(Materials)[NumOfLoops] 
        let Building = Object.keys(ActiveBuildings)[NumOfLoops]
        //console.log(ActiveActions)
        if (Type == "Action" && action != undefined)
        {
            
            ActiveActions[action].UpdateHTML();
            ActiveActions[action].Progress()
            //console.log(NumOfLoops)
            //Object.values(ActiveActions)[NumOfLoops - 1].Progress(TickRate)
            
        }
        if (Type == "Mortal" && mortal != undefined)
        {
            Mortals[mortal].Progress()
            Mortals[mortal].UpdateHTML()
        }
        if (Type == "Material" && action != undefined)
        {
            Materials[material].Update();
        }
        if (Type == "Building" && Building != undefined)
        {
            
            ActiveBuildings[Building].Progress()
            ActiveBuildings[Building].UpdateHTML()
        }
        if (NumOfLoops > 0 )
        {
            this.LoopThrough(--NumOfLoops, Type)
        }
    }
    CreateLog(Message)
    { 
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        let DateText = `${hours}:${minutes}:${seconds}` + " - ";

        if(LogDiv.children[0] != undefined && LogDiv.children[0].querySelector(".MessageDiv").innerText == Message )
            {
                LogDiv.children[0].querySelector(".DateDiv").innerText = DateText
                LogDiv.children[0].querySelector(".RepeatDiv").innerText = "(" + ++RepeatNum + "x)"
            }
        else
        {
            let NewLog = document.createElement('div');
            let DateDiv = document.createElement('div');
            let MessageDiv = document.createElement('div');
            let RepeatDiv = document.createElement('div')
            NewLog.classList.add("LogDiv");
            DateDiv.classList.add("DateDiv")
            MessageDiv.classList.add("MessageDiv");
            RepeatDiv.classList.add("RepeatDiv");
            
            MessageDiv.innerText = Message
            DateDiv.innerText = DateText
        
            NewLog.appendChild(DateDiv);
            NewLog.appendChild(MessageDiv);
            NewLog.appendChild(RepeatDiv); 
            
            
            if(LogDiv.children[0] == undefined)
            {
                LogDiv.appendChild(NewLog);
            }
            else
            {
                
                LogDiv.insertBefore(NewLog,LogDiv.children[0])
                RepeatNum = 1;
                
            }
    
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
    logEffectiveness(stat) {
        if (stat < 10.01)// 0 = 1 = 
        {
            let scale = 2
            let shift = 1
            let base = 5
            return (scale * Math.log(stat + shift) / Math.log(base)) + 1;
        }
        if (stat > 10 && stat < 50)
        {
            
        }
    }
    
}

let gameData = new Game;

        // console.log("stat 0 = " +  gameData.logEffectiveness(0));
        // console.log("stat 1 = " +  gameData.logEffectiveness(1));
        // console.log("stat 2 = " +  gameData.logEffectiveness(2));
        // console.log("stat 4 = " +  gameData.logEffectiveness(4));
        // console.log("stat 6 = " +  gameData.logEffectiveness(6));
        // console.log("stat 8 = " +  gameData.logEffectiveness(8));
        // console.log("stat 10 = " +  gameData.logEffectiveness(10));

        // console.log("stat 10 = " + gameData.logEffectiveness(10));
        // console.log("stat 50 = " + gameData.logEffectiveness(50));
        // console.log("stat 250 = " + gameData.logEffectiveness(250));
        // console.log("stat 1000 = " + gameData.logEffectiveness(1000));

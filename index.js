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
        Log:"",
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
        Stat: "",
        Log:"",
        Level:{ 
            0:
            {
                Description: " - ",
                MaxProgress:100,
                Requirements:
                {
                    Actions:
                    {
                        Never:1
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
                    Wood: 25
                }
                }
            },
            1:
            {
                Description: "",
                MaxProgress:100,
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
                        Wood: 25
                    }
                }
            } 
        },
    },
    {
        Stat: "Dexterity",
        Level:{ 
            0:
            {
                Name: "Cold Ground",
                Log:"Using some of the sticks you found, you prompt them up against a fallen tree, its far from perfect but it should protect you from the elements",
                Description: "Comfortable is the last word you would use to describe it, Anything can be better than this.",
                MaxProgress:50,
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
            1:
            {
                Name: "Shelter",
                Description: "Its a small survival shelter, it does its job.",
                MaxProgress:1000,
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
                        Wood: 500
                    }
                }
            } 
        }
    },

]


const Main = document.createElement('div');
const Tabs = document.createElement('div');
const ActionTab = document.createElement('div');
const BuildTab = document.createElement('div');
const ExploreTab= document.createElement('div');
const OptionTab = document.createElement('div');
const ActionDiv = document.createElement('div');
const BuildDiv = document.createElement('div')
const ExploreDiv = document.createElement('div')
const PartyDiv = document.createElement("div")
const LocationDiv = document.createElement('div')

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
    Dexterity = getRandomArbitrary(1,2);
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


    Name;
    Description;
    MaxProgress
    AssociatedStat;
    Log;

    ActionRequirementsNames;
    ActionRequirementsValues

    MaterialRequirementsNames;
    MaterialRequirementsValues;

    BuildingRequirementsNames
    BuildingRequirementsValues;

    ActionGainedNames;
    ActionGainedValues;

    MaterialGainedNames
    MaterialGainedValues

    ActionCostNames;
    ActionCostValues;

    MaterialCostNames;
    MaterialCostValues;

    StaminaDrain = 0;

    TimeTillComplete = 0;
    DoCompletion = false
    Completed = 0;
    Amount = 0;
    Active = false;
    CurrentProgress = 0;
    ProgressRate;

    constructor(Num)
    {
        let Info = ActionDatabase[Num]

        this.Name = Info.Name
        this.Description = Info.Description;
        this.MaxProgress = Info.MaxProgress;
        this.AssociatedStat = Info.Stat;
        this.Log = Info.Log

        this.ActionRequirementsNames = Object.keys(Info.Requirements.Actions)
        this.ActionRequirementsValuess = Object.values(Info.Requirements.Actions)

        this.MaterialRequirementsNames = Object.keys(Info.Requirements.Materials)
        this.MaterialRequirementsValuess = Object.values(Info.Requirements.Materials)

        this.BuildingRequirementsNames = Object.keys(Info.Requirements.Buildings)
        this.BuildingRequirementsValues = Object.values(Info.Requirements.Buildings)

        this.ActionGainedNames = Object.keys(Info.Completion.Actions)
        this.ActionGainedValues = Object.values(Info.Completion.Actions)

        this.MaterialGainedNames = Object.keys(Info.Completion.Materials)
        this.MaterialGainedValues = Object.values(Info.Completion.Materials)

        this.ActionCostNames = Object.keys(Info.Cost.Actions)
        this.ActionCostValues = Object.values(Info.Cost.Actions)

        this.MaterialCostNames = Object.keys(Info.Cost.Actions)
        this.MaterialCostValues = Object.values(Info.Cost.Actions)


        //console.log(this.ActionGainedNames)
        //console.log(Info.Completion)

        if(Num == 5)
        {
            
            //this.Amount += 1;
            this.Amount = -1
        }


        this.CreateHtml();
       ActiveActions[this.Name] = this
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
        
        

        this.ActionMortalDiv.addEventListener("dragover", ()=>{
            this.ActionMortalDiv.appendChild(currentlydragging);
            
        })
        
        this.ActionNameDiv.addEventListener("mousemove", (e) => {this.ShowToolTip(e) })

        this.ActionNameDiv.addEventListener("mouseenter", (e) => {this.ActionToolTipDiv.style.display = "block" })
        this.ActionNameDiv.addEventListener("mouseleave", (e) => {this.ActionToolTipDiv.style.display = "none" })

        this.ActionNameDiv.innerText = this.Name;

        this.ActionToolTipDiv.appendChild(this.InfoDiv);
        Main.appendChild(this.ActionToolTipDiv)
        this.MainDiv.appendChild(this.ActionProgressTextDiv);
        this.MainDiv.appendChild(this.ActionNameDiv);
        this.MainDiv.appendChild(this.ActionProgressDiv)
        this.MainDiv.appendChild(this.ActionMortalDiv);

        ActionDiv.appendChild(this.MainDiv);
    }

    MainLoop()
    {
        //console.log("test") 
        if (this.DoCompletion == true)
        {
            this.Completion()
            this.DoCompletion = false
        }
        if (this.Amount != 0) // when actions reached max actions
        {

            this.Active = true;
        }
        if(this.Active == true)
        {
            
            this.MainDiv.style.display = "block";

            // RESETING VALUES
            this.ProgressRate = 0
            this.ActiveWorkers = []

            //SETTING PROGRESS RATE BASED OFF CURRENTLY ASSIGNED MORTRALS
            // X = Current mortal we are looping through // Loop = amount of Mortals currently assigned
            for(let x = 0; x < this.ActionMortalDiv.children.length; x++)
            {
                this.ActiveWorkers[x] = Mortals[this.ActionMortalDiv.children[x].id]
                this.ProgressRate += 1 + (this.logEffectiveness(this.ActiveWorkers[x][this.AssociatedStat]) * 0.2)
                this.ActiveWorkers[x].CurrentStamina -= this.StaminaDrain;
            }

            //CALUCLATING HOW LONG UNTIL ACTION IS COMPLETED
            this.TimeTillComplete = this.MaxProgress / this.ProgressRate - (this.MaxProgress / this.ProgressRate) * (this.CurrentProgress / this.MaxProgress)
            if (isNaN(this.TimeTillComplete))
            {
                this.TimeTillComplete = 0;
            }

            this.InfoDiv.innerText = 
            "Name: " + this.Name + "\n" +
            "Description: " + this.Description  + "\n" +
            "Stat: " + this.AssociatedStat + "\n" +
            "Progress: " + this.CurrentProgress.toFixed(2) + "/" + this.MaxProgress  + "\n" +
            "Progress Rate: " + this.ProgressRate.toFixed(2) + "/s (" + this.TimeTillComplete.toFixed(2) + " Seconds)" + "\n" +
            "Amount: " + this.Amount +"\n" +
            "Completed: " + this.Completed
            
            //UPDATING PROGRESS BAR TEXT
            if (this.CurrentProgress != 0)
            {
                //console.log(this)
                this.ActionProgressDiv.style.width = ((this.CurrentProgress/this.MaxProgress) * 100) + "%"
                this.ActionProgressTextDiv.innerText = this.CurrentProgress.toFixed(1) + "/" + this.MaxProgress + " (" + (((this.CurrentProgress/this.MaxProgress) * 100).toFixed(1) + "%") + ")"
                
            }
            else
            {
                this.ActionProgressDiv.style.width = "0%"
                this.ActionProgressTextDiv.innerText = "0.0/" + this.MaxProgress.toFixed(1);
            }

            // FUNCTION FOR WHEN ACTION COMPLETES ONCE
            if(this.CurrentProgress >= this.MaxProgress)
            {
                if ( this.Amount != -1)
                {
                    this.Amount -= 1;
                }
                if(this.Log != "")
                {
                    //console.log(this.Log);
                    //console.log("test")
                    gameData.CreateLog(this.Log); 
                }
                this.DoCompletion = true
                this.CurrentProgress = 0;
                this.Completed += 1;

            }
            //WHEN ACTION HAS NO CHARGES LEFT
            if (this.Amount == 0) 
            {
                this.Active = true;
                for(let x = 0; x < this.ActiveWorkers.length; x++)
                {
                        MortalDiv.appendChild(this.ActiveWorkers[x].MainDiv)
                }
            }


            this.CurrentProgress += this.ProgressRate / fps
        }
        else
        {
            this.MainDiv.style.display = "none";
        }
       
    }
    Completion()
    {
        let MaterialGain = 0;
        for(let x = 0; x < this.ActiveWorkers.length; x++)
        {
            MaterialGain += this.logEffectiveness(this.ActiveWorkers[x][this.AssociatedStat])
        }
        
        for(let x = 0; x < this.ActionGainedNames.length; x++)
        {
            ActiveActions[this.ActionGainedNames[x]].Amount += this.ActionGainedValues[x]
        }
        for(let x = 0; x < this.MaterialGainedNames.length; x++)
        {    
            //console.log("ss")
            //console.log(Materials[this.MaterialGainedNames[x]])      
            Materials[this.MaterialGainedNames[x]].Amount += MaterialGain * this.MaterialGainedValues[x]    
            gameData.CreateLog("You have Gained " + MaterialGain.toFixed(2) + " " + this.MaterialGainedNames[x])         
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
    BuildingInformationDiv = document.createElement('div')
    BuildingProgressDiv = document.createElement('div');
    BuildingProgressTextDiv = document.createElement('div')

    BuildingToolTipDiv = document.createElement("div");

    Info
    ActiveWorkers = []
    Name = [];
    Description;
    MaxProgress
    AssociatedStat;
    Log;

    ActionRequirementsNames;
    ActionRequirementsValues

    MaterialRequirementsNames;
    MaterialRequirementsValues;

    BuildingRequirementsNames
    BuildingRequirementsValues;

    ActionGainedNames;
    ActionGainedValues;

    MaterialGainedNames
    MaterialGainedValues

    ActionCostNames;
    ActionCostValues;

    MaterialCostNames;
    MaterialCostValues;
    MaterialCostProgress = [];

    TimeTillComplete;
    StaminaDrain = 0;
    Level = "0";
    Active = true;
    CurrentProgress = 0;
    ProgressRate = 0.1;

    constructor(Num)
    {
        
        this.Info = BuildingDatabase[Num]
        this.Name.push(this.Info.Level["0"].Name);
        this.Description = this.Info.Level["0"].Description;
        this.MaxProgress = this.Info.Level["0"].MaxProgress;
        this.AssociatedStat = this.Info.Stat;
        this.Log = this.Info.Level["0"].Log

        this.ActionRequirementsNames = Object.keys(this.Info.Level["0"].Requirements.Actions)
        this.ActionRequirementsValuess = Object.values(this.Info.Level["0"].Requirements.Actions)

        this.MaterialRequirementsNames = Object.keys(this.Info.Level["0"].Requirements.Materials)
        this.MaterialRequirementsValuess = Object.values(this.Info.Level["0"].Requirements.Materials)

        this.BuildingRequirementsNames = Object.keys(this.Info.Level["0"].Requirements.Buildings)
        this.BuildingRequirementsValuess = Object.values(this.Info.Level["0"].Requirements.Buildings)

        this.ActionGainedNames = Object.keys(this.Info.Level["0"].Completion.Actions)
        this.ActionGainedValues = Object.values(this.Info.Level["0"].Completion.Actions)

        this.MaterialGainedNames = Object.keys(this.Info.Level["0"].Completion.Materials)
        this.MaterialGainedValues = Object.values(this.Info.Level["0"].Completion.Materials)

        this.ActionCostNames = Object.keys(this.Info.Level["0"].Cost.Actions)
        this.ActionCostValues = Object.values(this.Info.Level["0"].Cost.Actions)

        this.MaterialCostNames = Object.keys(this.Info.Level["0"].Cost.Materials)
        this.MaterialCostValues = Object.values(this.Info.Level["0"].Cost.Materials)

        for(let x = 0; x < this.MaterialCostNames.length; x++)
        {
            this.MaterialCostProgress[x] = 0;
        }

        this.CreateHtml()

        this.BuildingMortalDiv.addEventListener("dragover", ()=>{
            this.BuildingMortalDiv.appendChild(currentlydragging);
            
        })

        ActiveBuildings[this.Name] = this
    }
    CreateHtml()
    {
        this.MainDiv.classList.add("BuildingMainDiv");
        this.MainDiv.classList.add("Border")
        this.BuildingMortalDiv.classList.add("BuildingMortalDiv");
        this.BuildingMortalDiv.classList.add("Border")
        this.BuildingNameDiv.classList.add("BuildingNameDiv");
        this.BuildingNameDiv.classList.add("Border")
        this.BuildingInformationDiv.classList.add("BuildingInformationDiv")
        this.BuildingInformationDiv.classList.add("Border")
        this.BuildingProgressDiv.classList.add("BuildingProgressDiv");
        this.BuildingProgressDiv.classList.add("Border")
        this.BuildingProgressTextDiv.classList.add("BuildingProgressTextDiv");
        this.BuildingProgressTextDiv.classList.add("Border")

        this.BuildingNameDiv.innerText = this.Name
        this.BuildingProgressTextDiv.innerText = "0/100"
        

        this.MainDiv.appendChild(this.BuildingNameDiv);
        this.MainDiv.appendChild(this.BuildingInformationDiv);
        this.MainDiv.appendChild(this.BuildingMortalDiv);
        this.MainDiv.appendChild(this.BuildingProgressDiv);
        this.MainDiv.appendChild(this.BuildingProgressTextDiv);
        

        BuildDiv.appendChild(this.MainDiv);
    }
    MainLoop()
    {
        if (this.Active == true)
        {
                // RESETING VALUES
                this.ProgressRate = 0
                this.ActiveWorkers = []
   
                //SETTING PROGRESS RATE BASED OFF CURRENTLY ASSIGNED MORTRALS
                // X = Current mortal we are looping through // Loop = amount of Mortals currently assigned
                for(let x = 0; x < this.BuildingMortalDiv.children.length; x++)
                {
                   this.ActiveWorkers[x] = Mortals[this.BuildingMortalDiv.children[x].id]
                   this.ProgressRate += 1 + (this.logEffectiveness(this.ActiveWorkers[x][this.AssociatedStat]) * 0.2)
                   this.ActiveWorkers[x].CurrentStamina -= this.StaminaDrain;
                }
                //CALUCLATING HOW LONG UNTIL ACTION IS COMPLETED
                this.TimeTillComplete = this.MaxProgress / this.ProgressRate - (this.MaxProgress / this.ProgressRate) * (this.CurrentProgress / this.MaxProgress)
                if (isNaN(this.TimeTillComplete))
                {
                    this.TimeTillComplete = 0;
                }

                //UPDATING PROGRESS BAR TEXT
                if (this.CurrentProgress != 0)
                {
                    //console.log(this)
                    this.BuildingProgressDiv.style.width = ((this.CurrentProgress/this.MaxProgress) * 70) + "%"
                    this.BuildingProgressTextDiv.innerText = this.CurrentProgress.toFixed(1) + "/" + this.MaxProgress + " (" + (((this.CurrentProgress/this.MaxProgress) * 100).toFixed(1) + "%") + ")"
                    
                }
                else
                {
                    this.BuildingProgressDiv.style.width = "0%"
                    this.BuildingProgressTextDiv.innerText = "0.0/" + this.MaxProgress.toFixed(1);
                }
                this.BuildingNameDiv.innerText = this.Name[this.Name.length - 1]
                this.BuildingInformationDiv.innerText = 
                "Level: " + this.Level + "\n" + 
                "Description: " + this.Description  + "\n"
                for(let x = 0; x < this.MaterialCostNames.length; x++)
                {
                    this.BuildingInformationDiv.innerText += 
                    "Cost: "+ this.MaterialCostProgress[x].toFixed(1) + "/" + this.MaterialCostValues[x] + " " + this.MaterialCostNames[x] +  "\n"
                }
                for(let MaterialIndex = 0; MaterialIndex < this.MaterialCostNames.length; MaterialIndex++)
                {
                    //console.log(Materials[this.MaterialCostNames[MaterialIndex]].Amount)
                    //console.log(this.MaterialCostProgress[MaterialIndex])
                    //console.log(this.MaterialCostValues[MaterialIndex])
                    if(Materials[this.MaterialCostNames[MaterialIndex]].Amount >= 0 && this.MaterialCostProgress[MaterialIndex] < this.MaterialCostValues[MaterialIndex] && this.ProgressRate != 0)
                    {
                        //console.log((this.MaterialCostValues[MaterialIndex] / (this.MaxProgress/this.ProgressRate)));
                        this.CurrentProgress += this.ProgressRate / fps
                        Materials[this.MaterialCostNames[MaterialIndex]].Amount -= (this.MaterialCostValues[MaterialIndex] / (this.MaxProgress/this.ProgressRate)) / fps
                        this.MaterialCostProgress[MaterialIndex] += (this.MaterialCostValues[MaterialIndex] / (this.MaxProgress/this.ProgressRate)) / fps
                    }
                }
               

                

                if(this.CurrentProgress >= this.MaxProgress)
                {
                    this.LevelUp()
                    this.CurrentProgress = 0;
                }
        }
    }
    LevelUp()
    {
        this.Level = Number(this.Level) + 1
        //console.log(this.Info.Level[Num]);
        gameData.CreateLog(this.Log);

        this.Name.push(this.Info.Level[this.Level].Name);
        this.Description = this.Info.Level[this.Level].Description;
        this.MaxProgress = this.Info.Level[this.Level].MaxProgress;
        this.Log = this.Info.Level[this.Level].Log

        this.ActionRequirementsNames = Object.keys(this.Info.Level[this.Level].Requirements.Actions)
        this.ActionRequirementsValuess = Object.values(this.Info.Level[this.Level].Requirements.Actions)

        this.MaterialRequirementsNames = Object.keys(this.Info.Level[this.Level].Requirements.Materials)
        this.MaterialRequirementsValuess = Object.values(this.Info.Level[this.Level].Requirements.Materials)

        this.BuildingRequirementsNames = Object.keys(this.Info.Level[this.Level].Requirements.Buildings)
        this.BuildingRequirementsValuess = Object.values(this.Info.Level[this.Level].Requirements.Buildings)

        this.ActionGainedNames = Object.keys(this.Info.Level[this.Level].Completion.Actions)
        this.ActionGainedValues = Object.values(this.Info.Level[this.Level].Completion.Actions)

        this.MaterialGainedNames = Object.keys(this.Info.Level[this.Level].Completion.Materials)
        this.MaterialGainedValues = Object.values(this.Info.Level[this.Level].Completion.Materials)

        this.ActionCostNames = Object.keys(this.Info.Level[this.Level].Cost.Actions)
        this.ActionCostValues = Object.values(this.Info.Level[this.Level].Cost.Actions)

        this.MaterialCostNames = Object.keys(this.Info.Level[this.Level].Cost.Materials)
        this.MaterialCostValues = Object.values(this.Info.Level[this.Level].Cost.Materials)

        for(let x = 0; x < this.MaterialCostNames.length; x++)
        {
            this.MaterialCostProgress[x] = 0;
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
        BuildTab.classList.add("Locked")
        OptionTab.setAttribute('id',"OptionTab" );
        OptionTab.classList.add("Button")
        OptionTab.classList.add("Border")
        ExploreTab.setAttribute("id","ExploreTab")
        ExploreTab.classList.add("Button")
        ExploreTab.classList.add("Border")
        ExploreTab.classList.add("Locked")
        ExploreDiv.setAttribute("id", "ExploreDiv")
        ExploreDiv.classList.add("Border")
        PartyDiv.setAttribute("id","PartyDiv")
        PartyDiv.classList.add("Border")
        LocationDiv.setAttribute("id","LocationDiv")
        LocationDiv.classList.add("Border")

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
        ExploreDiv.style.display = "none"


        new Mortal;
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
        ///BuildTab.innerText = "Build"
        OptionTab.innerText = "Options"

        document.addEventListener("click", (Event) => {this.Onclick(Event)})
        document.body.appendChild(Main)
        
        Main.appendChild(Tabs)
        Main.appendChild(ActionDiv)
        Main.appendChild(BuildDiv);
        Main.appendChild(ExploreDiv)
        Main.appendChild(OptionDiv);
        Main.appendChild(MortalDiv)
        Main.appendChild(MaterialDiv);
        Main.appendChild(LogDiv)

        
        Tabs.appendChild(ActionTab);
        Tabs.appendChild(BuildTab);
        Tabs.appendChild(ExploreTab)
        Tabs.appendChild(OptionTab)

        ExploreDiv.appendChild(PartyDiv);
        ExploreDiv.appendChild(LocationDiv);
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
            let ActiveActionsNames = Object.keys(ActiveActions);
            let ActiveActionsValues = Object.values(ActiveActions);
            let MaterialNames = Object.keys(Materials);
            let BuildingNames = Object.keys(ActiveBuildings);

            //LOOPING ACTION DATABASE CHECKING TO SEE IF ANY CAN BE CREATED
            //X = CURRENT ACTION ITS CHECKING TO SEE IF IT CAN CREATE
            for(let ActionDatabaseIndex = 0; ActionDatabaseIndex < ActionDatabase.length; ActionDatabaseIndex++)
            {
                if(ActiveActions[ActionDatabase[ActionDatabaseIndex].Name] == undefined)
                {
                    

                    
                    let Info = ActionDatabase[ActionDatabaseIndex]
                    let CreateAction = []

                    let ActionRequirementsNames = Object.keys(Info.Requirements.Actions)
                    let ActionRequirementsValues = Object.values(Info.Requirements.Actions)

                    if(ActionRequirementsNames.length == 0)
                    {
                        CreateAction.push(true);
                    }

                    //LOOPING THROUGH ACTION REQUIREMENTS AND CHECKING ACTIVE ACTIONS IF THE REQUIREMENT VALUES MATCH
                    for(let RequirementIndex = 0; RequirementIndex < ActionRequirementsNames.length; RequirementIndex++)
                    {
                        if(CreateAction.includes(false) == true)
                        {
                            break;
                        }
                        if(ActiveActions[ActionRequirementsNames[RequirementIndex]] != undefined && ActiveActions[ActionRequirementsNames[RequirementIndex]].Completed == ActionRequirementsValues[RequirementIndex])
                        {
                            CreateAction.push(true);
                        }
                        else
                        {
                            CreateAction.push(false); 
                        }
                    }

                    if(CreateAction.includes(false) == true)
                    {
                        
                        continue
                    }

                    let MaterialRequirementsNames = Object.keys(Info.Requirements.Materials)
                    let MaterialRequirementsValues = Object.values(Info.Requirements.Materials)

                    if(MaterialRequirementsNames.length == 0)
                    {
                        CreateAction.push(true);
                    }

                    //LOOPING THROUGH MATERIAL REQUIREMENTS AND CHECKING MATERIALS IF THE REQUIREMENT VALUES MATCH
                    for(let RequirementIndex = 0; RequirementIndex < MaterialRequirementsNames.length; RequirementIndex++)
                    {
                        if(CreateAction.includes(false) == true)
                        {
                            break;
                        }
                        if(Materials[MaterialRequirementsNames[RequirementIndex]].Amount == MaterialRequirementsValues[RequirementIndex])
                        {
                            CreateAction.push(true);
                        }
                        else
                        {
                            CreateAction.push(false); 
                        }
                    }

                    if(CreateAction.includes(false) == true)
                    {
                        
                        continue
                    }

                    let BuildingRequirementsNames = Object.keys(Info.Requirements.Buildings)
                    let BuildingRequirementsValues = Object.values(Info.Requirements.Buildings)

                    if(BuildingRequirementsNames.length == 0)
                    {
                        CreateAction.push(true);
                    }

                    //LOOPING THROUGH BUILDING REQUIREMENTS AND CHECKING BUILDINGS IF THE REQUIREMENT VALUES MATCH
                    for(let RequirementIndex = 0; RequirementIndex < BuildingRequirementsNames.length; RequirementIndex++)
                    {
                        if(CreateAction.includes(false) == true)
                        {
                            break;
                        }
                        if(ActiveBuildings[BuildinglRequirementsNames[RequirementIndex]].Level == BuildingRequirementsValues[RequirementIndex])
                        {
                            CreateAction.push(true);
                        }
                        else
                        {
                            CreateAction.push(false); 
                        }    

                    }

                    if(CreateAction.includes(false) != true)
                    {
                        
                            new Action(ActionDatabaseIndex)
                    }
                }
            }
            //LOOPING BUIDLING DATABASE CHECKING TO SEE IF ANY CAN BE CREATED
            //X = CURRENT BUILDING ITS CHECKING TO SEE IF IT CAN CREATE
            for(let BuildingDatabaseIndex = 0; BuildingDatabaseIndex < BuildingDatabase.length; BuildingDatabaseIndex++)
            {
                //console.log(BuildingDatabase[BuildingDatabaseIndex].Name)
                if (ActiveBuildings[BuildingDatabase[BuildingDatabaseIndex].Level["0"].Name] == undefined)
                {
                  
                    let Info = BuildingDatabase[BuildingDatabaseIndex]
                    let CreateBuilding = []
                // console.log(Info)
                    let ActionRequirementsNames = Object.keys(Info.Level["0"].Requirements.Actions)
                    let ActionRequirementsValues = Object.values(Info.Level["0"].Requirements.Actions)

                    if(ActionRequirementsNames.length == 0)
                    {
                        CreateBuilding.push(true);
                    
                    }
                // console.log(ActionRequirementsNames)
                    //LOOPING THROUGH ACTION REQUIREMENTS AND CHECKING ACTIVE ACTIONS IF THE REQUIREMENT VALUES MATCH
                    for(let RequirementIndex = 0; RequirementIndex < ActionRequirementsNames.length; RequirementIndex++)
                    {
                        
                        if(CreateBuilding.includes(false) == true)
                        {
                            break;
                        }
                        if(ActiveActions[ActionRequirementsNames[RequirementIndex]] != undefined && ActiveActions[ActionRequirementsNames[RequirementIndex]].Completed == ActionRequirementsValues[RequirementIndex])
                        {
                            CreateBuilding.push(true);
                        }
                        else
                        {
                            CreateBuilding.push(false); 
                        }
                    }

                    if(CreateBuilding.includes(false) == true)
                    {
                        
                        continue
                    }

                    let MaterialRequirementsNames = Object.keys(Info.Level["0"].Requirements.Materials)
                    let MaterialRequirementsValues = Object.values(Info.Level["0"].Requirements.Materials)

                    if(MaterialRequirementsNames.length == 0)
                    {
                        
                        CreateBuilding.push(true);
                    }

                    //LOOPING THROUGH MATERIAL REQUIREMENTS AND CHECKING MATERIALS IF THE REQUIREMENT VALUES MATCH
                    
                    for(let RequirementIndex = 0; RequirementIndex < MaterialRequirementsNames.length; RequirementIndex++)
                    {
                        if(CreateBuilding.includes(false) == true)
                        {
                            break;
                        }
                        //console.log(Materials[MaterialRequirementsNames[RequirementIndex]].Amount)
                        //console.log(MaterialRequirementsValues[RequirementIndex])

                        if(Materials[MaterialRequirementsNames[RequirementIndex]].Amount >= MaterialRequirementsValues[RequirementIndex])
                        {
                            
                            CreateBuilding.push(true);
                        }
                        else
                        {
                            CreateBuilding.push(false); 
                        }
                    }

                    if(CreateBuilding.includes(false) == true)
                    {
                        
                        continue
                    }

                    let BuildingRequirementsNames = Object.keys(Info.Level["0"].Requirements.Buildings)
                    let BuildingRequirementsValues = Object.values(Info.Level["0"].Requirements.Buildings)

                    if(BuildingRequirementsNames.length == 0)
                    {
                        CreateBuilding.push(true);
                    }

                    //LOOPING THROUGH BUILDING REQUIREMENTS AND CHECKING BUILDINGS IF THE REQUIREMENT VALUES MATCH
                    for(let RequirementIndex = 0; RequirementIndex < BuildingRequirementsNames.length; RequirementIndex++)
                    {
                        if(CreateBuilding.includes(false) == true)
                        {
                            break;
                        }
                        if(ActiveBuildings[BuildinglRequirementsNames[RequirementIndex]].Level == BuildingRequirementsValues[RequirementIndex])
                        {
                            CreateBuilding.push(true);
                        }
                        else
                        {
                            CreateBuilding.push(false); 
                        }    

                    }

                    if(CreateBuilding.includes(false) != true)
                    {
                        
                            new Building(BuildingDatabaseIndex)
                    }
                }
            }

              
            //LOOPING THROUGH ACTIVE ACTIONS
            for(let ActionIndex = 0; ActionIndex < ActiveActionsNames.length; ActionIndex++)
            {
                
                ActiveActions[ActiveActionsNames[ActionIndex]].MainLoop();
            }
            //LOOPING THROUGH MATERIALS
            for(let MaterialIndex = 0; MaterialIndex < MaterialNames.length; MaterialIndex++)
            {
                Materials[MaterialNames[MaterialIndex]].Update()
            }
            for(let BuildingIndex = 0; BuildingIndex < BuildingNames.length; BuildingIndex++)
            {
                ActiveBuildings[BuildingNames[BuildingIndex]].MainLoop();
            }
            this.StoryDatabase()

        }
       

        requestAnimationFrame(() => this.MainLoop())
    }
    CreateLog(Message)
    { 
        //console.log("test")
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
            ExploreDiv.style.display = "none"
        }
        if(element.id == "BuildTab" && element.classList.contains("Locked") != true)
        {

            ActionDiv.style.display = "none";
            BuildDiv.style.display = "block";
            OptionDiv.style.display = "none"
            ExploreDiv.style.display = "none"
        }
        if(element.id == "ExploreTab" && element.classList.contains("Locked") != true)
        {

            ActionDiv.style.display = "none";
            BuildDiv.style.display = "none";
            OptionDiv.style.display = "none"
            ExploreDiv.style.display = "block"
        }
        if(element.id == "OptionTab")
        {
            ActionDiv.style.display = "none";
            BuildDiv.style.display = "none";
            OptionDiv.style.display = "block"
            ExploreDiv.style.display = "none"
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
    StoryDatabase()
    {
        //console.log(ActiveBuildings);
        if (ActiveBuildings["Cold Ground"] != undefined && ActiveBuildings["Cold Ground"].Level == 0)
        {
            BuildTab.classList.remove("Locked")
            BuildTab.innerText = "Buildings";
        }
        if(ActiveBuildings["Cold Ground"] != undefined && ActiveBuildings["Cold Ground"].Level == 1)
        {
            ExploreTab.innerText = "Explore"
            ExploreTab.classList.remove("Locked");
            //console.log("test")
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


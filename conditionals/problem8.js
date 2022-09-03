function worldCupFinal(NzScore, NzSuperOver, 
NzFours, EngScore, EngSuperOver, EngFours) 
{

  var NzScore=241; 
  var NzSuperOver=15; 
  var NzFours=21;
  var EngScore=241; 
  var EngSuperOver=15; 
  var EngFours=26;

  /*if(NzScore>EngScore)
    {
        console.log("New Zealand");
    }
    else if (NzScore < EngScore)
    {
        console.log("England");
    }
    else if (NzSuperOver > EngSuperOver)
    {
        console.log("New Zealand");
    }
    else if (NzSuperOver < EngSuperOver)
    {
        console.log("England");
    }
    else if (NzFours > EngFours)
    {
        console.log("New Zealand");
    }
    else(NzFours < EngFours)
    {
        console.log("England");
    }*/

  NzScore > EngScore ? New Zealand :
NzScore < EngScore ? England :
NzSuperOver > EngSuperOver ? New Zealand :
NzSuperOver < EngSuperOver ? England :
NzFours > EngFours ? New Zealand :
NzFours < EngFours ? England ;
    
    
}

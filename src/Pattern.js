import React from 'react';
export default class Pattern extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Number:''
        }
    }
    Numb=(event)=>{
        this.setState({
            Number:Number(event.target.value)
        })
    }
    Patternprint=(event)=>{
        var h=1;//for Increment of stars
         var j=2*this.state.Number-2;
        if(isNaN(this.state.Number))
        {
           document.writeln("please enter valid no");
         }
        else
        {
            for(var x=1;x<=this.state.Number;x++)
             {
                 for(var inneriteration=1;inneriteration<=h;inneriteration++)
                  {
                     document.write("*");
                    }
                  for(var space=1;space<=j;space++)
                     {
                        document.write("&nbsp; ");
                      }
                   for(var inneritera=1;inneritera<=h;inneritera++)
                        {
                          document.write("*");
                        }
                      h++;
                       j=j-2;
                      document.write("<br>");
               }
        }
    }
    render(){
        return(
                <div>
                    <h1>PatternPrinting</h1>
                    <div><label>Enter a number:{" "}</label><input value={this.state.Number} onChange={this.Numb} placeholder="Enter any number"/></div>
                          &nbsp;
                          &nbsp;
                          <div><button  onClick={this.Patternprint}>Print</button></div>
                          &nbsp;
                </div>
        )
    }
}
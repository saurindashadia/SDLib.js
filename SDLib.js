/**
	SDLib.js a JavaScript Library.
    Copyright (C) 2013  Saurin Dashadia

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see [http://www.gnu.org/licenses/].
 */


	var SDLib={
		Canvas : function(element,dimension="2d"){
			var _context = element.getContext(dimension);
			
			return {
				//canvas	: 	element,
				context	: _context,
				
				// line object
				line : function(args){
					_color	= (args.color) ? args.color : '#000000';
					_start	= (args.start) ? args.start : [0,0];
					_end	= (args.end) ? args.end : [0,0];
					_width	= (args.width) ? args.width : 1; 
					
					return{
						start	:	_start,
						end		:	_end,
						color	:	_color,
						width	:	_width,
						
						setPos : function(args){
							this.start = (args.start) ? args.start : this.start;
							this.end = (args.end) ? args.end : this.end;
						},
						
						setColor : function(clr){
							this.color = (clr) ? clr : this.color;
						},
						
						draw : function(){
							_context.strokeStyle = this.color;
							_context.beginPath();
							_context.moveTo(this.start[0],this.start[1]);
							_context.lineTo(this.end[0],this.end[1]);
							_context.stroke();
							
							//return this;
						}
					}
				}
			}
		}
	}
	
	window.onload=function(){
		var element=document.getElementById("SDCanvas");
		var canvas1= new SDLib.Canvas(element,'2d');
		console.log(canvas1);
		var ss=canvas1.line({start:[0,0],end:[200,200],color:'#FF0000'})//.draw();
		ss.draw();
		console.log(ss);
		ss.setPos({start:[100,100],end:[200,200]});
		ss.setColor('blue');
		ss.draw();
		console.log(ss)
	};
    
    /*window.onload=function(){
	(function(D){
		// create SD object
		var SD={
			canvas		: 	null,
			canHeight	:	null,
			canWidth	:	null,
			context		:	null,
			
			// line object
			line:function(x1,y1,x2,y2,c=null){
				c=(c)?c:'#000';
				return{
					startX	:	x1,
					startY	:	y1,
					endX	:	x2,
					endY	:	y2,
					color	:	c,
					
					draw:function(that){console.log(Object.parentNode);
						that.context.strokeStyle=this.color;
						//that.context.beginPath();
						that.context.moveTo(this.startX,this.startY);
						that.context.lineTo(this.endX,this.endY);
						that.context.stroke();
					}
				}
			},
			
			images		:	[{src:"assets/images/dell.png"}],
			
			// Initiate Environment
			init:function(){
				this.canvas		=	D.getElementById("SDCanvas");
				this.canHeight	=	D.getElementById("SDCanvas").height;
				this.canWidth	=	D.getElementById("SDCanvas").width;
				
				this.context		=	this.canvas.getContext("2d");
				
				this.hGrid();
				//render images
				//this.render();
			},
			
			// sets background
			setBackground:function(){
				
			},
			
			hGrid:function(){
				var line=new this.line(0,0,200,200);
				//line.color="gold";
				console.log(line);
				line.draw(this);
				
			},
			
			// sets image to appropriate position
			render:function(){
				that=this;
				tmpimg =new Image();
				tmpimg.src="assets/images/dell.png";
				tmpimg.height=100;
				tmpimg.width=100;
				console.log(tmpimg);

				
				that.context.drawImage(tmpimg,0,0,256,256);
				tmpimg.onload = function(){
					
				};
				
			}
		};
		
		SD.init();
	})(document);
}*/

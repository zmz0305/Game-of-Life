function GameOfLife(){
	this.width=100;
	this.height=100;
	this.get2DArray=get2DArray;
	this.calculate=calculate;
	this.play=play;
	this.draw=draw;
	this.drawText=drawText;
	this.countNeighbors=countNeighbors;
	this.swapTwoArrays=swapTwoArrays;
	this.map=get2DArray(this.width,this.height);
	// this.getCoordinates=getCoordinates;
	this.previousMap=get2DArray(this.width,this.height);
	for(var i=1;i<this.width-1;i++)
		for(var j=1;j<this.width-1;j++)
			this.map[i][j]=Math.random()<0.5;
}
function draw(x, y,color){
	var canvas=document.getElementById("canvas");
	//if(!canvas.getContext){return;}
	var ctx=canvas.getContext("2d");
	if(color==="White")
	{
		ctx.fillStyle="rgb(255,255,255)";
		ctx.fillRect(x,y,10,10);	
	}
	if(color==="notWhite")
	{
		ctx.fillStyle="rgb(200,0,0)";
		ctx.fillRect(x,y,10,10);
	}
	
}
function drawText(textString,x,y){
	var canvas=document.getElementById("canvas");
	var ctx=canvas.getContext("2d");
	ctx.fillStyle="rgb(200,0,0)";
	ctx.fillText(textString,x,y,100);
 }
function get2DArray(D1,D2)
{
	var arr=new Array(D1);
	for(var i=0;i<D1;i++)
	{
		arr[i]=new Array(D2);
	}
	return arr;
}
// var width=100;
// var height=100;
// var map=get2DArray(width,height);
// var previousMap=get2DArray(width,height);

function calculate()
{
	for(i=1; i<this.map.length-1; i++)
		for(j=1; j<this.map[0].length-1; j++)
		{
			var neighbors = this.countNeighbors(this.previousMap, i, j);
			//alert(neighbors);
			if(this.previousMap[i][j]==true)
			{
				this.map[i][j]=((neighbors==2)||(neighbors==3));
			}
			if(this.previousMap[i][j]==false)
			{
				this.map[i][j]=(neighbors==3);
			}
		}
}

function swapTwoArrays()
{
	var temp=get2DArray(this.width,this.height);
	temp=this.map;
	this.map=this.previousMap;
	this.previousMap=temp;
}

function countNeighbors(arr, x, y)
{
	var count=0;
	for(var i=-1; i<=1; i++)
		for(var j=-1; j<=1; j++)
		{
			if(arr[x+i][y+j]===true)
				count++;
		}
	if(arr[x][y]===true)
		count--;
	return count;
}

function play()
{
	var numRow=this.map.length;
	var numColumn=this.map[0].length;
	//alert(this.map[1][2].toString());
	for(var i=0; i<numRow;i++)
		for(var j=0; j<numRow;j++)
		{
			if(this.map[i][j]==true)
				this.draw(i*10,j*10,"notWhite");
			if(this.map[i][j]==false)
				this.draw(i*10,j*10,"White");
		}

}


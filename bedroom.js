Status = "";
img= "";


function preload()
{
  img = loadImage("download.jpg");
}

function setup()
{
    canvas = Createcanvas(650,450);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelLoaded()
{
    console.log("model is loaded");
    Status = true;
}

function gotResults(error , results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);

}
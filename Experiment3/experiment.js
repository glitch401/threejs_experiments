var randRays;
var incidentRays;
var reflectedRays;
var virtualRays;
var virtualRayMid;
var drawC=0;
var norandom=110;
var MAX_POINTSIncident=188,MAX_POINTSrandom=85,MAX_POINTSreflected=180,MAX_POINTSvirtual=280;
var mirror;
var mirrorAngle;
var virtual_dx=0;
function initializeVar()
{
    drawC=1;
    //virtual_dx=0;
    virtualRays=new Array(3);
    incidentRays=new Array(3);
    reflectedRays=new Array(3);
    randRays=new Array(norandom);
    mirrorAngle=45;
    /*incidentRays=new Array(10);
    randRaysPos=new Array(10);
    randRaysGeo=new Array(10);
    incidentRays=new Array(3);*/
}
var scene=1;
function learnHandel()
{
    scene=2;
    PIEchangeInputCheckbox("Learn",true);
    PIEchangeInputCheckbox("Try It Yourself",false);
    mirrorAngle=10;
    counter=0;
    c=0.1;
    putLearningRays();
}
var reflectedLine,reflectedLine2,linenormal,line;
var text,text1;
function putLearningRays()
{

    text=new Array(3);
    text1=new Array(3);
    text[0]="Angle of Incidence"
    text[1]="="
    text[2]="Angle of Reflection"
    var loader=new THREE.FontLoader();
    let font=loader.parse(fontJSON);
    text1[0]=new THREE.Mesh(new THREE.TextGeometry(text[0],{font:font,size:.5,height:.01,material:0}),new THREE.MeshLambertMaterial({color:0X6900FF ,transparent: true}));
    text1[1]=new THREE.Mesh(new THREE.TextGeometry(text[1],{font:font,size:.5,height:.01,material:0}),new THREE.MeshLambertMaterial({color:0X6900FF  ,transparent: true}));
    text1[2]=new THREE.Mesh(new THREE.TextGeometry(text[2],{font:font,size:.5,height:.01,material:0}),new THREE.MeshLambertMaterial({color:0X6900FF  ,transparent: true}));
    text1[0].position.set(-2.5,-9,0);
    text1[1].position.set(0,-10,0);
    text1[2].position.set(-2.5,-11,0);
    PIEaddElement(text1[0]);
    PIEaddElement(text1[1]);
    PIEaddElement(text1[2]);

    var material = new THREE.LineBasicMaterial({
        color: 0xFFBD00
    });

    var materialnormal = new THREE.LineBasicMaterial({
        color: 0xFF0000
    });

    line=new Array(3);
    var geometry=new Array(3);
    for(var i=0;i<3;i++)
        geometry[i]= new THREE.Geometry();

    geometry[0].vertices.push(
        flashlight.position,
        mirror.position
    );
    geometry[1].vertices.push(
        flashlight.position,
        new THREE.Vector3( mirror.position.x, 3, 0 )
    );
    geometry[2].vertices.push(
        flashlight.position,
        new THREE.Vector3( mirror.position.x, -3, 0 )
    );

    for(var i=0;i<3;i++)
    {
        line[i]= new THREE.Line( geometry[i], material );
        PIEaddElement(line[i]);
    }


    // var geometryr= new THREE.Geometry();
    //
    //
    // geometryr.vertices.push(
    //     new THREE.Vector3( mirror.position.x, mirror.position.y, mirror.position.z),
    //     new THREE.Vector3( mirror.position.x, mirror.position.y, mirror.position.z+18)
    // );
    // reflectedLine=new THREE.Line( geometryr,new THREE.LineBasicMaterial({color: 0x0000FF
    // }));
    // mirror.add(reflectedLine);

    linenormal=new Array(3);
    var geometryn=new Array(3);
    for(var i=0;i<3;i++)
        geometryn[i]= new THREE.Geometry();

    geometryn[0].vertices.push(
        new THREE.Vector3( mirror.position.x, mirror.position.y, mirror.position.z-2),
        new THREE.Vector3( mirror.position.x, mirror.position.y, mirror.position.z+2)
    );

    geometryn[1].vertices.push(
        new THREE.Vector3( mirror.position.x, mirror.position.y+3, mirror.position.z-2 ),
        new THREE.Vector3( mirror.position.x, mirror.position.y+3, mirror.position.z+2)
    );
    geometryn[2].vertices.push(
        new THREE.Vector3( mirror.position.x, mirror.position.y-3, mirror.position.z-2 ),
        new THREE.Vector3( mirror.position.x, mirror.position.y-3, mirror.position.z+2)
    );


    linenormal[0]= new THREE.Line( geometryn[0], materialnormal );
    mirror.add(linenormal[0])
    linenormal[1]= new THREE.Line( geometryn[1], materialnormal );
    mirror.add(linenormal[1])
    linenormal[2]= new THREE.Line( geometryn[2], materialnormal );
    mirror.add(linenormal[2])

    reflectedLine=new Array(3);
    var geometryr=new Array(3);
    for(var i=0;i<3;i++)
        geometryr[i]= new THREE.Geometry();

    geometryr[0].vertices.push(
        new THREE.Vector3( mirror.position.x, mirror.position.y, mirror.position.z),
        new THREE.Vector3( mirror.position.x, mirror.position.y, mirror.position.z+18)
    );

    geometryr[1].vertices.push(
        new THREE.Vector3( mirror.position.x, mirror.position.y+3, mirror.position.z ),
        new THREE.Vector3( mirror.position.x, mirror.position.y, mirror.position.z+18)
    );
    geometryr[2].vertices.push(
        new THREE.Vector3( mirror.position.x, mirror.position.y-3, mirror.position.z),
        new THREE.Vector3( mirror.position.x, mirror.position.y, mirror.position.z+18)
    );


    reflectedLine[0]= new THREE.Line( geometryr[0], new THREE.LineBasicMaterial({color: 0x0000FF
    }));
    mirror.add(reflectedLine[0])
    reflectedLine[1]= new THREE.Line( geometryr[1], new THREE.LineBasicMaterial({color: 0x0000FF
    }));
    mirror.add(reflectedLine[1])
    reflectedLine[2]= new THREE.Line( geometryr[2], new THREE.LineBasicMaterial({color: 0x0000FF
    }));
    mirror.add(reflectedLine[2])

    reflectedLine[0].add(flashlightimage)
    flashlightimage.position.z=20;
    flashlightimage.position.x+=0.25;
    flashlightimage.rotation.y=Math.PI*0.5

    reflectedLine2=new Array(3);
    var geometryr2=new Array(3);
    for(var i=0;i<3;i++)
        geometryr2[i]= new THREE.Geometry();

    geometryr2[0].vertices.push(
        new THREE.Vector3( mirror.position.x, mirror.position.y, mirror.position.z),
        new THREE.Vector3( mirror.position.x, mirror.position.y, mirror.position.z-6)
    );

    geometryr2[1].vertices.push(
        new THREE.Vector3( mirror.position.x, mirror.position.y+3, mirror.position.z ),
        new THREE.Vector3( mirror.position.x, mirror.position.y+4.5, mirror.position.z-6)
    );
    geometryr2[2].vertices.push(
        new THREE.Vector3( mirror.position.x, mirror.position.y-3, mirror.position.z),
        new THREE.Vector3( mirror.position.x, mirror.position.y-4.5, mirror.position.z-6)
    );


    reflectedLine2[0]= new THREE.Line( geometryr2[0], new THREE.LineBasicMaterial({color: 0xFFBD00
    }));
    mirror.add(reflectedLine2[0])
    reflectedLine2[1]= new THREE.Line( geometryr2[1], new THREE.LineBasicMaterial({color: 0xFFBD00
    }));
    mirror.add(reflectedLine2[1])
    reflectedLine2[2]= new THREE.Line( geometryr2[2], new THREE.LineBasicMaterial({color: 0xFFBD00
    }));
    mirror.add(reflectedLine2[2])
    
}

function tryyourselsHandel()
{
    scene=1;
    for(var i=0;i<3;i++)
    {
        mirror.remove(reflectedLine[i]);
        mirror.remove(reflectedLine2[i]);
        mirror.remove(linenormal[i]);
        PIEremoveElement(line[i]);
        PIEremoveElement(text1[i]);
    }
    mirrorRotation(45)
    PIEchangeInputCheckbox("Learn",false);
    PIEchangeInputCheckbox("Try It Yourself",true);
}
function loadExperimentElements()
{
    if(window.outerHeight*1.5>window.innerWidth)
        PIEsetAreaOfInterest(-50,50, 42, -42);
    else
    {
        PIEsetAreaOfInterest(-20,20, 20, -20);
        initializeText();
    }
	document.title="Flashlight Reflection at a Mirror";
    PIEsetExperimentTitle("Flashlight Reflection at a Mirror");
    PIEsetDeveloperName("Indranil Biswas");
    PIEaddInputCheckbox("Learn",false,learnHandel);
    PIEaddInputCheckbox("Try It Yourself",true,tryyourselsHandel);
    PIEscene.background=new THREE.Color(0x1BCCC0);
    var groundMaterial = new THREE.MeshLambertMaterial( { color: 0x72DA14} );
    var mesh233 = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2000, 2000 ), groundMaterial );
    mesh233.position.y = - 25;
    mesh233.rotation.x = - Math.PI / 2;
    PIEaddElement( mesh233 );
    PIErenderer.shadowMapEnabled = false;
    var light = new THREE.PointLight( 0xFFFFFF );
    light.position.x=10;
    PIEaddElement(light);

    var light2 = new THREE.PointLight( 0xA9FE86 );//FEFCB3
    light2.position.x=-20;
    PIEaddElement(light2);

    document.getElementById("start").addEventListener("click",startOrbitalControls);

    PIEaddInputSlider("Mirror Angle",45,mirrorRotation,10,80,1)

    initializeScene();
    mirrorRotation(45)
    PIEcamera.position.z=50;
    initializeinfo();
    initialiseHelp();
    PIErender();
}
var counter=0,c;
function updateExperimentElements(t,dt)
{
    if(scene==1)
    {
        drawC+=(dt/20);
        if(drawC<MAX_POINTSIncident)
        {
            for(var i=0;i<3;i++)
            {
                incidentRays[i].geometry.setDrawRange(0, drawC);
                incidentRays[i].geometry.attributes.position.needsUpdate = true;
                PIErender();
            }
            for(var i=0;i<norandom;i++)
            {
                randRays[i].geometry.setDrawRange(0, drawC);
                randRays[i].geometry.attributes.position.needsUpdate = true;
            }
        }
        if(drawC<MAX_POINTSIncident+MAX_POINTSvirtual*3)
        {
            for(var i=0;i<3;i++)
            {
                reflectedRays[i].geometry.setDrawRange(0, drawC-MAX_POINTSIncident);
                reflectedRays[i].geometry.attributes.position.needsUpdate = true;
                PIErender();
                virtualRays[i].geometry.setDrawRange(0, drawC-MAX_POINTSIncident);
                virtualRays[i].geometry.attributes.position.needsUpdate = true;
                PIErender();
            }


        }
        if(drawC<MAX_POINTSIncident+MAX_POINTSvirtual*3+100)
        {
            flashlightimage.visible=true;
        }
        else
        {
            PIEstopAnimation();
            resetExperiment();
            PIEremoveElement(flashlightimage);
        }
    }
    else if(scene==2)
    {
        if(counter>100)
        {
            mirrorAngle+=c;
            var x=(mirrorAngle*Math.PI)/180;
            mirror.rotation.y=x+Math.PI/2;
            for(var i=0;i<3;i++) {
                reflectedLine[i].rotation.y = x;
                reflectedLine2[i].rotation.y = x;
            }
            if(mirrorAngle>90)
                c=-0.1;
            else if(mirrorAngle<0)
                c=0.1;
            PIErender();
        }
        counter+=dt;
    }
}
function initializeScene()
{
    initializeFlashlight();
    initializeSplitScreen();
    initializeRays();
    initializeImage();
    //initializeText();
    PIEcamera.position.z-=5;
    addMirror();
    PIErender();
}
function initializeText()
{
    var information=document.createElement('div');
    information.style.position="absolute";
    information.style.top = window.innerWidth*4.5/10 -5+ "px";
    information.style.right = window.innerHeight/10 + "px";
    information.style.width = '100%';
    information.style.textAlign = 'center';
    information.style.color = '#F7AF0C';
    information.style.fontWeight = 'bold';
    information.style.backgroundColor = 'transparent';
    information.style.zIndex = '1';
    information.style.fontFamily = 'Monospace';
    //var s="bla"
    information.innerHTML = "Drag and move the mouse to move camera to different angles<br/>Scroll to zoom (After clicking on start)";
    document.body.appendChild( information );
    PIErender();
}
var flashlight;
function initializeFlashlight()
{
    flashlight=new THREE.Mesh(new THREE.CylinderGeometry( 0.71, 0.71, 4, 32,1,false ),new THREE.MeshLambertMaterial({color: 0x650518}));
    flashlight.rotation.z=Math.PI/2;
    var light=new THREE.Mesh(new THREE.SphereGeometry( 0.7, 32, 32 ),new THREE.MeshPhongMaterial({color: 0xEAE61D ,emissive:0xFCFEC7 }));
    //PIEaddElement(light);
    flashlight.add(light);
    light.position.y=-1.7;
    PIEaddElement(flashlight);
    flashlight.position.x=-20;
}
var splitscreen;
function initializeSplitScreen()
{
    splitscreen=new THREE.Mesh(new THREE.BoxGeometry(10,10,0.2),new THREE.MeshStandardMaterial({color: 0x4C2401}));
    splitscreen.rotation.y=Math.PI/2;
    splitscreen.position.x=-10;
    var slit=new THREE.Mesh(new THREE.BoxGeometry(0.4,0.4,0.205),new THREE.MeshLambertMaterial({color: 0x000000}));
    splitscreen.add(slit);
    //slit2.position.y=1.5
    var slit2=new THREE.Mesh(new THREE.BoxGeometry(0.4,0.4,0.205),new THREE.MeshLambertMaterial({color: 0x000000}));
    splitscreen.add(slit2);
    slit2.position.y=1.5
    var slit3=new THREE.Mesh(new THREE.BoxGeometry(0.4,0.4,0.205),new THREE.MeshLambertMaterial({color: 0x000000}));
    splitscreen.add(slit3);
    slit3.position.y=-1.5;
    PIEaddElement(splitscreen);
}

function addMirror()
{
    mirror=new THREE.Mesh(new THREE.BoxGeometry(10,10,0.03),new THREE.MeshStandardMaterial({color:0xA5D2D7}));//,emissive:0x8E9695,shininess: 100, metal: true}))
    var black=new THREE.Mesh(new THREE.BoxGeometry(10,10,0.01),new THREE.MeshLambertMaterial({color:0x050928}))
    mirror.add(black)
    black.position.z=0.1;
    mirror.rotation.y=Math.PI/2;
    PIEaddElement(mirror);
}
function mirrorRotation(degree)
{
    //mirror.rotation.z=degree;
    //var a=degree/30+Math.PI/2
    var x=(degree*Math.PI)/180;
    mirror.rotation.y=x+Math.PI/2;
    mirrorAngle=degree;

    var x2=((degree-45)*Math.PI)/180;

    calculate();
    console.log(degree+"d   r"+x+"   vdx"+virtual_dx);
    removeRays();
    PIEremoveElement(flashlightimage);
    initializeRays();
    initializeImage();
    flashlightimage.rotation.y=-(Math.PI/2-x2*2);
    PIErender();
}


function calculate()
{
    if(mirrorAngle>45)
    {
        virtual_dx=-(1/45)*(mirrorAngle-45);
    }
    if(mirrorAngle<45)
    {
        virtual_dx=(1/45)*(mirrorAngle);
    }
    virtual_dx*=0.1;
}

function initializeRays()
{
    initializeVar();
    var mat=new THREE.LineBasicMaterial({color: 0xFFBD00, linewidth: 2});
    var inciRaysPosition=new Array(3);
    var inciRaysGeo=new Array(3);
    for(var i=0;i<3;i++)
    {
        inciRaysPosition[i] = new Float32Array(MAX_POINTSIncident * 3);
        inciRaysGeo[i] = new THREE.BufferGeometry();
        inciRaysGeo[i].addAttribute('position', new THREE.BufferAttribute(inciRaysPosition[i], 3));
        drawC = 1;
        inciRaysGeo[i].setDrawRange(0, drawC);
        incidentRays[i] = new THREE.Line(inciRaysGeo[i], mat);
        PIEaddElement(incidentRays[i]);
    }
    /*for(var i=0;i<10;i++)
    {
        var mat=new THREE.LineBasicMaterial({color: 0xFCFEC7, linewidth: 2});
        randRaysPos[i]=new Float32Array(MAX_POINTS*3);
        randRaysGeo[i]=new THREE.BufferGeometry();
        randRaysGeo[i].addAttribute( 'position', new THREE.BufferAttribute( randRaysPos[i], 3 ) );
        drawC=1;
        randRaysGeo[i].setDrawRange( 0, drawC );
        incidentRays[i]=new THREE.Line(randRaysGeo[i],mat);

        PIEaddElement(incidentRays[i]);
    }

    updateRandincident();*/

    PIErender();

    var randRaysPosition=new Array(norandom);
    var randRaysGeo=new Array(norandom);
    for(var i=0;i<norandom;i++)
    {
        randRaysPosition[i] = new Float32Array(MAX_POINTSrandom * 3);
        randRaysGeo[i] = new THREE.BufferGeometry();
        randRaysGeo[i].addAttribute('position', new THREE.BufferAttribute(randRaysPosition[i], 3));
        drawC = 1;
        randRaysGeo[i].setDrawRange(0, drawC);
        randRays[i] = new THREE.Line(randRaysGeo[i], mat);
        PIEaddElement(randRays[i]);
    }
    PIErender();


    var reflectedRaysPosition=new Array(3);
    var reflectedRaysGeo=new Array(3);
    for(var i=0;i<3;i++)
    {
        reflectedRaysPosition[i] = new Float32Array(MAX_POINTSreflected * 3);
        reflectedRaysGeo[i] = new THREE.BufferGeometry();
        reflectedRaysGeo[i].addAttribute('position', new THREE.BufferAttribute(reflectedRaysPosition[i], 3));
        drawC = 1;
        reflectedRaysGeo[i].setDrawRange(0, drawC);
        reflectedRays[i] = new THREE.Line(reflectedRaysGeo[i], mat);
        PIEaddElement(reflectedRays[i]);
    }
    PIErender();

    var virtualRaysPosition=new Array(3);
    var virtualRaysGeo=new Array(3);
    for(var i=0;i<3;i++)
    {
        if(i==0)
            virtualRaysPosition[i] = new Float32Array(MAX_POINTSvirtual * 3);
        virtualRaysPosition[i] = new Float32Array(MAX_POINTSvirtual * 3);
        virtualRaysGeo[i] = new THREE.BufferGeometry();
        virtualRaysGeo[i].addAttribute('position', new THREE.BufferAttribute(virtualRaysPosition[i], 3));
        drawC = 1;
        virtualRaysGeo[i].setDrawRange(0, drawC);
        virtualRays[i] = new THREE.Line(virtualRaysGeo[i], mat);
        PIEaddElement(virtualRays[i]);
    }
    PIErender();

    var lx=flashlight.position.x+1.5,ly=flashlight.position.y



    //virtual_dx=0.1;
    updateIncidentRays1(incidentRays[0],0.1,0,lx,ly,MAX_POINTSIncident);
    updateIncidentRays1(incidentRays[1],0.1,0.019,lx,ly,MAX_POINTSIncident);
    updateIncidentRays1(incidentRays[2],0.1,-0.019,lx,ly,MAX_POINTSIncident);

    updatereflectedRays1(reflectedRays[0],-virtual_dx,0,0.05,prevposx[0]-0.5,prevposy[0],MAX_POINTSreflected);
    updatereflectedRays1(reflectedRays[1],-virtual_dx,0.012,0.05,prevposx[1]-0.5,prevposy[1],MAX_POINTSreflected);
    updatereflectedRays1(reflectedRays[2],-virtual_dx,-0.012,0.05,prevposx[2]-0.5,prevposy[2],MAX_POINTSreflected);

    updatereflectedRays1(virtualRays[0],virtual_dx,0,-0.05,prevposx[0]-0.5,prevposy[0],MAX_POINTSvirtual);
    updatereflectedRays1(virtualRays[1],virtual_dx,-0.012,-0.05,prevposx[1]-0.5,prevposy[1],MAX_POINTSvirtual);
    updatereflectedRays1(virtualRays[2],virtual_dx,0.012,-0.05,prevposx[2]-0.5,prevposy[2],MAX_POINTSvirtual);

    var s=0.055;
    for(var i=0;i<norandom;i++)
    {
        updateIncidentRays1(randRays[i],0.1,s,lx,ly,MAX_POINTSrandom);
        s-=0.001;
    }

    PIErender();
}

/*function updateRandincident()
{
    var pos=new Array(10);
    for(var i=0;i<10;i++)
    {
        pos[i]=new Array(MAX_POINTS*3);
        pos[i]=incidentRays[i].geometry.attributes.position.array;
    }

    var x=[-10,-10,-10,-10,-10,-10,-10,-10,-10,-10];
    var y=[-1,-0.8,-0.6,-0.4,-0.2,0,0.2,0.4,0.6,0.8];
    var y2 = [3,2.5,1.5,1,0.5,1.5,2,2.5,3,3.5];
    var index=0;
    var z=0;

    for (var i=0,l=MAX_POINTS;i<l;i++)
    {
        for (var j=0;j<10;j++)
        {
            pos[j][index++]=x[j];
            pos[j][index++]=y[j];
            pos[j][index++]=z;

            x[j]+=((1.5)/MAX_POINTS);
            if(j==0 || j==1)
            {
                y[j] -= ((y2[j])/MAX_POINTS);
            }
            else
                y[j] += ((y2[j])/MAX_POINTS);
            index-=9;
        }
        index+=9;
    }
}*/

var prevposx=new Array(3),prevposy=new Array(3);
var prevpos2x,prevpos2z;

function updateIncidentRays1(obj,dx,dy,ix,iy,mp)
{
    var positions=obj.geometry.attributes.position.array;
    var x=ix,y=iy,z=0,index=0;
    for ( var i = 0, l = mp; i < l; i ++ ) {

        positions[ index ++ ] = x;
        positions[ index ++ ] = y;
        positions[ index ++ ] = z;

        x += dx;
        y+=dy;
    }
    if(obj==incidentRays[0])
    {
        prevposx[0] = x;
        prevposy[0] = y;
        console.log(1);
    }
    if(obj==incidentRays[1])
    {
        prevposx[1] = x;
        prevposy[1] = y;
        console.log(2);
    }
    if(obj==incidentRays[2])
    {
        prevposx[2] = x;
        prevposy[2] = y;
        console.log(3);
    }

}


function updatereflectedRays1(obj,dx,dy,dz,ix,iy,mp)
{
    var positions=obj.geometry.attributes.position.array;
    var x=ix,y=iy,z=0,index=0;
    for ( var i = 0, l = mp; i < l; i ++ ) {

        positions[ index ++ ] = x;
        positions[ index ++ ] = y;
        positions[ index ++ ] = z;

        x += dx;
        y+=dy;
        z+=dz;
    }
    if(obj==virtualRays[0])
    {
        prevpos2x = x;
        prevpos2z =z;
        console.log(1);
    }
}
var flashlightimage;
function initializeImage()
{
    flashlightimage=new THREE.Mesh(new THREE.CylinderGeometry( 0.71, 0.71, 4, 32,1,false ),new THREE.MeshLambertMaterial({color: 0x650518,transparent:true,opacity:0.7}));
    flashlightimage.rotation.z=Math.PI/2;
    var light=new THREE.Mesh(new THREE.SphereGeometry( 0.7, 32, 32 ),new THREE.MeshPhongMaterial({color: 0xEAE61D ,emissive:0xFCFEC7,transparent:true,opacity:0.3 }));
    flashlightimage.add(light);
    light.position.y=-1.7;
    flashlightimage.visible=false;
    flashlightimage.position.set(prevpos2x,0,prevpos2z-1);
    flashlightimage.rotation.y=-Math.PI/2;
    PIEaddElement(flashlightimage);
}

function startOrbitalControls()
{
    var controls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);
    controls.maxPolarAngle = Math.PI * 0.55;
    controls.minDistance = 35;
    controls.maxDistance = 75;
    PIErender();
}


function removeRays()
{
    for(var i=0;i<3;i++)
    {
        PIEremoveElement(incidentRays[i]);
        PIEremoveElement(reflectedRays[i]);
        PIEremoveElement(virtualRays[i]);
    }
    for(var i=0;i<norandom;i++)
    {
        PIEremoveElement(randRays[i]);
        flashlightimage.visible=false;
    }
}
function resetExperiment()
{
    removeRays();
}


function initializeinfo()
{
        var helpContent="";
        helpContent = helpContent + "<h2>Flashlight Reflection at a Mirrors</h2>";
        helpContent = helpContent + "<h3>About the experiment</h3>";
        helpContent = helpContent + "<p>This experiment helps visualize the image formed by reflection of flashlight by a mirror.</p>";
        helpContent = helpContent + "<p>This shows how the real image is formed with the change of angle at which the mirror is incident.</p>";
        helpContent = helpContent + "<p><br/><br/><b>Please set the mirror angle before starting the Experiment</b></p>";


    helpContent = helpContent + "<p><br/><br/><b><i>Orbital controls to the camera is added(Drag and move the camera)</i></b></p>";
    helpContent = helpContent + "<p>Happy Experimenting. :)</p>";
        PIEupdateInfo(helpContent);
}

function initialiseHelp()
{
    var helpContent="";
    helpContent = helpContent + "<h2>Flashlight Reflection at a Mirrors(<i>Help</i>)</h2>";
    helpContent = helpContent + "<h3>Help with controls of the experiment</h3>";
    helpContent = helpContent + "<p>On the right top rand side :</p>";
    helpContent = helpContent + "<p>There is a slider</p>";
    helpContent = helpContent + "<p>Slide the slider to control the angle ar which the mirror is incident to the incident rays</p>";
    helpContent = helpContent + "<p><br/><br/><b>Please set the mirror angle everytime  before starting the experiment</b></p>";

    helpContent = helpContent + "<p><br/><br/><b><i>Orbital controls to the camera is added(Drag and move the camera)</i></b></p>";
    helpContent = helpContent + "<p>Happy Experimenting. :)</p>";
    PIEupdateHelp(helpContent);
}

var fontJSON = {
    "glyphs": {
        "ο": {
            "x_min": 0,
            "x_max": 764,
            "ha": 863,
            "o": "m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 "
        },
        "S": {
            "x_min": 0,
            "x_max": 826,
            "ha": 915,
            "o": "m 826 306 q 701 55 826 148 q 423 -29 587 -29 q 138 60 255 -29 q 0 318 13 154 l 208 318 q 288 192 216 238 q 437 152 352 152 q 559 181 506 152 q 623 282 623 217 q 466 411 623 372 q 176 487 197 478 q 18 719 18 557 q 136 958 18 869 q 399 1040 244 1040 q 670 956 561 1040 q 791 713 791 864 l 591 713 q 526 826 583 786 q 393 866 469 866 q 277 838 326 866 q 218 742 218 804 q 374 617 218 655 q 667 542 646 552 q 826 306 826 471 "
        },
        "¦": {
            "x_min": 0,
            "x_max": 143,
            "ha": 240,
            "o": "m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "
        },
        "/": {
            "x_min": 196.109375,
            "x_max": 632.5625,
            "ha": 828,
            "o": "m 632 1040 l 289 -128 l 196 -128 l 538 1040 l 632 1040 "
        },
        "Τ": {
            "x_min": -0.609375,
            "x_max": 808,
            "ha": 878,
            "o": "m 808 831 l 508 831 l 508 0 l 298 0 l 298 831 l 0 831 l 0 1013 l 808 1013 l 808 831 "
        },
        "y": {
            "x_min": 0,
            "x_max": 738.890625,
            "ha": 828,
            "o": "m 738 749 l 444 -107 q 361 -238 413 -199 q 213 -277 308 -277 q 156 -275 176 -277 q 120 -271 131 -271 l 120 -110 q 147 -113 134 -111 q 179 -116 161 -116 q 247 -91 226 -116 q 269 -17 269 -67 q 206 173 269 -4 q 84 515 162 301 q 0 749 41 632 l 218 749 l 376 207 l 529 749 l 738 749 "
        },
        "Π": {
            "x_min": 0,
            "x_max": 809,
            "ha": 922,
            "o": "m 809 0 l 598 0 l 598 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 809 1012 l 809 0 "
        },
        "ΐ": {
            "x_min": -162,
            "x_max": 364,
            "ha": 364,
            "o": "m 364 810 l 235 810 l 235 952 l 364 952 l 364 810 m 301 1064 l 86 810 l -12 810 l 123 1064 l 301 1064 m -33 810 l -162 810 l -162 952 l -33 952 l -33 810 m 200 0 l 0 0 l 0 748 l 200 748 l 200 0 "
        },
        "g": {
            "x_min": 0,
            "x_max": 724,
            "ha": 839,
            "o": "m 724 48 q 637 -223 724 -142 q 357 -304 551 -304 q 140 -253 226 -304 q 23 -72 36 -192 l 243 -72 q 290 -127 255 -110 q 368 -144 324 -144 q 504 -82 470 -144 q 530 71 530 -38 l 530 105 q 441 25 496 51 q 319 0 386 0 q 79 115 166 0 q 0 377 0 219 q 77 647 0 534 q 317 775 166 775 q 534 656 456 775 l 534 748 l 724 748 l 724 48 m 368 167 q 492 237 447 167 q 530 382 530 297 q 490 529 530 466 q 364 603 444 603 q 240 532 284 603 q 201 386 201 471 q 240 239 201 300 q 368 167 286 167 "
        },
        "²": {
            "x_min": 0,
            "x_max": 463,
            "ha": 560,
            "o": "m 463 791 q 365 627 463 706 q 151 483 258 555 l 455 483 l 455 382 l 0 382 q 84 565 0 488 q 244 672 97 576 q 331 784 331 727 q 299 850 331 824 q 228 876 268 876 q 159 848 187 876 q 132 762 132 820 l 10 762 q 78 924 10 866 q 228 976 137 976 q 392 925 322 976 q 463 791 463 874 "
        },
        "–": {
            "x_min": 0,
            "x_max": 704.171875,
            "ha": 801,
            "o": "m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "
        },
        "Κ": {
            "x_min": 0,
            "x_max": 899.671875,
            "ha": 969,
            "o": "m 899 0 l 646 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 596 l 603 1013 l 863 1013 l 460 603 l 899 0 "
        },
        "ƒ": {
            "x_min": -46,
            "x_max": 440,
            "ha": 525,
            "o": "m 440 609 l 316 609 l 149 -277 l -46 -277 l 121 609 l 14 609 l 14 749 l 121 749 q 159 949 121 894 q 344 1019 208 1019 l 440 1015 l 440 855 l 377 855 q 326 841 338 855 q 314 797 314 827 q 314 773 314 786 q 314 749 314 761 l 440 749 l 440 609 "
        },
        "e": {
            "x_min": 0,
            "x_max": 708,
            "ha": 808,
            "o": "m 708 321 l 207 321 q 254 186 207 236 q 362 141 298 141 q 501 227 453 141 l 700 227 q 566 36 662 104 q 362 -26 477 -26 q 112 72 213 -26 q 0 369 0 182 q 95 683 0 573 q 358 793 191 793 q 619 677 531 793 q 708 321 708 561 m 501 453 q 460 571 501 531 q 353 612 420 612 q 247 570 287 612 q 207 453 207 529 l 501 453 "
        },
        "ό": {
            "x_min": 0,
            "x_max": 764,
            "ha": 863,
            "o": "m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 m 593 1039 l 391 823 l 293 823 l 415 1039 l 593 1039 "
        },
        "J": {
            "x_min": 0,
            "x_max": 649,
            "ha": 760,
            "o": "m 649 294 q 573 48 649 125 q 327 -29 497 -29 q 61 82 136 -29 q 0 375 0 173 l 200 375 l 199 309 q 219 194 199 230 q 321 145 249 145 q 418 193 390 145 q 441 307 441 232 l 441 1013 l 649 1013 l 649 294 "
        },
        "»": {
            "x_min": -0.234375,
            "x_max": 526,
            "ha": 624,
            "o": "m 526 286 l 297 87 l 296 250 l 437 373 l 297 495 l 297 660 l 526 461 l 526 286 m 229 286 l 0 87 l 0 250 l 140 373 l 0 495 l 0 660 l 229 461 l 229 286 "
        },
        "©": {
            "x_min": 3,
            "x_max": 1007,
            "ha": 1104,
            "o": "m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 758 410 q 676 255 748 313 q 506 197 605 197 q 298 291 374 197 q 229 499 229 377 q 297 713 229 624 q 494 811 372 811 q 666 760 593 811 q 752 616 739 710 l 621 616 q 587 688 621 658 q 509 719 554 719 q 404 658 441 719 q 368 511 368 598 q 403 362 368 427 q 498 298 438 298 q 624 410 606 298 l 758 410 "
        },
        "ώ": {
            "x_min": 0,
            "x_max": 945,
            "ha": 1051,
            "o": "m 566 528 l 372 528 l 372 323 q 372 298 372 311 q 373 271 372 285 q 360 183 373 211 q 292 142 342 142 q 219 222 243 142 q 203 365 203 279 q 241 565 203 461 q 334 748 273 650 l 130 748 q 36 552 68 650 q 0 337 0 444 q 69 96 0 204 q 276 -29 149 -29 q 390 0 337 -29 q 470 78 444 28 q 551 0 495 30 q 668 -29 608 -29 q 874 96 793 -29 q 945 337 945 205 q 910 547 945 444 q 814 748 876 650 l 610 748 q 703 565 671 650 q 742 365 742 462 q 718 189 742 237 q 651 142 694 142 q 577 190 597 142 q 565 289 565 221 l 565 323 l 566 528 m 718 1039 l 516 823 l 417 823 l 540 1039 l 718 1039 "
        },
        "^": {
            "x_min": 197.21875,
            "x_max": 630.5625,
            "ha": 828,
            "o": "m 630 836 l 536 836 l 413 987 l 294 836 l 197 836 l 331 1090 l 493 1090 l 630 836 "
        },
        "«": {
            "x_min": 0,
            "x_max": 526.546875,
            "ha": 624,
            "o": "m 526 87 l 297 286 l 297 461 l 526 660 l 526 495 l 385 373 l 526 250 l 526 87 m 229 87 l 0 286 l 0 461 l 229 660 l 229 495 l 88 373 l 229 250 l 229 87 "
        },
        "D": {
            "x_min": 0,
            "x_max": 864,
            "ha": 968,
            "o": "m 400 1013 q 736 874 608 1013 q 864 523 864 735 q 717 146 864 293 q 340 0 570 0 l 0 0 l 0 1013 l 400 1013 m 398 837 l 206 837 l 206 182 l 372 182 q 584 276 507 182 q 657 504 657 365 q 594 727 657 632 q 398 837 522 837 "
        },
        "∙": {
            "x_min": 0,
            "x_max": 207,
            "ha": 304,
            "o": "m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "
        },
        "ÿ": {
            "x_min": 0,
            "x_max": 47,
            "ha": 125,
            "o": "m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 "
        },
        "w": {
            "x_min": 0,
            "x_max": 1056.953125,
            "ha": 1150,
            "o": "m 1056 749 l 848 0 l 647 0 l 527 536 l 412 0 l 211 0 l 0 749 l 202 749 l 325 226 l 429 748 l 633 748 l 740 229 l 864 749 l 1056 749 "
        },
        "$": {
            "x_min": 0,
            "x_max": 704,
            "ha": 800,
            "o": "m 682 693 l 495 693 q 468 782 491 749 q 391 831 441 824 l 391 579 q 633 462 562 534 q 704 259 704 389 q 616 57 704 136 q 391 -22 528 -22 l 391 -156 l 308 -156 l 308 -22 q 76 69 152 -7 q 0 300 0 147 l 183 300 q 215 191 190 230 q 308 128 245 143 l 308 414 q 84 505 157 432 q 12 700 12 578 q 89 902 12 824 q 308 981 166 981 l 308 1069 l 391 1069 l 391 981 q 595 905 521 981 q 682 693 670 829 m 308 599 l 308 831 q 228 796 256 831 q 200 712 200 762 q 225 642 200 668 q 308 599 251 617 m 391 128 q 476 174 449 140 q 504 258 504 207 q 391 388 504 354 l 391 128 "
        },
        "\\": {
            "x_min": -0.03125,
            "x_max": 434.765625,
            "ha": 532,
            "o": "m 434 -128 l 341 -128 l 0 1039 l 91 1040 l 434 -128 "
        },
        "µ": {
            "x_min": 0,
            "x_max": 647,
            "ha": 754,
            "o": "m 647 0 l 478 0 l 478 68 q 412 9 448 30 q 330 -11 375 -11 q 261 3 296 -11 q 199 43 226 18 l 199 -277 l 0 -277 l 0 749 l 199 749 l 199 358 q 216 221 199 267 q 322 151 244 151 q 435 240 410 151 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "
        },
        "Ι": {
            "x_min": 42,
            "x_max": 250,
            "ha": 413,
            "o": "m 250 0 l 42 0 l 42 1013 l 250 1013 l 250 0 "
        },
        "Ύ": {
            "x_min": 0,
            "x_max": 1211.15625,
            "ha": 1289,
            "o": "m 1211 1012 l 907 376 l 907 0 l 697 0 l 697 376 l 374 1012 l 583 1012 l 802 576 l 1001 1012 l 1211 1012 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "
        },
        "’": {
            "x_min": 0,
            "x_max": 192,
            "ha": 289,
            "o": "m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 "
        },
        "Ν": {
            "x_min": 0,
            "x_max": 833,
            "ha": 946,
            "o": "m 833 0 l 617 0 l 206 696 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "
        },
        "-": {
            "x_min": 27.78125,
            "x_max": 413.890625,
            "ha": 525,
            "o": "m 413 279 l 27 279 l 27 468 l 413 468 l 413 279 "
        },
        "Q": {
            "x_min": 0,
            "x_max": 995.59375,
            "ha": 1096,
            "o": "m 995 49 l 885 -70 l 762 42 q 641 -12 709 4 q 497 -29 572 -29 q 135 123 271 -29 q 0 504 0 276 q 131 881 0 731 q 497 1040 270 1040 q 859 883 719 1040 q 994 506 994 731 q 966 321 994 413 q 884 152 938 229 l 995 49 m 730 299 q 767 395 755 344 q 779 504 779 446 q 713 743 779 644 q 505 857 638 857 q 284 745 366 857 q 210 501 210 644 q 279 265 210 361 q 492 157 357 157 q 615 181 557 157 l 508 287 l 620 405 l 730 299 "
        },
        "ς": {
            "x_min": 0,
            "x_max": 731.78125,
            "ha": 768,
            "o": "m 731 448 l 547 448 q 485 571 531 533 q 369 610 440 610 q 245 537 292 610 q 204 394 204 473 q 322 186 204 238 q 540 133 430 159 q 659 -15 659 98 q 643 -141 659 -80 q 595 -278 627 -202 l 423 -278 q 458 -186 448 -215 q 474 -88 474 -133 q 352 0 474 -27 q 123 80 181 38 q 0 382 0 170 q 98 660 0 549 q 367 777 202 777 q 622 683 513 777 q 731 448 731 589 "
        },
        "M": {
            "x_min": 0,
            "x_max": 1019,
            "ha": 1135,
            "o": "m 1019 0 l 823 0 l 823 819 l 618 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1012 l 510 241 l 707 1013 l 1019 1013 l 1019 0 "
        },
        "Ψ": {
            "x_min": 0,
            "x_max": 995,
            "ha": 1085,
            "o": "m 995 698 q 924 340 995 437 q 590 200 841 227 l 590 0 l 404 0 l 404 200 q 70 340 152 227 q 0 698 0 437 l 0 1013 l 188 1013 l 188 694 q 212 472 188 525 q 404 383 254 383 l 404 1013 l 590 1013 l 590 383 q 781 472 740 383 q 807 694 807 525 l 807 1013 l 995 1013 l 995 698 "
        },
        "C": {
            "x_min": 0,
            "x_max": 970.828125,
            "ha": 1043,
            "o": "m 970 345 q 802 70 933 169 q 490 -29 672 -29 q 130 130 268 -29 q 0 506 0 281 q 134 885 0 737 q 502 1040 275 1040 q 802 939 668 1040 q 965 679 936 838 l 745 679 q 649 809 716 761 q 495 857 582 857 q 283 747 361 857 q 214 508 214 648 q 282 267 214 367 q 493 154 359 154 q 651 204 584 154 q 752 345 718 255 l 970 345 "
        },
        "!": {
            "x_min": 0,
            "x_max": 204,
            "ha": 307,
            "o": "m 204 739 q 182 515 204 686 q 152 282 167 398 l 52 282 q 13 589 27 473 q 0 739 0 704 l 0 1013 l 204 1013 l 204 739 m 204 0 l 0 0 l 0 203 l 204 203 l 204 0 "
        },
        "{": {
            "x_min": 0,
            "x_max": 501.390625,
            "ha": 599,
            "o": "m 501 -285 q 229 -209 301 -285 q 176 -35 176 -155 q 182 47 176 -8 q 189 126 189 103 q 156 245 189 209 q 0 294 112 294 l 0 438 q 154 485 111 438 q 189 603 189 522 q 186 666 189 636 q 176 783 176 772 q 231 945 176 894 q 501 1015 306 1015 l 501 872 q 370 833 408 872 q 340 737 340 801 q 342 677 340 705 q 353 569 353 579 q 326 451 353 496 q 207 366 291 393 q 327 289 294 346 q 353 164 353 246 q 348 79 353 132 q 344 17 344 26 q 372 -95 344 -58 q 501 -141 408 -141 l 501 -285 "
        },
        "X": {
            "x_min": 0,
            "x_max": 894.453125,
            "ha": 999,
            "o": "m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 659 l 652 1013 l 894 1013 l 577 519 l 894 0 "
        },
        "#": {
            "x_min": 0,
            "x_max": 1019.453125,
            "ha": 1117,
            "o": "m 1019 722 l 969 582 l 776 581 l 717 417 l 919 417 l 868 279 l 668 278 l 566 -6 l 413 -5 l 516 279 l 348 279 l 247 -6 l 94 -6 l 196 278 l 0 279 l 49 417 l 245 417 l 304 581 l 98 582 l 150 722 l 354 721 l 455 1006 l 606 1006 l 507 721 l 673 722 l 776 1006 l 927 1006 l 826 721 l 1019 722 m 627 581 l 454 581 l 394 417 l 567 417 l 627 581 "
        },
        "ι": {
            "x_min": 42,
            "x_max": 242,
            "ha": 389,
            "o": "m 242 0 l 42 0 l 42 749 l 242 749 l 242 0 "
        },
        "Ά": {
            "x_min": 0,
            "x_max": 995.828125,
            "ha": 1072,
            "o": "m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 995 0 l 776 0 l 708 208 l 315 208 l 247 0 l 29 0 l 390 1012 l 629 1012 l 995 0 m 652 376 l 509 809 l 369 376 l 652 376 "
        },
        ")": {
            "x_min": 0,
            "x_max": 389,
            "ha": 486,
            "o": "m 389 357 q 319 14 389 187 q 145 -293 259 -134 l 0 -293 q 139 22 90 -142 q 189 358 189 187 q 139 689 189 525 q 0 1013 90 853 l 145 1013 q 319 703 258 857 q 389 357 389 528 "
        },
        "ε": {
            "x_min": 16.671875,
            "x_max": 652.78125,
            "ha": 742,
            "o": "m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 249 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 "
        },
        "Δ": {
            "x_min": 0,
            "x_max": 981.953125,
            "ha": 1057,
            "o": "m 981 0 l 0 0 l 386 1013 l 594 1013 l 981 0 m 715 175 l 490 765 l 266 175 l 715 175 "
        },
        "}": {
            "x_min": 0,
            "x_max": 500,
            "ha": 597,
            "o": "m 500 294 q 348 246 390 294 q 315 128 315 209 q 320 42 315 101 q 326 -48 326 -17 q 270 -214 326 -161 q 0 -285 196 -285 l 0 -141 q 126 -97 90 -141 q 154 8 154 -64 q 150 91 154 37 q 146 157 146 145 q 172 281 146 235 q 294 366 206 339 q 173 451 208 390 q 146 576 146 500 q 150 655 146 603 q 154 731 154 708 q 126 831 154 799 q 0 872 90 872 l 0 1015 q 270 944 196 1015 q 326 777 326 891 q 322 707 326 747 q 313 593 313 612 q 347 482 313 518 q 500 438 390 438 l 500 294 "
        },
        "‰": {
            "x_min": 0,
            "x_max": 1681,
            "ha": 1775,
            "o": "m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 m 1430 484 q 1618 404 1548 484 q 1681 228 1681 332 q 1618 51 1681 123 q 1429 -29 1548 -29 q 1241 50 1309 -29 q 1179 227 1179 122 q 1241 403 1179 331 q 1430 484 1311 484 m 1431 120 q 1509 151 1481 120 q 1537 226 1537 183 q 1511 299 1537 270 q 1431 333 1482 333 q 1352 301 1380 333 q 1325 226 1325 269 q 1352 151 1325 182 q 1431 120 1379 120 "
        },
        "a": {
            "x_min": 0,
            "x_max": 700,
            "ha": 786,
            "o": "m 700 0 l 488 0 q 465 93 469 45 q 365 5 427 37 q 233 -26 303 -26 q 65 37 130 -26 q 0 205 0 101 q 120 409 0 355 q 343 452 168 431 q 465 522 465 468 q 424 588 465 565 q 337 611 384 611 q 250 581 285 611 q 215 503 215 552 l 26 503 q 113 707 26 633 q 328 775 194 775 q 538 723 444 775 q 657 554 657 659 l 657 137 q 666 73 657 101 q 700 33 675 45 l 700 0 m 465 297 l 465 367 q 299 322 358 340 q 193 217 193 287 q 223 150 193 174 q 298 127 254 127 q 417 175 370 127 q 465 297 465 224 "
        },
        "—": {
            "x_min": 0,
            "x_max": 941.671875,
            "ha": 1039,
            "o": "m 941 297 l 0 297 l 0 450 l 941 450 l 941 297 "
        },
        "=": {
            "x_min": 29.171875,
            "x_max": 798.609375,
            "ha": 828,
            "o": "m 798 502 l 29 502 l 29 635 l 798 635 l 798 502 m 798 204 l 29 204 l 29 339 l 798 339 l 798 204 "
        },
        "N": {
            "x_min": 0,
            "x_max": 833,
            "ha": 949,
            "o": "m 833 0 l 617 0 l 206 695 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "
        },
        "ρ": {
            "x_min": 0,
            "x_max": 722,
            "ha": 810,
            "o": "m 364 -17 q 271 0 313 -17 q 194 48 230 16 l 194 -278 l 0 -278 l 0 370 q 87 656 0 548 q 358 775 183 775 q 626 655 524 775 q 722 372 722 541 q 621 95 722 208 q 364 -17 520 -17 m 360 607 q 237 529 280 607 q 201 377 201 463 q 234 229 201 292 q 355 147 277 147 q 467 210 419 147 q 515 374 515 273 q 471 537 515 468 q 360 607 428 607 "
        },
        "2": {
            "x_min": 64,
            "x_max": 764,
            "ha": 828,
            "o": "m 764 685 q 675 452 764 541 q 484 325 637 415 q 307 168 357 250 l 754 168 l 754 0 l 64 0 q 193 301 64 175 q 433 480 202 311 q 564 673 564 576 q 519 780 564 737 q 416 824 475 824 q 318 780 358 824 q 262 633 270 730 l 80 633 q 184 903 80 807 q 415 988 276 988 q 654 907 552 988 q 764 685 764 819 "
        },
        "¯": {
            "x_min": 0,
            "x_max": 775,
            "ha": 771,
            "o": "m 775 958 l 0 958 l 0 1111 l 775 1111 l 775 958 "
        },
        "Z": {
            "x_min": 0,
            "x_max": 804.171875,
            "ha": 906,
            "o": "m 804 836 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 830 l 11 830 l 11 1013 l 804 1013 l 804 836 "
        },
        "u": {
            "x_min": 0,
            "x_max": 668,
            "ha": 782,
            "o": "m 668 0 l 474 0 l 474 89 q 363 9 425 37 q 233 -19 301 -19 q 61 53 123 -19 q 0 239 0 126 l 0 749 l 199 749 l 199 296 q 225 193 199 233 q 316 146 257 146 q 424 193 380 146 q 469 304 469 240 l 469 749 l 668 749 l 668 0 "
        },
        "k": {
            "x_min": 0,
            "x_max": 688.890625,
            "ha": 771,
            "o": "m 688 0 l 450 0 l 270 316 l 196 237 l 196 0 l 0 0 l 0 1013 l 196 1013 l 196 483 l 433 748 l 675 748 l 413 469 l 688 0 "
        },
        "Η": {
            "x_min": 0,
            "x_max": 837,
            "ha": 950,
            "o": "m 837 0 l 627 0 l 627 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 627 635 l 627 1013 l 837 1013 l 837 0 "
        },
        "Α": {
            "x_min": 0,
            "x_max": 966.671875,
            "ha": 1043,
            "o": "m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 809 l 340 376 l 623 376 "
        },
        "s": {
            "x_min": 0,
            "x_max": 681,
            "ha": 775,
            "o": "m 681 229 q 568 33 681 105 q 340 -29 471 -29 q 107 39 202 -29 q 0 245 0 114 l 201 245 q 252 155 201 189 q 358 128 295 128 q 436 144 401 128 q 482 205 482 166 q 363 284 482 255 q 143 348 181 329 q 25 533 25 408 q 129 716 25 647 q 340 778 220 778 q 554 710 465 778 q 658 522 643 643 l 463 522 q 419 596 458 570 q 327 622 380 622 q 255 606 290 622 q 221 556 221 590 q 339 473 221 506 q 561 404 528 420 q 681 229 681 344 "
        },
        "B": {
            "x_min": 0,
            "x_max": 835,
            "ha": 938,
            "o": "m 674 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 765 630 797 686 q 674 547 734 575 m 438 621 q 538 646 495 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 438 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "
        },
        "…": {
            "x_min": 0,
            "x_max": 819,
            "ha": 963,
            "o": "m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 m 512 0 l 306 0 l 306 207 l 512 207 l 512 0 m 819 0 l 613 0 l 613 207 l 819 207 l 819 0 "
        },
        "?": {
            "x_min": 1,
            "x_max": 687,
            "ha": 785,
            "o": "m 687 734 q 621 563 687 634 q 501 454 560 508 q 436 293 436 386 l 251 293 l 251 391 q 363 557 251 462 q 476 724 476 653 q 432 827 476 788 q 332 866 389 866 q 238 827 275 866 q 195 699 195 781 l 1 699 q 110 955 1 861 q 352 1040 210 1040 q 582 963 489 1040 q 687 734 687 878 m 446 0 l 243 0 l 243 203 l 446 203 l 446 0 "
        },
        "H": {
            "x_min": 0,
            "x_max": 838,
            "ha": 953,
            "o": "m 838 0 l 628 0 l 628 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 628 635 l 628 1013 l 838 1013 l 838 0 "
        },
        "ν": {
            "x_min": 0,
            "x_max": 740.28125,
            "ha": 828,
            "o": "m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "
        },
        "c": {
            "x_min": 0,
            "x_max": 751.390625,
            "ha": 828,
            "o": "m 751 282 q 625 58 725 142 q 384 -26 526 -26 q 107 84 215 -26 q 0 366 0 195 q 98 651 0 536 q 370 774 204 774 q 616 700 518 774 q 751 486 715 626 l 536 486 q 477 570 516 538 q 380 607 434 607 q 248 533 298 607 q 204 378 204 466 q 242 219 204 285 q 377 139 290 139 q 483 179 438 139 q 543 282 527 220 l 751 282 "
        },
        "¶": {
            "x_min": 0,
            "x_max": 566.671875,
            "ha": 678,
            "o": "m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 "
        },
        "β": {
            "x_min": 0,
            "x_max": 703,
            "ha": 789,
            "o": "m 510 539 q 651 429 600 501 q 703 262 703 357 q 617 53 703 136 q 404 -29 532 -29 q 199 51 279 -29 l 199 -278 l 0 -278 l 0 627 q 77 911 0 812 q 343 1021 163 1021 q 551 957 464 1021 q 649 769 649 886 q 613 638 649 697 q 510 539 577 579 m 344 136 q 452 181 408 136 q 497 291 497 227 q 435 409 497 369 q 299 444 381 444 l 299 600 q 407 634 363 600 q 452 731 452 669 q 417 820 452 784 q 329 857 382 857 q 217 775 246 857 q 199 622 199 725 l 199 393 q 221 226 199 284 q 344 136 254 136 "
        },
        "Μ": {
            "x_min": 0,
            "x_max": 1019,
            "ha": 1132,
            "o": "m 1019 0 l 823 0 l 823 818 l 617 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1013 l 509 241 l 708 1013 l 1019 1013 l 1019 0 "
        },
        "Ό": {
            "x_min": 0.15625,
            "x_max": 1174,
            "ha": 1271,
            "o": "m 676 -29 q 312 127 451 -29 q 179 505 179 277 q 311 883 179 733 q 676 1040 449 1040 q 1040 883 901 1040 q 1174 505 1174 733 q 1041 127 1174 277 q 676 -29 903 -29 m 676 154 q 890 266 811 154 q 961 506 961 366 q 891 745 961 648 q 676 857 812 857 q 462 747 541 857 q 392 506 392 648 q 461 266 392 365 q 676 154 540 154 m 314 1034 l 98 779 l 0 779 l 136 1034 l 314 1034 "
        },
        "Ή": {
            "x_min": 0,
            "x_max": 1248,
            "ha": 1361,
            "o": "m 1248 0 l 1038 0 l 1038 450 l 621 450 l 621 0 l 411 0 l 411 1012 l 621 1012 l 621 635 l 1038 635 l 1038 1012 l 1248 1012 l 1248 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "
        },
        "•": {
            "x_min": -27.78125,
            "x_max": 691.671875,
            "ha": 775,
            "o": "m 691 508 q 588 252 691 358 q 331 147 486 147 q 77 251 183 147 q -27 508 -27 355 q 75 761 -27 655 q 331 868 179 868 q 585 763 479 868 q 691 508 691 658 "
        },
        "¥": {
            "x_min": 0,
            "x_max": 836,
            "ha": 931,
            "o": "m 195 625 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 l 650 625 l 777 625 l 777 472 l 578 472 l 538 389 l 777 389 l 777 236 l 532 236 l 532 0 l 322 0 l 322 236 l 79 236 l 79 389 l 315 389 l 273 472 l 79 472 l 79 625 l 195 625 "
        },
        "(": {
            "x_min": 0,
            "x_max": 388.890625,
            "ha": 486,
            "o": "m 388 -293 l 243 -293 q 70 14 130 -134 q 0 357 0 189 q 69 703 0 526 q 243 1013 129 856 l 388 1013 q 248 695 297 860 q 200 358 200 530 q 248 24 200 187 q 388 -293 297 -138 "
        },
        "U": {
            "x_min": 0,
            "x_max": 813,
            "ha": 926,
            "o": "m 813 362 q 697 79 813 187 q 405 -29 582 -29 q 114 78 229 -29 q 0 362 0 186 l 0 1013 l 210 1013 l 210 387 q 260 226 210 291 q 408 154 315 154 q 554 226 500 154 q 603 387 603 291 l 603 1013 l 813 1013 l 813 362 "
        },
        "γ": {
            "x_min": 0.0625,
            "x_max": 729.234375,
            "ha": 815,
            "o": "m 729 749 l 457 37 l 457 -278 l 257 -278 l 257 37 q 218 155 243 95 q 170 275 194 215 l 0 749 l 207 749 l 363 284 l 522 749 l 729 749 "
        },
        "α": {
            "x_min": -1,
            "x_max": 722,
            "ha": 835,
            "o": "m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 "
        },
        "F": {
            "x_min": 0,
            "x_max": 706.953125,
            "ha": 778,
            "o": "m 706 837 l 206 837 l 206 606 l 645 606 l 645 431 l 206 431 l 206 0 l 0 0 l 0 1013 l 706 1013 l 706 837 "
        },
        "­": {
            "x_min": 0,
            "x_max": 704.171875,
            "ha": 801,
            "o": "m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "
        },
        ":": {
            "x_min": 0,
            "x_max": 207,
            "ha": 304,
            "o": "m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 m 207 0 l 0 0 l 0 207 l 207 207 l 207 0 "
        },
        "Χ": {
            "x_min": 0,
            "x_max": 894.453125,
            "ha": 978,
            "o": "m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 660 l 652 1013 l 894 1013 l 577 519 l 894 0 "
        },
        "*": {
            "x_min": 115,
            "x_max": 713,
            "ha": 828,
            "o": "m 713 740 l 518 688 l 651 525 l 531 438 l 412 612 l 290 439 l 173 523 l 308 688 l 115 741 l 159 880 l 342 816 l 343 1013 l 482 1013 l 481 816 l 664 880 l 713 740 "
        },
        "†": {
            "x_min": 0,
            "x_max": 809,
            "ha": 894,
            "o": "m 509 804 l 809 804 l 809 621 l 509 621 l 509 0 l 299 0 l 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 "
        },
        "°": {
            "x_min": -1,
            "x_max": 363,
            "ha": 460,
            "o": "m 181 808 q 46 862 94 808 q -1 992 -1 917 q 44 1118 -1 1066 q 181 1175 96 1175 q 317 1118 265 1175 q 363 991 363 1066 q 315 862 363 917 q 181 808 267 808 m 181 908 q 240 933 218 908 q 263 992 263 958 q 242 1051 263 1027 q 181 1075 221 1075 q 120 1050 142 1075 q 99 991 99 1026 q 120 933 99 958 q 181 908 142 908 "
        },
        "V": {
            "x_min": 0,
            "x_max": 895.828125,
            "ha": 997,
            "o": "m 895 1013 l 550 0 l 347 0 l 0 1013 l 231 1013 l 447 256 l 666 1013 l 895 1013 "
        },
        "Ξ": {
            "x_min": 0,
            "x_max": 751.390625,
            "ha": 800,
            "o": "m 733 826 l 5 826 l 5 1012 l 733 1012 l 733 826 m 681 432 l 65 432 l 65 617 l 681 617 l 681 432 m 751 0 l 0 0 l 0 183 l 751 183 l 751 0 "
        },
        " ": {
            "x_min": 0,
            "x_max": 0,
            "ha": 853
        },
        "Ϋ": {
            "x_min": -0.21875,
            "x_max": 836.171875,
            "ha": 914,
            "o": "m 610 1046 l 454 1046 l 454 1215 l 610 1215 l 610 1046 m 369 1046 l 212 1046 l 212 1215 l 369 1215 l 369 1046 m 836 1012 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1012 l 208 1012 l 427 576 l 626 1012 l 836 1012 "
        },
        "0": {
            "x_min": 51,
            "x_max": 779,
            "ha": 828,
            "o": "m 415 -26 q 142 129 242 -26 q 51 476 51 271 q 141 825 51 683 q 415 984 242 984 q 687 825 585 984 q 779 476 779 682 q 688 131 779 271 q 415 -26 587 -26 m 415 137 q 529 242 485 137 q 568 477 568 338 q 530 713 568 619 q 415 821 488 821 q 303 718 344 821 q 262 477 262 616 q 301 237 262 337 q 415 137 341 137 "
        },
        "”": {
            "x_min": 0,
            "x_max": 469,
            "ha": 567,
            "o": "m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 m 469 834 q 414 692 469 751 q 277 626 360 634 l 277 697 q 379 831 379 723 l 277 831 l 277 1013 l 469 1013 l 469 834 "
        },
        "@": {
            "x_min": 0,
            "x_max": 1276,
            "ha": 1374,
            "o": "m 1115 -52 q 895 -170 1015 -130 q 647 -211 776 -211 q 158 -34 334 -211 q 0 360 0 123 q 179 810 0 621 q 698 1019 377 1019 q 1138 859 981 1019 q 1276 514 1276 720 q 1173 210 1276 335 q 884 75 1062 75 q 784 90 810 75 q 737 186 749 112 q 647 104 698 133 q 532 75 596 75 q 360 144 420 75 q 308 308 308 205 q 398 568 308 451 q 638 696 497 696 q 731 671 690 696 q 805 604 772 647 l 840 673 l 964 673 q 886 373 915 490 q 856 239 856 257 q 876 201 856 214 q 920 188 895 188 q 1084 284 1019 188 q 1150 511 1150 380 q 1051 779 1150 672 q 715 905 934 905 q 272 734 439 905 q 121 363 121 580 q 250 41 121 170 q 647 -103 394 -103 q 863 -67 751 -103 q 1061 26 975 -32 l 1115 -52 m 769 483 q 770 500 770 489 q 733 567 770 539 q 651 596 695 596 q 508 504 566 596 q 457 322 457 422 q 483 215 457 256 q 561 175 509 175 q 671 221 625 175 q 733 333 718 268 l 769 483 "
        },
        "Ί": {
            "x_min": 0,
            "x_max": 619,
            "ha": 732,
            "o": "m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 619 0 l 411 0 l 411 1012 l 619 1012 l 619 0 "
        },
        "i": {
            "x_min": 14,
            "x_max": 214,
            "ha": 326,
            "o": "m 214 830 l 14 830 l 14 1013 l 214 1013 l 214 830 m 214 0 l 14 0 l 14 748 l 214 748 l 214 0 "
        },
        "Β": {
            "x_min": 0,
            "x_max": 835,
            "ha": 961,
            "o": "m 675 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 766 630 797 686 q 675 547 734 575 m 439 621 q 539 646 496 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 439 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "
        },
        "υ": {
            "x_min": 0,
            "x_max": 656,
            "ha": 767,
            "o": "m 656 416 q 568 55 656 145 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 191 l 0 749 l 200 749 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 749 l 656 749 l 656 416 "
        },
        "]": {
            "x_min": 0,
            "x_max": 349,
            "ha": 446,
            "o": "m 349 -300 l 0 -300 l 0 -154 l 163 -154 l 163 866 l 0 866 l 0 1013 l 349 1013 l 349 -300 "
        },
        "m": {
            "x_min": 0,
            "x_max": 1065,
            "ha": 1174,
            "o": "m 1065 0 l 866 0 l 866 483 q 836 564 866 532 q 759 596 807 596 q 663 555 700 596 q 627 454 627 514 l 627 0 l 433 0 l 433 481 q 403 563 433 531 q 323 596 374 596 q 231 554 265 596 q 197 453 197 513 l 197 0 l 0 0 l 0 748 l 189 748 l 189 665 q 279 745 226 715 q 392 775 333 775 q 509 744 455 775 q 606 659 563 713 q 695 744 640 713 q 814 775 749 775 q 992 702 920 775 q 1065 523 1065 630 l 1065 0 "
        },
        "χ": {
            "x_min": 0,
            "x_max": 759.71875,
            "ha": 847,
            "o": "m 759 -299 l 548 -299 l 379 66 l 215 -299 l 0 -299 l 261 233 l 13 749 l 230 749 l 379 400 l 527 749 l 738 749 l 500 238 l 759 -299 "
        },
        "8": {
            "x_min": 57,
            "x_max": 770,
            "ha": 828,
            "o": "m 625 516 q 733 416 697 477 q 770 284 770 355 q 675 69 770 161 q 415 -29 574 -29 q 145 65 244 -29 q 57 273 57 150 q 93 413 57 350 q 204 516 130 477 q 112 609 142 556 q 83 718 83 662 q 177 905 83 824 q 414 986 272 986 q 650 904 555 986 q 745 715 745 822 q 716 608 745 658 q 625 516 688 558 m 414 590 q 516 624 479 590 q 553 706 553 659 q 516 791 553 755 q 414 828 480 828 q 311 792 348 828 q 275 706 275 757 q 310 624 275 658 q 414 590 345 590 m 413 135 q 527 179 487 135 q 564 279 564 218 q 525 386 564 341 q 411 436 482 436 q 298 387 341 436 q 261 282 261 344 q 300 178 261 222 q 413 135 340 135 "
        },
        "ί": {
            "x_min": 42,
            "x_max": 371.171875,
            "ha": 389,
            "o": "m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 m 371 1039 l 169 823 l 71 823 l 193 1039 l 371 1039 "
        },
        "Ζ": {
            "x_min": 0,
            "x_max": 804.171875,
            "ha": 886,
            "o": "m 804 835 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 829 l 11 829 l 11 1012 l 804 1012 l 804 835 "
        },
        "R": {
            "x_min": 0,
            "x_max": 836.109375,
            "ha": 947,
            "o": "m 836 0 l 608 0 q 588 53 596 20 q 581 144 581 86 q 581 179 581 162 q 581 215 581 197 q 553 345 581 306 q 428 393 518 393 l 208 393 l 208 0 l 0 0 l 0 1013 l 491 1013 q 720 944 630 1013 q 819 734 819 869 q 778 584 819 654 q 664 485 738 513 q 757 415 727 463 q 794 231 794 358 l 794 170 q 800 84 794 116 q 836 31 806 51 l 836 0 m 462 838 l 208 838 l 208 572 l 452 572 q 562 604 517 572 q 612 704 612 640 q 568 801 612 765 q 462 838 525 838 "
        },
        "o": {
            "x_min": 0,
            "x_max": 764,
            "ha": 871,
            "o": "m 380 -26 q 105 86 211 -26 q 0 371 0 199 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 371 764 544 q 658 86 764 199 q 380 -26 552 -26 m 379 141 q 515 216 466 141 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 217 204 282 q 379 141 294 141 "
        },
        "5": {
            "x_min": 59,
            "x_max": 767,
            "ha": 828,
            "o": "m 767 319 q 644 59 767 158 q 382 -29 533 -29 q 158 43 247 -29 q 59 264 59 123 l 252 264 q 295 165 252 201 q 400 129 339 129 q 512 172 466 129 q 564 308 564 220 q 514 437 564 387 q 398 488 464 488 q 329 472 361 488 q 271 420 297 456 l 93 428 l 157 958 l 722 958 l 722 790 l 295 790 l 271 593 q 348 635 306 621 q 431 649 389 649 q 663 551 560 649 q 767 319 767 453 "
        },
        "7": {
            "x_min": 65.28125,
            "x_max": 762.5,
            "ha": 828,
            "o": "m 762 808 q 521 435 604 626 q 409 0 438 244 l 205 0 q 313 422 227 234 q 548 789 387 583 l 65 789 l 65 958 l 762 958 l 762 808 "
        },
        "K": {
            "x_min": 0,
            "x_max": 900,
            "ha": 996,
            "o": "m 900 0 l 647 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 595 l 604 1013 l 863 1013 l 461 603 l 900 0 "
        },
        ",": {
            "x_min": 0,
            "x_max": 206,
            "ha": 303,
            "o": "m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 "
        },
        "d": {
            "x_min": 0,
            "x_max": 722,
            "ha": 836,
            "o": "m 722 0 l 530 0 l 530 101 q 303 -26 449 -26 q 72 103 155 -26 q 0 373 0 214 q 72 642 0 528 q 305 775 156 775 q 433 743 373 775 q 530 656 492 712 l 530 1013 l 722 1013 l 722 0 m 361 600 q 234 523 280 600 q 196 372 196 458 q 233 220 196 286 q 358 143 278 143 q 489 216 442 143 q 530 369 530 280 q 491 522 530 456 q 361 600 443 600 "
        },
        "¨": {
            "x_min": 212,
            "x_max": 609,
            "ha": 933,
            "o": "m 609 1046 l 453 1046 l 453 1216 l 609 1216 l 609 1046 m 369 1046 l 212 1046 l 212 1216 l 369 1216 l 369 1046 "
        },
        "E": {
            "x_min": 0,
            "x_max": 761.109375,
            "ha": 824,
            "o": "m 761 0 l 0 0 l 0 1013 l 734 1013 l 734 837 l 206 837 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "
        },
        "Y": {
            "x_min": 0,
            "x_max": 836,
            "ha": 931,
            "o": "m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "
        },
        "\"": {
            "x_min": 0,
            "x_max": 357,
            "ha": 454,
            "o": "m 357 604 l 225 604 l 225 988 l 357 988 l 357 604 m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "
        },
        "‹": {
            "x_min": 35.984375,
            "x_max": 791.671875,
            "ha": 828,
            "o": "m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "
        },
        "„": {
            "x_min": 0,
            "x_max": 483,
            "ha": 588,
            "o": "m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 m 483 5 q 427 -151 483 -88 q 277 -238 371 -213 l 277 -159 q 361 -100 334 -137 q 388 -2 388 -62 l 277 -2 l 277 205 l 483 205 l 483 5 "
        },
        "δ": {
            "x_min": 6,
            "x_max": 732,
            "ha": 835,
            "o": "m 732 352 q 630 76 732 177 q 354 -25 529 -25 q 101 74 197 -25 q 6 333 6 174 q 89 581 6 480 q 323 690 178 690 q 66 864 201 787 l 66 1013 l 669 1013 l 669 856 l 348 856 q 532 729 461 789 q 673 566 625 651 q 732 352 732 465 m 419 551 q 259 496 321 551 q 198 344 198 441 q 238 208 198 267 q 357 140 283 140 q 484 203 437 140 q 526 344 526 260 q 499 466 526 410 q 419 551 473 521 "
        },
        "έ": {
            "x_min": 16.671875,
            "x_max": 652.78125,
            "ha": 742,
            "o": "m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 250 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "
        },
        "ω": {
            "x_min": 0,
            "x_max": 945,
            "ha": 1051,
            "o": "m 565 323 l 565 289 q 577 190 565 221 q 651 142 597 142 q 718 189 694 142 q 742 365 742 237 q 703 565 742 462 q 610 749 671 650 l 814 749 q 910 547 876 650 q 945 337 945 444 q 874 96 945 205 q 668 -29 793 -29 q 551 0 608 -29 q 470 78 495 30 q 390 0 444 28 q 276 -29 337 -29 q 69 96 149 -29 q 0 337 0 204 q 36 553 0 444 q 130 749 68 650 l 334 749 q 241 565 273 650 q 203 365 203 461 q 219 222 203 279 q 292 142 243 142 q 360 183 342 142 q 373 271 373 211 q 372 298 372 285 q 372 323 372 311 l 372 528 l 566 528 l 565 323 "
        },
        "´": {
            "x_min": 0,
            "x_max": 132,
            "ha": 299,
            "o": "m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "
        },
        "±": {
            "x_min": 29,
            "x_max": 798,
            "ha": 828,
            "o": "m 798 480 l 484 480 l 484 254 l 344 254 l 344 480 l 29 480 l 29 615 l 344 615 l 344 842 l 484 842 l 484 615 l 798 615 l 798 480 m 798 0 l 29 0 l 29 136 l 798 136 l 798 0 "
        },
        "|": {
            "x_min": 0,
            "x_max": 143,
            "ha": 240,
            "o": "m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "
        },
        "ϋ": {
            "x_min": 0,
            "x_max": 656,
            "ha": 767,
            "o": "m 535 810 l 406 810 l 406 952 l 535 952 l 535 810 m 271 810 l 142 810 l 142 952 l 271 952 l 271 810 m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 "
        },
        "§": {
            "x_min": 0,
            "x_max": 633,
            "ha": 731,
            "o": "m 633 469 q 601 356 633 406 q 512 274 569 305 q 570 197 548 242 q 593 105 593 152 q 501 -76 593 -5 q 301 -142 416 -142 q 122 -82 193 -142 q 43 108 43 -15 l 212 108 q 251 27 220 53 q 321 1 283 1 q 389 23 360 1 q 419 83 419 46 q 310 194 419 139 q 108 297 111 295 q 0 476 0 372 q 33 584 0 537 q 120 659 62 626 q 72 720 91 686 q 53 790 53 755 q 133 978 53 908 q 312 1042 207 1042 q 483 984 412 1042 q 574 807 562 921 l 409 807 q 379 875 409 851 q 307 900 349 900 q 244 881 270 900 q 218 829 218 862 q 324 731 218 781 q 524 636 506 647 q 633 469 633 565 m 419 334 q 473 411 473 372 q 451 459 473 436 q 390 502 430 481 l 209 595 q 167 557 182 577 q 153 520 153 537 q 187 461 153 491 q 263 413 212 440 l 419 334 "
        },
        "b": {
            "x_min": 0,
            "x_max": 722,
            "ha": 822,
            "o": "m 416 -26 q 289 6 346 -26 q 192 101 232 39 l 192 0 l 0 0 l 0 1013 l 192 1013 l 192 656 q 286 743 226 712 q 415 775 346 775 q 649 644 564 775 q 722 374 722 533 q 649 106 722 218 q 416 -26 565 -26 m 361 600 q 232 524 279 600 q 192 371 192 459 q 229 221 192 284 q 357 145 275 145 q 487 221 441 145 q 526 374 526 285 q 488 523 526 460 q 361 600 442 600 "
        },
        "q": {
            "x_min": 0,
            "x_max": 722,
            "ha": 833,
            "o": "m 722 -298 l 530 -298 l 530 97 q 306 -25 449 -25 q 73 104 159 -25 q 0 372 0 216 q 72 643 0 529 q 305 775 156 775 q 430 742 371 775 q 530 654 488 709 l 530 750 l 722 750 l 722 -298 m 360 601 q 234 527 278 601 q 197 378 197 466 q 233 225 197 291 q 357 144 277 144 q 488 217 441 144 q 530 370 530 282 q 491 523 530 459 q 360 601 443 601 "
        },
        "Ω": {
            "x_min": -0.03125,
            "x_max": 1008.53125,
            "ha": 1108,
            "o": "m 1008 0 l 589 0 l 589 199 q 717 368 670 265 q 764 580 764 471 q 698 778 764 706 q 504 855 629 855 q 311 773 380 855 q 243 563 243 691 q 289 360 243 458 q 419 199 336 262 l 419 0 l 0 0 l 0 176 l 202 176 q 77 355 123 251 q 32 569 32 459 q 165 908 32 776 q 505 1040 298 1040 q 844 912 711 1040 q 977 578 977 785 q 931 362 977 467 q 805 176 886 256 l 1008 176 l 1008 0 "
        },
        "ύ": {
            "x_min": 0,
            "x_max": 656,
            "ha": 767,
            "o": "m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 m 579 1039 l 378 823 l 279 823 l 401 1039 l 579 1039 "
        },
        "z": {
            "x_min": 0,
            "x_max": 663.890625,
            "ha": 753,
            "o": "m 663 0 l 0 0 l 0 154 l 411 591 l 25 591 l 25 749 l 650 749 l 650 584 l 245 165 l 663 165 l 663 0 "
        },
        "™": {
            "x_min": 0,
            "x_max": 951,
            "ha": 1063,
            "o": "m 405 921 l 255 921 l 255 506 l 149 506 l 149 921 l 0 921 l 0 1013 l 405 1013 l 405 921 m 951 506 l 852 506 l 852 916 l 750 506 l 643 506 l 539 915 l 539 506 l 442 506 l 442 1013 l 595 1012 l 695 625 l 794 1013 l 951 1013 l 951 506 "
        },
        "ή": {
            "x_min": 0,
            "x_max": 669,
            "ha": 779,
            "o": "m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 m 495 1039 l 293 823 l 195 823 l 317 1039 l 495 1039 "
        },
        "Θ": {
            "x_min": 0,
            "x_max": 993,
            "ha": 1092,
            "o": "m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 133 883 0 733 q 497 1040 272 1040 q 861 883 722 1040 q 993 505 993 733 q 861 127 993 277 q 497 -29 722 -29 m 497 154 q 711 266 631 154 q 782 506 782 367 q 712 746 782 648 q 497 858 634 858 q 281 746 361 858 q 211 506 211 648 q 280 266 211 365 q 497 154 359 154 m 676 430 l 316 430 l 316 593 l 676 593 l 676 430 "
        },
        "®": {
            "x_min": 3,
            "x_max": 1007,
            "ha": 1104,
            "o": "m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 782 190 l 639 190 q 627 225 632 202 q 623 285 623 248 l 623 326 q 603 411 623 384 q 527 439 584 439 l 388 439 l 388 190 l 257 190 l 257 829 l 566 829 q 709 787 654 829 q 772 654 772 740 q 746 559 772 604 q 675 497 720 514 q 735 451 714 483 q 756 341 756 419 l 756 299 q 760 244 756 265 q 782 212 764 223 l 782 190 m 546 718 l 388 718 l 388 552 l 541 552 q 612 572 584 552 q 641 635 641 593 q 614 695 641 672 q 546 718 587 718 "
        },
        "~": {
            "x_min": 0,
            "x_max": 851,
            "ha": 949,
            "o": "m 851 968 q 795 750 851 831 q 599 656 730 656 q 406 744 506 656 q 259 832 305 832 q 162 775 193 832 q 139 656 139 730 l 0 656 q 58 871 0 787 q 251 968 124 968 q 442 879 341 968 q 596 791 544 791 q 691 849 663 791 q 712 968 712 892 l 851 968 "
        },
        "Ε": {
            "x_min": 0,
            "x_max": 761.546875,
            "ha": 824,
            "o": "m 761 0 l 0 0 l 0 1012 l 735 1012 l 735 836 l 206 836 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "
        },
        "³": {
            "x_min": 0,
            "x_max": 467,
            "ha": 564,
            "o": "m 467 555 q 393 413 467 466 q 229 365 325 365 q 70 413 134 365 q 0 565 0 467 l 123 565 q 163 484 131 512 q 229 461 190 461 q 299 486 269 461 q 329 553 329 512 q 281 627 329 607 q 187 641 248 641 l 187 722 q 268 737 237 722 q 312 804 312 758 q 285 859 312 837 q 224 882 259 882 q 165 858 189 882 q 135 783 140 834 l 12 783 q 86 930 20 878 q 230 976 145 976 q 379 931 314 976 q 444 813 444 887 q 423 744 444 773 q 365 695 402 716 q 439 640 412 676 q 467 555 467 605 "
        },
        "[": {
            "x_min": 0,
            "x_max": 347.21875,
            "ha": 444,
            "o": "m 347 -300 l 0 -300 l 0 1013 l 347 1013 l 347 866 l 188 866 l 188 -154 l 347 -154 l 347 -300 "
        },
        "L": {
            "x_min": 0,
            "x_max": 704.171875,
            "ha": 763,
            "o": "m 704 0 l 0 0 l 0 1013 l 208 1013 l 208 186 l 704 186 l 704 0 "
        },
        "σ": {
            "x_min": 0,
            "x_max": 851.3125,
            "ha": 940,
            "o": "m 851 594 l 712 594 q 761 369 761 485 q 658 83 761 191 q 379 -25 555 -25 q 104 87 208 -25 q 0 372 0 200 q 103 659 0 544 q 378 775 207 775 q 464 762 407 775 q 549 750 521 750 l 851 750 l 851 594 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 608 465 608 q 244 530 293 608 q 203 373 203 465 q 244 218 203 283 q 379 142 293 142 "
        },
        "ζ": {
            "x_min": 0,
            "x_max": 622,
            "ha": 701,
            "o": "m 622 -32 q 604 -158 622 -98 q 551 -278 587 -218 l 373 -278 q 426 -180 406 -229 q 446 -80 446 -131 q 421 -22 446 -37 q 354 -8 397 -8 q 316 -9 341 -8 q 280 -11 291 -11 q 75 69 150 -11 q 0 283 0 150 q 87 596 0 437 q 291 856 162 730 l 47 856 l 47 1013 l 592 1013 l 592 904 q 317 660 422 800 q 197 318 197 497 q 306 141 197 169 q 510 123 408 131 q 622 -32 622 102 "
        },
        "θ": {
            "x_min": 0,
            "x_max": 714,
            "ha": 817,
            "o": "m 357 1022 q 633 833 534 1022 q 714 486 714 679 q 634 148 714 288 q 354 -25 536 -25 q 79 147 175 -25 q 0 481 0 288 q 79 831 0 679 q 357 1022 177 1022 m 510 590 q 475 763 510 687 q 351 862 430 862 q 233 763 272 862 q 204 590 204 689 l 510 590 m 510 440 l 204 440 q 233 251 204 337 q 355 131 274 131 q 478 248 434 131 q 510 440 510 337 "
        },
        "Ο": {
            "x_min": 0,
            "x_max": 995,
            "ha": 1092,
            "o": "m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 132 883 0 733 q 497 1040 270 1040 q 861 883 722 1040 q 995 505 995 733 q 862 127 995 277 q 497 -29 724 -29 m 497 154 q 711 266 632 154 q 781 506 781 365 q 711 745 781 647 q 497 857 632 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "
        },
        "Γ": {
            "x_min": 0,
            "x_max": 703.84375,
            "ha": 742,
            "o": "m 703 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 703 1012 l 703 836 "
        },
        " ": {
            "x_min": 0,
            "x_max": 0,
            "ha": 375
        },
        "%": {
            "x_min": 0,
            "x_max": 1111,
            "ha": 1213,
            "o": "m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 "
        },
        "P": {
            "x_min": 0,
            "x_max": 771,
            "ha": 838,
            "o": "m 208 361 l 208 0 l 0 0 l 0 1013 l 450 1013 q 682 919 593 1013 q 771 682 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 421 837 l 208 837 l 208 544 l 410 544 q 525 579 480 544 q 571 683 571 615 q 527 792 571 747 q 421 837 484 837 "
        },
        "Έ": {
            "x_min": 0,
            "x_max": 1172.546875,
            "ha": 1235,
            "o": "m 1172 0 l 411 0 l 411 1012 l 1146 1012 l 1146 836 l 617 836 l 617 621 l 1101 621 l 1101 446 l 617 446 l 617 186 l 1172 186 l 1172 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "
        },
        "Ώ": {
            "x_min": 0.4375,
            "x_max": 1189.546875,
            "ha": 1289,
            "o": "m 1189 0 l 770 0 l 770 199 q 897 369 849 263 q 945 580 945 474 q 879 778 945 706 q 685 855 810 855 q 492 773 561 855 q 424 563 424 691 q 470 360 424 458 q 600 199 517 262 l 600 0 l 180 0 l 180 176 l 383 176 q 258 355 304 251 q 213 569 213 459 q 346 908 213 776 q 686 1040 479 1040 q 1025 912 892 1040 q 1158 578 1158 785 q 1112 362 1158 467 q 986 176 1067 256 l 1189 176 l 1189 0 m 314 1092 l 99 837 l 0 837 l 136 1092 l 314 1092 "
        },
        "_": {
            "x_min": 61.109375,
            "x_max": 766.671875,
            "ha": 828,
            "o": "m 766 -333 l 61 -333 l 61 -190 l 766 -190 l 766 -333 "
        },
        "Ϊ": {
            "x_min": -56,
            "x_max": 342,
            "ha": 503,
            "o": "m 342 1046 l 186 1046 l 186 1215 l 342 1215 l 342 1046 m 101 1046 l -56 1046 l -56 1215 l 101 1215 l 101 1046 m 249 0 l 41 0 l 41 1012 l 249 1012 l 249 0 "
        },
        "+": {
            "x_min": 43,
            "x_max": 784,
            "ha": 828,
            "o": "m 784 353 l 483 353 l 483 0 l 343 0 l 343 353 l 43 353 l 43 489 l 343 489 l 343 840 l 483 840 l 483 489 l 784 489 l 784 353 "
        },
        "½": {
            "x_min": 0,
            "x_max": 1090,
            "ha": 1188,
            "o": "m 1090 380 q 992 230 1090 301 q 779 101 886 165 q 822 94 784 95 q 924 93 859 93 l 951 93 l 973 93 l 992 93 l 1009 93 q 1046 93 1027 93 q 1085 93 1066 93 l 1085 0 l 650 0 l 654 38 q 815 233 665 137 q 965 376 965 330 q 936 436 965 412 q 869 461 908 461 q 806 435 831 461 q 774 354 780 409 l 659 354 q 724 505 659 451 q 870 554 783 554 q 1024 506 958 554 q 1090 380 1090 459 m 868 998 l 268 -28 l 154 -27 l 757 999 l 868 998 m 272 422 l 147 422 l 147 799 l 0 799 l 0 875 q 126 900 91 875 q 170 973 162 926 l 272 973 l 272 422 "
        },
        "Ρ": {
            "x_min": 0,
            "x_max": 771,
            "ha": 838,
            "o": "m 208 361 l 208 0 l 0 0 l 0 1012 l 450 1012 q 682 919 593 1012 q 771 681 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 422 836 l 209 836 l 209 544 l 410 544 q 525 579 480 544 q 571 683 571 614 q 527 791 571 747 q 422 836 484 836 "
        },
        "'": {
            "x_min": 0,
            "x_max": 192,
            "ha": 289,
            "o": "m 192 834 q 137 692 192 751 q 0 626 82 632 l 0 697 q 101 830 101 726 l 0 830 l 0 1013 l 192 1013 l 192 834 "
        },
        "ª": {
            "x_min": 0,
            "x_max": 350,
            "ha": 393,
            "o": "m 350 625 l 245 625 q 237 648 241 636 q 233 672 233 661 q 117 611 192 611 q 33 643 66 611 q 0 727 0 675 q 116 846 0 828 q 233 886 233 864 q 211 919 233 907 q 168 931 190 931 q 108 877 108 931 l 14 877 q 56 977 14 942 q 165 1013 98 1013 q 270 987 224 1013 q 329 903 329 955 l 329 694 q 332 661 329 675 q 350 641 336 648 l 350 625 m 233 774 l 233 809 q 151 786 180 796 q 97 733 97 768 q 111 700 97 712 q 149 689 126 689 q 210 713 187 689 q 233 774 233 737 "
        },
        "΅": {
            "x_min": 57,
            "x_max": 584,
            "ha": 753,
            "o": "m 584 810 l 455 810 l 455 952 l 584 952 l 584 810 m 521 1064 l 305 810 l 207 810 l 343 1064 l 521 1064 m 186 810 l 57 810 l 57 952 l 186 952 l 186 810 "
        },
        "T": {
            "x_min": 0,
            "x_max": 809,
            "ha": 894,
            "o": "m 809 831 l 509 831 l 509 0 l 299 0 l 299 831 l 0 831 l 0 1013 l 809 1013 l 809 831 "
        },
        "Φ": {
            "x_min": 0,
            "x_max": 949,
            "ha": 1032,
            "o": "m 566 0 l 385 0 l 385 121 q 111 230 222 121 q 0 508 0 340 q 112 775 0 669 q 385 892 219 875 l 385 1013 l 566 1013 l 566 892 q 836 776 732 875 q 949 507 949 671 q 838 231 949 341 q 566 121 728 121 l 566 0 m 566 285 q 701 352 650 285 q 753 508 753 419 q 703 658 753 597 q 566 729 653 720 l 566 285 m 385 285 l 385 729 q 245 661 297 717 q 193 516 193 604 q 246 356 193 427 q 385 285 300 285 "
        },
        "j": {
            "x_min": -45.828125,
            "x_max": 242,
            "ha": 361,
            "o": "m 242 830 l 42 830 l 42 1013 l 242 1013 l 242 830 m 242 -119 q 180 -267 242 -221 q 20 -308 127 -308 l -45 -308 l -45 -140 l -24 -140 q 25 -130 8 -140 q 42 -88 42 -120 l 42 748 l 242 748 l 242 -119 "
        },
        "Σ": {
            "x_min": 0,
            "x_max": 772.21875,
            "ha": 849,
            "o": "m 772 0 l 0 0 l 0 140 l 368 526 l 18 862 l 18 1012 l 740 1012 l 740 836 l 315 836 l 619 523 l 298 175 l 772 175 l 772 0 "
        },
        "1": {
            "x_min": 197.609375,
            "x_max": 628,
            "ha": 828,
            "o": "m 628 0 l 434 0 l 434 674 l 197 674 l 197 810 q 373 837 318 810 q 468 984 450 876 l 628 984 l 628 0 "
        },
        "›": {
            "x_min": 36.109375,
            "x_max": 792,
            "ha": 828,
            "o": "m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "
        },
        "<": {
            "x_min": 35.984375,
            "x_max": 791.671875,
            "ha": 828,
            "o": "m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "
        },
        "£": {
            "x_min": 0,
            "x_max": 716.546875,
            "ha": 814,
            "o": "m 716 38 q 603 -9 658 5 q 502 -24 548 -24 q 398 -10 451 -24 q 239 25 266 25 q 161 12 200 25 q 77 -29 122 0 l 0 113 q 110 211 81 174 q 151 315 151 259 q 117 440 151 365 l 0 440 l 0 515 l 73 515 q 35 610 52 560 q 15 710 15 671 q 119 910 15 831 q 349 984 216 984 q 570 910 480 984 q 693 668 674 826 l 501 668 q 455 791 501 746 q 353 830 414 830 q 256 795 298 830 q 215 705 215 760 q 249 583 215 655 q 283 515 266 548 l 479 515 l 479 440 l 309 440 q 316 394 313 413 q 319 355 319 374 q 287 241 319 291 q 188 135 263 205 q 262 160 225 152 q 332 168 298 168 q 455 151 368 168 q 523 143 500 143 q 588 152 558 143 q 654 189 617 162 l 716 38 "
        },
        "t": {
            "x_min": 0,
            "x_max": 412,
            "ha": 511,
            "o": "m 412 -6 q 349 -8 391 -6 q 287 -11 307 -11 q 137 38 177 -11 q 97 203 97 87 l 97 609 l 0 609 l 0 749 l 97 749 l 97 951 l 297 951 l 297 749 l 412 749 l 412 609 l 297 609 l 297 191 q 315 152 297 162 q 366 143 334 143 q 389 143 378 143 q 412 143 400 143 l 412 -6 "
        },
        "¬": {
            "x_min": 0,
            "x_max": 704,
            "ha": 801,
            "o": "m 704 93 l 551 93 l 551 297 l 0 297 l 0 450 l 704 450 l 704 93 "
        },
        "λ": {
            "x_min": 0,
            "x_max": 701.390625,
            "ha": 775,
            "o": "m 701 0 l 491 0 l 345 444 l 195 0 l 0 0 l 238 697 l 131 1013 l 334 1013 l 701 0 "
        },
        "W": {
            "x_min": 0,
            "x_max": 1291.671875,
            "ha": 1399,
            "o": "m 1291 1013 l 1002 0 l 802 0 l 645 777 l 490 0 l 288 0 l 0 1013 l 215 1013 l 388 298 l 534 1012 l 757 1013 l 904 299 l 1076 1013 l 1291 1013 "
        },
        ">": {
            "x_min": 36.109375,
            "x_max": 792,
            "ha": 828,
            "o": "m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "
        },
        "v": {
            "x_min": 0,
            "x_max": 740.28125,
            "ha": 828,
            "o": "m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "
        },
        "τ": {
            "x_min": 0.28125,
            "x_max": 618.734375,
            "ha": 699,
            "o": "m 618 593 l 409 593 l 409 0 l 210 0 l 210 593 l 0 593 l 0 749 l 618 749 l 618 593 "
        },
        "ξ": {
            "x_min": 0,
            "x_max": 640,
            "ha": 715,
            "o": "m 640 -14 q 619 -157 640 -84 q 563 -299 599 -230 l 399 -299 q 442 -194 433 -223 q 468 -85 468 -126 q 440 -25 468 -41 q 368 -10 412 -10 q 333 -11 355 -10 q 302 -13 311 -13 q 91 60 179 -13 q 0 259 0 138 q 56 426 0 354 q 201 530 109 493 q 106 594 144 553 q 65 699 65 642 q 94 787 65 747 q 169 856 123 828 l 22 856 l 22 1013 l 597 1013 l 597 856 l 497 857 q 345 840 398 857 q 257 736 257 812 q 366 614 257 642 q 552 602 416 602 l 552 446 l 513 446 q 313 425 379 446 q 199 284 199 389 q 312 162 199 184 q 524 136 418 148 q 640 -14 640 105 "
        },
        "&": {
            "x_min": -1,
            "x_max": 910.109375,
            "ha": 1007,
            "o": "m 910 -1 l 676 -1 l 607 83 q 291 -47 439 -47 q 50 100 135 -47 q -1 273 -1 190 q 51 431 -1 357 q 218 568 104 505 q 151 661 169 629 q 120 769 120 717 q 201 951 120 885 q 382 1013 276 1013 q 555 957 485 1013 q 635 789 635 894 q 584 644 635 709 q 468 539 548 597 l 615 359 q 664 527 654 440 l 844 527 q 725 223 824 359 l 910 -1 m 461 787 q 436 848 461 826 q 381 870 412 870 q 325 849 349 870 q 301 792 301 829 q 324 719 301 757 q 372 660 335 703 q 430 714 405 680 q 461 787 461 753 m 500 214 l 318 441 q 198 286 198 363 q 225 204 198 248 q 347 135 268 135 q 425 153 388 135 q 500 214 462 172 "
        },
        "Λ": {
            "x_min": 0,
            "x_max": 894.453125,
            "ha": 974,
            "o": "m 894 0 l 666 0 l 447 757 l 225 0 l 0 0 l 344 1013 l 547 1013 l 894 0 "
        },
        "I": {
            "x_min": 41,
            "x_max": 249,
            "ha": 365,
            "o": "m 249 0 l 41 0 l 41 1013 l 249 1013 l 249 0 "
        },
        "G": {
            "x_min": 0,
            "x_max": 971,
            "ha": 1057,
            "o": "m 971 -1 l 829 -1 l 805 118 q 479 -29 670 -29 q 126 133 261 -29 q 0 509 0 286 q 130 884 0 737 q 493 1040 268 1040 q 790 948 659 1040 q 961 698 920 857 l 736 698 q 643 813 709 769 q 500 857 578 857 q 285 746 364 857 q 213 504 213 644 q 285 263 213 361 q 505 154 365 154 q 667 217 598 154 q 761 374 736 280 l 548 374 l 548 548 l 971 548 l 971 -1 "
        },
        "ΰ": {
            "x_min": 0,
            "x_max": 655,
            "ha": 767,
            "o": "m 583 810 l 454 810 l 454 952 l 583 952 l 583 810 m 186 810 l 57 809 l 57 952 l 186 952 l 186 810 m 516 1039 l 315 823 l 216 823 l 338 1039 l 516 1039 m 655 417 q 567 55 655 146 q 326 -25 489 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 439 247 410 142 q 455 422 455 304 l 455 748 l 655 748 l 655 417 "
        },
        "`": {
            "x_min": 0,
            "x_max": 190,
            "ha": 288,
            "o": "m 190 654 l 0 654 l 0 830 q 55 970 0 909 q 190 1040 110 1031 l 190 969 q 111 922 134 952 q 88 836 88 892 l 190 836 l 190 654 "
        },
        "·": {
            "x_min": 0,
            "x_max": 207,
            "ha": 304,
            "o": "m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "
        },
        "Υ": {
            "x_min": -0.21875,
            "x_max": 836.171875,
            "ha": 914,
            "o": "m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "
        },
        "r": {
            "x_min": 0,
            "x_max": 431.9375,
            "ha": 513,
            "o": "m 431 564 q 269 536 320 564 q 200 395 200 498 l 200 0 l 0 0 l 0 748 l 183 748 l 183 618 q 285 731 224 694 q 431 768 345 768 l 431 564 "
        },
        "x": {
            "x_min": 0,
            "x_max": 738.890625,
            "ha": 826,
            "o": "m 738 0 l 504 0 l 366 238 l 230 0 l 0 0 l 252 382 l 11 749 l 238 749 l 372 522 l 502 749 l 725 749 l 488 384 l 738 0 "
        },
        "μ": {
            "x_min": 0,
            "x_max": 647,
            "ha": 754,
            "o": "m 647 0 l 477 0 l 477 68 q 411 9 448 30 q 330 -11 374 -11 q 261 3 295 -11 q 199 43 226 18 l 199 -278 l 0 -278 l 0 749 l 199 749 l 199 358 q 216 222 199 268 q 322 152 244 152 q 435 240 410 152 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "
        },
        "h": {
            "x_min": 0,
            "x_max": 669,
            "ha": 782,
            "o": "m 669 0 l 469 0 l 469 390 q 449 526 469 472 q 353 607 420 607 q 248 554 295 607 q 201 441 201 501 l 201 0 l 0 0 l 0 1013 l 201 1013 l 201 665 q 303 743 245 715 q 425 772 362 772 q 609 684 542 772 q 669 484 669 605 l 669 0 "
        },
        ".": {
            "x_min": 0,
            "x_max": 206,
            "ha": 303,
            "o": "m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 "
        },
        "φ": {
            "x_min": -1,
            "x_max": 921,
            "ha": 990,
            "o": "m 542 -278 l 367 -278 l 367 -22 q 99 92 200 -22 q -1 376 -1 206 q 72 627 -1 520 q 288 769 151 742 l 288 581 q 222 495 243 550 q 202 378 202 439 q 240 228 202 291 q 367 145 285 157 l 367 776 l 515 776 q 807 667 694 776 q 921 379 921 558 q 815 93 921 209 q 542 -22 709 -22 l 542 -278 m 542 145 q 672 225 625 145 q 713 381 713 291 q 671 536 713 470 q 542 611 624 611 l 542 145 "
        },
        ";": {
            "x_min": 0,
            "x_max": 208,
            "ha": 306,
            "o": "m 208 528 l 0 528 l 0 735 l 208 735 l 208 528 m 208 6 q 152 -151 208 -89 q 0 -238 96 -212 l 0 -158 q 87 -100 61 -136 q 113 0 113 -65 l 0 0 l 0 207 l 208 207 l 208 6 "
        },
        "f": {
            "x_min": 0,
            "x_max": 424,
            "ha": 525,
            "o": "m 424 609 l 300 609 l 300 0 l 107 0 l 107 609 l 0 609 l 0 749 l 107 749 q 145 949 107 894 q 328 1019 193 1019 l 424 1015 l 424 855 l 362 855 q 312 841 324 855 q 300 797 300 827 q 300 773 300 786 q 300 749 300 761 l 424 749 l 424 609 "
        },
        "“": {
            "x_min": 0,
            "x_max": 468,
            "ha": 567,
            "o": "m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 m 468 631 l 278 631 l 278 807 q 333 947 278 885 q 468 1017 388 1010 l 468 947 q 366 813 366 921 l 468 813 l 468 631 "
        },
        "A": {
            "x_min": 0,
            "x_max": 966.671875,
            "ha": 1069,
            "o": "m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 810 l 340 376 l 623 376 "
        },
        "6": {
            "x_min": 57,
            "x_max": 771,
            "ha": 828,
            "o": "m 744 734 l 544 734 q 500 802 533 776 q 425 828 466 828 q 315 769 359 828 q 264 571 264 701 q 451 638 343 638 q 691 537 602 638 q 771 315 771 449 q 683 79 771 176 q 420 -29 586 -29 q 134 123 227 -29 q 57 455 57 250 q 184 865 57 721 q 452 988 293 988 q 657 916 570 988 q 744 734 744 845 m 426 128 q 538 178 498 128 q 578 300 578 229 q 538 422 578 372 q 415 479 493 479 q 303 430 342 479 q 264 313 264 381 q 308 184 264 240 q 426 128 352 128 "
        },
        "‘": {
            "x_min": 0,
            "x_max": 190,
            "ha": 289,
            "o": "m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 "
        },
        "ϊ": {
            "x_min": -55,
            "x_max": 337,
            "ha": 389,
            "o": "m 337 810 l 208 810 l 208 952 l 337 952 l 337 810 m 74 810 l -55 810 l -55 952 l 74 952 l 74 810 m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 "
        },
        "π": {
            "x_min": 0.5,
            "x_max": 838.890625,
            "ha": 938,
            "o": "m 838 593 l 750 593 l 750 0 l 549 0 l 549 593 l 287 593 l 287 0 l 88 0 l 88 593 l 0 593 l 0 749 l 838 749 l 838 593 "
        },
        "ά": {
            "x_min": -1,
            "x_max": 722,
            "ha": 835,
            "o": "m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "
        },
        "O": {
            "x_min": 0,
            "x_max": 994,
            "ha": 1094,
            "o": "m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 131 883 0 733 q 497 1040 270 1040 q 860 883 721 1040 q 994 505 994 733 q 862 127 994 277 q 497 -29 723 -29 m 497 154 q 710 266 631 154 q 780 506 780 365 q 710 745 780 647 q 497 857 631 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "
        },
        "n": {
            "x_min": 0,
            "x_max": 669,
            "ha": 782,
            "o": "m 669 0 l 469 0 l 469 452 q 442 553 469 513 q 352 601 412 601 q 245 553 290 601 q 200 441 200 505 l 200 0 l 0 0 l 0 748 l 194 748 l 194 659 q 289 744 230 713 q 416 775 349 775 q 600 700 531 775 q 669 509 669 626 l 669 0 "
        },
        "3": {
            "x_min": 61,
            "x_max": 767,
            "ha": 828,
            "o": "m 767 290 q 653 51 767 143 q 402 -32 548 -32 q 168 48 262 -32 q 61 300 61 140 l 250 300 q 298 173 250 219 q 405 132 343 132 q 514 169 471 132 q 563 282 563 211 q 491 405 563 369 q 343 432 439 432 l 343 568 q 472 592 425 568 q 534 701 534 626 q 493 793 534 758 q 398 829 453 829 q 306 789 344 829 q 268 669 268 749 l 80 669 q 182 909 80 823 q 410 986 274 986 q 633 916 540 986 q 735 719 735 840 q 703 608 735 656 q 615 522 672 561 q 727 427 687 486 q 767 290 767 369 "
        },
        "9": {
            "x_min": 58,
            "x_max": 769,
            "ha": 828,
            "o": "m 769 492 q 646 90 769 232 q 384 -33 539 -33 q 187 35 271 -33 q 83 224 98 107 l 282 224 q 323 154 286 182 q 404 127 359 127 q 513 182 471 127 q 563 384 563 248 q 475 335 532 355 q 372 315 418 315 q 137 416 224 315 q 58 642 58 507 q 144 877 58 781 q 407 984 239 984 q 694 827 602 984 q 769 492 769 699 m 416 476 q 525 521 488 476 q 563 632 563 566 q 521 764 563 709 q 403 826 474 826 q 297 773 337 826 q 258 649 258 720 q 295 530 258 577 q 416 476 339 476 "
        },
        "l": {
            "x_min": 41,
            "x_max": 240,
            "ha": 363,
            "o": "m 240 0 l 41 0 l 41 1013 l 240 1013 l 240 0 "
        },
        "¤": {
            "x_min": 40.265625,
            "x_max": 727.203125,
            "ha": 825,
            "o": "m 727 792 l 594 659 q 620 552 620 609 q 598 459 620 504 l 725 331 l 620 224 l 491 352 q 382 331 443 331 q 273 352 322 331 l 144 224 l 40 330 l 167 459 q 147 552 147 501 q 172 658 147 608 l 40 794 l 147 898 l 283 759 q 383 776 330 776 q 482 759 434 776 l 620 898 l 727 792 m 383 644 q 308 617 334 644 q 283 551 283 590 q 309 489 283 517 q 381 462 335 462 q 456 488 430 462 q 482 554 482 515 q 455 616 482 588 q 383 644 429 644 "
        },
        "κ": {
            "x_min": 0,
            "x_max": 691.84375,
            "ha": 779,
            "o": "m 691 0 l 479 0 l 284 343 l 196 252 l 196 0 l 0 0 l 0 749 l 196 749 l 196 490 l 440 749 l 677 749 l 416 479 l 691 0 "
        },
        "4": {
            "x_min": 53,
            "x_max": 775.21875,
            "ha": 828,
            "o": "m 775 213 l 660 213 l 660 0 l 470 0 l 470 213 l 53 213 l 53 384 l 416 958 l 660 958 l 660 370 l 775 370 l 775 213 m 474 364 l 474 786 l 204 363 l 474 364 "
        },
        "p": {
            "x_min": 0,
            "x_max": 722,
            "ha": 824,
            "o": "m 415 -26 q 287 4 346 -26 q 192 92 228 34 l 192 -298 l 0 -298 l 0 750 l 192 750 l 192 647 q 289 740 230 706 q 416 775 347 775 q 649 645 566 775 q 722 375 722 534 q 649 106 722 218 q 415 -26 564 -26 m 363 603 q 232 529 278 603 q 192 375 192 465 q 230 222 192 286 q 360 146 276 146 q 487 221 441 146 q 526 371 526 285 q 488 523 526 458 q 363 603 443 603 "
        },
        "‡": {
            "x_min": 0,
            "x_max": 809,
            "ha": 894,
            "o": "m 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 l 809 804 l 809 621 l 509 621 l 509 387 l 809 387 l 809 205 l 509 205 l 509 0 l 299 0 l 299 205 l 0 205 l 0 387 l 299 387 l 299 621 "
        },
        "ψ": {
            "x_min": 0,
            "x_max": 875,
            "ha": 979,
            "o": "m 522 142 q 657 274 620 163 q 671 352 671 316 l 671 748 l 875 748 l 875 402 q 806 134 875 240 q 525 -22 719 -1 l 525 -278 l 349 -278 l 349 -22 q 65 135 152 -1 q 0 402 0 238 l 0 748 l 204 748 l 204 352 q 231 240 204 295 q 353 142 272 159 l 353 922 l 524 922 l 522 142 "
        },
        "η": {
            "x_min": 0,
            "x_max": 669,
            "ha": 779,
            "o": "m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 "
        }
    },
    "cssFontWeight": "bold",
    "ascender": 1216,
    "underlinePosition": -100,
    "cssFontStyle": "normal",
    "boundingBox": {
        "yMin": -333,
        "xMin": -162,
        "yMax": 1216,
        "xMax": 1681
    },
    "resolution": 1000,
    "original_font_information": {
        "postscript_name": "Helvetiker-Bold",
        "version_string": "Version 1.00 2004 initial release",
        "vendor_url": "http://www.magenta.gr",
        "full_font_name": "Helvetiker Bold",
        "font_family_name": "Helvetiker",
        "copyright": "Copyright (c) Magenta ltd, 2004.",
        "description": "",
        "trademark": "",
        "designer": "",
        "designer_url": "",
        "unique_font_identifier": "Magenta ltd:Helvetiker Bold:22-10-104",
        "license_url": "http://www.ellak.gr/fonts/MgOpen/license.html",
        "license_description": "Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r\n\r\nPermission is hereby granted, free of charge, to any person obtaining a copy of the fonts accompanying this license (\"Fonts\") and associated documentation files (the \"Font Software\"), to reproduce and distribute the Font Software, including without limitation the rights to use, copy, merge, publish, distribute, and/or sell copies of the Font Software, and to permit persons to whom the Font Software is furnished to do so, subject to the following conditions: \r\n\r\nThe above copyright and this permission notice shall be included in all copies of one or more of the Font Software typefaces.\r\n\r\nThe Font Software may be modified, altered, or added to, and in particular the designs of glyphs or characters in the Fonts may be modified and additional glyphs or characters may be added to the Fonts, only if the fonts are renamed to names not containing the word \"MgOpen\", or if the modifications are accepted for inclusion in the Font Software itself by the each appointed Administrator.\r\n\r\nThis License becomes null and void to the extent applicable to Fonts or Font Software that has been modified and is distributed under the \"MgOpen\" name.\r\n\r\nThe Font Software may be sold as part of a larger software package but no copy of one or more of the Font Software typefaces may be sold by itself. \r\n\r\nTHE FONT SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.",
        "manufacturer_name": "Magenta ltd",
        "font_sub_family_name": "Bold"
    },
    "descender": -334,
    "familyName": "Helvetiker",
    "lineHeight": 1549,
    "underlineThickness": 50
};
console.log("main container")

let myContainer = document.getElementsByClassName('myMainContainer')
var renderer = new THREE.WebGL1Renderer({antialias:true})

renderer.setSize(window.innerWidth,window.innerHeight)
myContainer.appendChild(renderer.domElement)
renderer.domElement.style.cursor='pointer'

let scene = new THREE.Scene()
scene.background = new THREE.Color(0x01374c)
scene.fog = new THREE.Fog(scene.background(10,20))

var camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,.1,100000)
camera.position(Set(0,-6,3))
var control = new THREE.OrbitControls(camera,renderer.domElement)
renderer.render(scene,camera)



















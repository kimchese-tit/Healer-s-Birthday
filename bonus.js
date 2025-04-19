let total = 75;
let w = window.innerWidth;
let h = window.innerHeight;

function random(min,max){
    return min + Math.floor(Math.random() * (max - min) );
}

function maxRandom(max) {
    return Math.random() * max ;
}

function generate() {
    for(var i = 0; i< total; i++) {
        $("body").append("<div class='confetti'></div>");
        gsap.set($(".confetti")[i],{
            x: maxRandom(w) ,
            y: random(h*-2, 0) ,
            opacity: 1,
            scale: maxRandom(0.5) + 0.5,
            backgroundColor: "hsl("+random(0, 360) + ",50%,50%)",
        });
        animate($(".confetti")[i]);
    }
}

function animate(elem){
    gsap.to(elem, {
        duration: maxRandom(5) + 4,
        y: h +40,
        ease:"none",
        repeat: -1,
        delay: -1
    });

    gsap.to(elem, {
        duration: maxRandom(5) + 1,
        x: "+=70",
        repeat: -1,
        yoyo: true,
        ease:"sine.inOut"
    });

    gsap.to(elem,{
        duration: maxRandom(5) +1,
        scaleX: 0.2,
        rotation: maxRandom(360),
        repeat: -1,
        yoyo:true,
        ease: "sine.inOut",
    });
}

generate();

window.onresize = function() { 
    gsap.killTweensOf(".confetti");
    Array.from($(".confetti")).forEach((e)=>e .remove());
    w = window.innerWidth;
    h = window.innerHeight;
    generate();
};


document.querySelector('button').addEventListener('click', () => {
    confetti({
      origin: {
        x: 0,
        y: 0.5
      },　//位置 0.5が真ん中
      particleCount: 50, //量
      zIndex: 1, //デフォルトは100
      spread: 60, //角度。360で全方向に噴射
      ticks: 500, //落ちていくまでの時間。200がデフォルト
    });
    confetti({
      origin: {
        x: 1,
        y: 0.5
      },　//位置 0.5が真ん中
      particleCount: 50, //量
      zIndex: 1, //デフォルトは100
      spread: 60, //角度。360で全方向に噴射
      ticks: 500, //落ちていくまでの時間。200がデフォルト
    });
    confetti({
      origin: {
        x: 0.5,
        y: 0.5
      },　//位置 0.5が真ん中
      particleCount: 50, //量
      zIndex: 1, //デフォルトは100
      spread: 60, //角度。360で全方向に噴射
      ticks: 500, //落ちていくまでの時間。200がデフォルト
    });
  });
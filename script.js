const myWave = $('#myID').wavify({
    height: 730,
    bones: 3,
    amplitude: 50,
    color: 'rgb(29,29,29)',
    speed: .25
});
const moonPath = "M17 28C17 43.1878 28 55.5 28 55.5C12.8122 55.5 0.5 43.1878 0.5 28C0.5 12.8122 12.8122 0.5 28 0.5C28 0.5 17 12.8122 17 28Z";
const sunPath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";
const darkmode = document.querySelector('#darkmode');
const darkmode2 = document.querySelector('#darkmode2');
let toggle = false;
darkmode.addEventListener('click', () => {
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });
    timeline.add({
            targets: ".sun",
            d: [{
                value: toggle ? sunPath : moonPath
            }]
        })
        .add({
            targets: '#darkmode, #darkmode2',
            rotate: toggle ? 0 : 320
        }, '-=350')
        .add({
            targets: 'body',
            backgroundColor: toggle ? 'rgb(255,255,255)' : 'rgb(29,29,29)',
            color: toggle ? 'rgb(29,29,29)' : 'rgb(255,255,255)'
        }, '-=700')
        .add({
            targets: '.nav a, .button',
            color: toggle ? 'rgb(29,29,29)' : 'rgb(255,255,255)'
        }, '-=700')
        .add({
            targets: '#logo',
            fill: toggle ? 'rgb(29,29,29)' : 'rgb(255,255,255)'
        }, '-=700');

    if (!toggle) {
        toggle = true;
        myWave.updateColor({
            color: 'rgb(255,255,255)',
            timing: 1
        });
    } else {
        toggle = false;
        myWave.updateColor({
            color: 'rgb(29,29,29)',
            timing: 1
        });
    }
});
darkmode2.addEventListener('click', () => {
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });
    timeline.add({
            targets: ".sun",
            d: [{
                value: toggle ? sunPath : moonPath
            }]
        })
        .add({
            targets: '#darkmode, #darkmode2',
            rotate: toggle ? 0 : 320
        }, '-=350')
        .add({
            targets: 'body',
            backgroundColor: toggle ? 'rgb(255,255,255)' : 'rgb(29,29,29)',
            color: toggle ? 'rgb(29,29,29)' : 'rgb(255,255,255)'
        }, '-=700')
        .add({
            targets: '.nav a, .button',
            color: toggle ? 'rgb(29,29,29)' : 'rgb(255,255,255)'
        }, '-=700')
        .add({
            targets: '#logo',
            fill: toggle ? 'rgb(29,29,29)' : 'rgb(255,255,255)'
        }, '-=700');

    if (!toggle) {
        toggle = true;
        myWave.updateColor({
            color: 'rgb(255,255,255)',
            timing: 1
        });
    } else {
        toggle = false;
        myWave.updateColor({
            color: 'rgb(29,29,29)',
            timing: 1
        });
    }
});
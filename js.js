const d = document.querySelector('#days');
const h = document.querySelector('#hours');
const m = document.querySelector('#minutes');
const s = document.querySelector('#seconds');
const e = document.querySelector('h5');
const container = document.querySelector('.container');
const b = document.querySelector('body');

const endDate = new Date(2022,11,21,00);
const endTime = endDate.getTime();
// console.log(Math.floor(endDate));
const countdown = () => {
    let todyDate = new Date();
    let todayTime = todyDate.getTime();
    let reamingTime = endDate - todayTime;
    let oneMin = 60 * 1000;
    // console.log(oneMin);
    let oneHr = 60 * oneMin;
    // console.log(oneHr);
    let oneDay = 24 * oneHr;

    const addZeroes = (num) => (num < 10 ? `0${num}` : num);

    if(endTime < todayTime){
        clearInterval(i);
        container.style.display = 'none';
        alert('Min Aung Hlaing is M.A.L');
        b.style.backgroundImage = "URL('https://i.pinimg.com/736x/d4/33/39/d43339e81bf0e944af88665a75e6d8f3.jpg')";
        e.innerHTML = `
            <h6>
                <span style="--i:1;">H</span>
                <span style="--i:2;">A</span>
                <span style="--i:3;">P</span>
                <span style="--i:4;">P</span>
                <span style="--i:5;">Y</span>
                <span style="--i:6;">N</span>
                <span style="--i:7;">E</span>
                <span style="--i:8;">W</span>
                <span style="--i:9;">Y</span>
                <span style="--i:10;">E</span>
                <span style="--i:11;">A</span>
                <span style="--i:12;">R</span>
            </h6>
        `;
        return;
    }else{
        const daysLeft = Math.floor(reamingTime / oneDay ) ;
        console.log(daysLeft);
        const hrLeft = Math.floor((reamingTime % oneDay) / oneHr);
        console.log(hrLeft);
        const minLeft = Math.floor((reamingTime % oneHr) / oneMin);
        console.log(minLeft);
        const secondLeft = Math.floor((reamingTime % oneMin) / 1000);
        console.log(secondLeft);

        d.textContent = addZeroes(daysLeft);
        h.textContent = addZeroes(hrLeft);
        m.textContent = addZeroes(minLeft);
        s.textContent = addZeroes(secondLeft);    
    }
}
const i = setInterval(() => {
    countdown();
}, 1000);
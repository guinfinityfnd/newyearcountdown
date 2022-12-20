const d = document.querySelector('#days');
const h = document.querySelector('#hours');
const m = document.querySelector('#minutes');
const s = document.querySelector('#seconds');
const e = document.querySelector('h5');
const container = document.querySelector('.container');

const endDate = new Date(2023,0,1,00);
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
        e.textContent = `Happy New Year & MALMAl`;
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
const btnEle = document.querySelector('.btn');
const contentEle = document.querySelector('.content');
const activityEle = document.querySelector('.activity');

btnEle.addEventListener('click',()=> {
    activityEle.style.display = 'block';
    newActivity();
});

async function newActivity() {
    const url = 'https://www.boredapi.com/api/activity/';
    const response = await fetch(url);
    const data = await response.json(); 
    const result = data.activity;
    contentEle.innerHTML = result;
}
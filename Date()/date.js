
const p=document.getElementById('D.M.Y')
const h1=document.getElementById('Fulltime')
const months=[
'January',
'February',
'March',
'April',
'May',
'June',
'July',
'August',
'September',
'October',
'November',
'December'
]
setTimeout(() =>1000);
function Fulltime1(){
    const date=new Date()
    p.textContent=`${date.getDay()} ${months[date.getMonth()]}, ${date.getFullYear()}`
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
    h1.textContent=`${hours}:${minutes}:${seconds}`

}


setInterval( Fulltime1 ,1000)
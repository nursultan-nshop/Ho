let num = prompt('0 мен 99 арасындағы санды енгізіңіз:')

if (num >= 0 && num <= 9) {
  alert('Сан:' + num)
} 
else if (num >= 10 && num <= 99) {
  let firstNum = Math.floor(num / 10);
  let secondNum = (num % 10)
  alert('Бірінші сан:' + firstNum + '\n' + 'Екінші сан:' + secondNum);
} 
else {
  alert('Тек 0 мен 99 арасындағы санды енгізіңіз.');
}
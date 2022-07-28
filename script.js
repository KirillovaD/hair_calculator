let form = document.querySelector('form');
const total = document.querySelector('.total');


form.addEventListener('submit', function(event){
  event.preventDefault();
  let sum = 0;
 
  chooseService();
  chooseMaster();



//Проверяем выбор мастер 
  function chooseMaster(){
    const masters = document.querySelector('select[name="category"]');
    const lenghts = document.querySelector('select[name="length"]');

    const hairMaster = [1, 1.5 , 1.75];
    const stylist = [1.5, 1.75, 2];
    const topStylist = [1.75, 2, 2.25]
    let lengthPrice = 1; 

    for(let i = 0; i < masters.length; i++){
      if (masters.value === 0){
        lengthPrice = hairMaster[lenghts.value]
      } else if (masters.value === 1){
        lengthPrice = stylist[lenghts.value]
      } else if (masters.value === 2){
        lengthPrice = topStylist[lenghts.value]
      }
      return lengthPrice;
    }
    sum = sum * lengthPrice;

  }


//Проверям выбор категории услуг
  function chooseService(){
    const services = document.querySelectorAll('input[type="checkbox"]');
    for(let i = 0; i < services.length; i++){ //проходимся циклом для выбора всех отмечененных элементов
      if(services[i].checked) {
        sum += Number(services[i].value);
      }
    }
   
  }
  total.textContent = sum + ' руб.';
});
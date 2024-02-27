// #pricing
let premiumplan = document.getElementById('premium')
  premiumplan.style.border = "2px solid red"

const select = (id)=>{
  let freeplan = document.getElementById('free')
  let standardplan = document.getElementById('standard')
  let premiumplan = document.getElementById('premium')

  if(id == 1){
    freeplan.style.border = '2px solid #f53838'
    standardplan.style.border ='2px solid #dddddd'
    premiumplan.style.border ='2px solid #dddddd'

  }else if(id==2){
    freeplan.style.border ='2px solid #dddddd'
    standardplan.style.border = '2px solid #f53838'
    premiumplan.style.border ='2px solid #dddddd'
  }else if(id==3){
    freeplan.style.border ='2px solid #dddddd'
    standardplan.style.border ='2px solid #dddddd'
    premiumplan.style.border = '2px solid #f53838'
  }
}


// #testimonial
let counter = 0;
let customer1 = document.getElementById("customer1");
let customer2 = document.getElementById("customer2");
let customer3 = document.getElementById("customer3");

customer3.style.border = '2px solid #f53838'

const next = () => {
  if (counter == 0) {
    change(1)
    counter++
  } else if(counter == 1){
    change(2)
    counter++
  }else if(counter == 2){
    change(0)
    counter = 0
  }
}

const previous = () => {
  if (counter == 0) {
    change(1)
    console.log(1)
    counter++
  } else if(counter == 1){
    change(2)
    console.log(2)

    counter++
  }else if(counter == 2){
    change(0)
    console.log(0)
    counter = 0
  }
};

let selector1 = document.getElementById('selector1')
selector1.style.backgroundColor='#f53838'

const change = (id)=>{
  let selector1 = document.getElementById('selector1')
  let selector2 = document.getElementById('selector2')
  let selector3 = document.getElementById('selector3')
  screenwidth = window.innerWidth
 
  if(screenwidth < 992){
    if(id==0){
      customer1.style.left= `200%`;
      customer2.style.left = `100%`;
      customer3.style.left = `0%`;
  
      selector1.style.backgroundColor='#f53838'
      selector2.style.backgroundColor='#dee0e0'
      selector3.style.backgroundColor='#dee0e0'
      
      customer3.style.border = '2px solid #f53838'
      customer2.style.border ='2px solid #76787a'
      customer1.style.border ='2px solid #76787a'
  
    }else if(id==1){
      customer1.style.left= `100%`;
      customer2.style.left = `0%`;
      customer3.style.left = `200%`;
  
      selector2.style.backgroundColor='#f53838'
      selector1.style.backgroundColor='#dee0e0'
      selector3.style.backgroundColor='#dee0e0'
  
      customer2.style.border = '2px solid #f53838'
      customer3.style.border ='2px solid #76787a'
      customer1.style.border ='2px solid #76787a'
    }else if(id ==2){
      customer1.style.left= `0%`;
      customer2.style.left = `200%`;
      customer3.style.left = `100%`;
  
      selector3.style.backgroundColor='#f53838'
      selector1.style.backgroundColor='#dee0e0'
      selector2.style.backgroundColor='#dee0e0'
  
      customer1.style.border = '2px solid #f53838'
      customer2.style.border ='2px solid #76787a'
      customer3.style.border ='2px solid #76787a'
  
    }


  }else{

    if(id==0){
      customer1.style.left= `90%`;
      customer2.style.left = `45%`;
      customer3.style.left = `0%`;
  
      selector1.style.backgroundColor='#f53838'
      selector2.style.backgroundColor='#dee0e0'
      selector3.style.backgroundColor='#dee0e0'
      
      customer3.style.border = '2px solid #f53838'
      customer2.style.border ='2px solid #76787a'
      customer1.style.border ='2px solid #76787a'
  
    }else if(id==1){
      customer1.style.left= `45%`;
      customer2.style.left = `0%`;
      customer3.style.left = `90%`;
  
      selector2.style.backgroundColor='#f53838'
      selector1.style.backgroundColor='#dee0e0'
      selector3.style.backgroundColor='#dee0e0'
  
      customer2.style.border = '2px solid #f53838'
      customer3.style.border ='2px solid #76787a'
      customer1.style.border ='2px solid #76787a'
    }else if(id ==2){
      customer1.style.left= `0%`;
      customer2.style.left = `90%`;
      customer3.style.left = `45%`;
  
      selector3.style.backgroundColor='#f53838'
      selector1.style.backgroundColor='#dee0e0'
      selector2.style.backgroundColor='#dee0e0'
  
      customer1.style.border = '2px solid #f53838'
      customer2.style.border ='2px solid #76787a'
      customer3.style.border ='2px solid #76787a'
  
    }
  }


}

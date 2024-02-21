userList = [
  {
    image: "customer-1.png",
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    ratings: "4.5",
    review:
      "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
  },
  {
    image: "customer-2.png",
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    ratings: "4.5",
    review:
      "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
  },
  {
    image: "customer-3.png",
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    ratings: "4.5",
    review:
      "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
  },
];

let counter = 0;
let customer1 = document.getElementById("customer1");
let customer2 = document.getElementById("customer2");
let customer3 = document.getElementById("customer3");

customer1.style.left = `90%`;
customer2.style.left = `45%`;
customer3.style.left = `0%`;

customer3.style.border = '2px solid #f53838'

const next = () => {
  if (counter == 0) {
    customer1.style.transform = `translateX(-112%)`;
    customer2.style.transform = `translateX(-112%)`;
    customer3.style.transform = `translateX(226%)`;

    customer2.style.border = '2px solid #f53838'
    customer3.style.border ='2px solid #76787a'

    counter++
  } else if(counter == 1){
    customer1.style.transform = `translateX(-225%)`;
    customer2.style.transform = `translateX(+113%)`;
    customer3.style.transform = `translateX(113%)`;

    customer1.style.border = '2px solid #f53838'
    customer2.style.border ='2px solid #76787a'


    counter++
  }else if(counter == 2){
    customer1.style.transform = `translateX(0%)`;
    customer2.style.transform = `translateX(0%)`;
    customer3.style.transform = `translateX(0%)`;

    
    customer3.style.border = '2px solid #f53838'
    customer1.style.border ='2px solid #76787a'

    counter = 0
  }
}

const previous = () => {
  if (counter == 0) {
    customer1.style.transform = `translateX(-225%)`;
    customer2.style.transform = `translateX(+113%)`;
    customer3.style.transform = `translateX(113%)`;

    customer1.style.border = '2px solid #f53838'
    customer3.style.border ='2px solid #76787a'

    counter++
  } else if(counter == 1){
    customer1.style.transform = `translateX(-112%)`;
    customer2.style.transform = `translateX(-112%)`;
    customer3.style.transform = `translateX(226%)`;

    customer2.style.border = '2px solid #f53838'
    customer1.style.border ='2px solid #76787a'

    counter++
  }else if(counter == 2){
    customer1.style.transform = `translateX(0%)`;
    customer2.style.transform = `translateX(0%)`;
    customer3.style.transform = `translateX(0%)`;

    customer3.style.border = '2px solid #f53838'
    customer2.style.border ='2px solid #76787a'

    counter = 0
  }
};

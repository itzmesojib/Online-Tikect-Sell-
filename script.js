let totalPrice = 0 ;
let counter = 0;
let bookedSeat = [];
const seats = document.querySelectorAll('.seatBtn');
for (let seat of seats){
    seat.addEventListener('click', function(a){
        const seatId = a.target.id
        if(counter === 4){
            return alert('Vaiya, Goribs der 4 tar besi Tikect dewa hoy na .');
        }
 
        
        if(bookedSeat.includes(seatId)){
            return alert('amra valo manus, 1 ta seat 2 bar sell kori na.')
        }
        bookedSeat.push(seatId);
               counter++

        // seat left count
        const motSeatsLeft = document.getElementById('motSeatsLeft');
        const motSeatsLeftText = motSeatsLeft.innerText;
        const setNewSeat = motSeatsLeftText - 1;
        motSeatsLeft.innerText = setNewSeat;
        if(setNewSeat <= 35){
            alert('Vaiya, Goribs der 4 tar besi Tikect dewa hoy na .');
            return 
                
        }

        // tap to change background color

        const keyBgChange = seat;
        seat.classList.add('bg-[#1DD100]' , 'text-white');
        keyBgChange.classList.add('bg-[#1DD100]')

        // set seat count
        const selectSeat = document.getElementById('selectSeat');
        const selectSeatText = selectSeat.innerText;
        const selectSeatTextInt = parseInt(selectSeatText);
        const setNewSelectSeat = selectSeatTextInt + 1;
        selectSeat.innerText = setNewSelectSeat;
     
        // inject seat number 
    const seatNumber = seat.innerText;
    const showSeat = document.getElementById('showSeat');
    const p = document.createElement('p');
    p.innerText = seatNumber;
    showSeat.appendChild(p)
    // inject seat class name

    const showClass = document.getElementById('showClass');
    const className = 'Economoy'
    const classNameP = document.createElement('p');
    classNameP.innerText = className;
    showClass.appendChild(classNameP)

    //  inject price 

    const showPrice = document.getElementById('showPrice');
    const price = 550 ;
    const priceP = document.createElement('p');
    priceP.innerText = price;
    const finalPrice = showPrice.appendChild(priceP);
    
    //  sum of prices
        totalPrice += price
    const sumPrice = document.getElementById('sumPrice')
    const sumPriceText = sumPrice.innerText;
    sumPrice.innerText = totalPrice;
    const grandTotal = document.getElementById('grandTotal');
            const grandTotalText = grandTotal.innerText;
            grandTotal.innerText = totalPrice;
    });
}

        // Discount price
const apply = document.getElementById('apply');
apply.addEventListener('click', function(){
    const discountInput = document.getElementById('discountInput');
    const CupponInputValue = discountInput.value;
    if( totalPrice >= 2200){
        if(CupponInputValue === 'NEW15'){
            getDiscountPrice = totalPrice * 0.15 ;
            const discountPrice = totalPrice - getDiscountPrice
            const grandTotal = document.getElementById('grandTotal');
            const grandTotalText = grandTotal.innerText;
            grandTotal.innerText = discountPrice;
            const discountLabel = document.getElementById('discountLabel');
            discountLabel.classList.add('hidden');
        }
        else if ( CupponInputValue === 'Couple 20'){
            getDiscountPrice = totalPrice * 0.2 ;
            const discountPrice = totalPrice - getDiscountPrice
            const grandTotal = document.getElementById('grandTotal');
            const grandTotalText = grandTotal.innerText;
            grandTotal.innerText = discountPrice;
            const discountLabel = document.getElementById('discountLabel');
            discountLabel.classList.add('hidden');
        }
        else{
            alert('Vaiya Upore Cuppon Code Dewa Ase Valo kore Copy kore Paste Koren.')
            CupponInputValue = remove()
        }
    }
    else{
        alert('Apni Eto Goribs, Prothome 4 Ta Tikect Kinen Tarpor Discount er jonno Dekha Koiren .')
        CupponInputValue = remove()
    }
})

// information button

const name = document.getElementById('name');
const number = document.getElementById('number');
const email = document.getElementById('email');

submit.addEventListener('click', function(){
    const nameValue = name.value;
    const numberValue = number.value;
    const emailValue = email.value;
    if(nameValue === '' || numberValue === '' || emailValue === ''){
        const my_modal_1 = document.getElementById('my_modal_1');
        alert(' vaiya information gula dile ki apnar facebook id hack korteci naki, information den miya');

    }
})





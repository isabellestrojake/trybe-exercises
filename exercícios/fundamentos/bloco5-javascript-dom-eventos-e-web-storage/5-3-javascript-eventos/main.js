function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// 1 //
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDaysOfMonth() {
    let getDaysList = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1){
      let day = dezDaysList[index];
      let dayItem = document.createElement('li');

      if (day === 24 || day === 31) {
        dayItem.className = 'Holiday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      } else if (day === 4 || day === 11 || day === 18) {
        dayItem.className = 'Friday-day';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      } else if (day === 25) {
        dayItem.className = 'Holiday Friday-day';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      } else {
        dayItem.className = 'Day';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      }
      }
    }
  createDaysOfMonth();

// 2 //
    function createHolidayButton(buttonHoliday) {
      let buttonContainer = document.querySelector('.buttons-container');
      let newButton = document.createElement('button');
      let newButtonID = 'btn-holiday';

      newButton.innerHTML = buttonHoliday;
      newButton.id = newButtonID;
      buttonContainer.appendChild(newButton);
    }
  createHolidayButton('Feriados');

// 3 //
  function displayHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.Holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'red';

    getHolidayButton.addEventListener('click', function() {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    })
  };

displayHolidays();

// 4 //
  function createFridayButton(buttonFriday) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-friday';

  newButton.innerHTML = buttonFriday;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
}
createFridayButton('Sexta-feira');

// 5 //
  function displayFridays() {
    let getFridayButton = document.querySelector('#btn-friday');
    let getFridays = document.querySelectorAll('.Friday-day')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'blue';

    getFridayButton.addEventListener('click', function() {
      for (let index = 0; index < getFridays.length; index += 1) {
        if (getFridays[index].style.backgroundColor === setNewColor) {
          getFridays[index].style.backgroundColor = backgroundColor;
        } else {
          getFridays[index].style.backgroundColor = setNewColor;
        }
      }
    })
  };

displayFridays();

// 6 //
  function dayMouseOver() {
    let days = document.querySelector('#days');

    days.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '37px';
      event.target.style.fontWeight = '700';
    })
  };

  function dayMouseOut() {
    let days = document.querySelector('#days');

    days.addEventListener('mouseout', function(event) {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200';
    })
  };

  dayMouseOver();
  dayMouseOut();
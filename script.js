document.addEventListener('DOMContentLoaded', function () {

  let serviceCard = document.querySelectorAll('.serviceCard');
  console.log(serviceCard);

  serviceCard.forEach(function (element) {
      element.addEventListener('click', function (e) {

          let el = e.target;

          serviceCard.forEach(function (i) {
              i.classList.remove('serviceCard--active');
          });

          el.classList.toggle('serviceCard--active');

          let popup = document.querySelector('#popup');
          let popupHeader = popup.getElementsByTagName('h2');

          popupHeader[0].innerText = el.dataset.header;

      });
  });
});
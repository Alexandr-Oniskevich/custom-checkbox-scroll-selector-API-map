const element = document.querySelector('select');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
  }
    );

    /*tooltip*/



      window.addEventListener('DOMContentLoaded', function() {
        document.querySelector('.tooltip__marker').addEventListener('click', function() {

          console.log ('.tooltip__marker')
          document.querySelector('.tooltip__popup').classList.toggle('tooltip__popup-active')
          console.log ('.tooltip__popup-active')
        });
      });

/*map*/


      // Функция ymaps.ready() будет вызвана, когда
      // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
      ymaps.ready(init);
      function init(){
          // Создание карты.
        var myMap = new ymaps.Map("map", {
              // Координаты центра карты.
              // Порядок по умолчанию: «широта, долгота».
              // Чтобы не определять координаты центра карты вручную,
              // воспользуйтесь инструментом Определение координат.
         center: [48.872185073737896,2.354223999999991],
              // Уровень масштабирования. Допустимые значения:
              // от 0 (весь мир) до 19.
          zoom: 15
        });

          // Создание геообъекта с типом точка (метка).


        var myPlacemark = new ymaps.Placemark([48.872185073737896,2.354223999999991], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/map.svg',
          iconImageSize: [30, 42],
          iconImageOffset: [-3, -42]

        });

         // Размещение геообъекта на карте.

        myMap.geoObjects.add(myPlacemark);
      }


      /*form*/

      var selector = document.querySelector("input[type='tel']");
      var im = new Inputmask("+7(999)-999-99-99");

      im.mask(selector);

      const validate = new window.JustValidate('#form');




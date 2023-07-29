
//  /img/VK.png

export const newsDb = [
  {
    breadcrumb:
      'Уведомление о созыве внеочередного общего собрания членов КПК ФАРВАТЕР»',
    date: '03.10.2022',
    img: '',
    text: `<p>
    А ещё акционеры крупнейших компаний формируют глобальную экономическую сеть и при этом — смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. В своём стремлении улучшить пользовательский опыт мы упускаем, что тщательные исследования конкурентов могут быть объединены в целые кластеры себе подобных. Вот вам яркий пример современных тенденций — начало повседневной работы по формированию позиции, в своём классическом представлении, допускает внедрение инновационных методов управления процессами. А также ключевые особенности структуры проекта обнародованы.
  </p>`,
  }
];

newsDb.forEach((value, id) => {
  value.path = `/kpk-farvater/about-us/news-report/news-${ + id + 1}`;
  value.id = 'news-' + id + 1;
});
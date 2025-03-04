const CommetIdValue = (function(){
  let value = 0;
  return function(){
    value++;
    return value;
  };
})();

let NameValue = function(){
  let comment = ['Борис', 'Владимир', 'Дмитрий'];
  return comment[Math.floor(Math.random() * comment.length)];
}

let MessageValue = function(){
  let comment = ['Всё отлично!', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.']
  return comment[Math.floor(Math.random() * comment.length)];
}

let IdValue = function(){
  return Math.floor(Math.random() * 6) + 1;
}

let CountLike = function(){
  return Math.floor(Math.random() * (200 - 15 + 1)) + 15;
  }

let ObjectGenerator = function(){

//генерирует 25 объектов, id, url
let base = [];

for(let i = 0; i < 25; i++){
  let user = new Object({
    id: i+1,
    url: 'photos/' + (i + 1) + '.jpg',
    description: "Момент, запечатленный во времени, отражающий красоту и уникальность мира вокруг нас, где каждый элемент и деталь рассказывают свою собственную историю и вызывают эмоции, которые остаются с нами навсегда.",
    likes: CountLike(),
    comments: {
      id: CommetIdValue(),
      avatar: 'img/avatar-' + IdValue() + '.svg',
      message: MessageValue(),
      name: NameValue()
  }
    });
  base.push(user);
  }
  console.log(base);
}
ObjectGenerator();

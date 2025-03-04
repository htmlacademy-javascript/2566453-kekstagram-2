const CommetIdValue = (function(){
  let value = 0;
  return function(){
    value++;
    return value;
  };
})();

const NameValue = function(){
  const comment = ['Борис', 'Владимир', 'Дмитрий'];
  return comment[Math.floor(Math.random() * comment.length)];
};

const MessageValue = function(){
  const comment = ['Всё отлично!', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.'];
  return comment[Math.floor(Math.random() * comment.length)];
};

const IdValue = function(){
  return Math.floor(Math.random() * 6) + 1;
};

const CountLike = function(){
  return Math.floor(Math.random() * (200 - 15 + 1)) + 15;
};

const ObjectGenerator = function(){

  const base = [];

  for(let i = 0; i < 25; i++){
    const user = new Object({
      id: i + 1,
      url: `photos/${i + 1}.jpg`,
      description: 'Момент, запечатленный во времени, отражающий красоту и уникальность мира вокруг нас, где каждый элемент и деталь рассказывают свою собственную историю и вызывают эмоции, которые остаются с нами навсегда.',
      likes: CountLike(),
      comments: {
        id: CommetIdValue(),
        avatar: `img/avatar-${IdValue()}.svg`,
        message: MessageValue(),
        name: NameValue()
      }
    });
    base.push(user);
  }
};
ObjectGenerator();

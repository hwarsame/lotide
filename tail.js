const assertEqual =  require ('./assertEqual')
const tail = function(list) {
  return list.slice(1);
};


module.exports = tail;

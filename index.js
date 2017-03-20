function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(target){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list');
  for (let i = 0, l = rankedLists.length; i < l; i++) {
    rankedLists[i].innerHTML = (i + n).toString()
  }
}

function deepestChild() {
  return document.querySelector('#grand-node')
}

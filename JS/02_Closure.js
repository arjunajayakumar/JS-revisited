//closure
function z() {
  var a = 7;
  function x() {
    var b = 8;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}

z();

//currying

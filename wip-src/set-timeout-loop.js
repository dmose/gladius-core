define( function( require ) {
  
  var Loop = require( "loop" );

  var SetTimeoutLoop = function( callback ) {
    Loop.call( this, callback );
  };

  function _pump() {
    setTimeout( this._run.bind( this ), 0 );
  };
  
  SetTimeoutLoop.prototype = new Loop();
  SetTimeoutLoop.prototype._pump = _pump;
  SetTimeoutLoop.prototype.constructor = SetTimeoutLoop;

  return SetTimeoutLoop;

});
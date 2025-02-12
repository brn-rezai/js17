function listOfColours( colours ) {
  // Write your code here...
  let list = document.querySelectorAll( "li" );
  list.forEach( el => {
    el.addEventListener( "click", ( e ) => {
      let c = el.innerText;
      const h1 = document.createElement( "h1" );
      content.append( h1 );
      h1.innerText = `You have selected: ${ c }`;
      h1.style.color = `${ c }`;

    } );

  } );

}

const colours = [ "red", "blue", "green", "yellow", "pink", "brown" ];

const content = document.querySelector( "#content" );

const details = document.createElement( "details" );

const summery = document.createElement( "summary" );

const ul = document.createElement( "ul" );

content.append( details );
details.append( summery );
summery.innerText = "select color";
details.append( ul );


for ( let n of colours ) {
  let li = document.createElement( "li" );
  li.innerText = n;
  ul.append( li );
}



listOfColours( colours );

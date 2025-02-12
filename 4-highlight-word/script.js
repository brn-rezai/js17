const content = document.querySelector( "#content" );

function highlightWords( paragraph, colours ) {
  // Write your code here...
  const opList = document.querySelectorAll( "option" );
  const spans = document.querySelectorAll( "span" );

  select.addEventListener( "change", () => {

    opList.forEach( op => {


      switch ( select.value ) {
        case op.innerText:

          console.log( select.value );
          break;

      }
    } );

  } );


  spans.forEach( s => {

    s.addEventListener( "click", () => {
      s.style.backgroundColor = select.value;
      s.style.fontWeight = "900";
    } );

  } );


  const spanList = document.querySelectorAll( "span" );
  spanList.forEach( s => {
    s.addEventListener( "click", () => {

    } );
  } );
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = [ "yellow", "green", "blue", "none" ];
const p = document.createElement( "p" );
content.append( p );
const select = document.createElement( "select" );
content.append( select );
const arr = paragraph.split( " " );

for ( let w of arr ) {
  let span = document.createElement( "span" );
  p.append( span );
  span.innerText = w + " ";
}

coloursSort = colours.reverse();
for ( let n of coloursSort ) {
  let option = document.createElement( "option" );
  select.append( option );
  option.innerText = n;
}
highlightWords( paragraph, colours );

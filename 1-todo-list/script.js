function todoList( todos ) {
  // Write your code here...

  let list = document.querySelectorAll( "li" );

  console.dir( list );


  list.forEach( n => {

    n.addEventListener( "click", ( e ) => {


      if ( n.innerText.includes( "---> Compeleted" ) ) {

        n.style.backgroundColor = "rgb(255, 0, 0)";
        n.innerText = n.innerText.slice( 0, -16 );
        n.innerText = `${ n.innerText } ---> To Do`;

      }

      else if ( n.innerText.includes( "---> To Do" ) ) {

        n.style.backgroundColor = "rgb(0,255,0)";
        n.innerText = n.innerText.slice( 0, -11 );
        n.innerText = `${ n.innerText } ---> Compeleted`;

      }


      else if ( !n.innerText.includes( "---> Compeleted" ) && !n.innerText.includes( "---> To Do" ) ) {

        n.style.backgroundColor = "rgb(0,255,0)";
        n.innerText = `${ n.innerText } ---> Compeleted`;
        console.log( n.innerText );

      }


    } );

  } );



}



const c = document.querySelector( "#content" );
const ul = document.createElement( "ul" );

c.append( ul );


const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

for ( let n of todos ) {
  let li = document.createElement( "li" );
  li.innerText = n.todo;
  ul.append( li );
}




todoList( todos );
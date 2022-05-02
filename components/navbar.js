 function navbar()
 {
     return `<p >News App</p>
     <div ><input type="text" id="search_input" placeholder="search input" >
     </div>
     <div><a href="home.html">home</a></div>`;

 }

 function sidebar()
{
    return `<h4>Countries</h4>  
     <div> <a href="" id="in">india</a></div>
    <div> <a href="" id="ch">china</a></div>
    <div> <a href="" id="us">usa</a></div>
    <div> <a href="" id="uk">uk</a></div>
    <div> <a href="" id="nz">Newzeland</a></div>
    `;

}

 export {navbar,sidebar}
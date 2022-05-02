// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar,sidebar} from "../components/navbar.js";


    
    document.getElementById("sidebar").innerHTML=sidebar();
    document.getElementById("navbar").innerHTML=navbar();

   // const api="https://masai-mock-api.herokuapp.com/news?q="
 let searchbtn = (e) =>
 {
     if(e.key ==="Enter")
     {
         let value=document.getElementById("search_input").value;
         seachdata(value)
     }
 }

  let  seachdata = async (value) =>
  {

        try{
            let res= await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`)

            let data= await res.json()
            console.log(data.articles)
            akshay(data.articles)

        }
        catch{

        }

  }
 
 document.getElementById("search_input").addEventListener("keydown", searchbtn)


   function akshay(data1)
   {
   //console.log(data1)
    data1.map(function(ele,i)
    {
    let div=document.createElement("div")
   
    div.setAttribute("class","div1")

    let div2=document.createElement("div")
        div2.style.width="40%"
        

    let div3=document.createElement("div")
    div3.style.padding="20px"
    div3.style.width="60%"

    let title1=document.createElement("h4")
    title1.style.height="50px"
    title1.innerText=ele.title;
    
    let img1=document.createElement("img")
    img1.style.width="100%"
    img1.src=ele.urlToImage;
    
       //title.innerText=title;
    let des=document.createElement("p")
    des.innerText=ele.description

  
    div2.append(img1)
    div3.append(title1,des)

    div.append(div2,div3)

    document.getElementById("results").append(div)
    });
}



   






 
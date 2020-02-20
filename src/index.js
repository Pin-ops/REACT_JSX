import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
// Css dosyasini import etmek icin bu yöntem yeterli, ancak ayni klasörde oldugunu göstermek icin ./ seklinde yazilmasi gerek


// 1.
// JSX Basics
// const element = <h1 > Hello World </h1>
// const isim = 'Pinar'
// const element = <p> Hello world <b> { isim } </b> </p>

    // ReactDOM.render(element, document.getElementById('root'));

// ReactDOM.render(
//         (
//             <div>
//             <p>Hello World <b> { isim } </b></p></div>
//         ),document.getElementById('root ')
// )


// const elemanlar=(
//     <div>
//     <p>Hello World <b> { isim } </b></p></div>
// )

// ReactDOM.render(elemanlar,document.getElementById('root '))

// ReactDOM.render(degisken veya Component,document.getElementById('root') )


// 2.
// class ile className arasindaki fark nedir?
// React'ta mulaka bir acilis bir de closing tag olmak
// <br/> <hr/> <img/> <input/> olarak kullanilmali


// const elemanlar=(
//     <div>
//     <h1>Pinar Hosgeldin</h1>
//     <br/>
//     <h3 className="text">Düsseldorf</h3>
//     </div>
// )

// ReactDOM.render(elemanlar,document.getElementById('root'));


// 3.
// JS variables {degiskenleri} HTML icerisinde kullanma
// JS variables should be written in {}

// var toplam = 3+9;
// var name='Mehmet'

// const elemanlar=(
//     <div>
//     <p> 2 + 3 = {2 + 3} </p>
//     <p>Toplam : {toplam}</p>
//     <p>{`Toplam : ${toplam}`}</p>
//     <p>My name is {name}</p>
//     </div>
// )

// ReactDOM.render(elemanlar,document.getElementById('root'));



// 4.
// variables for HTML attributes
// const goose = "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg";
// const alternative="Picture of a goose";
// const titel= "Picture of a goose";
// const gooseImd=<img src={goose} alt={alternative} title={titel} />


// ReactDOM.render(gooseImd,document.getElementById('root'))


// 5.
// event atamak
// function atama ve kullanma
// fundtion onClick={makeDoggy()}parantezli yazarsak hata veriyor, NEDEN?
// Cünkü, sayfa yüklenir yüklenmez fonksiyonu icre ediyor ve click olmadigi icin e.target' da olusmuyor ve hata veriyor.


// function makeDoggy (e) {
//     e.target.src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg";
//     e.target.setAttribute("alt","doggy")
// }

// const kitty=<img
// src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg"
// alt="kitty"
// width="250"
// height="250"
// onClick={makeDoggy}

// // eger sonrasinda bir event gerekli ise function() yazmiyoruz, eger function direk calissin istiyorsak function() yaziyoruz
// />

// ReactDOM.render(kitty,document.getElementById('root'))





// 6.
// if conditions in HTML tags


// const age=Math.floor(Math.random()*50)
// const isAdult=<p>
//     { age < 18 ? `You are not an adult ${age}` : `You are an adult ${age}`}

// </p>
// ReactDOM.render(isAdult,document.getElementById('root'));




// 7.
// .map() functions
// .map() function i kullanmak icin key kullanmak zorundayiz(sadece gerekli kisimlari refresh edebilmek icin)

// const links = ['Home','Services','Team','About Me'];

// const list = (<ul>
//      {links.map( (item,index) =>{
//          return <li key={index}>{item}</li>
//      })}
// </ul>)

// const liElements= links.map( (item,index)=>{
//     return <li key={index}>{item}</li>
// })
// const list= (<ul> {liElements}</ul>)

// ReactDOM.render(list,document.getElementById('root'))




// 8.
// first component
// rcc : class Component
// rfc : functional Component


// class App extends Component{
//     render() {

//         return (
//             <div>
//                 <h2>Let's Learn React!</h2>
//                 <p>Hello World</p>
//             </div>
//         )
//     }
// }

// ReactDOM.render( <App />,document.getElementById('root'))




// function App() {
//     // tüm JS islemleri burada yapilabilir
//     const sum= 2+3;
//     return (
//         // bu kisim artik JSX kismi oldugu icin yazima ekstra dikkat etmek zorundayiz
//         <div>
//             <h3>The sum of 2 + 3 is :</h3>
//             <p> {sum}</p>
//         </div>
//     )
// }

// ReactDOM.render( <App />, document.getElementById('root'))




class App extends Component {
    sum2 = 5 + 2
    // class a ait olan return()de degisken this.className seklinde yazilir

    // makeANum = (val) =>{
    //     return val*val;
    // }
    makeANum = (val) => val*val;

    makeARanDom= () => Math.floor(Math.random() *100);


    render(){

    console.log(this);

    const sum = 4 + 6
    // render icerisindeki degisken return()de {}ile yazilmak zorunda. Degisken atanirken const yazmak durumundayiz

    const makeNumberFromRender = () => Math.floor(Math.random() *100);


    //  makeNumberFromRender = () => Math.floor(Math.random() *100);
    // const yazmadan tanimlarsak hata verir.

        return (
            <div>
                <h3> The sum of 4 + 6 is : </h3>
                <p> The sum from render : {sum} </p>
                <p> The sum from class :{this.sum2}</p>
                <p> The sum from class function :  {this.makeANum(6)} </p>
                <p> The sum from class function :  {this.makeARanDom()} </p>
                <p> The sum from class function :  {makeNumberFromRender()} </p>
            </div>
        );
    }
}

ReactDOM.render( <App/> , document.getElementById('root'));
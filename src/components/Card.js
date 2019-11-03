import {createElement } from "../lib";

const cardHeader = createElement('div',{className : 'card-header'},'Featured');
const cardTitle = createElement('h5',{className : 'card-title'},'Special title treatment');
const cardText = createElement('p',{className : 'card-text'},'With supporting text below as a natural lead-in to additional content.');
const a = createElement('a',{className : "btn btn-primary", href : '#'},'Go somewhere');
const cartBody = createElement('div',{className : 'card-body'}, [cardTitle,cardText, a] );
const cardDiv = createElement('div',{className : 'card'}, [cardHeader,cartBody] );
const label = createElement('label',{for : "exampleInputEmail1"},'Email address');
const input = createElement('input',{ type :"email",class : "form-control",id : "exampleInputEmail1",
aria_describedby :"emailHelp",placeholder : "Enter email"},);
const small = createElement('small',{id : "emailHelp", class : "form-text text-muted"},'Well never share your email with anyone else.');
const emailDiv = createElement('div',{className : 'form-group'}, [label,input, small] );
const label2 = createElement('label',{for : "exampleInputPassword1"},'Password');
const input2 = createElement('input',{ type :"password",class : "form-control",id : "exampleInputPassword1",
placeholder : "Password"},);
const div2 = createElement('div',{className : 'form-group'}, [label2,input2] );
const input3 = createElement('input',{ type :"checkbox",class : "form-check-input",id : "exampleCheck1"});
const label3 = createElement('label',{for : "exampleCheck1", class : 'form-check-label'},'Check me out');
const div3 = createElement('div',{className : 'form-group form-check'}, [input3,label3] );
const btn = createElement('button',{className : 'btn btn-primary',  type : "submit"}, 'Submit' );
const form = createElement('form',{class : "po"}, [emailDiv,div2,div3,btn] );


export const Card = props => {
    
  return (
      cardDiv,
      form
  )
};

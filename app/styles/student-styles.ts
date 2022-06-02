import { createGlobalStyle } from 'styles/styled-components';

const StudentStyles = createGlobalStyle`
.form {
  display:flex;
  flex-direction:column;
  padding: 24px;
  background: #fff;
  border-radius: 4px;
  max-width:520px;
  margin:auto;
}

.labelInput {
  display: inline-block;
  margin-bottom: 0.5rem;
}

.inputForm {
   min-height: 46px;
   max-width:500px;
    padding: 0 24px;
    background: linear-gradient(180deg,#fff,#f4f4f4);
    border: 1px solid #cccedd;
    box-sizing: border-box;
    border-radius: 4px;
}

button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: static;
  border: 1px solid #0069d9;
  box-sizing: border-box;
  border-radius: 4px;
  color: #0069d9;
  background: #ffffff;
  margin: 5px;
  -webkit-transition: background-color 0.7s;
  transition: background-color 0.7s, transform 0.7s;
  font-size:19px
  padding:7px 20px;
}
button:hover {
  background-color: #3387e1;
  color: #ffffff;
}`;
export default StudentStyles;

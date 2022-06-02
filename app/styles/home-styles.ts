import { createGlobalStyle } from 'styles/styled-components';

const fontSizeTable = `
  font-size: 25px;
  font-style: normal;
  font-weight: 400; 
  color:white;
  font-family: 'ProximaNova', sans-serif;
`;

const fontStyles = `
  font-size: 20px;
  font-style: normal;
  font-weight: 400; 
  color:#000853;
  font-family: 'ProximaNova', sans-serif;
`;

const HomeStyles = createGlobalStyle`
table {
  margin:40px auto 0 auto; 
  align-items: center;
  text-align: center;
  border-collapse: collapse;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
table thead{
  background: linear-gradient(175deg, #6F87EF -6.45%, #1B3296 114.17%);
}

table thead tr th {
  padding-left: 20px;
  text-align: center;
  ${fontSizeTable}
  height: 60px;
}
table tbody th,
table tbody td {
  ${fontStyles}
  padding: 12px 5px;
}
table tbody tr {
  border-bottom: 1px solid #dddddd;
}

table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

table tbody tr:last-of-type {
  border-bottom: 4px solid #6F87EF;
}

button {
  background: #0069D9;
  border-radius: 4px;
  border-width: 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05);
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  font-size: 18px;
  height: 52px;
  padding: 7px 20px;
  transform: translate3d(0, 0, 0);
  transition: all 150ms;
  align-items:center;
  justify-content: center;

}
button:hover {
  box-shadow: rgba(0, 1, 0, 0.2) 0 2px 8px;
  opacity: 0.75;
}

button:active {
  outline: 0;
}

button:focus {
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 3px;
}
.newStudent-btn {
  display: flex;
  flex-direction: row;
  margin:10px auto;
}
.deleteBtn{
  background: #DE2D2D;
  margin-right:10px;

}
`;
export default HomeStyles;

import { createGlobalStyle } from 'styles/styled-components';

const ModalStyles = createGlobalStyle`

.modal-title {
  color: #0069d9;
}
.modal-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start !important;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: calc(0.3rem - 1px);
  border-bottom-left-radius: calc(0.3rem - 1px);
}
.deleteBtn{
  padding:13px 20px;
  font-size: 18px;
  height:52px;
  align-items:center;
  justify-content:center;
}
.deleteBtn:hover{
  background:#690404;
}
`;
export default ModalStyles;

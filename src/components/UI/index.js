// IMPORTS/INITIALIZATION =========================|
// ================================================|
import styled from '@emotion/styled';
// ------------------------------------------------|
// DEFINE STYLE VARIABLES =========================|
// ================================================|
// CSS Hover Animation Effect ---------------------|
const hoverMixin = `
  box-shadow: 0 3px 6px #333;
  transition: 0.25s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 10px #777;
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px #666;
  }
`;
// ------------------------------------------------|
// Basic Card styling -----------------------------|
const card = `
  position: relative;
  border: none;
  border-radius: 2px;
  box-shadow: 0 3px 6px #333;
  background-color: #fff;
  margin: 1rem;
`;
// ------------------------------------------------|
// DEFINE BUTTON COMPONENTS =======================|
// ================================================|
export const Button = styled.button`
  border: none;
  cursor: pointer;
  text-align: center;
  margin: 0 auto 1.5rem;
  border-radius: 2px;
  padding: 0.5rem 0.8rem;
  font-size: 1.5rem;
  color: white;
  background-color: #2d3b4f;
  ${hoverMixin}
`;
// ------------------------------------------------|
// DEFINE CARD COMPONENTS =========================|
// ================================================|
export const HoverCard = styled.div`
  position: relative;
  border: none;
  border-radius: 2px;
  margin: 1rem;
  ${hoverMixin}
`;
// ------------------------------------------------|
// DEFINE FORM COMPONENTS =========================|
// ================================================|
// Input Field Wrapper ----------------------------|
export const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: block;
  line-height: 1.6;
  font-size: 16px;
  font-weight: normal;
  box-sizing: inherit;
  &:focus-within {
    label {
      color: #2d3b4f;
    }
  }
`;
// Label ------------------------------------------|
export const Label = styled.label`
  color: #9e9e9e;
  font-family: 'Baloo', sans-serif;
  font-size: 1rem;
  cursor: text;
  text-align: initial;
  box-sizing: inherit;
  line-height: 1.6;
  font-weight: normal;
`;
// ------------------------------------------------|
// Text Input -------------------------------------|
export const TextInput = styled.input`
  font-size: 16px;
  overflow: visible;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  border-radius: 0;
  outline: none;
  height: 2rem;
  width: 100%;
  margin: 0 0 8px 0;
  box-shadow: none;
  color: initial;
  text-align: start;
  cursor: text;
  &:focus {
    border-bottom: 1px solid #2d3b4f;
    box-shadow: 0 1px 0 0 #2d3b4f;
  }
`;
// ------------------------------------------------|
// Form Card --------------------------------------|
export const FormCard = styled.div`
  padding: 2rem;
  margin: 2rem;
  max-width: 350px;
  height: 500px;
  ${card}
`;
// ------------------------------------------------|
// Form Heading -----------------------------------|
export const FormHeading = styled.h2`
  text-align: center;
  margin-bottom: 0.5rem;
`;
// ------------------------------------------------|
// Form Error Msg ---------------------------------|
export const FormError = styled.div`
  color: red;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
`;
// ------------------------------------------------|
// Form Success Msg -------------------------------|
export const FormSuccess = styled.div`
  color: #007f00;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
`;
// ------------------------------------------------|
// Button Container -------------------------------|
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem 0 0;
`;
// ------------------------------------------------|
// Form Button ------------------------------------|
export const FormButton = styled.button`
  border: none;
  font-size: 100%;
  cursor: pointer;
  text-align: center;
  margin: 0 0 1.5rem;
  border-radius: 2px;
  padding: 0.5rem 0.8rem;
  font-size: 1.5rem;
  width: 200px;
  color: white;
  background-color: #2d3b4f;
  ${hoverMixin}
`;
// ------------------------------------------------|
// Form Footer Container --------------------------|
export const FormFooterContainer = styled.div`
  text-align: center;
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translate(-50%);
`;
// ------------------------------------------------|
// Form Footer ------------------------------------|
export const FormFooter = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #2d3b4f;
`;
// ------------------------------------------------|
// Icon Normalization =============================|
// ================================================|
// Icons ------------------------------------------|
export const I = styled.span`
  border: none;
  margin: 0;
  padding: 0;
  font-size: 1.25rem;
  vertical-align: sub;
`;
// ------------------------------------------------|
// Navigation Components ==========================|
// ================================================|
// Horizontal Top Navbar --------------------------|
export const TopNav = styled.div`
  position: relative;
  width: 100%;
  height: 3rem;
  left: 0px;
  top: 0px;
  border-bottom: 2px solid rgba(44, 58, 79, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  background: #ffffff;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  ul {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }
  a {
    padding: 14px 14px;
    font-size: 18px;
    line-height: 28px;
    color: #454a4d;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-decoration: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;
// ------------------------------------------------|
// Vertical Side Navbar ---------------------------|
export const SideNav = styled.div`
  height: 100%;
  width: 120px;
  top: 0;
  left: 0;
  background: #2d3b4f;
  border-radius: 0px 15px 15px 0px;
  display: flex;
  ul {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: right;
  }
  a {
    padding: 14px 14px;
    font-size: 18px;
    line-height: 28px;
    color: #dbdbdb;
    text-align: right;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-decoration: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;
// ------------------------------------------------|
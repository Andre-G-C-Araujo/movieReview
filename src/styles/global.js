import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}


body{
    height: 100vh;

background: linear-gradient(${({ theme }) => theme.COLORS.BG200},${({
  theme,
}) => theme.COLORS.BG300} );


}

body, input, button, textarea {
   
    font-size: 16px;
    outline: none;
}

a {
    text-decoration: none;
}

button, a {
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover, a:hover {
    filter: brightness(0.9);
}
`;

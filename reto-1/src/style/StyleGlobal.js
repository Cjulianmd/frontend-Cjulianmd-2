
import styled from 'styled-components';


export const NavBarStyled = styled.nav `
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

 
    
` 
export const Tab = styled.div` 
    position: absolute;
        left: 0%;
        right: 0%;
        top: 0%;
        bottom: 94.79%;

`
export const Img1 = styled.div`
/* Logo */


position: absolute;
left: 28.97%;
right: 28.97%;
top: 27.25%;
bottom: 53.32%;
    
    
`

export const Img2 = styled.div`
    backgroud-image: linear-gradient(315deg, blue 0%, blue 100%,)
    display: flex;
    align-items: center;
    justify-content:center;
    position: absolute;
    left: 17.69%;
    right: 17.69%;
    top: 25.24%;
    bottom: 46.09%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    
    
`

export const ButtonN = styled.div`

    position: absolute;
    width: 358px;
    height: 44px;
    left: 16px;
    top: 760px;

`
export const TitleN = styled.div`
/* Choose */


position: absolute;
width: 56px;
height: 19px;
left: 167px;
top: 470px;

font-family: 'Raleway';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
/* identical to box height */

text-align: center;
letter-spacing: -0.3px;

/* Main dark color */

color: #474747;



`

export const TextN = styled.div`
/* Choose products available add to favorites and then buy */


position: absolute;
width: 187px;
height: 32px;
left: 102px;
top: 490px;

font-family: 'Raleway';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;
text-align: center;
letter-spacing: -0.3px;

/* Main dark color */

color: #474747;
`

export const SliderN = styled.div`
/* Slider */


position: absolute;
width: 60px;
height: 9px;
left: 165px;
top: 747px;
`
export const TitleB = styled.div`
   /* Sing In */


position: absolute;
width: 73px;
height: 28px;
left: 159px;
top: 292px;

font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
text-align: center;
letter-spacing: -0.3px;

/* White */

color: #FFFFFF;



`
export const TextB = styled.div`

/* Social media */


position: absolute;
width: 72px;
height: 60px;
left: 159px;
top: 639px;

`
export const Imputbox = styled.div`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 20.23%;
    bottom: 0;
    background-color:blue;
`
export const InputT = styled.input.attrs(({
    type: "email"
  }))`
  box-sizing: border-box;
    padding: 10px;
    position: absolute;
    width: 358px;
    height: 44px;
    left: 16px;
    top: 272px;
    border-radius: 15px;
  `;
  export const InputP = styled.input.attrs(props => ({
    type: "password"
  }))`
  box-sizing: border-box;
  padding: 10px;
  position: absolute;
    width: 358px;
    height: 44px;
    left: 16px;
    top: 326px;
  border-radius: 15px;
  `;
  
  export const Log = styled.div`
  position: absolute;
  left: 4.1%;
  right: 4.1%;
  top: 87.68%;
  bottom: 7.11%;
`

export const TextB2 = styled.div`
    /* D’ont have account ? Sign up */


    position: absolute;
    left: 25.38%;
    right: 40.38%;
    top: 93.6%;
    bottom: 4.38%;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    text-align: center;

    /* Dark color */

    color: #4B4B4B;
`

export const Texts = styled.div`
/* D’ont have account ? Sign up */


position: absolute;
left: 55.38%;
right: 25.38%;
top: 93.6%;
bottom: 4.38%;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
/* identical to box height */

text-align: center;


background: linear-gradient(92.67deg, #BFC3FC 0.11%, #A2C3FC 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;

`

export const InputN = styled.input.attrs(props => ({
    type: "text"
  }))`
  /* Rectangle 48 */


position: absolute;
width: 358px;
height: 44px;
left: 16px;
top: 332px;

/* Additional shade of the main color */

background: #2E3562;
border-radius: 44px;
  `;
  export const InputE = styled.input.attrs(props => ({
    type: "email"
  }))`
  /* Rectangle 48 */


position: absolute;
width: 358px;
height: 44px;
left: 17px;
top: 386px;

/* Additional shade of the main color */

background: #2E3562;
border-radius: 44px;
  `;
  
  export const TitleC = styled.div`
  /* Create new Account */


        position: absolute;
        left: 4.1%;
        right: 35.64%;
        top: 18.72%;
        bottom: 77.84%;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        /* identical to box height */

        text-align: center;
        letter-spacing: -0.3px;

        /* Dark color */

        color: #4B4B4B;

  
  `
  export const TextC = styled.div`

  /* Create a new account by filling in all the fields or log in to an existing account */


  position: absolute;
  left: 7.1%;
  right: 31.28%;
  top: 22.87%;
  bottom: 73.1%;
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.3px;
  
  /* Dark color */
  
  color: #4B4B4B;
  

`
export const InputT1 = styled.input.attrs(({
    type: "number"
  }))`
  /* Rectangle 48 */


position: absolute;
width: 358px;
height: 44px;
left: 16px;
top: 440px;

/* Additional shade of the main color */

background: #2E3562;
border-radius: 44px;
  `;

  export const InputP1 = styled.input.attrs(props => ({
    type: "password"
  }))`
  /* Rectangle 48 */


position: absolute;
width: 358px;
height: 44px;
left: 16px;
top: 494px;

/* Additional shade of the main color */

background: #2E3562;
border-radius: 44px;
  `;
  export const Re1 = styled.div`
    position: absolute;
        width: 417px;
        height: 266px;
        left: 50px;
        top: 166px;

  `
  export const Re6 = styled.div`
  position: absolute;
      width: 417px;
      height: 266px;
      left: 15px;
      top: 166px;

`
  export const Re2 = styled.div`
  position: relative;
    width: 400px;
    top: 210px;

  `
  export const Re7 = styled.div`
  /* Exit */


    position: absolute;
    width: 107px;
    height: 44px;
    left: 142px;
    top: 712px;


  `
  export const Re5 = styled.div`
  position: unset;
  width: 800px;
  height: 220px;
  left: 0px;
  top: 0px;

  `
  export const Re3 = styled.div`
    position: absolute;
    width: 432px;
    height: 56px;
    left: 0px;
    top: 850px;


    background: #FFFFFF;
    box-shadow: 0px -4px 38px rgba(0, 0, 0, 0.02);
    border-radius: 20px 20px 0px 0px;
    

  `

  export const Reta = styled.div`
  /* Rectangle 53 */
  border-bottom-left-radius:40px;
  border-bottom-right-radius:40px;
  position: absolute;
  width: 432px;
  height: 150px;
  left: 0px;
  top: 0px;
  
  /* Main color (gradient) */
  
  background: linear-gradient(92.67deg, #BFC3FC 0.11%, #A2C3FC 100%);
  box-shadow: 0px 4px 38px rgba(0, 0, 0, 0.05);


`

export const TitleH = styled.div`
/* Hi,Robert */


    position: absolute;
    width: 112px;
    height: 29px;
    left: 16px;
    top: 72px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

    text-align: center;

    /* Dark color */

    color: #4B4B4B

  
  `
  export const TextH = styled.div`
  /* Let’s start learning */


    position: absolute;
        width: 123px;
        height: 17px;
        left: 17px;
        top: 101px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    text-align: center;

    /* Dark color */

    color: #4B4B4B;
  

`
  
export const Coin = styled.div`
/* Logo */
position: absolute;
    left: 72.05%;
    right: 24.36%;
    top: 50.6%;
    bottom: 89.06%;
`
export const Noti = styled.div`

/* Layer 30 */


position: absolute;
left: 90.51%;
right: 4.87%;
top: 50.6%;
bottom: 88.33%;

`
export const CoinN = styled.div`

/* 400 */


position: absolute;
width: 28px;
height: 17px;
left: 340px;
top: 78px;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
/* identical to box height */

text-align: center;

/* Dark color */

color: #4B4B4B;


`

export const TextV = styled.div`

/* Enter the four-digit code from SMS */


position: absolute;
width: 246px;
height: 18px;
left: 43px;
top: 204px;

font-family: 'Inter';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 17px;
text-align: center;

/* Dark color */

color: #4B4B4B;


`
export const TextV2 = styled.div`

position: absolute;
width: 250px;
height: 17px;
left: 25px;
top: 222px;

font-family: 'Inter';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 17px;
/* identical to box height */

text-align: center;

background: linear-gradient(92.67deg, #BFC3FC 0.11%, #A2C3FC 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;


`
export const TitleV = styled.div`

/* Phone verification */


position: absolute;
width: 214px;
height: 29px;
left: 50px;
top: 160px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
/* identical to box height */

text-align: center;

/* Dark color */

color: #4B4B4B;


`
export const InputT12 = styled.input.attrs(({
    type: "number"
  }))`
  box-sizing: border-box;

    position: absolute;
    width: 44px;
    height: 44px;
    left: 74px;
    top: 299px;

    border-radius: 15px;
  `;
  export const InputP12 = styled.input.attrs(({
    type: "number"
  }))`
  box-sizing: border-box;

  position: absolute;
  width: 44px;
  height: 44px;
  left: 140px;
  top: 299px;
  
  border-radius: 15px;
  `;
  export const InputN2 = styled.input.attrs(({
    type: "number"
  }))`
  box-sizing: border-box;

    position: absolute;
    width: 44px;
    height: 44px;
    left: 206px;
    top: 299px;

    border-radius: 15px;
  `;
  export const InputE2 = styled.input.attrs(({
    type: "number"
  }))`
  box-sizing: border-box;

    position: absolute;
    width: 44px;
    height: 44px;
    left: 272px;
    top: 299px;

    border-radius: 15px;
  `;


export const Fle = styled.div`

    /* Back */


    box-sizing: border-box;

    position: absolute;
    width: 16px;
    height: 0px;
    left: 32px;
    top: 60px;

    /* Dark color */

`
export const Apbari = styled.div`
  position: absolute;
  left: 5.9%;
  right: 88.46%;
  top: 20.26%;
  bottom: 2.01%;
  
`

export const Apbari2 = styled.div`
  position: absolute;
  left: 25.33%;
  right: 30.54%;
  top: 20.26%;
  bottom: 1.9%;
  
`
export const Apbari3 = styled.div`
  position: absolute;
  left: 65.51%;
  right: 25.33%;
  top: 20.26%;
  bottom: 1.9%;

  
`
export const Apbari4 = styled.div`
  
  position: absolute;
  left: 88.72%;
  right: 5.9%;
  top: 20.26%;
  bottom: 1.9%;
  
`
export const Apbari5 = styled.div`
  
position: absolute;
  left: 45.72%;
  right: 40.9%;
  top: 20.26%;
  bottom: 1.9%;
  
`

export const Textacon = styled.div`

/* Robert Fox */


position: absolute;
left: 1.49%;
right: 61.79%;
top: 30.74%;
bottom: 84.24%;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */

text-align: center;

/* Dark color */

color: #4B4B4B;



`
export const Textacon1 = styled.div`

/* Account settings */


position: absolute;
left: 36.15%;
right: 36.15%;
top: 6.28%;
bottom: 91.71%;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */

letter-spacing: -0.3px;

/* Dark color */

color: #4B4B4B;



`
export const Back = styled.div`

/* Back */

position: absolute;
left: 8.21%;
right: 87.69%;
top: 6.28%;
bottom: 92.89%;

/* Dark color */

`


export const Video = styled.div`

/* Video */

border-radius: 50px;
position: absolute;
width: 358px;
height: 200px;
left: 16px;
top: 92px;

`
export const Preguntas = styled.div`

position: relative;
width: 358px;
left: 16px;
top: 374px;

`
export const Bpre1 = styled.div`
/* Rectangle 82 */


position: absolute;
left: 8.21%;
right: 82.56%;


/* Main color (gradient) */

background: #C8C8C8;
border-radius: 10px;

`
export const Bpre2 = styled.div`
align-items: center;
position: absolute;
left: 8.21%;
right: 82.56%;


/* Gray color */

background: #C8C8C8;
border-radius: 10px;

`
export const Bpre3 = styled.div`
position: absolute;
left: 8.21%;
right: 82.56%;


/* Gray color */

background: #C8C8C8;
border-radius: 10px;

`
export const Bpre4 = styled.div`
/* Rectangle 82 */


position: absolute;
left: 8.21%;
right: 82.56%;


/* Gray color */

background: #C8C8C8;
border-radius: 10px;

`

export const Btpre = styled.div`


font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 29px;
/* identical to box height */

letter-spacing: -0.3px;

/* BG color */

color: #FCFDFF;

`
export const BtpreN = styled.div`
position: absolute;
left: 46.15%;
right: 45.9%;
top: 30.22%;
bottom: 30.77%;


font-family: 'Raleway';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;
text-align: center;
letter-spacing: -0.3px;

/* White */

color: #FFFFFF;

`
export const BtNext = styled.div`

/* Rectangle 47 */


position: absolute;
width: 358px;
height: 44px;
left: 16px;
top: 760px;

/* Optional second color */

background: #2BE7E8;
border-radius: 35px;
`

export const BoxPre = styled.div`

position: absolute;
width: 358px;
height: 64px;
left: 16px;
top: 448px;
`

export const BoxPre2 = styled.div`

position: absolute;
width: 358px;
height: 64px;
left: 16px;
top: 522px;

`
export const BoxPre3 = styled.div`

position: absolute;
width: 358px;
height: 64px;
left: 16px;
top: 596px;
`
export const BoxPre4 = styled.div`

position: absolute;
width: 358px;
height: 64px;
left: 16px;
top: 670px;
`

export const BoxPreT = styled.div`

position: absolute;
left: 20%;
right: 7.69%;


font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 12px;
letter-spacing: -0.3px;

/* Dark color */

color: #4B4B4B;
`

export const BoxP = styled.div`

position: absolute;
left: 4.1%;
right: 12.05%;
top: 33.9%;
bottom: 57.23%;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
letter-spacing: -0.3px;

/* Dark color */

color: #4B4B4B;

`
export const Starts = styled.div`

position: absolute;
width: 178px;
height: 58px;
left: 107px;
top: 292px;

`

export const Congratulations = styled.div`

/* Congratulations */


position: absolute;
width: 186px;
height: 29px;
left: 102px;
top: 382px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
/* identical to box height */

text-align: center;
letter-spacing: -0.3px;

/* Dark color */

color: #4B4B4B;

`

export const T1 = styled.div`

/* You have completed the test */


position: absolute;
width: 182px;
height: 17px;
left: 105px;
top: 411px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */

text-align: center;
letter-spacing: -0.3px;

/* Dark color */

color: #4B4B4B;

`
export const T2 = styled.div`

/* 14 correct answers */


position: absolute;
width: 119px;
height: 17px;
left: 136px;
top: 442px;

font-family: 'Inter';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 17px;
/* identical to box height */

text-align: center;
letter-spacing: -0.3px;

/* Dark color */

color: #4B4B4B;

`
export const C2 = styled.div`

/* Coins */
position: absolute;
left: 43.08%;
right: 44.62%;
top: 56.64%;
bottom: 40.52%;
`
export const TC2 = styled.div`

/* 14 */


position: absolute;
left: 51.28%;
right: 44.62%;
top: 10.99%;
bottom: 41%;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
/* identical to box height */

text-align: center;

/* Dark color */

color: #4B4B4B;

`



export const Boxcou = styled.div`

/* Lesson */


position: absolute;
width: 358px;
height: 440px;
left: 16px;
top: 190px;

`
export const Rectangle60 = styled.div`

/* Rectangle 60 */


position: relative;
left: 4.1%;
right: 4.1%;
top: 45.5%;
bottom: 49.29%;
margin-top: 5px;
padding: 15px 0;
  
/* Main color (gradient) */

background: linear-gradient(92.67deg, #BFC3FC 0.11%, #A2C3FC 100%);
opacity: 0.5;
border-radius: 15px;
`

export const Btpre1 = styled.div`
font-family: 'Raleway';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;
text-align: center;
letter-spacing: -0.3px;

/* White */

color: #FFFFFF;

`

export const Coin1 = styled.div`

position: absolute;
left: 43.08%;
right: 50.77%;
top: 50.09%;
bottom: 85.07%;


`
export const CoinN1 = styled.div`

/* 400 */


position: absolute;
left: 45.74%;
right: 43.08%;
top: 52.09%;
bottom: 85.55%;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
/* identical to box height */

text-align: center;

/* Dark color */

color: #4B4B4B;

`
export const Re12 = styled.div`

/* Unlock premium */


position: absolute;
width: 358px;
height: 100px;
left: 16px;
top: 182px;


`
export const Boxcou1 = styled.div`

/* Lesson */


position: absolute;
width: 358px;
height: 440px;
left: 16px;
top: 8%;

`
export const Boxcou2 = styled.div`

/* Lesson */

position: absolute;
width: 358px;
height: 440px;
left: 16px;
top: 100px;

`
export const Btpre2 = styled.div`
/* Language rules */
left: 16px;
display: flex;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* Dark color */

color: #4B4B4B;

`

export const Input1 = styled.input.attrs(({
  type: "text"
}))`
box-sizing: border-box;
border-radius:15px;
position: absolute;
left: 4.1%;
right: 4.1%;
top: 12.09%;
bottom: 82.7%;

`
export const Input2 = styled.input.attrs(({
  type: "number"
}))`
box-sizing: border-box;
border-radius:15px;

position: absolute;
left: 4.1%;
right: 4.1%;
top: 18.48%;
bottom: 76.3%;

`
export const Input3 = styled.input.attrs(({
  type: "date" 
}))`
box-sizing: border-box;
border-radius:15px;

position: absolute;
left: 4.1%;
right: 52.82%;
top: 24.88%;
bottom: 69.91%;

`
export const Input4 = styled.input.attrs(({
  type: "password"
}))`
box-sizing: border-box;
border-radius:15px;
background-color: Gray color;
color: Gray color;
position: absolute;
left: 52.82%;
right: 4.1%;
top: 24.88%;
bottom: 69.91%;

`
export const Rectangle61 = styled.div`

/* Rectangle 60 */


position: relative;
left: 4.1%;
right: 4.1%;
top: 10.5%;
bottom: 49.29%;
margin-top: 5px;
padding: 15px 0;
  
/* Main color (gradient) */

background: linear-gradient(92.67deg, #BFC3FC 0.11%, #A2C3FC 100%);
opacity: 0.5;
border-radius: 15px;
`
export const Textin = styled.div`

/* Macbook air 2015 core i3 */


position: absolute;
width: 150px;
height: 16px;
left: 16px;
top: 255px;

font-family: 'Raleway';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;
text-align: center;
letter-spacing: -0.3px;

color: #000000;
`
export const Precio = styled.div`

/* 759 $ */


position: absolute;
width: 40px;
height: 19px;
left: 16px;
top: 277px;

font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
/* identical to box height */

text-align: center;
letter-spacing: -0.3px;

/* Main dark color */

color: #474747;

`
export const Btninfo1 = styled.div`

/* Call button */


position: absolute;
width: 171px;
height: 32px;
left: 16px;
top: 312px;

`
export const Btninfo2 = styled.div`

position: absolute;
width: 171px;
height: 32px;
left: 203px;
top: 312px;

`
export const TitleD = styled.div`

/* Description */


position: absolute;
width: 70px;
height: 16px;
left: 160px;
top: 360px;

font-family: 'Raleway';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;
text-align: center;
letter-spacing: -0.3px;

color: #000000;


`
export const TextD = styled.div`

/* Description */


position: absolute;
width: 358px;
height: 180px;
left: 16px;
top: 392px;

font-family: 'Raleway';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;
letter-spacing: -0.3px;

/* Main dark color */

color: #474747;


`
export const MapD = styled.div`


position: absolute;
width: 358px;
height: 80px;
left: 16px;
top: 614px;
;


`
export const MapD2 = styled.div`

position: absolute;
width: 358px;
height: 176px;
left: 16px;
top: 710px;

`

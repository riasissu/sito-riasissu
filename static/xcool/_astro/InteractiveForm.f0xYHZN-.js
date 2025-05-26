import{n as x,c as g,j as t}from"./emotion-styled.browser.esm.CkZZZ6ql.js";import{r as d}from"./index.Cj_FO6QK.js";import{T as i,M as h}from"./index.kDvLpW6N.js";import{B as y}from"./index.BtvD8Xl5.js";const m=x.div`
    padding: 20px;
    border-radius: 10px;
    background: ${i.primary};
    box-shadow: 0 0 10px rgb(123 123 123 / 30%);
    display: flex;
    align-items: center;
    height: 100%;
    width: 70%;
    color: ${i.secondary};
    border-radius: 15px;
    position: relative;

    ${n=>n.$variant==="background-text"&&I};
`,w=m.withComponent("a"),v=x.span`
    position: absolute;
    top: 0;
    right: 0;
    text-transform: uppercase;
    font-size: 80px;
    line-height: 1;
    font-weight: 900;
    letter-spacing: -5px;
    z-index: 1;
    color: ${i.primary};
    opacity: 0.5;

    ${h.max("xxl")} {
        font-size: 70px;
    }

    ${h.max("xl")} {
        font-size: 50px;
        letter-spacing: -3px;
    }
`,b=x.div`
    position: relative;
    z-index: 2;
    width: 100%;
`,B=x.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: none;
    outline: none;
    background: transparent;
    color: ${i.secondary};

    &::placeholder {
        color: ${i.tertiary};
        opacity: 0.7;
    }
`,I=g`
    position: relative;
    overflow: hidden;
    padding: 20px;

    input {
        position: relative;
        z-index: 2;
        font-size: 18px;
    }
`,$=({value:n,onChange:s,placeholder:u,variant:c,bgText:a,type:l,boxAsLink:r,href:f,target:e})=>{const o=r?w:m;return d.useState(""),t.jsxs(o,{$variant:c,href:f,target:e,children:[c==="background-text"&&a&&t.jsx(v,{children:a}),t.jsx(b,{children:t.jsx(B,{type:l,value:n,onChange:s,placeholder:u})})]})},S=({url:n})=>{const[s,u]=d.useState(""),[c,a]=d.useState(!1),[l,r]=d.useState(null),f=async()=>{if(!s.trim())return;a(!0),r(null);const e=window.open("","_blank");if(e===null){r("Impossibile aprire una nuova finestra.");return}e.opener=null;try{const o=await fetch(`${n}${s}`,{method:"GET",mode:"cors",credentials:"omit"});if(!o.ok)throw e.close(),new Error("Password errata.");const p=await o.json();p.redirectUrl?e.location.href=p.redirectUrl:(r("Errore: nessun URL ricevuto."),e.close())}catch(o){const p=o instanceof Error?o.message:"Errore sconosciuto";r(p||"Errore di connessione."),e.close()}finally{a(!1)}};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"},children:[t.jsx($,{value:s,onChange:e=>u(e.target.value),placeholder:"Enter password...",type:"password"}),l&&t.jsx("p",{style:{color:"red"},children:l}),t.jsx(y,{variant:"secondary",showIcon:!1,asButton:!0,target:"_blank",type:"button",onClick:f,align:"center",children:c?"Verifica...":"Vai al form"})]})};export{S as default};

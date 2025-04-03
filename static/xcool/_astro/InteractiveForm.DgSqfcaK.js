import{n as d,c as f,j as e}from"./emotion-styled.browser.esm.BVmeO7Kq.js";import{r as l}from"./index.Cj_FO6QK.js";import{T as i,M as h}from"./index.5yaS7KJu.js";import{B as g}from"./index.BaxLjsXt.js";const m=d.div`
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

    ${o=>o.$variant==="background-text"&&B};
`,y=m.withComponent("a"),w=d.span`
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
`,v=d.div`
    position: relative;
    z-index: 2;
    width: 100%;
`,b=d.input`
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
`,B=f`
    position: relative;
    overflow: hidden;
    padding: 20px;

    input {
        position: relative;
        z-index: 2;
        font-size: 18px;
    }
`,I=({value:o,onChange:n,placeholder:x,variant:c,bgText:s,type:p,boxAsLink:a,href:u,target:t})=>{const r=a?y:m;return l.useState(""),e.jsxs(r,{$variant:c,href:u,target:t,children:[c==="background-text"&&s&&e.jsx(w,{children:s}),e.jsx(v,{children:e.jsx(b,{type:p,value:o,onChange:n,placeholder:x})})]})},z=({url:o})=>{const[n,x]=l.useState(""),[c,s]=l.useState(!1),[p,a]=l.useState(null),u=async()=>{if(n.trim()){s(!0),a(null);try{const t=await fetch(`${o}${n}`,{method:"GET",mode:"cors",credentials:"omit"});if(!t.ok)throw new Error("Password errata.");const r=await t.json();r.redirectUrl?window.open(r.redirectUrl,"_blank"):a("Errore: nessun URL ricevuto.")}catch(t){const r=t instanceof Error?t.message:"Errore sconosciuto";a(r||"Errore di connessione.")}finally{s(!1)}}};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"},children:[e.jsx(I,{value:n,onChange:t=>x(t.target.value),placeholder:"Enter password...",type:"password"}),p&&e.jsx("p",{style:{color:"red"},children:p}),e.jsx(g,{variant:"secondary",showIcon:!1,asButton:!0,target:"_blank",type:"button",onClick:u,align:"center",children:c?"Verifica...":"Vai al form"})]})};export{z as default};

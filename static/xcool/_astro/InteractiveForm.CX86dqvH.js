import{n as p,c as m,j as e}from"./emotion-styled.browser.esm.BVmeO7Kq.js";import{r as c}from"./index.Cj_FO6QK.js";import{T as i,M as u}from"./index.B_dsttva.js";import{B as g}from"./index.CnyzBo_0.js";const h=p.div`
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

    ${r=>r.$variant==="background-text"&&B};
`,y=h.withComponent("a"),w=p.span`
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

    ${u.max("xxl")} {
        font-size: 70px;
    }

    ${u.max("xl")} {
        font-size: 50px;
        letter-spacing: -3px;
    }
`,v=p.div`
    position: relative;
    z-index: 2;
    width: 100%;
`,b=p.input`
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
`,B=m`
    position: relative;
    overflow: hidden;
    padding: 20px;

    input {
        position: relative;
        z-index: 2;
        font-size: 18px;
    }
`,I=({value:r,onChange:d,placeholder:l,variant:n,bgText:s,type:a,boxAsLink:x,href:t,target:o})=>{const f=x?y:h;return c.useState(""),e.jsxs(f,{$variant:n,href:t,target:o,children:[n==="background-text"&&s&&e.jsx(w,{children:s}),e.jsx(v,{children:e.jsx(b,{type:a,value:r,onChange:d,placeholder:l})})]})},z=()=>{const[r,d]=c.useState(""),[l,n]=c.useState(!1),[s,a]=c.useState(null),x=async()=>{if(r.trim()){n(!0),a(null);try{const t=await fetch(`https://us-central1-riasissu-7c453.cloudfunctions.net/passwordProtectedPage?password=${r}`,{method:"GET",mode:"cors",credentials:"omit"});if(!t.ok)throw new Error("Password errata.");const o=await t.json();o.redirectUrl?window.open(o.redirectUrl,"_blank"):a("Errore: nessun URL ricevuto.")}catch(t){const o=t instanceof Error?t.message:"Errore sconosciuto";a(o||"Errore di connessione.")}finally{n(!1)}}};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"},children:[e.jsx(I,{value:r,onChange:t=>d(t.target.value),placeholder:"Enter password...",type:"password"}),s&&e.jsx("p",{style:{color:"red"},children:s}),e.jsx(g,{variant:"secondary",showIcon:!1,asButton:!0,target:"_blank",type:"button",onClick:x,align:"center",children:l?"Verifica...":"Vai al form"})]})};export{z as default};

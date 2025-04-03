import{n as r,j as t,F as m,c as i}from"./styled.D3AmjP7j.js";import{T as a,M as o}from"./index.FyAaa4f1.js";import{I as h}from"./index.WVAkgxfp.js";import{r as s}from"./index.a3y3H-wG.js";const u=r.div`
    position: relative;
    z-index: 3;

    a {
        font-size: 35px;
        line-height: 30px;
        font-weight: 700;
        display: inline-flex;
        position: relative;

        span {
            &:after {
                content: "";
                position: absolute;
                bottom: -5px;
                left: 0;
                width: 25%;
                height: 3px;
                background-color: ${a.primary};
                z-index: 1;
                transition: width 0.2s linear;
            }
        }

        &:hover span:after {
            width: 100%;
        }

        img {
            height: 100px;
            width: 252px;
            object-fit: contain;
        }
    }
`,f=()=>t.jsx(u,{children:t.jsx("a",{href:"/",children:t.jsx(h,{srcLocal:"logo",alt:"logo"})})}),y=r.header`
    width: 100%;

    padding: 20px 0;

    display: flex;

    justify-content: space-between;
    align-items: center;

    gap: 40px;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    animation: ${m} 1s;
    animation-delay: 0.4s;
    transition: background 0.5s;

    &.scrolled {
        background: rgba(0, 0, 0, 0.8);
    }
`,b=r.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 40px;

    ${o.max("lg")} {
        padding: 0 20px;
    }
`,w=r.div`
    display: flex;
    gap: 50px;

    ${o.max("xl")} {
        gap: 20px;
    }
`,v=r.nav`
    display: flex;
    align-items: center;
    justify-content: center;

    ${o.max("lg")} {
        position: fixed;
        top: 0;
        right: -100%;

        background: ${a.secondary};
        height: 100dvh;
        z-index: 2;
        transform: translateX(100%);
        transition: transform 0.3s linear, right 0.7s;
        padding-top: 85px;

        width: clamp(300px, 80%, 300px);

        ${({$isOpen:e})=>e&&i`
                right: 0;
                transform: translateX(0);
            `};
    }
`,$=r.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;

    ${o.min("lg")} {
        gap: 20px;
        align-items: center;
        justify-content: center;
    }

    ${o.max("lg")} {
        gap: 10px;
        padding: 20px 10px 53px;
        overflow: auto;
        width: 100%;
        height: 100%;

        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    > li a {
        text-decoration: none;
        color: ${a.primary};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        line-height: 25px;
        text-transform: uppercase;
        font-weight: 900;
        letter-spacing: 1px;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
        padding: 10px;
        border-radius: 5px;
        background-color: transparent;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;

        ${o.max("lg")} {
            padding: 10px 20px;
        }

        &:hover {
            background-color: ${a.primary};
            color: ${a.secondary};

            text-shadow: none;
        }

        img {
            margin: 0 15px 0 0;

            max-width: 30px;
            max-height: 30px;

            ${o.max("xl")} {
                margin: 0 10px 0 0;
            }
        }
    }
`,j=r.button`
    position: relative;
    z-index: 3;

    background: ${a.primary};
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.3s, border-color 0.3s, color 0.3s;
    width: 45px;
    height: 45px;
    border-color: transparent;

    ${o.min("lg")} {
        display: none;
    }
`,c=r.span`
    background: ${a.secondary};
    position: absolute;
    left: 50%;
    display: block;
    transform: translate(-50%, -50%);
    transition: transform 0.3s, background 0.3s, top 0.3s;
    pointer-events: none;

    width: 50%;
    height: 3px;

    ${o.max("lg")} {
        height: 2px;
    }

    ${({$open:e})=>e?i`
                  transform: translate(-50%, -50%) rotate(45deg);
                  top: 50%;
              `:i`
                  top: calc(50% - 4px);
              `}

    &:not(:first-of-type) {
        ${({$open:e})=>e?i`
                      transform: translate(-49%, -50%) rotate(-45deg);
                      top: 50%;
                  `:i`
                      top: calc(50% + 4px);
                  `}
    }
`,k=({state:e})=>{const{open:n,setOpen:l}=e,x=()=>{l(!n)},p=g=>{const d=g.target;!d.closest("nav")&&n&&d.tagName!=="BUTTON"&&l(!1)};return s.useEffect(()=>{if(n)return document.addEventListener("click",p),()=>{document.removeEventListener("click",p)}},[n]),t.jsxs(j,{$open:n,onClick:x,"aria-label":"Menu","aria-expanded":n,role:"button",tabIndex:0,children:[t.jsx(c,{$open:n}),t.jsx(c,{$open:n})]})},L=()=>{const[e,n]=s.useState(!1);return t.jsxs(w,{children:[t.jsx(v,{$isOpen:e,children:t.jsx($,{})}),t.jsx(k,{state:{open:e,setOpen:n}})]})},M=()=>(s.useEffect(()=>{const e=document.querySelector("header"),n=()=>{window.scrollY>0?e?.classList.add("scrolled"):e?.classList.remove("scrolled")};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[]),t.jsx(y,{children:t.jsxs(b,{children:[t.jsx(f,{}),t.jsx(L,{})]})}));export{M as Header};

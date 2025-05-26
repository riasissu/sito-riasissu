import{n as i,j as t,F as l,c as r}from"./styled.D3AmjP7j.js";import{T as o,M as n}from"./index.FyAaa4f1.js";import{I as p}from"./index.B8CeyUPY.js";import{r as s}from"./index.a3y3H-wG.js";const d=i.div`
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
                background-color: ${o.primary};
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
`,c=()=>t.jsx(d,{children:t.jsx("a",{href:"/xcool",children:t.jsx(p,{srcLocal:"logo",alt:"logo"})})}),x=i.header`
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

    animation: ${l} 1s;
    animation-delay: 0.4s;
    transition: background 0.5s;

    &.scrolled {
        background: rgba(0, 0, 0, 0.8);
    }
`,g=i.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 40px;

    ${n.max("lg")} {
        padding: 0 20px;
    }
`,h=i.div`
    display: flex;
    gap: 50px;

    ${n.max("xl")} {
        gap: 20px;
    }
`,m=i.nav`
    display: flex;
    align-items: center;
    justify-content: center;

    ${n.max("lg")} {
        position: fixed;
        top: 0;
        right: -100%;

        background: ${o.secondary};
        height: 100dvh;
        z-index: 2;
        transform: translateX(100%);
        transition: transform 0.3s linear, right 0.7s;
        padding-top: 85px;

        width: clamp(300px, 80%, 300px);

        ${({$isOpen:e})=>e&&r`
                right: 0;
                transform: translateX(0);
            `};
    }
`,f=i.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;

    ${n.min("lg")} {
        gap: 20px;
        align-items: center;
        justify-content: center;
    }

    ${n.max("lg")} {
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
        color: ${o.primary};
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

        ${n.max("lg")} {
            padding: 10px 20px;
        }

        &:hover {
            background-color: ${o.primary};
            color: ${o.secondary};

            text-shadow: none;
        }

        img {
            margin: 0 15px 0 0;

            max-width: 30px;
            max-height: 30px;

            ${n.max("xl")} {
                margin: 0 10px 0 0;
            }
        }
    }
`;i.button`
    position: relative;
    z-index: 3;

    background: ${o.primary};
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.3s, border-color 0.3s, color 0.3s;
    width: 45px;
    height: 45px;
    border-color: transparent;

    ${n.min("lg")} {
        display: none;
    }
`;i.span`
    background: ${o.secondary};
    position: absolute;
    left: 50%;
    display: block;
    transform: translate(-50%, -50%);
    transition: transform 0.3s, background 0.3s, top 0.3s;
    pointer-events: none;

    width: 50%;
    height: 3px;

    ${n.max("lg")} {
        height: 2px;
    }

    ${({$open:e})=>e?r`
                  transform: translate(-50%, -50%) rotate(45deg);
                  top: 50%;
              `:r`
                  top: calc(50% - 4px);
              `}

    &:not(:first-of-type) {
        ${({$open:e})=>e?r`
                      transform: translate(-49%, -50%) rotate(-45deg);
                      top: 50%;
                  `:r`
                      top: calc(50% + 4px);
                  `}
    }
`;const u=()=>{const[e,a]=s.useState(!1);return t.jsx(h,{children:t.jsx(m,{$isOpen:e,children:t.jsx(f,{children:t.jsx("li",{children:t.jsx("a",{href:"/",children:"RIASISSU"})})})})})},$=()=>(s.useEffect(()=>{const e=document.querySelector("header"),a=()=>{window.scrollY>0?e?.classList.add("scrolled"):e?.classList.remove("scrolled")};return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}},[]),t.jsx(x,{children:t.jsxs(g,{children:[t.jsx(c,{}),t.jsx(u,{})]})}));export{$ as Header};

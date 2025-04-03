import{n as i,c as l,j as t}from"./emotion-styled.browser.esm.BVmeO7Kq.js";import"./index.Cj_FO6QK.js";import{C as c}from"./index.BUwRNeUv.js";import{T as o,M as e}from"./index.5yaS7KJu.js";import{FadeIn as m}from"./FadeIn.6oxE79rk.js";import"./styled.SpwDvkbu.js";const h=i.section`
    background: ${o.primary};
    padding-top: 90px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    margin: -43px 0 90px;
    z-index: 1;
    position: relative;
`;i.div`
    max-width: 920px;
    margin: 0 auto;
`;i.h2`
    &,
    &:last-child {
        margin-bottom: 90px;
    }
`;const g=i(c)`
    ${e.min("xxxl")} {
        max-width: 920px;
    }
`;i.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    margin: 40px 0;

    ${e.max("lg")} {
        grid-template-columns: 1fr;
    }
`;const x=i.div`
    padding: 30px;
    border-radius: 10px;
    background: ${o.primary};
    box-shadow: 0 0 10px rgb(123 123 123 / 30%);
    display: block;
    height: 100%;
    color: ${o.secondary};
    border-radius: 15px;

    ${r=>r.$variant==="background-text"&&y};
`,u=x.withComponent("a"),b=i.span`
    position: absolute;
    top: 0;
    right: 0;
    text-transform: uppercase;

    font-size: 90px;
    line-height: 1;
    font-weight: 900;
    letter-spacing: -7px;
    z-index: 1;
    color: ${o.primary};
    opacity: 0.5;

    ${e.max("xxl")} {
        font-size: 80px;
    }

    ${e.max("xl")} {
        font-size: 60px;
        letter-spacing: -3px;
    }
`,f=i.div`
    position: relative;
    z-index: 2;

    ${e.max("md")} {
        max-width: 80%;
    }
`,y=l`
    position: relative;
    overflow: hidden;
    padding: 20px;

    h2,
    h3,
    h4 {
        margin-bottom: 10px;
        font-size: 20px;
        line-height: 1.2;

        &:after {
            content: none;
        }
    }

    h4,
    p {
        position: relative;
        z-index: 2;
    }

    p {
        line-height: 1.2;
    }
`,T=({children:r,variant:n,bgText:a,boxAsLink:s,...p})=>{const d=s?u:x;return t.jsxs(d,{$variant:n,...p,children:[n==="background-text"&&a&&t.jsx(b,{children:a}),t.jsx(f,{children:r})]})},z=()=>t.jsx(h,{children:t.jsx(g,{children:t.jsx(m,{delay:.3,children:t.jsxs(T,{variant:"background-text",bgText:"Address",boxAsLink:!0,href:"mailto:xcool@riasissu.it",children:[t.jsx("h3",{children:"Email"}),t.jsx("p",{children:"xcool@riasissu.it"})]})})})});export{z as Contact};

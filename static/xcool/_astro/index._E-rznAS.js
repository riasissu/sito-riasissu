import{j as c,c as p}from"./styled.D3AmjP7j.js";import"./index.a3y3H-wG.js";const t={base:0,sm:576,md:768,lg:992,xl:1200,xxl:1440,xxxl:1920},l={min:r=>`@media (min-width: ${t[r]}px)`,max:r=>`@media (max-width: ${t[r]}px)`,between:(r,e)=>`@media (min-width: ${t[r]}px) and (max-width: ${t[e]}px)`},h={src:"/xcool/_astro/preview.DZ9dn6Jb.webp",width:1326,height:754,format:"webp"},n={src:"/xcool/_astro/3Logo3.DOQt3VGR.png",width:514,height:224,format:"png"},g={preview:h,heroImg:n,logo:n},$=({alt:r,srcLocal:e,height:o,width:i,src:m,loading:d,...x})=>{if(!e&&!m)throw new Error("srcLocal or src is required");const a=e?g[e]:{src:m,width:i,height:o};return c.jsx("img",{src:a.src,alt:r,width:i||a.width,height:o||a.height,loading:d,...x})},s={white:"#FFFFFF",dark:"#101118",darkLighter:"#20222e"};p`
    :root {
        --primary: ${s.white};
        --secondary: ${s.darkLighter};
        --tertiary: ${s.dark};
    }
`;const v={primary:"var(--primary)",secondary:"var(--secondary)",tertiary:"var(--tertiary)"};export{$ as I,l as M,v as T};

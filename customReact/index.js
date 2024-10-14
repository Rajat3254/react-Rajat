function customRender(reactElement,customRoot){
   const domElement= document.createElement(reactElement.type)
   domElement.innerHTML=reactElement.children

   for (const prop in reactElement.props) {
        if(prop ==='children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
   }

   customRoot.appendChild(reactElement);
}

const reactElement={
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}
// hame different elements create karne hai aur usko root me add karna hai
const customRoot=document.getElementById(root);
customRender(reactElement,customRoot)

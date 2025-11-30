const importMap = {
  "imports": {
    "react": "https://esm.sh/react@18.2.0?dev",
    "react-dom/client": "https://esm.sh/react-dom@18.2.0/client?dev",
    "framer-motion": "https://esm.sh/framer-motion@12.0.0-alpha.0?dev&external=react,react-dom",
    "@phosphor-icons/react": "https://esm.sh/@phosphor-icons/react@2.0.10?dev&external=react,react-dom"
  }
};
const script = document.createElement('script');
script.type = 'importmap';
script.textContent = JSON.stringify(importMap);
document.head.appendChild(script);
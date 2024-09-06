import{P as p,w as B,e as o,u as d}from"./Page-B9I4cXX5.js";import"./index-DZLKizrv.js";import"./jsx-runtime-QvZ8i92b.js";import"./index-uubelm5h.js";const I={title:"Example/Page",component:p,parameters:{layout:"fullscreen"}},t={},e={play:async({canvasElement:g})=>{const a=B(g),n=a.getByRole("button",{name:/Log in/i});await o(n).toBeInTheDocument(),await d.click(n),await o(n).not.toBeInTheDocument();const l=a.getByRole("button",{name:/Log out/i});await o(l).toBeInTheDocument()}};var c,s,r;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var u,i,m;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', {
      name: /Log in/i
    });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole('button', {
      name: /Log out/i
    });
    await expect(logoutButton).toBeInTheDocument();
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const L=["LoggedOut","LoggedIn"];export{e as LoggedIn,t as LoggedOut,L as __namedExportsOrder,I as default};

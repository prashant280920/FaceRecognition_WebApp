(this.webpackJsonpfacerecognition=this.webpackJsonpfacerecognition||[]).push([[0],{129:function(e,t,a){},328:function(e,t,a){},329:function(e,t,a){},331:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(40),r=a.n(i),o=(a(91),a(13)),l=a(14),c=a(16),m=a(15),u=function(e){var t=e.onRouteChange;return e.isSignedIn?s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer"},"Sign Out")):s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign In"),s.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer"},"Register"))},p=(a(92),function(e){return s.a.createElement("div",{className:"bounding-box",style:{top:e.topRow,right:e.rightCol,bottom:e.bottomRow,left:e.leftCol}})}),h=function(e){var t=e.imageUrl,a=e.box,n=0,i=[];for(n=0;n<a.length;n++)i.push(p(a[n]));return s.a.createElement("div",{className:"center ma"},s.a.createElement("div",{className:"absolute mt2"},s.a.createElement("img",{id:"inputimage",src:t,alt:"",width:"500px",height:"auto"}),i))},d=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onNameChange=function(e){n.setState({name:e.target.value})},n.onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onSubmitSignIn=function(){n.state.email&&n.state.password&&fetch("http://localhost:3001/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.email,password:n.state.password,name:n.state.name})}).then((function(e){return e.json()})).then((function(e){e?(console.log("1"),n.props.loadUser(e),n.props.onRouteChange("home")):console.log("2")}))},n.state={email:"",password:"",name:""},n}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("article",{className:"center w-100 nw6 br3 pa3 pa4-ns mv4 ba b--black-10 shadow-5",style:{maxWidth:"20rem"}},s.a.createElement("main",{className:"pa3 black-80"},s.a.createElement("div",{className:"measure "},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name-address"},"Name"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange,required:!0})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),s.a.createElement("div",{className:""},s.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register",onClick:this.onSubmitSignIn})))))}}]),a}(s.a.Component),g=a(41),b=a.n(g),E=a(83),f=a.n(E),w=(a(129),a(84)),v=a.n(w),N=function(){return s.a.createElement("div",{className:"ma4 margin"},s.a.createElement(f.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150}},s.a.createElement("div",{className:"Tilt-inner pa3"},s.a.createElement("img",{style:{paddingTop:"5px"},src:v.a,alt:"logo"}))))},j=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(){fetch("http://localhost:3001/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={signInEmail:"",signInPassword:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return s.a.createElement("article",{className:"center w-100 nw6 br3 pa3 pa4-ns mv4 ba b--black-10 shadow-5",style:{maxWidth:"20rem"}},s.a.createElement("main",{className:"pa3 black-80"},s.a.createElement("div",{className:"measure "},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),s.a.createElement("div",{className:""},s.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in",onClick:this.onSubmitSignIn})),s.a.createElement("div",{className:"lh-copy mt3"},s.a.createElement("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer"},"Register")))))}}]),a}(s.a.Component),C=function(e){var t=e.name,a=e.entries;return s.a.createElement("div",null,s.a.createElement("div",{className:"white f3"},"".concat(t," , your current entry count is...")),s.a.createElement("div",{className:"white f1"},a))},y=a(85),k=a.n(y),S=(a(328),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return s.a.createElement("div",null,s.a.createElement("p",{className:"f3"},"This Magic Brain will detect face in your pictures. Give it a try"),s.a.createElement("div",{className:"center"},s.a.createElement("div",{className:"form pa4 br3 shadow-5 center"},s.a.createElement("input",{className:"f4 pa2 w-70 center",type:"tex",onChange:t}),s.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2  white bg-light-purple",onClick:a},"Detect"))))}),I=(a(329),new b.a.App({apiKey:"3216bc4451494eabbd44784b0608a328"})),H={particles:{number:{value:120,density:{enable:!0,value_area:800}}}},B={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},x=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){for(var t=[],a=document.getElementById("inputimage"),n=Number(a.width),s=Number(a.height),i=0;i<e.length;i++){var r=e[i].region_info.bounding_box;t.push({leftCol:r.left_col*n,topRow:r.top_row*s,rightCol:n-r.right_col*n,bottomRow:s-r.bottom_row*s})}return t},e.displayflexbox=function(t){console.log(t),e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),I.models.predict(b.a.FACE_DETECT_MODEL,e.state.input).then((function(t){t&&fetch("http://localhost:3001/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})),e.displayflexbox(e.calculateFaceLocation(t.outputs[0].data.regions)),console.log(e.state.user.id,e.state.user.entries)})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signin"===t?e.setState({isSignedIn:!1}):"home"===t?e.setState({isSignedIn:!0}):"signout"===t&&e.setState(B),e.setState({route:t})},e.state=B,e}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(k.a,{className:"particles",params:H}),s.a.createElement(u,{onRouteChange:this.onRouteChange,isSignedIn:this.state.isSignedIn}),"home"===this.state.route?s.a.createElement("div",null,s.a.createElement(N,null),s.a.createElement(C,{name:this.state.user.name,entries:this.state.user.entries}),s.a.createElement(S,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),s.a.createElement(h,{box:this.state.box,imageUrl:this.state.imageUrl})):"signin"===this.state.route?s.a.createElement(j,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):s.a.createElement(d,{onRouteChange:this.onRouteChange,loadUser:this.loadUser}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(330);r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},84:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAPh0lEQVR4nO2debRXVRXHP7/3Ho/3EEEmBZQYVTRQEyM01FJMidByhas0bTnksEotNS21RHMZYqVZaZbhUlNkUHOqxCkJRQ2VyQFEURFEQFGQ+cGvP/a9/fY5d55+70Hvu9ZZ6/x+95x99j33nmEPZ19oRSta0YrtBqXmZsAHXYETgOHA3sBOwBrgPeBp4O/AGzFp9QHGAAcCg4DNTloM/BuYAqzKj/UdC52BG4FNQDkkbQWmAvuE0NobuA9oiqC1Efgt0Cn3u9nOcTCwhPDOs9M64HQfWqcCnyak9S4wrJA7S4iWMGUdCTwItFP/LQceAp4CViJv8H7AccBgq/4/gTud/CnA0db1V5ERNRfYgIzEw4HRwG6q3Drnv6cy3c12jgHAaipv6ibgKqAhoHwJeSjvE/3WL0c6OOilawCuxpwiPwT6Zbyn7RYl4EnM+fzImHV3Ax4j+GE8ivn2h+Eop2237uMx6+1wOBqzE7+VsH4JGQF/BWYDLyNT1yiST8UnWrwclbD+DoGpVDpgejPzArINdvmZ2sy8VB0lZLF2O+CY5mUHEB5cflbSTBueajTaDdnW7oEIecsRWeIu5/pGYBdkcU2KwUhH1ji/twH/AOanoNUAfAy0dX6fiuz8dgbWIoLps2zHguQI4Amk88N2Q4tS0m8APvKh9yHBu7QovBXB61ZgGvDllPSbBe2QxTWJgPeNFO20B9YH0NspBb2zMHdbUek2oDFFO6HIe8raGdmOfsH6fwkwB+msbs513Wll4HLgmoTtjQCOB2qd31uBe5GRmQTjgEus/9YB8xDeOwL7ItOuxkzgK4hmoMWhhCj+9Fs0C/iiT9lG4BzMhb0MnFEVTk2cZfGwAjgbU3Pg4jDgJav8Q7QMjYcHZ2Ay+icqC2QQdkdGjlvnU+e/aqEXMhLc9l8GekbUaQD+gnmvpxbIYyq0QRR0WtqtDa1RQQ/krXTrHlcEgwEYr9p93+ElDmoRnZdb922grgD+UuNrVJjbQPRbZuNLwEJk+PtNFUXhQip8fzth3V6YerCv5staNlxPhbF7qtju8cBEYLKTJpJsx1aDGMPi6tBsTKFy39enpFEI7qPC2LlVarMD/sasTchurxo4T7V7Xx4Ea6KLxILWrL6fE80obEQkaxurSSf1p8EHKh9XuxyKvBaidSpfrbdzM2LlG01FQNuArEObq8RDe5VvUbLITVSG7u+amZc4iNqOx8XNVO77ppxoZsLewFhEH+Uy9gFQn5HuKERBGEeWSYKdEaXmNuBhsgl09ZiC7SKkL/bKxmI6dEX0VUFeHQdkpD9b0ZpGOt2UjQ7A85h8fiYDvUH433sTcAfQJQuzSTAEWBrAjCvtptW2urjBojkxIz0Qy6Km+WBGenWIYS2oH5YAn8vYRiQGIept3fBc4ALgEMQxLQ+9Ti0wwWrn6z7lLgcWAG86aQFwmU+5MRatWxHtQh7ohejrfoxMs7qdVcBnc2rHgwbgFdXYZuAH5Ld1tlFCtLZue7bRqTP+b+Y2vI5vc9X1JwrkuRY4H+kb/cLmuQ7+Dz9RjWylOjqnAZgGriHqWg2mYtJNszE7fCgm3/0L51q0BZrvi/JuoA2mL9Rv8m4gBHqU/My61ggcithFRjh522h0tao/rVBOTeh1cBk5Kx8PVcQ3UsUdBHClantCivr3qvpX5shXFLpiqnb87EIexJ1Lh6v8v5CFvVpYpvJJtcgg210/WkVjFeKt72J4UEGNuA+ku8q/HpejnKA7dG2K+p+ofLXUOi5eU/lYL1PceU3Pyxtis5MPhqr8Yp/r7alsYbfg1Sm9rfKfz4+tWNB9FUs2iztCVqp8n7jcKDQgSr+3gZEJ6nXFNPw8ZV2fgoyaj5y0FrGLEFBnFLJdjos+iPN3WntJX5VfkZKGL06gsjitIPm+eqSqPyNBvT9i7lR0u13wbnndpDu9AXHOS6MEnEnFxtI9oqyNtpi6rm8mrB8K17PQJX52wvojMB9oHOyPCHlhe/nJeB+Gn8XyYnV9G3LWJAo1mH5a9rmUKJyj6m5EXIlyxW2qgbXIgrUSmdefQY6GjQio2x+z03aN0d4hqvx/CF7v2iOSeSdM+4RGG4eGS+/gGO33sXju6lOmHrHH/AFx1n4T0WHNR/ooy3Y9FKPx6mmCkp+bZQmZctwyl8Zs93TgOuJ7g4Shh0PrtJjlf0SF37cCyswgXp/MQ/owMzpjClZx0pgAWr9SZZaTTycXhUZMG4+fZqKBaL9lO03B3MZ7EKaZ3R3xrxqo/tuGDE33aPIyh/m9kC3lO8AvHUZt9HTquG4+LyC7lxZl+nQwgYrzWxNy4tfPKfxip9xcpK8WIvezK7IGjkIkdN3PryJTeyLfg3bAi5hP9zGnkSw436K5iJgSbAAaEfdOV5d1GNkcoNsBt1s8ZtXb7Y88LE3zFSJGig3bmDOWfOwcJcQWoWk3kU5zXEs8bW9ctMX7Es4kHw/3WuDXFu1JcStrRWIZWQjzRA0yrektbZq3MIk9JA4OwPsw/HZWWXCN1UYsIVnvHGZQnDFnOHIKdzrppH8Q66BtMYy7g7NRB9yP6L7Gk90MHdSGK2y6Dz0Ue2I+waHhxVuRAsMw+zhU4LxIFXypcNb+f6FNysaItqcjHe8jq1dGK4Jxr8ofpC/YD0QLa2kPY7YiGtpho4++YOuH9K4iV3VxQeiHqCTcBXgjMrIXNxtH8bBG5Q39m/1AtGm2pceQaovsUmxF5U8Rj8RqOVyngfZJ0LYmz5S1VOWr4S6TBW0Rs4CNThTkB5UjBqj8e/qCPULmUDGkjCT5MeUo1CO6na7IGfMViOtpUwpaa5CANSdgHoueRDrbu4ueiBN5Z4ev+YiMkxQ9kBd+qc81HUpkThiRfahsx7YirqN54hG8kvUniFEpq4N2FjQgejbt5O2mzSTXtw1DDHpNwM8xZ6LBmFrigZ7aFjRTDzn/tUNMn5MRX9a0sM+l2yqPCRQQHSEChxMdXvD8hDS1hbKMHH1wp1H9Us6OQ0zbv8uIsPiA+n1LQuY0TkSCCcxChqpfKItZSLSHauA0TD9cN73j8PESIjMk3eB0x2vQm4L3QcV2+PCbWtx0QULmwtAG8Wp/wWrjGYpfmEdjnm9ZD1xLthlAoxG4m+B+fDgJsW6IscUm8gDxAwIkQR2mRbEMXBGj3gjkWNktTrqZYLu+RifMYAXvIrF980YNIhfZ/biQFJrkfpjhj94j2IkgL+iziusJPzkVFA0oqh7Iw3bLryE8BnBWdMFco1aTMtBmB8TzziV0Sk4MhqE9ImW7jIct8FniZem5/IfZWI6F76j2UrsE6VNHK0jnTj8QOJlkPrV9kbMocbbBg5C3fZyTriDeVr0O8Zs6KQFfQ5ERHGdKtFGPHIZ1+zPIESQU1yoCd6eo352Kb9IDaRhoYXDdmNaTzmPmHir9GWiFDbMGavE+yC8pDCdSWXPy2rk0J1zH6Ubgeynqa/tS4BoS9kC0V8SSFAzoOLz3p6jf0nCnyh+bov5HKh/ocRL2QLS/VBrpeV+V3xGmLP1SDSb5KV69jgbq2sIWah1YZUBgKX90xtx6FmWfOBdZmN37aEJcmH5fQFv6HuqR7ezyBPX3VPkk9f6H06ksQq9FlLWxK+ZWNI9IDDZ2wXQlctNW/NXyWdHeaieOw7jGAlU3VUjAPpg3nETjWYsZy7AITW4d/tqEBRSjTThQtbEuYRuHY74wvdMyoV0gnyHae7ETIneMRyRgt+7laRmIQEdkgR3jpGMp4ByGA1u6H4/ca9RoLGH6Yj2ahQl90KaM6Pb90B4JcbcW7xtbRhyLi5hG0qCEOIcncYTrhCnY6bQW8bwMmpavsMpnjoqt4wpuQwJHauyJGXIjKE0hvhfkaci0MI18bfs9qXwF4UXiaR9qiXckYz7mwg0S/0RP+/b5x1TohBwj0I1PRaI8d8Y8R1FGJNpbETfPO/A+lDhe39qRbDb5hM/r4cNrVIzgjpjxJMvIPV2G3KP9pZ9FSJ/sgfchLiDHWWIAFaWfmzZhLqrbkClNTwUlvOcAVzjlwpwoLrXqPE427/sSMndrmmGHP/sjU41t4Zxo8dGIRIfQo+ANvME536IAp5GehMeHCjJzNmBOe25qInw+HWuV91NX/BnT4rcZiUJnQx/ADFsLQb784xeY7R6CjWYX+pR309Oki0ARCzWIMGYHMHuB8PWhBjmz97FVL2r3NUmVXYz5dsY9Fl1CvEbca1HnMq6yaK1GXrawEVqDmHx1vaXA9ynu9ICBtpiCzpkx63VDTMDPIUcRorSmPTBHwGHqmt80VEY+o6c77wh1bTPR61EvJJ7Ls4itJK5l70zVzkKawTdMj5JDCmxHm0Cv8rneC9Ge9sNfq3ydqv+3gngE8xi3ny9WLGSJ4aSd24oMRD+LypHi3j7XozTReita5BELHYl1S1oiWea3d1W+yKAuWaNHa031B4GlskP3wTtpiWR5IE+q/JnkF1TSho4xkkZLqo8f5xIO3Af1mOvok0EFo5DlgdxOZWjuhagPivjSjP58kv3m1SG2iSFOGox3+tR1ijiiV0Lu3TVRbEGEx2bBjZg7nMl4v9OUBbshN+jS1zFKapCdkL3LspWgerHdQnK1eRh64ZWxbsiRfmI04PU6bEI66g5EG5oFWrm5wLoWdCzaTw7RGoUjMvJ0MnJvM/EKkM9TzOndROiIN1KBVqdk8QisR0ynbyBfQ7MxHlHFuAHMViDeMjaORh7oVLLFpR+Cv1GsjMhEiaIzFIkS8lEwLSy66a6Qetsb/Hx1X0e00y3yS20lJLbHOEzpOGnwr5aI/TDXs3HIvbbIB2GjBtMd/3nyFx73AH7h0F7mpOcQaT7PjQUI73qtnEeVdFR5YhTm0L6V/ALYXEL4Z1I3IP67ebWnv1u4jWSBPFsUtDd7GQmFl2Wk7ISpAY5Kk8jm8VKH9x6KcDGqGhrxhsF7nHTBZvbBtCSWkbCz51ERDM9z/tNl5hDjHJ8P+uLdPU6nBWxrs6IDMrfrG1uPhGiK84Wb/siUoRfUMnL+0c/DpCNyOkmX3YJMmXGsdr2RBds+e/IsVYiMXa0dQjskBq8tKG5FBKzpyPZxFTJN9ERUEcfgPV5QRr54MBaZz/1Qg5hWL8N7j/MQm8mbyEagCbF5DETsLQfj9bm6HbE6Vjuqd+E4iegTr2FpPskW1JHE84gJSksQL/4dGu0Qq+FrxO+Y2cgJrjQeibXAd/EPBxiUXkVMztX8Li/Q/ELNQYiL6jDEJacL0oEfUgnQ/AgZ7AsWelOJFNrXaW+r095SZK2bgRjFWtGKVrSiFeH4L+2xJZ7Khu2JAAAAAElFTkSuQmCC"},86:function(e,t,a){e.exports=a(331)},91:function(e,t,a){},92:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.e496eb43.chunk.js.map
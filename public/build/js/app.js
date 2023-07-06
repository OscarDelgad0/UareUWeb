const variables={};async function consultarAPIEmpleados(){try{const a="http://localhost:3000/APIEnviarEmpleados.php",t=await fetch(a);return await t.json()}catch(a){console.log(a)}}async function consultarAPIActualizacion(){try{const a="http://localhost:3000/APISensor.php",t=await fetch(a);return await t.json()}catch(a){console.log(a)}}async function consultarAPIAsistencia(){try{const a="http://localhost:3000/APIAsistencia.php",t=await fetch(a);return await t.json()}catch(a){console.log(a)}}async function colocarEmpleados(){const a=await consultarAPIEmpleados();console.log(a)}async function mostrarEmpleados(){const a=document.querySelector(".contenedor-empleados");if(a){const t=await consultarAPI();console.log(t),t.forEach(t=>{const{id:o,nombre:e}=t,n=document.createElement("div"),c=document.createElement("P"),i=document.createElement("P");c.textContent=o,i.textContent=e,n.appendChild(c),n.appendChild(i),a.appendChild(n)})}}async function sensor(){const a=await consultarAPIActualizacion();var t=parseInt(a[0].status_asistencia),o=Boolean(t);console.log(a[0].status_asistencia),console.log(o),o?console.log("Sin cambios"):console.log("Con cambios")}async function actualizarAsistencia(a){const{id:t,time_actualizacion_now:o,date_actualizacion_now:e,time_actualizacion_past:n,date_actualizacion_past:c}=cambios[0],i=new FormData;i.append("id",2),i.append("time_actualizacion_now",o),i.append("date_actualizacion_now",e),i.append("time_actualizacion_past",n),i.append("date_actualizacion_past",c),i.append("actualizacion","last");try{const a="http://localhost:3000/POSTCambios.php",t=await fetch(a,{method:"POST",body:i});await t.json()}catch(a){}}async function actualizarMenuAsistencia(){const a=document.querySelector(".detector-hora"),t=document.querySelector(".nombre-card-asistencia"),o=document.querySelector(".hora-card-asistencia"),e=document.querySelector(".atiempo"),n=document.querySelector(".tarde"),c=await consultarAPIAsistencia(),{id:i,nombre:s,verificado:l}=c[0];console.log(c[0]);var u=new Date,r=u.getHours(),d=u.getMinutes(),p=r>=12?"PM":"AM",m=(r=(r%=12)||12)+":"+(d=d<10?"0"+d:d)+" "+p;o.textContent=m,t.textContent=s,a.classList.remove("visible"),setTimeout((function(){a.classList.add("visible")}),3200),r<=10?setTimeout((function(){e.classList.remove("visible"),setTimeout((function(){e.classList.add("visible")}),2e3)}),2e3):setTimeout((function(){n.classList.remove("visible"),setTimeout((function(){n.classList.add("visible")}),2e3)}),2e3)}async function actualizarEmpleados(a){const{id:t,time_actualizacion_now:o,date_actualizacion_now:e,time_actualizacion_past:n,date_actualizacion_past:c}=a[0],i=new FormData;i.append("id",t),i.append("time_actualizacion_now",o),i.append("date_actualizacion_now",e),i.append("time_actualizacion_past",n),i.append("date_actualizacion_past",c),i.append("actualizacion","last");try{const a="http://localhost:3000/POSTCambios.php",t=await fetch(a,{method:"POST",body:i});await t.json()}catch(a){}}function verificador(){setInterval(sensor,1e3)}document.addEventListener("DOMContentLoaded",(function(){mostrarEmpleados(),sensor(),colocarEmpleados()})),setTimeout(verificador,5e3);
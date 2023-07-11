const variables={};async function consultarAPIEmpleados(){try{const t="http://localhost:3000/APIEnviarEmpleados.php",a=await fetch(t);return await a.json()}catch(t){console.log(t)}}async function consultarAPIActualizacion(){try{const t="http://localhost:3000/APISensor.php",a=await fetch(t);return await a.json()}catch(t){console.log(t)}}async function consultarAPIHuella(){try{const t="http://localhost:3000/APISensor.php",a=await fetch(t);return await a.json()}catch(t){console.log(t)}}async function consultarAPIAsistencia(){try{const t="http://localhost:3000/APIUltimaHuella.php",a=await fetch(t);return await a.json()}catch(t){console.log(t)}}async function colocarEmpleados(){await consultarAPIEmpleados()}async function mostrarEmpleados(){const t=document.querySelector(".contenedor-empleados");if(t){(await consultarAPI()).forEach(a=>{const{id:e,nombre:o}=a,s=document.createElement("div"),n=document.createElement("P"),c=document.createElement("P");n.textContent=e,c.textContent=o,s.appendChild(n),s.appendChild(c),t.appendChild(s)})}}async function sensor(){const t=await consultarAPIActualizacion();var a=parseInt(t[0].status_asistencia),e=Boolean(a),o=parseInt(t[0].status_registro);Boolean(o);e&&console.log("Sin cambios"),e||(actualizarMenuAsistencia(),actualizarAsistencia(t))}async function actualizarAsistencia(t){const a=new FormData;for(const e in t[0])a.append(e,t[0][e]);a.append("status_asistencia",1);try{const t="http://localhost:3000/POSTCambios.php",e=await fetch(t,{method:"POST",body:a});await e.json()}catch(t){}}async function actualizarMenuAsistencia(){const t=document.querySelector(".detector-hora"),a=document.querySelector(".nombre-card-asistencia"),e=document.querySelector(".hora-card-asistencia"),o=document.querySelector(".notificacion-asistencia"),s=document.querySelector(".notificacion-asistencia-contenedor"),n=(document.querySelector(".tarde"),await consultarAPIAsistencia()),{nombre:c,hora_entrada:i,apellido:l}=n;var r=new Date,d=r.getHours(),u=r.getMinutes(),p=d,m=d>=12?"PM":"AM",h=(d=(d%=12)||12)+":"+(u=u<10?"0"+u:u)+" "+m,[f,y]=i.split(":"),L=60*(f=parseInt(f))+(y=parseInt(y)),w=60*(p=parseInt(p))+u;console.log(L),console.log(w),w<=L?(o.textContent="A tiempo",(s.classList.contains("atiempo")||s.classList.contains("falta")||s.classList.contains("retardo"))&&(s.classList.remove("atiempo"),s.classList.remove("falta"),s.classList.remove("retardo")),s.classList.add("atiempo")):w>L&&w<=L+10?(o.textContent="Retardo",(s.classList.contains("atiempo")||s.classList.contains("falta")||s.classList.contains("retardo"))&&(s.classList.remove("atiempo"),s.classList.remove("falta"),s.classList.remove("retardo")),s.classList.add("retardo")):(o.textContent="Falta",(s.classList.contains("atiempo")||s.classList.contains("falta")||s.classList.contains("retardo"))&&(s.classList.remove("atiempo"),s.classList.remove("falta"),s.classList.remove("retardo")),s.classList.add("falta")),e.textContent=h,a.textContent=c,t.classList.remove("visible"),setTimeout((function(){t.classList.add("visible")}),4200)}async function actualizarEmpleados(t){const{id:a,time_actualizacion_now:e,date_actualizacion_now:o,time_actualizacion_past:s,date_actualizacion_past:n}=t[0],c=new FormData;c.append("id",a),c.append("time_actualizacion_now",e),c.append("date_actualizacion_now",o),c.append("time_actualizacion_past",s),c.append("date_actualizacion_past",n),c.append("actualizacion","last");try{const t="http://localhost:3000/POSTCambios.php",a=await fetch(t,{method:"POST",body:c});await a.json()}catch(t){}}function verificador(){setInterval(sensor,2e3)}document.addEventListener("DOMContentLoaded",(function(){mostrarEmpleados(),sensor(),colocarEmpleados()})),setTimeout(verificador,5e3);
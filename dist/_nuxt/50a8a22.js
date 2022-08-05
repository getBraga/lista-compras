(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{318:function(e,o,r){"use strict";function t(e){switch(e){case"auth/app-deleted":return"O banco de dados não foi localizado.";case"auth/expired-action-code":return"O código da ação o ou link expirou.";case"auth/invalid-action-code":return"O código da ação é inválido. Isso pode acontecer se o código estiver malformado ou já tiver sido usado.";case"auth/user-disabled":return"O usuário correspondente à credencial fornecida foi desativado.";case"auth/user-not-found":return"O e-mail não correponde à nenhuma credencial.";case"auth/weak-password":return"A senha é muito fraca.";case"auth/email-already-in-use":return"Já existe uma conta com o endereço de email fornecido.";case"auth/invalid-email":return"O endereço de e-mail não é válido.";case"auth/operation-not-allowed":return"O tipo de conta correspondente à esta credencial, ainda não encontra-se ativada.";case"auth/account-exists-with-different-credential":return"E-mail já associado a outra conta.";case"auth/auth-domain-config-required":return"A configuração para autenticação não foi fornecida.";case"auth/credential-already-in-use":return"Já existe uma conta para esta credencial.";case"auth/operation-not-supported-in-this-environment":return"Esta operação não é suportada no ambiente que está sendo executada. Verifique se deve ser http ou https.";case"auth/timeout":return"Excedido o tempo de resposta. O domínio pode não estar autorizado para realizar operações.";case"auth/missing-android-pkg-name":return"Deve ser fornecido um nome de pacote para instalação do aplicativo Android.";case"auth/missing-continue-uri":return"A próxima URL deve ser fornecida na solicitação.";case"auth/missing-ios-bundle-id":return"Deve ser fornecido um nome de pacote para instalação do aplicativo iOS.";case"auth/invalid-continue-uri":case"auth/invalid-page-token":return"A próxima URL fornecida na solicitação é inválida.";case"auth/unauthorized-continue-uri":return"O domínio da próxima URL não está na lista de autorizações.";case"auth/invalid-dynamic-link-domain":return"O domínio de link dinâmico fornecido, não está autorizado ou configurado no projeto atual.";case"auth/argument-error":return"Verifique a configuração de link para o aplicativo.";case"auth/invalid-persistence-type":return"O tipo especificado para a persistência dos dados é inválido.";case"auth/unsupported-persistence-type":return"O ambiente atual não suportar o tipo especificado para persistência dos dados.";case"auth/invalid-credential":return"A credencial expirou ou está mal formada.";case"auth/wrong-password":return"Senha incorreta.";case"auth/invalid-verification-code":return"O código de verificação da credencial não é válido.";case"auth/invalid-verification-id":return"O ID de verificação da credencial não é válido.";case"auth/custom-token-mismatch":return"O token está diferente do padrão solicitado.";case"auth/invalid-custom-token":return"O token fornecido não é válido.";case"auth/captcha-check-failed":return"O token de resposta do reCAPTCHA não é válido, expirou ou o domínio não é permitido.";case"auth/invalid-phone-number":return"O número de telefone está em um formato inválido (padrão E.164).";case"auth/missing-phone-number":return"O número de telefone é requerido.";case"auth/quota-exceeded":return"A cota de SMS foi excedida.";case"auth/cancelled-popup-request":return"Somente uma solicitação de janela pop-up é permitida de uma só vez.";case"auth/popup-blocked":return"A janela pop-up foi bloqueado pelo navegador.";case"auth/popup-closed-by-user":return"A janela pop-up foi fechada pelo usuário sem concluir o login no provedor.";case"auth/unauthorized-domain":return"O domínio do aplicativo não está autorizado para realizar operações.";case"auth/invalid-user-token":return"O usuário atual não foi identificado.";case"auth/user-token-expired":return"O token do usuário atual expirou.";case"auth/null-user":return"O usuário atual é nulo.";case"auth/app-not-authorized":return"Aplicação não autorizada para autenticar com a chave informada.";case"auth/invalid-api-key":return"A chave da API fornecida é inválida.";case"auth/network-request-failed":return"Falha de conexão com a rede.";case"auth/requires-recent-login":return"O último horário de acesso do usuário não atende ao limite de segurança.";case"auth/too-many-requests":return"As solicitações foram bloqueadas devido a atividades incomuns. Tente novamente depois que algum tempo.";case"auth/web-storage-unsupported":return"O navegador não suporta armazenamento ou se o usuário desativou este recurso.";case"auth/invalid-claims":return"Os atributos de cadastro personalizado são inválidos.";case"auth/claims-too-large":return"O tamanho da requisição excede o tamanho máximo permitido de 1 Megabyte.";case"auth/id-token-expired":return"O token informado expirou.";case"auth/id-token-revoked":return"O token informado perdeu a validade.";case"auth/invalid-argument":return"Um argumento inválido foi fornecido a um método.";case"auth/invalid-creation-time":return"O horário da criação precisa ser uma data UTC válida.";case"auth/invalid-disabled-field":return"A propriedade para usuário desabilitado é inválida.";case"auth/invalid-display-name":return"O nome do usuário é inválido.";case"auth/invalid-email-verified":return"O e-mail é inválido.";case"auth/invalid-hash-algorithm":return"O algoritmo de HASH não é uma criptografia compatível.";case"auth/invalid-hash-block-size":return"O tamanho do bloco de HASH não é válido.";case"auth/invalid-hash-derived-key-length":return"O tamanho da chave derivada do HASH não é válido.";case"auth/invalid-hash-key":return"A chave de HASH precisa ter um buffer de byte válido.";case"auth/invalid-hash-memory-cost":return"O custo da memória HASH não é válido.";case"auth/invalid-hash-parallelization":return"O carregamento em paralelo do HASH não é válido.";case"auth/invalid-hash-rounds":return"O arredondamento de HASH não é válido.";case"auth/invalid-hash-salt-separator":return"O campo do separador de SALT do algoritmo de geração de HASH precisa ser um buffer de byte válido.";case"auth/invalid-id-token":return"O código do token informado não é válido.";case"auth/invalid-last-sign-in-time":return"O último horário de login precisa ser uma data UTC válida.";case"auth/invalid-password":return"A senha é inválida, precisa ter pelo menos 6 caracteres.";case"auth/invalid-password-hash":return"O HASH da senha não é válida.";case"auth/invalid-password-salt":return"O SALT da senha não é válido.";case"auth/invalid-photo-url":return"A URL da foto de usuário é inválido.";case"auth/invalid-provider-id":return"O identificador de provedor não é compatível.";case"auth/invalid-session-cookie-duration":return"A duração do COOKIE da sessão precisa ser um número válido em milissegundos, entre 5 minutos e 2 semanas.";case"auth/invalid-uid":return"O identificador fornecido deve ter no máximo 128 caracteres.";case"auth/invalid-user-import":return"O registro do usuário a ser importado não é válido.";case"auth/invalid-provider-data":return"O provedor de dados não é válido.";case"auth/maximum-user-count-exceeded":return"O número máximo permitido de usuários a serem importados foi excedido.";case"auth/missing-hash-algorithm":return"É necessário fornecer o algoritmo de geração de HASH e seus parâmetros para importar usuários.";case"auth/missing-uid":return"Um identificador é necessário para a operação atual.";case"auth/reserved-claims":return"Uma ou mais propriedades personalizadas fornecidas usaram palavras reservadas.";case"auth/session-cookie-revoked":return"O COOKIE da sessão perdeu a validade.";case"auth/uid-alread-exists":return"O indentificador fornecido já está em uso.";case"auth/email-already-exists":return"O e-mail fornecido já está em uso.";case"auth/phone-number-already-exists":return"O telefone fornecido já está em uso.";case"auth/project-not-found":return"Nenhum projeto foi encontrado.";case"auth/insufficient-permission":return"A credencial utilizada não tem permissão para acessar o recurso solicitado.";case"auth/internal-error":return"O servidor de autenticação encontrou um erro inesperado ao tentar processar a solicitação.";default:return null}}r.d(o,"a",(function(){return t}))},323:function(e,o,r){"use strict";function t(e){return"Auth token is expired"===e&&(e="O token do usuário atual expirou.",window.localStorage.accessToken="",window.localStorage.uid="",window.location.reload()),e}r.d(o,"a",(function(){return t}))},329:function(e,o,r){var content=r(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(62).default)("a4696e50",content,!0,{sourceMap:!1})},338:function(e,o,r){"use strict";r(329)},339:function(e,o,r){var t=r(61)(!1);t.push([e.i,"h1[data-v-250e9cca]{text-transform:uppercase;color:#fff}.login[data-v-250e9cca]{align-items:center;justify-content:center;max-width:100%;margin:0 auto;height:100vh;background:#7f3f1f}.div-form[data-v-250e9cca],.login[data-v-250e9cca]{display:flex;flex-direction:column}.div-form[data-v-250e9cca]{background:#eee;color:#7f3f1f;min-width:25%;justify-self:center;padding:20px}.btn[data-v-250e9cca]{margin-top:10px}#cadastrar[data-v-250e9cca]{text-transform:capitalize;margin:10px 0;text-transform:none;color:#7f3f1f;text-align:center}.h1-titulo-login[data-v-250e9cca]{font-size:1.8rem}",""]),e.exports=t},349:function(e,o,r){"use strict";r.r(o);r(37);var t=r(14),n=(r(48),r(318)),d=r(323),c=r(151),l={name:"CreateUser",data:function(){return{isLoading:!1,isFullPage:!0,login:{email:"",password:"",name:""}}},computed:{disabled:function(){var e=!1;return this.login.password.length>=6&&this.login.name.length>0&&this.login.email.length>0&&(e=!0),e}},methods:{createNewUser:function(){var e=this;return Object(t.a)(regeneratorRuntime.mark((function o(){var r,t,c,l;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,e.isLoading=!0,r=e.login.name,t={nome:"",email:null},window.localStorage.accessToken="",window.localStorage.uid="",o.next=8,e.$firebase.auth().createUserWithEmailAndPassword(e.login.email,e.login.password).then((function(e){var o=e.user;o.updateProfile({displayName:r}),window.localStorage.setItem("accessToken",o.multiFactor.user.accessToken),window.localStorage.setItem("uid",o.multiFactor.user.uid),t.nome=r,t.email=o.multiFactor.user.email}));case 8:return o.next=10,e.$buefy.dialog.alert("Usuário cadastrado com sucesso!");case 10:return o.next=12,e.dtoPost(t);case 12:e.login.name="",e.login.email="",e.login.password="",e.isLoading=!1,o.next=25;break;case 18:o.prev=18,o.t0=o.catch(0),e.isLoading=!1,c=o.t0.code,null==(l=Object(n.a)(c))&&(l=Object(d.a)(o.t0.response.data.error)),e.$buefy.dialog.alert({title:"Error",message:"".concat(l),type:"is-danger",hasIcon:!0});case 25:case"end":return o.stop()}}),o,null,[[0,18]])})))()},dtoPost:function(data){var e=this;return Object(t.a)(regeneratorRuntime.mark((function o(){var r,t;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,e.isLoading=!0,o.next=4,c.a.postDadosUsuarios(data);case 4:window.localStorage.accessToken="",window.localStorage.uid="",e.isLoading=!1,o.next=17;break;case 9:o.prev=9,o.t0=o.catch(0),e.isLoading=!1,e.isLoading=!1,r=o.t0.code,null==(t=Object(n.a)(r))&&(t=Object(d.a)(o.t0.response.data.error)),e.$buefy.dialog.alert({title:"Error",message:"".concat(t),type:"is-danger",hasIcon:!0});case 17:case"end":return o.stop()}}),o,null,[[0,9]])})))()}}},m=(r(338),r(33)),component=Object(m.a)(l,(function(){var e=this,o=e._self._c;return o("div",[o("b-loading",{attrs:{"is-full-page":e.isFullPage,"can-cancel":!0},model:{value:e.isLoading,callback:function(o){e.isLoading=o},expression:"isLoading"}}),e._v(" "),o("section",{staticClass:"login"},[o("h1",{staticClass:"h1-titulo-login"},[e._v("Cadastro")]),e._v(" "),o("form",{staticClass:"div-form"},[o("b-field",{attrs:{label:"Nome"}},[o("b-input",{attrs:{id:"name",type:"name",name:"name",placeholder:"Nome"},model:{value:e.login.name,callback:function(o){e.$set(e.login,"name",o)},expression:"login.name"}})],1),e._v(" "),o("b-field",{attrs:{label:"Email"}},[o("b-input",{attrs:{id:"email",type:"email",name:"email",placeholder:"Email"},model:{value:e.login.email,callback:function(o){e.$set(e.login,"email",o)},expression:"login.email"}})],1),e._v(" "),o("b-field",{attrs:{label:"Senha"}},[o("b-input",{attrs:{id:"password",type:"password",name:"password",placeholder:"Senha",minlength:"6","password-reveal":""},model:{value:e.login.password,callback:function(o){e.$set(e.login,"password",o)},expression:"login.password"}})],1),e._v(" "),o("b-button",{staticClass:"btn",attrs:{disabled:!e.disabled,type:"is-primary"},on:{click:function(o){return o.preventDefault(),e.createNewUser.apply(null,arguments)}}},[e._v("\n        Cadastrar\n      ")]),e._v(" "),o("nuxt-link",{attrs:{id:"cadastrar",to:"/login"}},[e._v("Voltar")])],1)])],1)}),[],!1,null,"250e9cca",null);o.default=component.exports}}]);
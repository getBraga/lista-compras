(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{293:function(t,e,o){var content=o(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(48).default)("3c0c7939",content,!0,{sourceMap:!1})},294:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var r={decimal:",",thousands:".",prefix:"R$ ",suffix:"",precision:2,masked:!1}},295:function(t,e,o){"use strict";o(293)},296:function(t,e,o){var r=o(47)(!1);r.push([t.i,'.modal_default[data-v-7df2b926]:before{content:"";position:fixed;top:0;left:0;width:100%;height:100vh;background:rgba(0,0,0,.5)}.modal_default[data-v-7df2b926]{position:absolute;display:flex;align-items:center;justify-content:center;top:0;left:0;width:100%;height:100vh;padding:80px;z-index:60}.modal_container_default[data-v-7df2b926]{position:fixed;background:#fff;width:60%;padding:40px}.div_btn_modal_incluir[data-v-7df2b926]{display:flex;align-items:center;width:100%}.btn_modal_incluir[data-v-7df2b926]{margin:0 auto;width:95%}.modal_default_fechar[data-v-7df2b926]{position:absolute;top:-15px;right:-10px;width:40px;height:40px;border-radius:50%}',""]),t.exports=r},297:function(t,e,o){var content=o(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(48).default)("3aaf4e38",content,!0,{sourceMap:!1})},298:function(t,e,o){"use strict";o.r(e);var r=o(294),n={props:{modal:{type:Boolean,required:!0},fecharModal:{type:Function,required:!0},incluirLista:{type:Function,required:!0},nomeLista:{type:String,required:!0},preco:{type:String,required:!0},quantidade:{type:String,required:!0}},data:function(){return{nomeProdutoValue:this.nomeLista,precoValue:this.preco,quantidadeValue:this.quantidade}},computed:{valor:function(){return r.a}},watch:{modal:function(){this.nomeProdutoValue=this.nomeLista,this.precoValue=this.preco,this.quantidadeValue=this.quantidade},nomeProdutoValue:function(){this.$emit("update:nomeLista",this.nomeProdutoValue)},precoValue:function(){this.$emit("update:preco",this.precoValue)},quantidadeValue:function(){this.$emit("update:quantidade",this.quantidadeValue)}}},l=(o(295),o(25)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",[t.modal?e("section",{staticClass:"modal_default"},[e("form",{staticClass:"modal_container_default"},[e("b-button",{staticClass:"modal_default_fechar",attrs:{type:"is-primary"},on:{click:t.fecharModal}},[t._v("X")]),t._v(" "),e("div",{staticClass:"mb_20"},[e("label",{attrs:{for:"nomeProdutoValue"}},[e("p",{staticClass:"color_principal"},[t._v("Nome do item")]),t._v(" "),e("b-input",{attrs:{placeholder:"ex: arroz(branco)"},model:{value:t.nomeProdutoValue,callback:function(e){t.nomeProdutoValue=e},expression:"nomeProdutoValue"}})],1)]),t._v(" "),e("div",{staticClass:"mb_20"},[e("label",{attrs:{for:"precoValue"}},[e("p",{staticClass:"color_principal"},[t._v("Preço do produto")]),t._v(" "),e("b-input",{directives:[{name:"money",rawName:"v-money",value:t.valor,expression:"valor"}],model:{value:t.precoValue,callback:function(e){t.precoValue=e},expression:"precoValue"}})],1)]),t._v(" "),e("div",{staticClass:"mb_20"},[e("label",{attrs:{for:"quantidadeValue"}},[e("p",{staticClass:"color_principal"},[t._v("Quantidade")]),t._v(" "),e("b-input",{attrs:{type:"number",min:"1"},model:{value:t.quantidadeValue,callback:function(e){t.quantidadeValue=e},expression:"quantidadeValue"}})],1)]),t._v(" "),e("div",{staticClass:"div_btn_modal_incluir"},[e("b-button",{staticClass:"btn_modal_incluir",attrs:{type:"is-primary",disabled:!t.nomeProdutoValue},on:{click:t.incluirLista}},[t._v("Incluir")])],1)],1)]):t._e()])}),[],!1,null,"7df2b926",null);e.default=component.exports},299:function(t,e,o){"use strict";var r=o(2),n=o(4),l=o(38),d=o(24),c=o(31),f=o(202),m=o(13),_=o(3),h=o(200),v=o(137),w=o(300),y=o(301),x=o(78),C=o(302),A=[],k=n(A.sort),I=n(A.push),S=_((function(){A.sort(void 0)})),V=_((function(){A.sort(null)})),L=v("sort"),N=!_((function(){if(x)return x<70;if(!(w&&w>3)){if(y)return!0;if(C)return C<603;var code,t,e,o,r="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(o=0;o<47;o++)A.push({k:t+o,v:e})}for(A.sort((function(a,b){return b.v-a.v})),o=0;o<A.length;o++)t=A[o].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:S||!V||!L||!N},{sort:function(t){void 0!==t&&l(t);var e=d(this);if(N)return void 0===t?k(e):k(e,t);var o,r,n=[],_=c(e);for(r=0;r<_;r++)r in e&&I(n,e[r]);for(h(n,function(t){return function(e,o){return void 0===o?-1:void 0===e?1:void 0!==t?+t(e,o)||0:m(e)>m(o)?1:-1}}(t)),o=n.length,r=0;r<o;)e[r]=n[r++];for(;r<_;)f(e,r++);return e}})},300:function(t,e,o){var r=o(65).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},301:function(t,e,o){var r=o(65);t.exports=/MSIE|Trident/.test(r)},302:function(t,e,o){var r=o(65).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},303:function(t,e,o){"use strict";o(297)},304:function(t,e,o){var r=o(47)(!1);r.push([t.i,".icon-atualizar{display:flex}",""]),t.exports=r},305:function(t,e,o){"use strict";o.r(e);o(201),o(14),o(32),o(28),o(79),o(299),o(80);function r(){return Math.floor(1e4*Math.random()*parseInt((new Date).getMilliseconds())).toString(16)}var n=[{id:r(),nome_produto:"Arroz",preco_produto:0,quantidade:1,preco_total:0,podeAlterar:!1},{id:r(),nome_produto:"Feijão",preco_produto:0,quantidade:1,preco_total:0,podeAlterar:!1},{id:r(),nome_produto:"Macarrão",preco_produto:0,quantidade:1,preco_total:0,podeAlterar:!1},{id:r(),nome_produto:"Batata Frita",preco_produto:0,quantidade:1,preco_total:0,podeAlterar:!1},{id:r(),nome_produto:"Açucar",preco_produto:0,quantidade:1,preco_total:0,podeAlterar:!1},{id:r(),nome_produto:"Sal",preco_produto:0,quantidade:1,preco_total:0,podeAlterar:!1},{id:r(),nome_produto:"Óleo",preco_produto:0,quantidade:1,preco_total:0,podeAlterar:!1},{id:r(),nome_produto:"Café (Pipinela)",preco_produto:0,quantidade:1,preco_total:0,podeAlterar:!1},{id:r(),nome_produto:"Biscoito Piraque",preco_produto:0,quantidade:1,preco_total:0,podeAlterar:!1},{id:r(),nome_produto:"Requeijão",preco_produto:0,quantidade:1,preco_total:0,podeAlterar:!1},{id:r(),nome_produto:"Café (Pilão)",preco_produto:0,quantidade:1,preco_total:0,podeAlterar:!1},{id:r(),nome_produto:"Biscoito Trakinas",preco_produto:0,quantidade:1,preco_total:0,podeAlterar:!1}],l=o(298),d=o(294),c={components:{ModalIncluirListaVue:l.default},data:function(){return{sortField:"nome_produto",sortOrder:"desc",defaultSortOrder:"desc",data:[],incluirInfo:{id:r(),nome_produto:"",preco_produto:"0",quantidade:"1",preco_total:"0",podeAlterar:!1},gastar:630,alterarNome:null,alterarPreco:null,alterarQuantidade:null,modal:!1}},computed:{money:function(){return d.a},total:function(){var t=0;for(var e in this.data)t+=+this.data[e].preco_total;return this.moedaLocal(t)},saldo:function(){return this.gastar-+this.regexFormater(this.total)}},mounted:function(){this.ordenar(n),window.localStorage.listaCompras||window.localStorage.setItem("listaCompras",JSON.stringify(n)),this.data=JSON.parse(window.localStorage.getItem("listaCompras"))},methods:{excluir:function(data){var t=this;this.$buefy.dialog.confirm({title:"Deletar item",message:"Tem certeza que deseja excluir o item ".concat(data.nome_produto,"?"),confirmText:"Deletar",type:"is-danger",hasIcon:!0,onConfirm:function(){t.data.splice(t.data.indexOf(data),1),t.$buefy.toast.open("Item deletado!"),window.localStorage.setItem("listaCompras",JSON.stringify(t.data))}})},ativarAlterar:function(data){this.data.forEach((function(t){t.podeAlterar&&(t.podeAlterar=!1)})),this.alterarNome=data.nome_produto,this.alterarPreco=data.preco_produto,this.alterarQuantidade=data.quantidade,data.podeAlterar=!0},cancel:function(data){data.podeAlterar=!1},alterar:function(data){var t=this.data.indexOf(data);data.nome_produto=this.alterarNome,data.preco_produto=this.regexFormater(this.alterarPreco),data.quantidade=this.alterarQuantidade,data.preco_total=data.preco_produto*data.quantidade,this.data[t]=data,data.podeAlterar=!1,window.localStorage.setItem("listaCompras",JSON.stringify(this.data))},fecharModal:function(){this.modal=!1},regexFormater:function(t){return t.replace("R$","").replace(/[.]/gi,"").replace(",",".")},moedaLocal:function(t){return t.toLocaleString("pt-br",{style:"currency",currency:"BRL"})},ordenar:function(t){t.sort((function(a,b){return a.nome_produto.toLowerCase()>b.nome_produto.toLowerCase()?1:b.nome_produto.toLowerCase()>a.nome_produto.toLowerCase()?-1:0}))},incluirLista:function(){var t=+this.regexFormater(this.incluirInfo.preco_produto),e=+this.incluirInfo.quantidade;this.incluirInfo.preco_produto="".concat(t,".00"),this.incluirInfo.preco_total=+t*+e,this.incluirInfo.id=r(),this.data.push(this.incluirInfo),this.ordenar(this.data),this.incluirInfo={nome_produto:"",preco_produto:"0",quantidade:"1",preco_total:"0",podeAlterar:!1},window.localStorage.setItem("listaCompras",JSON.stringify(this.data)),this.modal=!1}}},f=(o(303),o(25)),component=Object(f.a)(c,(function(){var t=this,e=t._self._c;return e("section",[t._m(0),t._v(" "),e("b-button",{staticClass:"mb_20 mt_10",attrs:{type:"is-primary"},on:{click:function(e){t.modal=!0}}},[t._v("Novo item")]),t._v(" "),e("ModalIncluirListaVue",{attrs:{modal:t.modal,"fechar-modal":t.fecharModal,"incluir-lista":t.incluirLista,"nome-lista":t.incluirInfo.nome_produto,preco:t.incluirInfo.preco_produto,quantidade:t.incluirInfo.quantidade},on:{"update:nomeLista":function(e){return t.$set(t.incluirInfo,"nome_produto",e)},"update:nome-lista":function(e){return t.$set(t.incluirInfo,"nome_produto",e)},"update:preco":function(e){return t.$set(t.incluirInfo,"preco_produto",e)},"update:quantidade":function(e){return t.$set(t.incluirInfo,"quantidade",e)}}}),t._v(" "),e("b-table",{attrs:{data:t.data,"sticky-checkbox":"",striped:"",paginated:"","per-page":10},scopedSlots:t._u([{key:"empty",fn:function(){return[e("div",{staticClass:"has_text_centered"},[e("strong",[t._v("Nenhum produto cadastrado ")])])]},proxy:!0}])},[e("b-table-column",{attrs:{searchable:"",sortable:"",field:"nome_produto",label:"Nome"},scopedSlots:t._u([{key:"default",fn:function(o){return[o.row.podeAlterar?e("b-input",{model:{value:t.alterarNome,callback:function(e){t.alterarNome=e},expression:"alterarNome"}}):e("span",[t._v(t._s(o.row.nome_produto))])]}}])}),t._v(" "),e("b-table-column",{attrs:{sortable:"",field:"preco_produto",label:"Preço"},scopedSlots:t._u([{key:"default",fn:function(o){return[o.row.podeAlterar?e("b-input",{directives:[{name:"money",rawName:"v-money",value:t.money,expression:"money"}],model:{value:t.alterarPreco,callback:function(e){t.alterarPreco=e},expression:"alterarPreco"}}):e("span",[t._v(t._s(t.moedaLocal(+o.row.preco_produto)))])]}}])}),t._v(" "),e("b-table-column",{attrs:{field:"quantidade",label:"Quantidade",sortable:""},scopedSlots:t._u([{key:"default",fn:function(o){return[o.row.podeAlterar?e("b-input",{attrs:{type:"number",min:"1"},model:{value:t.alterarQuantidade,callback:function(e){t.alterarQuantidade=e},expression:"alterarQuantidade"}}):e("span",[t._v(t._s(o.row.quantidade))])]}}])}),t._v(" "),e("b-table-column",{attrs:{field:"preco_total",label:"Total",sortable:""},scopedSlots:t._u([{key:"default",fn:function(o){return[e("span",[t._v(t._s(t.moedaLocal(o.row.preco_total)))])]}}])}),t._v(" "),e("b-table-column",{attrs:{field:"excluir_produto",label:"Excluir"},scopedSlots:t._u([{key:"default",fn:function(o){return[e("b-button",{staticClass:"btn_icon",on:{click:function(e){return t.excluir(o.row)}}},[e("b-icon",{staticClass:"icon_lixeira",attrs:{icon:"delete",size:"is-medium"}})],1)]}}])}),t._v(" "),e("b-table-column",{attrs:{field:"atualzar_produto",label:"Atualizar",centered:""},scopedSlots:t._u([{key:"default",fn:function(o){return[e("b-button",{directives:[{name:"show",rawName:"v-show",value:!o.row.podeAlterar,expression:"!props.row.podeAlterar"}],staticClass:"btn_icon",on:{click:function(e){return t.ativarAlterar(o.row)}}},[e("b-icon",{staticClass:"icon_primary",attrs:{icon:"pencil",type:"is-primary",size:"is-medium"}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:o.row.podeAlterar,expression:"props.row.podeAlterar"}],staticClass:"icon_atualizar"},[e("b-button",{directives:[{name:"show",rawName:"v-show",value:o.row.podeAlterar,expression:"props.row.podeAlterar"}],staticClass:"btn_icon",on:{click:function(t){o.row.podeAlterar=!1}}},[e("b-icon",{staticClass:"close_icon",attrs:{icon:"close-circle-outline",type:"is-second",size:"is-medium"}})],1),t._v(" "),e("b-button",{directives:[{name:"show",rawName:"v-show",value:o.row.podeAlterar,expression:"props.row.podeAlterar"}],staticClass:"btn_icon",on:{click:function(e){return t.alterar(o.row)}}},[e("b-icon",{staticClass:"icon_primary",attrs:{icon:"check-circle",type:"is-primary",size:"is-medium"}})],1)],1)]}}])})],1),t._v(" "),e("h2",{staticClass:"color_red"},[t._v("Total gasto "+t._s(t.total))]),t._v(" "),e("h2",{staticClass:"mt_5"},[t._v("Para gastar "+t._s(t.moedaLocal(t.gastar)))]),t._v(" "),e("h2",{staticClass:"mt_5",class:t.saldo<0?"color_red":""},[t._v("\n    Saldo "+t._s(t.moedaLocal(t.saldo))+"\n  ")])],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"h1_titulo"},[t("h1",[t("strong",[this._v("Lista de compras")])])])}],!1,null,null,null);e.default=component.exports}}]);
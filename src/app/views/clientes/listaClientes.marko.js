// Compiled using marko@4.18.20 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projnodeturma5$1.0.0/src/app/views/clientes/listaClientes.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    Layout = require("../layout.marko"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_attr = marko_helpers.a,
    marko_escapeXml = marko_helpers.x,
    marko_dynamicTag = marko_helpers.d;

function render(input, out, __component, component, state) {
  var data = input;

  marko_dynamicTag(out, Layout, function() {
    return {
        titulo: "Clientes",
        conteudo: {
            renderBody: function(out) {
              out.w("<div class=\"container\"><br><h1>Lista de Clientes</h1><br><br><div><table class=\"table\" id=\"clientes\"><thead class=\"thead-dark\"><tr><th>Alterar</th><th>Excluir</th> <th>ID</th><th>NOME</th><th>DATA ANIVERSARIO</th><th>EMAIL</th><th>CPF</th></tr></thead><tbody>");

              var $for$0 = 0;

              marko_forEach(data.clientes, function(cliente) {
                var $keyScope$0 = "[" + (($for$0++) + "]");

                out.w("<tr><td><a class=\"nav-link\"" +
                  marko_attr("href", "/clientes/alteracao/" + cliente.idClie) +
                  "><i class=\"glyphicon glyphicon-edit\"></i></a></td><td><a class=\"nav-link\"" +
                  marko_attr("href", "/clientes/exclusao/" + cliente.idClie) +
                  "><i class=\"glyphicon glyphicon-remove\"></i></a></td><td>" +
                  marko_escapeXml(cliente.idClie) +
                  "</td><td>" +
                  marko_escapeXml(cliente.nomeClie) +
                  "</td><td>" +
                  marko_escapeXml(cliente.dataNiverClie) +
                  "</td><td>" +
                  marko_escapeXml(cliente.emailClie) +
                  "</td><td>" +
                  marko_escapeXml(cliente.cpfClie) +
                  "</td></tr>");
              });

              out.w("</tbody></table></div></div>");
            }
          }
      };
  }, null, null, null, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/projnodeturma5$1.0.0/src/app/views/clientes/listaClientes.marko",
    tags: [
      "../layout.marko"
    ]
  };

// Compiled using marko@4.18.20 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projnodeturma5$1.0.0/src/app/views/clientes/novoCliente.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>Cadastro de Cliente</title><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\"><a class=\"navbar-brand\" href=\"#\">Módulo CLIENTES</a><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Alterna navegação\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNav\"><ul class=\"navbar-nav\"><li class=\"nav-item\"><a class=\"nav-link\" href=\"/clientes/lista\">Listagem</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/clientes/inclusao\">Inclusão</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/clientes/selecionaCliente/true\">Alteração</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/clientes/selecionaCliente/false\">Exclusão</a></li></ul></div></nav><div class=\"container\"><h1>Cadastro de Cliente <span class=\"badge badge-secondary\">Novo</span></h1><form name=\"frm_cadastro\" action=\"/clientes/insertBD\" method=\"post\">");

  if (data.errosValidacao) {
    var $for$0 = 0;

    marko_forEach(data.errosValidacao, function(erro) {
      var $keyScope$0 = "[" + (($for$0++) + "]");

      out.w("<div class=\"alert alert-danger\" role=\"alert\">" +
        marko_escapeXml(erro.msg) +
        "</div>");
    });
  }

  out.w(" <div class=\"form-group row\"><label for=\"InputCPF\">CPF</label><div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" id=\"InputCPF\" name=\"InputCPF\" placeholder=\"Digite o CPF\"></div></div><div class=\"form-group row\"><label for=\"InputNome\">Nome</label><div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" id=\"InputNome\" name=\"InputNome\" placeholder=\"Digite o Nome\"></div></div><div class=\"form-group row\"><label for=\"InputDataNascimento\">Data de nascimento</label><div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" id=\"InputDataNascimento\" name=\"InputDataNascimento\" placeholder=\"Digite a data de nascimento\"></div></div><div class=\"form-group row\"><label for=\"InputEmail\">E-mail</label><div class=\"col-sm-10\"><input type=\"email\" class=\"form-control\" id=\"InputEmail\" name=\"InputEmail\" aria-describedby=\"emailHelp\" placeholder=\"Digite o e-mail\"></div></div><br><button type=\"submit\" class=\"btn btn-primary\">Enviar</button></form></div><script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "43");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/projnodeturma5$1.0.0/src/app/views/clientes/novoCliente.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };

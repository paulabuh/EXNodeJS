// Compiled using marko@4.18.20 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projnodeturma5$1.0.0/src/app/views/usuarios/loginUsuario.marko",
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

  out.w("<html><head><title>Login</title><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"container\"><h1>Login</h1><form name=\"frm_login\" action=\"/usuarios/validaAcesso\" method=\"post\">");

  if (data.errosValidacao) {
    var $for$0 = 0;

    marko_forEach(data.errosValidacao, function(erro) {
      var $keyScope$0 = "[" + (($for$0++) + "]");

      out.w("<div class=\"alert alert-danger\" role=\"alert\">" +
        marko_escapeXml(erro.msg) +
        "</div>");
    });
  }

  out.w(" ");

  if (data.erro) {
    out.w("<div class=\"alert alert-danger\" role=\"alert\">Usuário ou senha incorreta!</div>");
  }

  if (data.semsessao) {
    out.w("<div class=\"alert alert-danger\" role=\"alert\">É necessário fazer o login!</div>");
  }

  out.w("<div class=\"form-group row\"><label for=\"Inputlogin\">Login: </label><div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" id=\"InputLogin\" name=\"InputLogin\" placeholder=\"Digite o login\"></div></div><div class=\"form-group row\"><label for=\"InputSenha\">Senha: </label><div class=\"col-sm-10\"><input type=\"password\" class=\"form-control\" id=\"InputSenha\" name=\"InputSenha\" placeholder=\"Digite a Senha\"></div></div><br><button type=\"submit\" class=\"btn btn-primary\">Login</button></form></div><script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "22");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/projnodeturma5$1.0.0/src/app/views/usuarios/loginUsuario.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };

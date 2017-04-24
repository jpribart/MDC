$(document).ready(function () {


    // Gera a Time Line
    function timeline() {
        $.getJSON("data.json", function (data) {

            var html = '';
            for (var i in data.pages) {

                var binario = data.pages[i].binario;
                var titulo = data.pages[i].titulo;
                var autor = data.pages[i].autor;
                var previa = data.pages[i].previa;
                var link = data.pages[i].link;
                var classoff = '';
                if (binario == 1) {
                    classoff = 'class="off"';
                } else {
                    classoff = '';
                }
                html += "<li index='" + i + "' " + classoff + "><span>" + binario + "</span>";
                html += "<div>";
                html += "<h3>" + titulo + "</h3>";
                html += "<h5>" + autor + "</h5>";
                html += "<p>" + previa + "</p>";
                html += '<a href="' + link + '" class="waves-effect waves-light btn btn-see-more">Leia mais<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>'
                html += "</div>";
                html += "<texttags>" + removerAcentos(titulo.toLowerCase()) + ";" + removerAcentos(autor.toLowerCase()) + ";" + removerAcentos(previa.toLowerCase()) + "</texttags>";
                html += "</li>";
            }

            $("#timelineData").html(html);
        });
    }
    //
    $("#search").keypress(function (e) {
        if (e.which == 13) {
            var result = '';
            var count = $('#timelineData').find('li').length;
            if (count != 66) {
                timeline();
            }
            var therm = ($(this).val().toLowerCase());
            window.setTimeout(function () {

                $("ul li").removeClass("none");
                $("ul li").addClass("none");
                $("ul li:contains('" + therm + "')").css("display", "list-item").removeClass("none");
                $(".initial").removeClass("none");
                $(".finale").removeClass("none");
                $('.none').remove();
                if (count = $('#timelineData').find('li').length == 0) {
                    var html = '';
                    html += "<li class='error'>";
                    html += "<div>";
                    html += "<h3>404</h3>";
                    html += "<h5>Lamentamos</h5>";
                    html += "<p>Esta busca está à frente de nosso tempo, e por isso não pudemos localizar seu resultado :(</p>";
                    html += "</div>";
                    html += "</li>";
                    $("#timelineData").html(html);
                }
            }, 100);


        }
    });

    function removerAcentos(newStringComAcento) {
        var string = newStringComAcento;
        var mapaAcentosHex = {
            a: /[\xE0-\xE6]/g,
            e: /[\xE8-\xEB]/g,
            i: /[\xEC-\xEF]/g,
            o: /[\xF2-\xF6]/g,
            u: /[\xF9-\xFC]/g,
            c: /\xE7/g,
            n: /\xF1/g
        };

        for (var letra in mapaAcentosHex) {
            var expressaoRegular = mapaAcentosHex[letra];
            string = string.replace(expressaoRegular, letra);
        }

        return string;
    }
    timeline();
});
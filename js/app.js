var apiURL = 'arq.json'

var demo = new Vue({
    el: '#app',
    data: {
        storage: {
            pages: [
                {
                    "index": 1,
                    "render": false,
                    "grupo": 2,
                    "curl": "valvula-termionica",
                    "invencao": "Válvula Termiônica",
                    "inventor": "Thomas Alva Edison",
                    "titulo": "Válvulas",
                    "conteudo": "<p>Descoberto por Thomas Alva Edison em 1880, o efeito termiônico (emissão de elétrons por um metal aquecido) proporcionou a criação das primeiras válvulas.</p>img.data.1<p>A válvula termiônica é um dispositivo eletrônico formado por uma cobertura de vidro a vácuo chamada ampola possuindo vária substâncias metálicas. A válvula termiônica, ou válvula eletrônica, possui algumas desvantagens. Elas eram muito grandes, queimavam muito rápido e consumiam muita energia para funcionar.</p><h3>A Válvula Diodo</h3><p>Inventada por John Ambrose Fleming em 1904.Ela se consistia, em torno do filamento, quando ele é aquecido forma-se uma corrente de elétrons, o que ocorre é que o aquecimento provoca uma agitação térmica das partículas que formam o filamento e que acaba por liberar elétrons. Se no interior desta mesma válvula acrescentarmos um elemento metálico a mais, denominado anodo ou placa, e ligarmos este elemento ou eletrodo a uma fonte de tensão positiva, carregando-o com essa carga, ele atrairá os elétrons estabelecendo assim um fluxo de elétrons, ou seja, uma corrente.</p><p>Os elétrons só podiam fluir do filamento para a placa, significando que a corrente tem um sentido único. Se a placa fosse negativa o fluxo não ocorre, pois, os elétrons são repelidos.</p><p>Foram feitos aperfeiçoamento nesta estrutura: em lugar de usar o filamento para emitir as cargas o que é denominado “aquecimento direto”, foi utilizado um novo eletrodo envolvendo o filamento.</p><h3>As Válvulas Triodo</h3><p>Inventada por Lee De Forest em 1907, durante suas pesquisas sobre as válvulas ele descobriu um fato interessante. Se entre a placa e o catodo fosse posta uma grade de metal, com uma tensão aplicada nesta grade poderia servir para controlar o fluxo de cargas no interior da válvula. Bastava carregar a grade com tensões apropriadas para se ter um controle total da corrente entre o anodo e o catodo.</p><p>O triodo estruturalmente é um diodo com uma peça a mais, a qual seria a grade de controle, acrescentada entre o cátodo e o ânodo cuja função principal é controlar a corrente da placa é o dispositivo utilizado para a amplificação de sinais entre outras.</p><p>O controle que a grade exerce sobre a corrente de placa, se deve à sua proximidade ao cátodo e à sua disposição em uma região de grande concentração de carga negativa, podendo levar o dispositivo ao corte, e à saturação, ou a correntes intermediárias entre estas duas situações.</p><h3>Curiosidades sobre as válvulas</h3><p>As primeiras válvulas surgiram no final do século XIX; </p><p>As válvulas foram usadas para criar os primeiros computadores eletrônicos, na década de 40; </p><p>Era fácil usar válvulas em rádios, que necessitavam de poucas, mas construir um computador, que usava milhares delas, era extremamente complicado, e caro; </p><p>Os primeiros computadores baseados em válvulas começaram a surgir durante a década de 40, naturalmente com propósitos militares; </p><p>A partir da década de 50, as válvulas foram rapidamente substituídas pelos transístores e mais tarde pelos circuitos integrados e microchips; </p><p>O computador mais famoso daquela época foi o ENIAC (Electronic Numerical Integrator Analyzer and Computer), construído em 1945; </p><p>O ENIAC era composto por nada menos do que 17,468 válvulas, ocupando um galpão imenso;</p><p>Porém, apesar do tamanho, o poder de processamento do ENIAC é ridículo para os padrões atuais, suficiente para processar apenas 5.000 adições, 357 multiplicações e 38 divisões por segundo, bem menos até do que uma calculadora de bolso atual, dos modelos mais simples.</p>",
                    "tags": "elétrons,Termiônica, Diodo ",
                    "imagens": [
                        {
                            "index": 1,
                            "arquivo": "valvula-termionica.jpg",
                            "legenda": "Válvula Termiônica",
                            "autor": "https://www.haikudeck.com/history-of-the-transistor--education-presentation-3km7v4EiWX acesso em abr 2017",
                            "ano": 2014
                        }
                    ]
                },
                {
                    "index": 2,
                    "render": false,
                    "grupo": 2,
                    "invencao": "Máquina de Turing",
                    "inventor": "Alan Mathison Turing",
                    "titulo": "Máquina de Turing",
                    "conteudo": "<p>É um tipo de computador digital hipotético, idealizado em 1936 por Alan Turing para comprovar teorias computacionais de forma matemática.</p><p>Turing Mostrou que a computação das operações de leitura, escrita e exclusão de símbolos binários poderiam ser satisfeitas por uma máquina que continha uma fita de comprimento ilimitado, com quadrados de tamanho definido sobre ela e um dispositivo com um número finito de estados, que realizava as operações na fita.</p><p>Em 1936 foi formalizado o termo algoritmo: um conjunto finito de instruções simples e precisas, que são descritas com um número finito de símbolos.</p><p>O conceito de máquina de Turing é parecido ao de uma fórmula ou equação. Turing propôs que cada algoritmo, expresso como um conjunto finito de instruções bem definidas, pudesse ser interpretado e executado por um processo mecânico.</p>",
                    "tags": "computador digital, Alan turning, números finitos, números binários, 1936",
                    "imagens": [
                        {
                            "index": 1,
                            "arquivo": "Maquina de Turning.jpg",
                            "legenda": "Máquina de Turing",
                            "autor": "https://www.qrz.com/db/TM60AT/?dxc=1 acesso em abr 2017",
                            "ano": 1936
                        }
                    ]
                },
                {
                    "index": 3,
                    "render": false,
                    "grupo": 2,
                    "invencao": "ENIAC",
                    "inventor": "John Mauchly e John Presper Eckert",
                    "titulo": "ENIAC",
                    "conteudo": "<p>Projetada por John Mauchly e John Presper Eckert a pedido do exército dos EUA para seu laboratório de pesquisa balística. O primeiro computador eletrônico digital, o ENIAC (Electronic Numerical Integrator And Computer).</p><p>O ENIAC era um gigante de 30 toneladas que ocupava um espaço de 10 x 15 m de área construída. Sua fabricação custou por volta de US$500 mil, a máquina contava com 70 mil resistores e 17.500 mil válvulas que consumiam cerca de 170 quilowatts de energia entre outras coisas. Já seu modo de operação era por meio de cartões perfurados que eram operados por um grupo de funcionárias do exército. Sua construção se iniciou em plena guerra, em 1943, mas só foi ser ligado pelos primeiros quatro anos após sua fabricação.</p><p>Um dos seus problemas era que todo dia uma ou mais válvulas do ENIAC queimavam, as vezes no momento em que era ligada. Ficando inoperante por um bom tempo.</p>",
                    "tags": "Guerra,computador, resistores, válvulas, balística ",
                    "imagens": [
                        {
                            "index": 3,
                            "arquivo": "eniac4.png",
                            "legenda": "ENIAC",
                            "autor": "http://www.columbia.edu/cu/computinghistory/eniac.html",
                            "ano": 1946
                        }
                    ]
                },
                {
                    "index": 4,
                    "render": false,
                    "grupo": 2,
                    "invencao": "Compiladores",
                    "inventor": "Grace Hopper",
                    "titulo": "Compiladores",
                    "conteudo": "<p>O compilador e um programa que traduz um código fonte em linguagem de baixo nível.</p><p>Os primeiros computadores não usavam compiladores, pois eles possuíam apenas alguns poucos códigos de operação e pouca memória e os usuários entravam com código binário de máquina diretamente.</p><p>No final dos anos 40. Os primeiros compiladores foram escritos em linguagem assembly. O primeiro compilador autocontido, ou seja, capaz de compilar o seu próprio código-fonte em uma linguagem de alto-nível, foi criado para o LISP por Hart e Levin no MIT em 1962. Durante os anos 50, as linguagens de assembly dependiam da máquina para a qual eram projetadas, e por essa razão evoluíram as linguagens de alto-nível e independentes da máquina. Vários compiladores experimentais foram desenvolvidos desde então. O crédito do primeiro compilador completo, em 1957, é atribuído à equipe de desenvolvimento do FORTRAN, liderada por John Backus da IBM.</p><p>O COBOL foi a primeira linguagem a ser compilada em várias plataformas, criada 1959. Com a evolução das linguagens de programação e o poder crescente dos computadores, os compiladores foram se tornando cada vez mais complexos como proposito de ocuparem a distância entre as linguagens de programação modernas e os vários sistemas computacionais, e também com o objetivo de atingir o máximo de desempenho das máquinas.</p><p>O uso de linguagens de alto-nível para a escrita de compiladores foi ganhando ímpeto no começo dos anos 70 quando os compiladores Pascal e C foram escritos em suas próprias linguagens.</p>",
                    "tags": "primeiro compilador, compilador feito por uma mulher, línguagem de programação, computador ",
                    "imagens": [
                        {

                        }
                    ]
                },
                {
                    "index": 5,
                    "render": false,
                    "grupo": 2,
                    "invencao": "Interpretadores",
                    "inventor": "Nenhum definido",
                    "titulo": "Interpretadores",
                    "conteudo": "<p> O interpretador lê o código-fonte escrito como sendo o código objeto, ele converte o programa linha por linha. O interpretador verifica sintaticamente e semanticamente o código, se estas duas etapas forem efetuadas de forma correta o código está pronto para funcionar.</p>",
                    "tags": "Códigos, computador",
                    "imagens": [
                        {

                        }
                    ]
                },
                {
                    "index": 6,
                    "render": false,
                    "grupo": 2,
                    "invencao": "TRADIC",
                    "inventor": "Jean Howard Felker",
                    "titulo": "TRADIC",
                    "conteudo": "img.data.1<p>O TRADIC (Transistor Digital Computer) foi o primeiro computador transistorizado nos EUA, completada em 1954.</p><p>O computador foi construído por Jean Howard Felker da Bell Labs para a Força Aérea dos Estados Unidos, enquanto L.C. Brown era uma vantagem de engenheiro no projeto, que teve início em 1951. O projeto inicialmente examinou a Viabilidade da construção de um computador digital transistorizado aerotransportado. Uma segunda aplicação foi um computador digital transistorizado para ser usado em um sistema de radar de bordo da Marinha.</p>",
                    "tags": "computador inovador, Exercito Americano, Estados Unidos",
                    "imagens": [
                        {
                            "index": 1,
                            "arquivo": "kenandden.jpg",
                            "legenda": "Tradic",
                            "autor": "http://www.chip.cz/obrazky/pages/10045/kenandden",
                            "ano": 1954
                        }
                    ]
                },
                {
                    "index": 7,
                    "render": false,
                    "grupo": 2,
                    "invencao": "Semicondutores",
                    "inventor": "Nenhum definido",
                    "titulo": "Semicondutores",
                    "conteudo": "img.data.1<p>Em 1874, Karl Ferdinand Braun descobriu em alguns sulfetos metálicos tinham propriedade de condução unidirecional. Os primeiros elementos estudados foram o sulfeto de chumbo e o sulfeto de ferro. Em 1878 e 1879 David E. Hughes iniciou pesquisas no efeito semicondutor, a princípio como curiosidade, pois foi percebido ao acaso pelo cientista.</p><p>Hughes descobriu uma maneira de emitir ondas eletromagnéticas a partir de semicondutores. Em função de suas experiências acabou por inventar o detector eletromagnético por efeito semicondutor, o diodo.</p><p>Em 1929, Walter Schottky, confirmou experimentalmente a existência de uma barreira de potencial numa junção Metal-Semicondutor.</p><p>A presença dos semicondutores é importante na fabricação de componentes eletrônicos tais como diodos, transístores e outros de diversos graus de complexidade tecnológica, microprocessadores, e nano circuitos usados em nanotecnologia. Por esse motivo atualmente o elemento semicondutor é essencial na indústria eletrônica e na fabricação de seus componentes.</p>",
                    "tags": "Condutor intermediário, condutor de cristal ",
                    "imagens": [
                        {
                            "index": 1,
                            "arquivo": "Sis_315_gpu.jpg",
                            "legenda": "Semicondutores",
                            "autor": "http://blog.futurecom.com.br/venda-de-semicondutores-deve-crescer-72-em-todo-o-mundo-em-2014/",
                            "ano": 2014
                        }
                    ]
                },
                {
                    "index": 1,
                    "render": false,
                    "grupo": 4,
                    "invencao": "Circuito Integrado",
                    "inventor": "Geoffrey Dummer, Jack Kilby e Robert",
                    "titulo": "Circuito Integrado",
                    "conteudo": "img.data.1<p>Circuitos integrados é um circuito eletrônico miniaturizado sobre um substrato fino de material semicondutor.</p><p>A ideia de circuito integrado veio de Geoffrey Dummer, um cientista que trabalhava para a empresa Royal Radar Establishment. Dummer lançou sua ideia em 7 de maio de 1952 no Symposium on Progress em Washington.</p><p>Mais foi Jack Kilby da empresa Texas Instruments e Robert Noyce da empresa Fairchild Semicondutor, que criaram o circuito integrado apesar que os dois trabalharam separados um do outro. A diferença do circuito de Kilby para o de Noyce, era que o chip era feito de silício enquanto que o de Noyce era de germânio. Kilby registrou suas ideias iniciais sobre o circuito integrado em julho de 1958 e demonstrou com sucesso o primeiro circuito integrado em função em 12 de setembro de 1958. Em seu pedido de patente de 6 de fevereiro de 1959. Kilby ganhou em 2000 o Prêmio Nobel de Física por sua parte na invenção do circuito integrado. Robert Noyce também veio com sua própria ideia de circuito integrado, meio ano depois de Kilby. O chip de Noyce tinha resolvido muitos problemas práticos que o microchip, desenvolvido por Kilby, não tinha.</p>",
                    "tags": "circuito eletrônico miniaturizado; microchip;",
                    "imagens": [
                        {
                            "index": 1,
                            "arquivo": "InternalIntegratedCircuit2.jpg",
                            "legenda": "Arquitetura interna de um microprocessador",
                            "autor": "Angeloleithold",
                            "ano": 2004
                        },
                        {
                            "index": 2,
                            "arquivo": "398px-GeoffreyDummer.JPG",
                            "legenda": "Idealizador e inventor do circuito integrado",
                            "autor": "Robert Cathles",
                            "ano": 1955
                        },
                        {
                            "index": 3,
                            "arquivo": "jack-kilby-robert-noyce.JPEG",
                            "legenda": "Robert Noyce e Jack Kylbr - inventores do CHIP",
                            "autor": "https://theidiotsguides.com/2016/01/22/idiots-guide-technology-icon-hall-of-fame/",
                            "ano": 2016
                        },
                        {
                            "index": 4,
                            "arquivo": "Kilby_solid_circuit.JPG",
                            "legenda": "Chip criado por Kilby",
                            "autor": "Texas Instruments",
                            "ano": 2008
                        }
                    ]
                },
                {
                    "index": 2,
                    "render": false,
                    "grupo": 4,
                    "invencao": "Computador DEC PDP-1",
                    "inventor": "DEC - Digital Equipment Corporation",
                    "titulo": "DEC PDP-1, o Primeiro Minicomputador",
                    "conteudo": "img.data.1<p>PDP-1 foi criado pela Digital Equipamento Corporation (DEC), e é considerado um dos primeiros minicomputadores a entrar no comercio.</p><p>DEC fez doação de uma unidade PDP-1 para MIT, onde se tornou o maquinário preferido nessa comunidade hacker do MIT. Este mesmo computador marcou a história da computação com a criação do jogo Spacewar, do debug interativo, jogo de xadrez completo, sistema de músicas computacional e ao primeiro editor de texto.</p><p>No mundo ainda existem três maquinas do PDP-1, onde estão expostas no museu de história da computação. Destas maquinas foram cinquenta e três fabricadas até o ano de 1969, onde chegou a ser vendido a 120 mil dólares.</p><h3>Descrição</h3><p>O PDP-1 usou um tamanho de palavra de 18 bits e tinha 4096 palavras como memória principal padrão (equivalente a 9.216 bytes de oito bits, embora o sistema realmente usasse bytes de seis bits), atualizável para 65 536 palavras. O tempo de ciclo da memória do núcleo magnético foi de 5 microssegundos (correspondendo aproximadamente a uma 'velocidade de clock ' de 200 quilohertz); consequentemente a maioria das instruções aritméticas levou 10 microssegundos (100.000 operações por segundo) porque eles usaram dois ciclos de memória: um para a instrução, um para a obtenção de dados do operando. Os números assinados foram representados no complemento de uns. O PDP-1 tinha poder de computação aproximadamente equivalente a um organizador de bolso de 1996 e um pouco menos de memória.</p><p>O PDP-1 usou 2.700 transistores e 3.000 diodos.  Foi construído principalmente de DEC 1000-série System Building Blocks, usando micro liga e micro liga transistores difundidos com uma velocidade nominal de comutação de 5 MHz. Os Blocos de Sistema foram empacotados em vários racks de 19 polegadas. As prateleiras foram empacotadas em uma única grande caixa de mainframe, com um painel de controle hexagonal contendo interruptores e luzes montadas para ficar na altura da mesa em uma extremidade do mainframe. Acima do painel de controle estava a solução de entrada / saída padrão do sistema, um leitor de fitas perfurado e um gravador.</p>",
                    "tags": "Doado para a Massachusetts Institute of Technology - MIT",
                    "imagens": [
                        {
                            "index": 1,
                            "arquivo": "CIMG7024.JPEG",
                            "legenda": "Inicialização do DEC PDP-1",
                            "autor": "http://www.digibarn.com/history/06-09-21-Spacewar/",
                            "ano": 2006
                        }
                    ]
                },
                {
                    "index": 3,
                    "render": false,
                    "grupo": 4,
                    "invencao": "Interface grafica",
                    "inventor": "Ivan Edward Sutherland",
                    "titulo": "Interface Gráfica e Sketchpad",
                    "conteudo": "img.data.1<p>Na interface gráfica existiu o sketchpad que ajudou no conceito da computação gráfica interativa, e interação entre maquina e humano. O sistema chamado de Sketchpad desenvolvido por Ivan Edward Sutherland ultilizava uma caneta optica como controlador para desenhos em 2D, sendo o primeiro editor gráfico a implementar as tradicionais vistas ortogonais com vistas em perspectiva em escalas diferentes.</p>",
                    "tags": "Desenhos em 2D",
                    "imagens": [
                        {
                            "index": 1,
                            "arquivo": "lossy-page1-748px-SketchpadDissertation-Fig1-2.jpg",
                            "legenda": "Sketchpad",
                            "autor": "Ivan Sutherland",
                            "ano": 1963
                        }
                    ]
                },
                {
                    "index": 4,
                    "render": false,
                    "grupo": 4,
                    "invencao": "Visual Basic",
                    "inventor": "John George Kemeny e Tom Kurtzas",
                    "titulo": "Linguagem Basic",
                    "conteudo": "<p>1964 – linguagem Basic foi desenvolvida pelos matemáticos e Professores John George Kemeny e Tom Kurtzas, criada para fins didáticos, em Darthmouth College(Universidade localizada na cidade de Hanover, New Hampshire, Estados Unidos). Essa linguagem é uma linguagem de alto nível e de paradigma Imperativa, estruturado e procedural e que agora evoluiu para Orientação a Objetos na ultima versão do “Visual Basic”.</p>",
                    "tags": "Criada para fins didáticos",
                    "imagens": [
                        {
                            "index": 0,
                            "arquivo": "",
                            "legenda": "",
                            "autor": "",
                            "ano": 0
                        }
                    ]
                },
                {
                    "index": 5,
                    "render": false,
                    "grupo": 4,
                    "invencao": "IBM System/360 (S/360",
                    "inventor": "IBM - International Business Machines",
                    "titulo": "IBM System 360",
                    "conteudo": "img.data.1<p> IBM: 7 de Abril de 1964 lança pela IBM o IBM System/360 (S/360) uma família de mainframes ela foi a primeira a fazer uma distinção clara entre a arquitetura e a implementação.</p>",
                    "tags": "Mainframes",
                    "imagens": [
                        {
                            "index": 5,
                            "arquivo": "800px-IBM360-65-1.corestore.jpg",
                            "legenda": "System 360",
                            "autor": "ArnoldReinhold",
                            "ano": 2004
                        }
                    ]
                },
                {
                    "index": 6,
                    "render": false,
                    "grupo": 4,
                    "invencao": "Computador CDC 6600",
                    "inventor": "Control Data Corporation-CDC",
                    "titulo": "CDC 6600",
                    "conteudo": "img.data.1<p>CDC: CDC 6600 era um computador mainframe criado pela Control Data Corporation, e foi considerado o primeiro computador bem sucedido e oferecia um poder de processamento de cerca de 3 megaflops(Corresponde a 〖10〗^6 operações por segundo), um valor de processamento de dados impressionante naquela época e considerado um dos mais velozes naquela época(Clock de 100 nanosegundos), Tambem um dos primeiros (super)computadores a usar refrigeração baseado em um sistema de Gás Freon Pressurizado. Criado por Seymour Roger Cray (Considerado o “Pai dos supercomputadores”)nos laboratórios da Control Data Corporation próximo de Chippewa Falls, Winsconsin, vendeu mais de $7 milhões, e durante os anos de 1964 até 1965 foi considerado o supercomputador mais veloz do mundo.</p>",
                    "tags": "Seymour Roger Cray (Pai dos supercomputadores)",
                    "imagens": [
                        {
                            "index": 1,
                            "arquivo": "CDC_6600.jc.jpg",
                            "legenda": "supercomputador CDC 6600",
                            "autor": "Jitze Couperus",
                            "ano": 2010
                        }
                    ]
                },
                {
                    "index": 7,
                    "render": false,
                    "grupo": 4,
                    "invencao": "Touch Screen",
                    "inventor": "E. A. Johnson",
                    "titulo": "A primeira touchscreen",
                    "conteudo": "img.data.1<p>Era o ano de 1965 quando o inventor britânico E. A. Johnson descreveu seu trabalho em torno de uma tela sensível ao toque capacitiva em um pequeno artigo — dois anos depois, ele descrevia o seu conceito em um texto mais completo. Em 1968, um novo artigo do mesmo cientista é publicado, desta vez tratando das possibilidades da tecnologia.</p>img.data.1<p>O fato é que os historiadores consideram a tela desenvolvida por Johnson no Royal Radar Establishment, em Malvern, Reino Unido, como o primeiro touchscreen da história. O equipamento foi desenvolvido para uso em radares de controle de tráfego aéreo, perdurando até a década de 1990.</p><p>O equipamento, apesar de capacitivo, era bem simples. Ele era capaz de suportar apenas um toque por vez (ou seja, não tinha suporte multitouch) e também era binário, identificando apenas duas posições: toque ou ausência de toque, independente da pressão aplicada ao display.</p>",
                    "tags": "Tela sensível ao toque",
                    "imagens": [
                        {
                            "index": 1,
                            "arquivo": "74753443016172520.jpg",
                            "legenda": "Primeiro toque",
                            "autor": "Bill Buxton",
                            "ano": 2013
                        }
                    ]
                },
                {
                    "index": 8,
                    "render": false,
                    "grupo": 4,
                    "invencao": "memória DRAM",
                    "inventor": "Robert Heath Dennard",
                    "titulo": "Memória DRAM",
                    "conteudo": "img.data.1<p>Memoria DRAM: Memoria DRAM é um tipo de RAM ou como a sigla diz, Random Acess Memory(Memoria de Acesso Aleatorio) Que armazena cada bit de dados num condensador ou capacitor(componente que armazena cargas elétricas num campo elétrico). Criado pelo engenheiro e inventor Robert Heath Dennard.</p>img.data.1<h3>História</h3><p>Durante a segunda Guerra Mundial em bletchley park aonde se encontrava a “Ultra inteligência” do reino unido, foi usada uma máquina chamada cryptanalytic cujo codinome era “Aquarius” foi incorporada uma memória dinamica hard-wired. Foi usado um grande banco de capacitores, que quando carregado representa cruz (1) e um ponto (0) se descarregado. Tendo o uso do pulso periódico para que recarregar-se os capacitores quando havia o vazamento da carga.</p><p>Arnold Farber e Eugene Schlig em 1964, enquanto trabalhavam para IBM criaram uma célula de memória hard-wired, usando uma porta do transistor e diodo túnel trinco, substituíram a trava por dois transistores e duas resistências que ficou conhecido como céluala-farber schilig. No ano de 1965 Benjamin Agusta juntamente com sua equipe da IBM projetaram e criaram um chip de memória de silício de 16 bits tendo como base a configuração de célula-Farber Schlig com 80 transistores, 64 resistores e quatro diodos. No ano seguinte em 1966 a primeira DRAM foi inventada pelo Dr Robert Dennard no IBM Thomas J. Watson Research Center que foi-lhe concebido patente dos EUA número 3.387.286 em 1968.</p>",
                    "tags": "Random Acess Memory",
                    "imagens": [
                        {
                            "index": 1,
                            "arquivo": "750px-Robert_Dennard.jpg",
                            "legenda": "Criador da DRAM",
                            "autor": "Fred Holland",
                            "ano": 2009
                        }
                    ]
                },
                {
                    "index": 9,
                    "render": false,
                    "grupo": 4,
                    "invencao": "ELIZA",
                    "inventor": "Joseph Weizenbaum",
                    "titulo": "ChatterBot ELIZA",
                    "conteudo": "img.data.1<p>ELIZA foi o primeiro software para simulação de diálogos, os chamados 'robôs de conversação'.</p><p>Foi criado no MIT, em 1966 por Joseph Weizenbaum. Era um programa bem simples, possuindo apenas 204 linhas de código fonte. Basicamente, usando técnicas de inteligência artificial simulava um diálogo entre paciente e psicólogo utilizando as frases do paciente para formular novas perguntas.</p>",
                    "tags": "simulação de dialogo",
                    "imagens": [
                        {
                            "index": 1,
                            "arquivo": "PIC20021211110167299.jpg",
                            "legenda": "ChatterBot ELIZA",
                            "autor": "Amit Mathur",
                            "ano": 2015
                        }
                    ]
                },
                {
                    "index": 10,
                    "render": false,
                    "grupo": 4,
                    "invencao": "Forth",
                    "inventor": "Charles Moore ",
                    "titulo": "Forth (linguagem de programação)",
                    "conteudo": "<p>Forth foi uma linguagem de programação, inventada por Charles Moore , essa linguagem que estava em estado de desenvolvimento por continuo desde 1968 e que foi exposto pela primeira vez no inicio de 1970. Forth é uma linguagem de programação de Paradigma Imperativo. ”A linguagem Forth pretende ser eficiente, compacta, flexível e proporcionar uma eficiente interacção entre software e hardware. É, no entanto, suficientemente poderosa para ser usada numa variedade de tarefas computacionais, incluindo gestão de bases de dados, software de contabilidade, processadores de texto, manipulação de gráficos, sistemas periciais e aplicações científicas.”</p>",
                    "tags": "linguagem de programação",
                    "imagens": [
                        {
                            "index": 0,
                            "arquivo": "",
                            "legenda": "",
                            "autor": "",
                            "ano": 0
                        }
                    ]
                },
                {
                    "index": 11,
                    "render": false,
                    "grupo": 4,
                    "invencao": "Circuitos SSI, MSI, LSI e VLSI",
                    "inventor": "Geoffrey WA Dummer; Jack Kilby; Jack Kilby",
                    "titulo": "Circuitos SSI, MSI, LSI e VLSI",
                    "conteudo": "<p>OS primeiros AT 80286 receberam de herança dos XTs os chips, ou melhor dizendo, circuitos integrados SSI. A partir de então vários outros surgiram, como os circuitos MSI, LSI e VLSI. Vejamos do que vem ser cada um:</p><p>SSI: os circuitos SSI (Short Scale of Integration ou baixa escala de integração) e os circuitos MSI ( Medium Scale of Integration ou média escala de integração) possuem funções simples no sistema. Podemos dizer que o MSI é mais “novo” e “moderno” que o SSI. O SSi possui em seu interior algumas dezenas de transistores, enquanto o  MSI, centenas. São utilizados para executar funções simples, como amplificação de corrente nas interfaces, entre outras;</p><p>LSI: com o avanço da tecnologia, chegamos aos circuitos LSI (Large Scale of Integration ou larga escala de integração). Esses circuitos, em vez de conter algumas dezenas ou centenas de transitores em seu interior, como os circuitos SSI. Possuem milhares de transitores. São utilizados em funções de maior consideração e complexidade, como interface (teclado, mouse, drive de disquete etc.);</p><p>VLSI: os circuitos VLSI (Very Large Scale of Integration ou escala de integração muito alta) são os chipsets contidos na placa-mãe. São altamente avançados, executando funções de grande importância e complexidade em um computador. Possuem em seu interior centenas de milhares de transistores. A principal diferença física do VLSI em relação aos dois circuitos citados anteriormente é a presença de terminais nos quatros lados do circuitos. Toda placa moderna possui circuitos VLSI</p>",
                    "tags": "AT 80286",
                    "imagens": [
                        {
                            "index": 0,
                            "arquivo": "",
                            "legenda": "",
                            "autor": "",
                            "ano": 0
                        }
                    ]
                },
                {
                    "index": 12,
                    "render": false,
                    "grupo": 4,
                    "invencao": "Rede de internet",
                    "inventor": "Arpanet",
                    "titulo": "Internet foi criada em 1969 com o nome de Arpanet nos EUA",
                    "conteudo": "img.data.1<p>A internet foi criada em 1969, nos Estados Unidos. Chamada de Arpanet, tinha como função interligar laboratórios de pesquisa. Naquele ano, um professor da Universidade da Califórnia passou para um amigo em Stanford o primeiro e-mail da história.</p><p>Essa rede pertencia ao Departamento de Defesa norte-americano. O mundo vivia o auge da Guerra Fria. A Arpanet era uma garantia de que a comunicação entre militares e cientistas persistiria, mesmo em caso de bombardeio. Eram pontos que funcionavam independentemente de um deles apresentar problemas.</p><p>A partir de 1982, o uso da Arpanet tornou-se maior no âmbito acadêmico. Inicialmente, o uso era restrito aos EUA, mas se expandiu para outros países, como Holanda, Dinamarca e Suécia. Desde então, começou a ser utilizado o nome internet.</p><p>Por quase duas décadas, apenas os meios acadêmico e científico tiveram acesso à rede. Em 1987, pela primeira vez foi liberado seu uso comercial nos EUA.</p><p>Em 1992, começaram a surgir diversas empresas provedoras de acesso à internet naquele país. No mesmo ano, o Laboratório Europeu de Física de Partículas (Cern) inventou a World Wide Web, que começou a ser utilizada para colocar informações ao alcance de qualquer usuário da internet.</p><p>Desde então, a difusão da rede foi enorme. Hoje, a internet tem mais de 250 milhões de usuários em todo o mundo. Até o final de 2004, o tráfego mundial de e-mails deverá estar em torno de 35 bilhões de mensagens diárias.</p><p>Quase 90% dos usuários de internet estão nos países industrializados. Os EUA e o Canadá respondem por 57% do total, segundo relatório da Organização Internacional do Trabalho.</p><p>No Brasil, a exploração comercial foi liberada em 1995. Universidades como as federais do Rio Grande do Sul e do Rio de Janeiro estavam conectadas à rede desde 1989. A Fapesp (Fundação de Amparo à Pesquisa de São Paulo) conectou-se um ano depois.</p>",
                    "tags": "Guerra fria; internet",
                    "imagens": [
                        {
                            "index": 1,
                            "arquivo": "arpanet-first-router.jpg",
                            "legenda": "Primeiro roteador",
                            "autor": "Steve Jurvetson",
                            "ano": 2010
                        }
                    ]
                },
                {
                    "index": 1,
                    "grupo": 6,
                    "invencao": "Microsoft HoloLens",
                    "inventor": "Microsoft",
                    "titulo": "Microsoft HoloLens: o primeiro computador holográfico autônomo",
                    "conteudo": "<p>Primeiro computador holográfico autônomo, desenvolvido pela Microsoft e sendo apresentado para o mundo em 21 de janeiro de 2015. Sendo ele um óculos que desnecessitaria de qualquer smartphone ou computador para poder funcionar. Ele possui a capacidade de que o usuário interaja e se envolva com seus conteúdos digitais, mapeando todo o ambiente usando uma câmera, um conjunto de sensores e processadores, que ainda são capazes de entender vozes e gestos.  Ele é um dispositivo completo, que dar liberdade de movimentos para o usuário por ele não possuir nenhum fio. Além de que ele garante um som de alta performance.</p>img.data.1<p>O produto possui uma GPU, CPU e uma HPU (Holographic Proccesing Unit), fornecendo a possibilidade de você transformar a forma de se criar, comunicar, explorar e se conectar. O HoloLens não é um computador normal e sim uma máquina de realidade aumentada que rodara com o Windows 10 e outros aplicativos feitos exclusivamente para ele. Capaz de criar em 3D uma área de trabalho flutuante, o gadget usando a realidade aumentada cria sobre o que é visto na vida real camadas de conteúdos. Isso trará aos desenvolvedores a chance de criar grandes experiências usando todos os aplicativos originais da Microsoft.</p><p>Nas redes sociais, como por exemplo Skype, poderão ser feito vídeo chamadas, e o usuário tem a opção de poder inverter o campo de visão, dando a possibilidade de a outra pessoa poder ver o que ele está vendo.</p>",
                    "tags": "primeiro computador holográfico;óculos de realidade aumentada;",
                    "imagens": [
                        {
                            "index": 1,
                            "arquivo": "in-addition-to-cameras-hololens-contains-other-sensors-inclu_grbg.1280.jpg",
                            "legenda": "Headset de realidade virtual da Microsoft",
                            "autor": "Abílio Rodrigues ",
                            "ano": 2016
                        }
                    ]
                },
                {
                    "index": 2,
                    "grupo": 6,
                    "invencao": "Skype",
                    "inventor": "Janus Friis e Niklas Zennstrom",
                    "titulo": "Skype: o primeiro grande software de chamada de voz e vídeo",
                    "conteudo": "<p>Skype o software que revolucionou a comunicação em 2003,permitindo a comunicação pela Internet através de conexões de voz e vídeo, criado por  Niklas Zennstrom e Janus Friis . O Skype foi lançado no ano de 2003. Em 2005 foi vendido para a empresa eBay e pertence, desde maio de 2011, à Microsoft. Atualmente, é o aplicativo para computadores mais famoso do mercado e possui cerca de 320 milhões de usuários espalhados pelo mundo.</p>img.data.1<p>A criação do aplicativo tem a intenção de aproximar as pessoas e grupos, sem se importa com a distância. Com os recursos de vídeo, voz e SMS o usuário pode desfrutar de experiências com quem desejar e de qualquer lugar. O Skype possibilita que o usuário possa usá-lo no computador, no smartphone e também em uma TV com o aplicativo instalado. Para iniciar no aplicativo, você não pagará nada. Com ele você poderá fazer ligações entre um Skype e um telefone fixo, ou entre um telefone móvel, além de chamadas de conferência, ou pode acontecer o contrário, que seria um telefone convencional ligar para o Skype.</p>",
                    "tags": "rede social;vídeo chamada;primeiro grande software de video chamada;",
                    "imagens": [
                        {
                            "index": 1,
                            "arquivo": "1200px-Skype_logo.svg",
                            "legenda": "Logo do Skype de 2016",
                            "autor": "Microsoft Skype Division",
                            "ano": 2016
                        }
                    ]
                },
                {
                    "index": 3,
                    "grupo": 6,
                    "invencao": "Facebook",
                    "inventor": "Mark Zuckerberg, Eduardo Saverin, Dustin Moskovitz e Chris Hughes",
                    "titulo": "Facebook: a maior rede social do mundo",
                    "conteudo": "<p>Lançado em 4 de fevereiro de 2004, o Facebook um website de relacionamento social, que foi fundado por Mark Zuckerberg, um antigo estudante de Harvard. Inicialmente o uso do Facebook era restrita apenas para estudantes de Harvard. Que em seguida se expandiu para Instituto de Tecnologia de Massachusetts, a Universidade de Boston e a varias escolas. E no decorrer do ano seguinte foram-se adicionando outras universidades.</p>img.data.1<p>Hoje o Facebook possui aproximadamente 1,59 bilhões de usuários ficando em primeiro lugar no ranking das maiores redes sociais de acordo com o portal de estudos e estatísticas Statista, são referentes a janeiro de 2017.</p>",
                    "tags": "maior rede social do mundo;site de relacionamento;",
                    "imagens": [
                        {
                            "index": 1,
                            "arquivo": "Facebook_New_Logo_(2015).svg",
                            "legenda": "logotipo do Facebook lançado em 2015 ",
                            "autor": "Facebook Inc.",
                            "ano": 2015
                        }
                    ]
                },
                {
                    "index": 4,
                    "grupo": 6,
                    "invencao": "YouTube",
                    "inventor": "Chad Hurley, Steve Chen e Jawed Karim",
                    "titulo": "YouTube: o maior e mais utilizado site de videos",
                    "conteudo": "<p>Criado em fevereiro de 2005 por três ex-funcionários do  Pay Pal  e  adquirida pela  Google Inc.  em troca de 1.650 milhões de  dólares em 4  outubro de  2006, o YouTube é o site de vídeos on-line mais popular do mundo, permitindo que milhões de pessoas descubram, assistam e compartilhem vídeos criados originalmente . Baseado no Adobe Flash e também HTML5, o YouTube usa um leitor on-line para servir seu conteúdo, suportando os navegadores mais importantes.</p>img.data.1<p>É muito popular graças à possibilidade de hospedar vídeos pessoais facilmente. Hospeda uma variedade de clipes de filmes, programas de TV  e  vídeos de música . Apesar regras contra o upload de vídeos do YouTube com  copyright , existe este material em abundância, bem como conteúdo  amador  como  vídeo  blogs . Links para vídeos do YouTube também pode ser incorporado em  blogs  e sites pessoais usando  API  ou incorporação de algum código  HTML .</p>",
                    "tags": "site de vídeos; compartlhamento de videos;",
                    "imagens": [
                        {
                            "index": 1,
                            "arquivo": "YouTube-logo-full_color.png",
                            "legenda": "Logotipo do YouTube",
                            "autor": "YouTube",
                            "ano": 2015
                        }
                    ]
                },
                {
                    "index": 1,
                    "grupo": 6,
                    "invencao": "Internet das coisas",
                    "inventor": "Instituto de Tecnologia de Massachusetts (MIT)",
                    "titulo": "Internet das coisas, o conceito de objetos inteligentes",
                    "conteudo": "<h3>Internet das coisas</h3><p>A IoT (Internet of Things, Internet das coisas), é um novo conceito de interagir com objetos de forma inteligente por meio de uma rede sem fio. Isso pode parecer uma declaração arrojada, mas considere o impacto que a Internet já teve na educação, na comunicação, nos negócios, na ciência, no governo e na humanidade. Claramente, a Internet é uma das criações mais importantes e poderosas de toda a história humana. Agora, considere que a IoT representa a próxima evolução da Internet, dando um grande salto na capacidade de coletar, analisar e distribuir dados que nós podemos transformar em informações, conhecimento e, por fim, sabedoria.</p><p>No ponto de vista prático a IOT é  aplicada em diversas modalidades como: médica educacional, segurança, tráfego Aéreo, agricultura, penitenciária,  rodoviário,           portos, navegação marítima,  veículos autônomos, infraestrutura pública,  viabilização e etc...</p><p>Mesmo assim, existem várias barreiras que ameaçam diminuir o desenvolvimento da IoT, incluindo a transição para IPv6, ter um conjunto comum de padrões e desenvolver fontes de energia para milhões, até mesmo bilhões, de sensores minúsculos. No entanto, à medida que empresas, governos, organizações de normas técnicas e instituições acadêmicas trabalham juntos para solucionar esses desafios, a IoT continuará a progredir. </p><p>Para que um sistema IoT seja seguro é preciso estabelecer quais são os objetivos de segurança desejáveis. Existem ao menos três grupos de objetivos desejáveis para segurança em IoT: Confidencialidade: neste requisito os dados transmitidos podem somente ser “escutados” e entendidos por elementos participantes da comunicação, isto é, elementos sem autorização sabem que ocorreu comunicação, mas não sabem o conteúdo da comunicação: Integridade: aqui, os dados não podem ser alterados por elementos da rede sem devida autorização. É comum que hackers adulterem mensagens sem deixar vestígios e a quebra da integridade passe despercebida. De modo geral, implementa-se integridade criptografando as mensagens e verificando-as no lado do receptor; Disponibilidade: deseja-se manter o sistema sempre disponível e seguros contra ataques maliciosos. Entretanto, as redes sem fio estão sujeitas a interferências de comunicação e “hackers” podem agir nesta vulnerabilidade. Neste sentido, o sistema IoT deve ser capaz de identificar e tratar problemas como este para evitar ataques Denial of Service (DoS). Todo o contexto da IoT ainda existe um ponto que em termos precisa caminhar com a ética , na internet das coisas os surgimentos de tecnologias que não necessita de indivíduos a controlando , que são tecnologias evoluídas através de placa controladoras inteligentes que estão cada vez mais na automação veicular e em processos cirúrgicos ,que por ser maquinas também erram por serem desenvolvidas por humanos ,tais erros podem gerar acidentes que tem que ser revisados por leis que visam o culpado de tal ação .No brasil há alguns artigos do ponto de vista jurídico, como o conceito de Iot por aqui ainda é novidade ,temos em lei a lei apenas o termo “maquina a maquina”. </p><p>Art. 38 da Lei 12.715, de 17 de setembro de 2012– Taxa de Fiscalização de Instalação das estações móveis do SMP e outras modalidades de serviço de telecomunicações que integrem sistemas de comunicação máquina a máquina no valor de R$5,68 e Taxa de Fiscalização de Funcionamento anual de 33% do valor da TFI. </p> <p>Decreto 8.234, de 2 de maio de 2014 – Definição de sistemas de comunicação máquina a máquina: “os dispositivos que, sem intervenção humana, utilizem redes de telecomunicações para transmitir dados a aplicações remotas com o objetivo de monitorar, medir e controlar o próprio dispositivo, o ambiente ao seu redor ou sistemas de dados a ele conectados por meio dessas redes”. </p><p>Portaria MC nº 1.420, de 8 de outubro de 2014 – Câmara de Gestão e Acompanhamento do Desenvolvimento de Sistemas de Comunicação Máquina a Máquina – função de promoção e coordenação da cooperação técnica entre prestadoras de serviços de telecomunicações, fabricantes de equipamentos do setor de telecomunicações e entidades de ensino e pesquisa. • Portaria MC nº 2.006, de 10 de maio de 2016 – altera a Prt. 1.420 para incluir representantes da Câmara e do Senado na Câmara de Gestão e Acompanhamento ... acrescentando “e Internet das Coisas” no nome da Câmara com sigla “Câmara IoT”. </p><p>Portaria MC nº 5.507, de 30 de novembro de 2016 – altera a Prt. 1.420 em procedimentos de nomeação de membros da Câmara IoT, referindo-se, no seu texto, entretanto, somente a comunicação máquina a máquina. </p> <p>Plano Nacional de Internet das Coisas (consulta pública do MCTIC com 2.288 contribuições) </p><p>Em termos de prototipagem que são os controladores temos como os mais populares que são: Arduino(versões) e o Raspberry PI(versões). </p><p>Arduino, é uma plataforma de prototipagem eletrônica de hardware livre e de placa única, projetada com um micro controlador ATmel AVR com suporte de entrada/saída embutido, uma linguagem de programação padrão, a qual tem origem em Wiring, e é essencialmente C/C++. O objetivo do projeto é criar ferramentas que são acessíveis, com baixo custo, flexíveis e fáceis de se usar por artistas e amadores. Principalmente para aqueles que não teriam alcance aos controladores mais sofisticados e de ferramentas mais complicadas. </p>img.data.1<p>Raspberry Pi é um computador do tamanho de um cartão de crédito, que se conecta a um monitor de computador ou TV, e usa um teclado e um mouse padrão, desenvolvido no Reino Unido pela Fundação Raspberry PI. Todo o hardware é integrado numa única placa. O principal objetivo é promover o ensino em Computação  básica em escolas. </p>img.data.2<h4>Referências </h4><p>SANTOS, Marco Aurélio da Silva. 'Inteligência Artificial'; Brasil Escola. Disponível em <http://brasilescola.uol.com.br/informatica/inteligencia-artificial.htm>. Acesso em 28 de abril de 2017. </p><p>Atzori, L., Iera, A., and Morabito, G. (2010). The Internet of Things: A survey. Computer Networks, 54(15):2787–2805. </p><p>Balzarotti, D., Cova, M., Felmetsger, V., Jovanovic, N., Kirda, E., Kruegel, C., and Vigna, G. (2008). Saner: Composing static and dynamic analysis to validate sanitization in web applications. In IEEE Symposium on Security and Privacy, pages 387–401. IEEE. </p><p>Lattner, C. and Adve, V. S. (2004). LLVM: A compilation framework for lifelong program analysis & transformation. In CGO, pages 75–88. IEEE. </p>      </p> E preciso estabelecer quais são os objetivos de segurança desejáveis(IoT)-Por Fernando Palma</p>",
                    "tags": "Internet of Things;Internet das coisas;segurança em internet das coisas ; prototipos;micro controladores;Arduino;Raspberry;Confidencialidade, integridade e disponibilidade em Internet das coisas;internet das coisas e areas afins;",
                    "imagens": [
                        {
                            "index": 1,
                            "arquivo": "arduino.jpg",
                            "legenda": "figura 1, arduino",
                            "autor": "Tiki Shabudin",
                            "ano": 2014
                        },
                        {
                            "index": 2,
                            "arquivo": "raspberry.jpg",
                            "legenda": "figura 2, raspberry",
                            "autor": "Ronivon Rony",
                            "ano": 2013
                        }
                    ]
                }
            ]
        },
        pageView: 0,
        pageContent: {

        }

    },
    created: function () {
        this.curlStart()
    },
    watch: {

    },
    filters: {
        truncate: function (string) {
            return string.substring(0, 200) + '...';
        },
        formatDate: function (v) {
            return v.replace(/T|Z/g, ' ')
        },
        htmlescape: function (v) {
            var output = v.split('<p>').join('');
            output = output.split('</p>').join('');
            output = output.split('img.data.1').join('');
            output = output.split('img.data.2').join('');
            return output;
        },
        curl: function (v, i) {
            var string = v;
            var mapaAcentosHex = {
                a: /[\xE0-\xE6]/g,
                e: /[\xE8-\xEB]/g,
                i: /[\xEC-\xEF]/g,
                o: /[\xF2-\xF6]/g,
                u: /[\xF9-\xFC]/g,
                c: /\xE7/g,
                n: /\xF1/g,
            };

            for (var letra in mapaAcentosHex) {
                var expressaoRegular = mapaAcentosHex[letra];
                string = string.replace(expressaoRegular, letra);
            }

            string = string.split(' ').join('-');
            return '#/pages/' + string.toLowerCase()
        }
    },
    methods: {
        showview: function (view, pageid) {

            this.pageView = view;
            this.pageContent = JSON.parse(JSON.stringify(this.storage.pages[pageid]));
            this.pageview(pageid);

        },
        pageview: function (a) {

            var img = null;
            var page = this.pageContent;
            for (var i in page.imagens) {
                img = this.imgprepare(page.imagens[i].arquivo, page.imagens[i].legenda, page.imagens[i].autor, page.imagens[i].ano);
                this.pageContent.conteudo = this.imgrender(this.pageContent.conteudo, img, page.imagens[i].index);
            }


            console.log(this.pageContent);
        },

        imgprepare: function (arquivo, legenda, autor, ano) {
            var imgDir = 'images';
            var output = "<div class='img-data'>";
            output += "<img src='" + imgDir + "/" + arquivo + "' title='Fotografia: " + autor + "'>";
            output += "<p style='font-size: 1.2em; font-style: italic; line-height: 22px; margin-bottom: 50px;'>Foto: " + legenda + ", " + autor + ", " + ano + "</p>";
            output += "</div>";
            return output;
        },
        imgrender: function (content, imgTag, imgIndex) {
            var index = "img.data." + imgIndex;
            return content.replace(index, imgTag);
        },
        curlStart: function () {

            var locationurl = window.location.href;
            var hrefurl = locationurl.split("#/pages/");
            var id = hrefurl[1];
            var curl;
            if (id == null) {
                this.pageView = 0;
            } else {
                for (var i in this.storage.pages) {
                    curl = this.$options.filters.curl(this.storage.pages[i].invencao);
                    curl = curl.split("#/pages/");
                    curl = curl[1];
                    if (id == curl) {
                        this.showview(1, i);
                        $(window).scrollTop();
                        break;
                    }

                }
            }

        }


    },
    computed: {
    }
});
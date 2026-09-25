document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       RECEITAS
    ===================================================== */

    const receitas = {

        "bolo-chocolate": {
            categoria: "BOLOS",
            titulo: "Bolo de Chocolate",
            imagem: "img/bolo de chocolate.jpg",

            ingredientes: [
                "3 ovos",
                "2 xícaras de farinha de trigo",
                "1 xícara de açúcar",
                "1 xícara de chocolate em pó",
                "1 xícara de leite",
                "1/2 xícara de óleo",
                "1 colher de sopa de fermento"
            ],

            preparo:
                "Bata os ovos, o açúcar e o óleo. Acrescente o leite e o chocolate. Misture a farinha aos poucos e, por último, coloque o fermento. Leve ao forno preaquecido a 180°C por aproximadamente 35 minutos."
        },


        "bolo-cenoura": {
            categoria: "BOLOS",
            titulo: "Bolo de Cenoura",
            imagem: "img/bolo de cenoura.jpg",

            ingredientes: [
                "3 cenouras médias",
                "3 ovos",
                "1 xícara de óleo",
                "2 xícaras de açúcar",
                "2 e 1/2 xícaras de farinha",
                "1 colher de sopa de fermento"
            ],

            preparo:
                "Bata no liquidificador as cenouras, os ovos e o óleo. Misture com o açúcar e a farinha. Acrescente o fermento e coloque em uma forma untada. Asse a 180°C por aproximadamente 40 minutos."
        },


        "bolo-limao": {
            categoria: "BOLOS",
            titulo: "Bolo de Limão",
            imagem: "img/bolo de limao.jpg",

            ingredientes: [
                "3 ovos",
                "2 xícaras de farinha",
                "1 e 1/2 xícara de açúcar",
                "1/2 xícara de óleo",
                "1/2 xícara de leite",
                "Suco de 2 limões",
                "1 colher de sopa de fermento"
            ],

            preparo:
                "Misture os ovos, o açúcar e o óleo. Acrescente o leite, o suco de limão e a farinha. Misture bem e coloque o fermento. Asse em forno preaquecido a 180°C por aproximadamente 35 minutos."
        },


        "torta-morango": {
            categoria: "DOCES",
            titulo: "Torta de Morango",
            imagem: "img/torta de morango.jpg",

            ingredientes: [
                "1 pacote de biscoito maisena",
                "100 g de manteiga",
                "1 lata de leite condensado",
                "1 caixa de creme de leite",
                "Morangos frescos"
            ],

            preparo:
                "Triture os biscoitos e misture com a manteiga. Forre uma forma e asse por alguns minutos. Prepare o creme misturando o leite condensado e o creme de leite. Coloque sobre a massa e finalize com os morangos."
        },


        "brigadeiro": {
            categoria: "DOCES",
            titulo: "Brigadeiro",
            imagem: "img/brigadeiro.jpg",

            ingredientes: [
                "1 lata de leite condensado",
                "1 colher de manteiga",
                "3 colheres de chocolate em pó",
                "Chocolate granulado"
            ],

            preparo:
                "Coloque o leite condensado, a manteiga e o chocolate em uma panela. Mexa em fogo baixo até desgrudar do fundo. Espere esfriar, faça bolinhas e passe no chocolate granulado."
        },


        "lasanha": {
            categoria: "MASSAS",
            titulo: "Lasanha da Família",
            imagem: "img/lasanha.jpg",

            ingredientes: [
                "500 g de massa para lasanha",
                "500 g de carne moída",
                "1 sachê de molho de tomate",
                "300 g de queijo muçarela",
                "200 g de presunto",
                "1 cebola",
                "Sal e temperos a gosto"
            ],

            preparo:
                "Prepare a carne moída com a cebola e os temperos. Acrescente o molho de tomate. Monte a lasanha alternando massa, molho, presunto e queijo. Finalize com queijo e leve ao forno até gratinar."
        },


        "cafe": {
            categoria: "BEBIDAS",
            titulo: "Café da Família",
            imagem: "img/cafe.jpg",

            ingredientes: [
                "500 ml de água",
                "3 colheres de sopa de café em pó",
                "Açúcar a gosto"
            ],

            preparo:
                "Aqueça a água até começar a ferver. Coloque o café no filtro e passe a água lentamente. Adoce conforme sua preferência e sirva quentinho."
        },


        "bolo-extra": {
            categoria: "BOLOS",
            titulo: "Bolo Caseiro",
            imagem: "img/bolo.jpg",

            ingredientes: [
                "3 ovos",
                "2 xícaras de farinha",
                "1 e 1/2 xícara de açúcar",
                "1 xícara de leite",
                "3 colheres de manteiga",
                "1 colher de sopa de fermento"
            ],

            preparo:
                "Bata os ovos com o açúcar e a manteiga. Acrescente a farinha e o leite aos poucos. Misture o fermento delicadamente. Coloque em forma untada e asse a 180°C por aproximadamente 35 minutos."
        }

    };


    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const loginModal =
        document.getElementById("loginModal");

    const abrirLogin =
        document.getElementById("abrirLogin");

    const fecharLogin =
        document.getElementById("fecharLogin");

    const botaoSair =
        document.getElementById("botaoSair");

    const loginForm =
        document.getElementById("loginForm");

    const emailInput =
        document.getElementById("email");

    const senhaInput =
        document.getElementById("senha");

    const loginMensagem =
        document.getElementById("loginMensagem");


    const modal =
        document.getElementById("modal");

    const fechar =
        document.getElementById("fechar");

    const modalImagem =
        document.getElementById("modalImagem");

    const modalCategoria =
        document.getElementById("modalCategoria");

    const modalTitulo =
        document.getElementById("modalTitulo");

    const modalIngredientes =
        document.getElementById("modalIngredientes");

    const modalPreparo =
        document.getElementById("modalPreparo");


    const boasVindasModal =
        document.getElementById("boasVindasModal");

    const fecharBoasVindas =
        document.getElementById("fecharBoasVindas");

    const continuarBoasVindas =
        document.getElementById("continuarBoasVindas");


    const novaReceitaModal =
        document.getElementById("novaReceitaModal");

    const abrirNovaReceita =
        document.getElementById("abrirNovaReceita");

    const fecharNovaReceita =
        document.getElementById("fecharNovaReceita");

    const novaReceitaForm =
        document.getElementById("novaReceitaForm");

    const novaCategoria =
        document.getElementById("novaCategoria");

    const novaTitulo =
        document.getElementById("novaTitulo");

    const novaDescricao =
        document.getElementById("novaDescricao");

    const novaIngredientes =
        document.getElementById("novaIngredientes");

    const novoPreparo =
        document.getElementById("novoPreparo");

    const novaImagem =
        document.getElementById("novaImagem");

    const previewImagem =
        document.getElementById("previewImagem");

    const novaReceitaMensagem =
        document.getElementById("novaReceitaMensagem");

    const receitasGrid =
        document.getElementById("receitasGrid");


    let usuarioLogado = false;

    let imagemNovaReceita = "";


    /* =====================================================
       FUNÇÕES DE MODAL
    ===================================================== */

    function abrirModal(elemento) {

        if (!elemento) {
            return;
        }

        elemento.classList.add("aberto");

        document.body.style.overflow = "hidden";
    }


    function fecharModalGenerico(elemento) {

        if (!elemento) {
            return;
        }

        elemento.classList.remove("aberto");

        const algumModalAberto =
            document.querySelector(".modal.aberto");

        if (!algumModalAberto) {
            document.body.style.overflow = "";
        }
    }


    /* =====================================================
       LOGIN
    ===================================================== */

    abrirLogin.addEventListener(
        "click",
        function () {

            if (usuarioLogado) {
                return;
            }

            abrirModal(loginModal);

            setTimeout(function () {
                emailInput.focus();
            }, 100);
        }
    );


    fecharLogin.addEventListener(
        "click",
        function () {
            fecharModalGenerico(loginModal);
        }
    );


    loginModal.addEventListener(
        "click",
        function (evento) {

            if (evento.target === loginModal) {
                fecharModalGenerico(loginModal);
            }

        }
    );


    loginForm.addEventListener(
        "submit",
        function (evento) {

            evento.preventDefault();


            const email =
                emailInput.value.trim();

            const senha =
                senhaInput.value;


            const EMAIL_CORRETO =
                "minhafamilia@gmail.com";

            const SENHA_CORRETA =
                "minhafamilia";


            if (email !== EMAIL_CORRETO) {

                loginMensagem.textContent =
                    "📧 E-mail incorreto! Só a família tem acesso às receitas. 🤫";

                loginMensagem.className =
                    "login-mensagem erro";

                emailInput.focus();

                return;
            }


            if (senha !== SENHA_CORRETA) {

                loginMensagem.textContent =
                    "🔒 Senha incorreta! Essa receita é segredo de família. 🤫";

                loginMensagem.className =
                    "login-mensagem erro";

                senhaInput.focus();

                return;
            }


            /* LOGIN ACEITO */

            usuarioLogado = true;


            loginMensagem.textContent =
                "🎉 Acesso liberado!";

            loginMensagem.className =
                "login-mensagem sucesso";


            abrirLogin.textContent =
                "🔓 Família conectada";

            botaoSair.style.display =
                "inline-block";


            setTimeout(function () {

                fecharModalGenerico(loginModal);

                loginForm.reset();

                loginMensagem.textContent = "";

                loginMensagem.className =
                    "login-mensagem";


                abrirModal(boasVindasModal);

            }, 700);

        }
    );


    /* =====================================================
       BOAS-VINDAS
    ===================================================== */

    fecharBoasVindas.addEventListener(
        "click",
        function () {
            fecharModalGenerico(boasVindasModal);
        }
    );


    continuarBoasVindas.addEventListener(
        "click",
        function () {
            fecharModalGenerico(boasVindasModal);
        }
    );


    boasVindasModal.addEventListener(
        "click",
        function (evento) {

            if (evento.target === boasVindasModal) {
                fecharModalGenerico(boasVindasModal);
            }

        }
    );


    /* =====================================================
       SAIR
    ===================================================== */

    botaoSair.addEventListener(
        "click",
        function () {

            usuarioLogado = false;


            abrirLogin.textContent =
                "🔐 Área da família";

            botaoSair.style.display =
                "none";


            fecharModalGenerico(boasVindasModal);
            fecharModalGenerico(novaReceitaModal);
            fecharModalGenerico(modal);


            loginMensagem.textContent =
                "";

            loginMensagem.className =
                "login-mensagem";


            abrirModal(loginModal);

        }
    );


    /* =====================================================
       FILTROS
    ===================================================== */

    function aplicarFiltro(filtroSelecionado) {

        const filtros =
            document.querySelectorAll(".filtro");

        const cards =
            document.querySelectorAll(".receita-card");


        filtros.forEach(function (botao) {

            if (
                botao.getAttribute("data-filtro") ===
                filtroSelecionado
            ) {

                botao.classList.add("ativo");

            } else {

                botao.classList.remove("ativo");

            }

        });


        cards.forEach(function (card) {

            const categorias =
                card.getAttribute("data-categoria") || "";


            if (
                filtroSelecionado === "todas" ||
                categorias.includes(filtroSelecionado)
            ) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    }


    document.querySelectorAll(".filtro").forEach(
        function (botao) {

            botao.addEventListener(
                "click",
                function () {

                    aplicarFiltro(
                        botao.getAttribute("data-filtro")
                    );

                }
            );

        }
    );


    /* =====================================================
       ABRIR RECEITA
    ===================================================== */

    function abrirReceita(id) {

        if (!usuarioLogado) {

            loginMensagem.textContent =
                "🔒 Primeiro entre na área da família para abrir nossas receitas!";

            loginMensagem.className =
                "login-mensagem aviso";

            abrirModal(loginModal);

            return;
        }


        const receita =
            receitas[id];


        if (!receita) {
            return;
        }


        modalCategoria.textContent =
            receita.categoria;

        modalTitulo.textContent =
            receita.titulo;

        modalImagem.src =
            receita.imagem;

        modalImagem.alt =
            receita.titulo;


        modalIngredientes.innerHTML =
            "";


        receita.ingredientes.forEach(
            function (ingrediente) {

                const li =
                    document.createElement("li");

                li.textContent =
                    ingrediente;

                modalIngredientes.appendChild(li);

            }
        );


        modalPreparo.textContent =
            receita.preparo;


        abrirModal(modal);

    }


    /* =====================================================
       CLIQUE NOS CARDS
    ===================================================== */

    receitasGrid.addEventListener(
        "click",
        function (evento) {

            const botao =
                evento.target.closest(".ver-receita");


            if (!botao) {
                return;
            }


            const id =
                botao.getAttribute("data-receita");


            abrirReceita(id);

        }
    );


    /* =====================================================
       FECHAR RECEITA
    ===================================================== */

    fechar.addEventListener(
        "click",
        function () {
            fecharModalGenerico(modal);
        }
    );


    modal.addEventListener(
        "click",
        function (evento) {

            if (evento.target === modal) {
                fecharModalGenerico(modal);
            }

        }
    );


    /* =====================================================
       NOVA RECEITA
    ===================================================== */

    abrirNovaReceita.addEventListener(
        "click",
        function () {

            if (!usuarioLogado) {

                loginMensagem.textContent =
                    "🔒 Entre na área da família antes de adicionar uma receita.";

                loginMensagem.className =
                    "login-mensagem aviso";

                abrirModal(loginModal);

                return;
            }


            abrirModal(novaReceitaModal);

        }
    );


    fecharNovaReceita.addEventListener(
        "click",
        function () {
            fecharModalGenerico(novaReceitaModal);
        }
    );


    novaReceitaModal.addEventListener(
        "click",
        function (evento) {

            if (evento.target === novaReceitaModal) {
                fecharModalGenerico(novaReceitaModal);
            }

        }
    );


    /* =====================================================
       PREVIEW DA FOTO
    ===================================================== */

    novaImagem.addEventListener(
        "change",
        function () {

            const arquivo =
                novaImagem.files[0];


            if (!arquivo) {

                imagemNovaReceita = "";

                previewImagem.style.display =
                    "none";

                return;
            }


            const leitor =
                new FileReader();


            leitor.onload =
                function (evento) {

                    imagemNovaReceita =
                        evento.target.result;


                    previewImagem.src =
                        imagemNovaReceita;

                    previewImagem.style.display =
                        "block";

                };


            leitor.readAsDataURL(arquivo);

        }
    );


    /* =====================================================
       CRIAR CARD
    ===================================================== */

    function criarCardReceita(
        id,
        receita
    ) {

        const article =
            document.createElement("article");


        article.className =
            "receita-card";


        article.setAttribute(
            "data-categoria",
            receita.categoriaFiltro
        );


        article.setAttribute(
            "data-nova-receita",
            "true"
        );


        article.innerHTML = `

            <div class="imagem-card">

                <img
                    src="${receita.imagem}"
                    alt="${escapeHtml(receita.titulo)}">

            </div>

            <div class="card-conteudo">

                <span class="categoria">
                    ${escapeHtml(receita.categoria)}
                </span>

                <h3>
                    ${escapeHtml(receita.titulo)}
                </h3>

                <p>
                    ${escapeHtml(receita.descricao)}
                </p>

                <button
                    class="ver-receita"
                    data-receita="${id}"
                    type="button">
                    Ver receita →
                </button>

            </div>

        `;


        receitasGrid.appendChild(article);

    }


    /* =====================================================
       SEGURANÇA DO TEXTO DOS NOVOS CARDS
    ===================================================== */

    function escapeHtml(texto) {

        const div =
            document.createElement("div");

        div.textContent =
            texto;

        return div.innerHTML;

    }


    /* =====================================================
       SALVAR NOVA RECEITA
    ===================================================== */

    function carregarNovasReceitas() {

        let salvas = [];


        try {

            salvas =
                JSON.parse(
                    localStorage.getItem(
                        "receitasFamiliaNovas"
                    )
                ) || [];

        } catch (erro) {

            salvas = [];

        }


        salvas.forEach(
            function (item) {

                receitas[item.id] =
                    item.receita;


                criarCardReceita(
                    item.id,
                    item.receita
                );

            }
        );

    }


    carregarNovasReceitas();


    novaReceitaForm.addEventListener(
        "submit",
        function (evento) {

            evento.preventDefault();


            if (!usuarioLogado) {

                fecharModalGenerico(
                    novaReceitaModal
                );

                abrirModal(loginModal);

                return;
            }


            const categoriaFiltro =
                novaCategoria.value;

            const titulo =
                novaTitulo.value.trim();

            const descricao =
                novaDescricao.value.trim();

            const ingredientesTexto =
                novaIngredientes.value.trim();

            const preparo =
                novoPreparo.value.trim();


            if (
                !categoriaFiltro ||
                !titulo ||
                !descricao ||
                !ingredientesTexto ||
                !preparo
            ) {

                novaReceitaMensagem.textContent =
                    "⚠️ Preencha todos os campos da receita.";

                novaReceitaMensagem.className =
                    "login-mensagem erro";

                return;
            }


            const nomesCategorias = {

                bolos: "BOLOS",

                doces: "DOCES",

                massas: "MASSAS",

                salgados: "SALGADOS",

                bebidas: "BEBIDAS"

            };


            const id =
                "nova-" +
                Date.now();


            const receitaNova = {

                categoria:
                    nomesCategorias[categoriaFiltro],

                categoriaFiltro:
                    categoriaFiltro,

                titulo:
                    titulo,

                descricao:
                    descricao,

                imagem:
                    imagemNovaReceita ||
                    "img/bolo.jpg",

                ingredientes:
                    ingredientesTexto
                        .split("\n")
                        .map(function (item) {
                            return item.trim();
                        })
                        .filter(function (item) {
                            return item.length > 0;
                        }),

                preparo:
                    preparo

            };


            receitas[id] =
                receitaNova;


            criarCardReceita(
                id,
                receitaNova
            );


            let salvas = [];


            try {

                salvas =
                    JSON.parse(
                        localStorage.getItem(
                            "receitasFamiliaNovas"
                        )
                    ) || [];

            } catch (erro) {

                salvas = [];

            }


            salvas.push({

                id:
                    id,

                receita:
                    receitaNova

            });


            try {

                localStorage.setItem(
                    "receitasFamiliaNovas",
                    JSON.stringify(salvas)
                );

            } catch (erro) {

                console.warn(
                    "Não foi possível salvar a receita no navegador."
                );

            }


            novaReceitaMensagem.textContent =
                "🎉 Receita guardada no livro da família!";


            novaReceitaMensagem.className =
                "login-mensagem sucesso";


            setTimeout(
                function () {

                    novaReceitaForm.reset();

                    imagemNovaReceita = "";

                    previewImagem.src =
                        "";

                    previewImagem.style.display =
                        "none";

                    novaReceitaMensagem.textContent =
                        "";

                    novaReceitaMensagem.className =
                        "login-mensagem";


                    fecharModalGenerico(
                        novaReceitaModal
                    );

                },
                1000
            );

        }
    );


    /* =====================================================
       ESC FECHA OS MODAIS
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (evento) {

            if (evento.key !== "Escape") {
                return;
            }


            document.querySelectorAll(
                ".modal.aberto"
            ).forEach(
                function (elemento) {

                    fecharModalGenerico(
                        elemento
                    );

                }
            );

        }
    );

});
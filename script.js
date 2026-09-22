document.addEventListener("DOMContentLoaded", function () {


    /* =========================
       RECEITAS
    ========================= */

    const receitas = {

        "bolo-chocolate": {
            categoria: "BOLOS",
            titulo: "Bolo de Chocolate",

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


    /* =========================
       LOGIN
    ========================= */

    const loginModal =
        document.getElementById("loginModal");

    const abrirLogin =
        document.getElementById("abrirLogin");

    const fecharLogin =
        document.getElementById("fecharLogin");

    const loginForm =
        document.getElementById("loginForm");

    const emailInput =
        document.getElementById("email");

    const senhaInput =
        document.getElementById("senha");

    const loginMensagem =
        document.getElementById("loginMensagem");


    let usuarioLogado = false;


    function abrirModalLogin() {

        loginModal.classList.add("aberto");

        document.body.style.overflow = "hidden";

        setTimeout(function () {
            emailInput.focus();
        }, 100);

    }


    function fecharModalLogin() {

        loginModal.classList.remove("aberto");

        document.body.style.overflow = "";

    }


    abrirLogin.addEventListener(
        "click",
        abrirModalLogin
    );


    fecharLogin.addEventListener(
        "click",
        fecharModalLogin
    );


    loginModal.addEventListener(
        "click",
        function (evento) {

            if (evento.target === loginModal) {
                fecharModalLogin();
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


            /*
                E-mail precisa obrigatoriamente ter:
                - algo antes do @
                - @
                - algo depois do @
                - ponto
                - algo depois do ponto
            */

           const EMAIL_CORRETO = "minhafamilia@gmail.com";
const SENHA_CORRETA = "minhafamilia";


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


            /*
                LOGIN ACEITO
            */

            usuarioLogado = true;


            loginMensagem.textContent =
                "🎉 Acesso liberado! Agora as receitas estão a salvo.";

            loginMensagem.className =
                "login-mensagem sucesso";


            abrirLogin.textContent =
                "🔓 Família conectada";


            setTimeout(function () {

                fecharModalLogin();

                loginForm.reset();

                loginMensagem.textContent = "";

                loginMensagem.className =
                    "login-mensagem";

            }, 900);

        }
    );


    /* =========================
       FILTROS
    ========================= */

    const filtros =
        document.querySelectorAll(".filtro");

    const cards =
        document.querySelectorAll(".receita-card");


    filtros.forEach(function (botao) {

        botao.addEventListener(
            "click",
            function () {

                const filtroSelecionado =
                    botao.getAttribute("data-filtro");


                filtros.forEach(function (item) {

                    item.classList.remove("ativo");

                });


                botao.classList.add("ativo");


                cards.forEach(function (card) {

                    const categorias =
                        card.getAttribute("data-categoria");


                    if (
                        filtroSelecionado === "todas" ||
                        categorias.includes(filtroSelecionado)
                    ) {

                        card.style.display =
                            "block";

                    } else {

                        card.style.display =
                            "none";

                    }

                });

            }
        );

    });


    /* =========================
       MODAL DAS RECEITAS
    ========================= */

    const modal =
        document.getElementById("modal");

    const fechar =
        document.getElementById("fechar");

    const modalCategoria =
        document.getElementById("modalCategoria");

    const modalTitulo =
        document.getElementById("modalTitulo");

    const modalIngredientes =
        document.getElementById("modalIngredientes");

    const modalPreparo =
        document.getElementById("modalPreparo");


    const botoesReceita =
        document.querySelectorAll(".ver-receita");


    botoesReceita.forEach(function (botao) {

        botao.addEventListener(
            "click",
            function () {


                /*
                    Se ainda não fez login,
                    abre a tela de login.
                */

                if (!usuarioLogado) {

                    loginMensagem.textContent =
                        "🔒 Primeiro entre na área da família para proteger nossas receitas!";

                    loginMensagem.className =
                        "login-mensagem aviso";

                    abrirModalLogin();

                    return;
                }


                const id =
                    botao.getAttribute("data-receita");


                const receita =
                    receitas[id];


                if (!receita) {
                    return;
                }


                modalCategoria.textContent =
                    receita.categoria;


                modalTitulo.textContent =
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


                modal.classList.add("aberto");

                document.body.style.overflow =
                    "hidden";

            }
        );

    });


    /* =========================
       FECHAR MODAL
    ========================= */

    function fecharModal() {

        modal.classList.remove("aberto");

        document.body.style.overflow = "";

    }


    fechar.addEventListener(
        "click",
        fecharModal
    );


    modal.addEventListener(
        "click",
        function (evento) {

            if (evento.target === modal) {
                fecharModal();
            }

        }
    );


    /* =========================
       TECLA ESC
    ========================= */

    document.addEventListener(
        "keydown",
        function (evento) {

            if (evento.key === "Escape") {

                fecharModal();

                fecharModalLogin();

            }

        }
    );

});
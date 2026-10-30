// Passo 1 - listar páginas
const pages = [
    "./Assets/Dr. Stone (1).jpg",
    "./Assets/Dr. Stone (2).jpg",
    "./Assets/Dr. Stone (3).jpg",
    "./Assets/Dr. Stone (4).jpg",
    "./Assets/Dr. Stone (5).jpg",
    "./Assets/Dr. Stone (6).jpg",
    "./Assets/Dr. Stone (7).jpg",
    "./Assets/Dr. Stone (8).jpg",
    "./Assets/Dr. Stone (9).jpg",
    "./Assets/Dr. Stone (10).jpg",
    "./Assets/Dr. Stone (11).jpg",
    "./Assets/Dr. Stone (12).jpg",
    "./Assets/Dr. Stone (13).jpg",
    "./Assets/Dr. Stone (14).jpg",
    "./Assets/Dr. Stone (15).jpg",
    "./Assets/Dr. Stone (16).jpg",
    "./Assets/Dr. Stone (17).jpg",
    "./Assets/Dr. Stone (18).jpg",
    "./Assets/Dr. Stone (19).jpg",
    "./Assets/Dr. Stone (20).jpg",
    "./Assets/Dr. Stone (21).jpg",
    "./Assets/Dr. Stone (22).jpg",
    "./Assets/Dr. Stone (23).jpg",
    "./Assets/Dr. Stone (24).jpg",
    "./Assets/Dr. Stone (25).jpg",
    "./Assets/Dr. Stone (26).jpg",
    "./Assets/Dr. Stone (27).jpg",
    "./Assets/Dr. Stone (28).jpg",
    "./Assets/Dr. Stone (29).jpg",
    "./Assets/Dr. Stone (30).jpg",
    "./Assets/Dr. Stone (31).jpg",
    "./Assets/Dr. Stone (32).jpg",
    "./Assets/Dr. Stone (33).jpg",
    "./Assets/Dr. Stone (34).jpg",
    "./Assets/Dr. Stone (35).jpg",
    "./Assets/Dr. Stone (36).jpg",
    "./Assets/Dr. Stone (37).jpg",
    "./Assets/Dr. Stone (38).jpg",
    "./Assets/Dr. Stone (39).jpg",
    "./Assets/Dr. Stone (40).jpg",
    "./Assets/Dr. Stone (41).jpg",
    "./Assets/Dr. Stone (42).jpg",
    "./Assets/Dr. Stone (43).jpg",
    "./Assets/Dr. Stone (44).jpg",
    "./Assets/Dr. Stone (45).jpg",
    "./Assets/Dr. Stone (46).jpg",
    "./Assets/Dr. Stone (47).jpg",
    "./Assets/Dr. Stone (48).jpg",
    "./Assets/Dr. Stone (49).jpg",
    "./Assets/Dr. Stone (50).jpg",
    "./Assets/Dr. Stone (51).jpg",
    "./Assets/Dr. Stone (52).jpg",
    "./Assets/Dr. Stone (53).jpg",
    "./Assets/Dr. Stone (54).jpg",
    "./Assets/Dr. Stone (55).jpg",
    "./Assets/Dr. Stone (56).jpg",
    "./Assets/Dr. Stone (57).jpg",
    "./Assets/Dr. Stone (58).jpg",
    "./Assets/Dr. Stone (59).jpg",
    "./Assets/Dr. Stone (60).jpg",
    "./Assets/Dr. Stone (61).jpg",
    "./Assets/Dr. Stone (62).jpg",
    "./Assets/Dr. Stone (63).jpg",
    "./Assets/Dr. Stone (64).jpg",
    "./Assets/Dr. Stone (65).jpg",
    "./Assets/Dr. Stone (66).jpg",
    "./Assets/Dr. Stone (67).jpg",
    "./Assets/Dr. Stone (68).jpg",
    "./Assets/Dr. Stone (69).jpg",
    "./Assets/Dr. Stone (70).jpg",
    "./Assets/Dr. Stone (71).jpg",
    "./Assets/Dr. Stone (72).jpg",
    "./Assets/Dr. Stone (73).jpg",
    "./Assets/Dr. Stone (74).jpg",
    "./Assets/Dr. Stone (75).jpg",
    "./Assets/Dr. Stone (76).jpg",
    "./Assets/Dr. Stone (77).jpg",
    "./Assets/Dr. Stone (78).jpg",
    "./Assets/Dr. Stone (79).jpg",
    "./Assets/Dr. Stone (80).jpg",
    "./Assets/Dr. Stone (81).jpg",
    "./Assets/Dr. Stone (82).jpg",
    "./Assets/Dr. Stone (83).jpg",
    "./Assets/Dr. Stone (84).jpg",
    "./Assets/Dr. Stone (85).jpg",
    "./Assets/Dr. Stone (86).jpg",
    "./Assets/Dr. Stone (87).jpg",
    "./Assets/Dr. Stone (88).jpg",
    "./Assets/Dr. Stone (89).jpg",
    "./Assets/Dr. Stone (90).jpg",
    "./Assets1/Dr. Stone (91).jpg",
    "./Assets1/Dr. Stone (92).jpg",
    "./Assets1/Dr. Stone (93).jpg",
    "./Assets1/Dr. Stone (94).jpg",
    "./Assets1/Dr. Stone (95).jpg",
    "./Assets1/Dr. Stone (96).jpg",
    "./Assets1/Dr. Stone (97).jpg",
    "./Assets1/Dr. Stone (98).jpg",
    "./Assets1/Dr. Stone (99).jpg",
    "./Assets1/Dr. Stone (100).jpg",
    "./Assets1/Dr. Stone (101).jpg",
    "./Assets1/Dr. Stone (102).jpg",
    "./Assets1/Dr. Stone (103).jpg",
    "./Assets1/Dr. Stone (104).jpg",
    "./Assets1/Dr. Stone (105).jpg",
    "./Assets1/Dr. Stone (106).jpg",
    "./Assets1/Dr. Stone (107).jpg",
    "./Assets1/Dr. Stone (108).jpg",
    "./Assets1/Dr. Stone (109).jpg",
    "./Assets1/Dr. Stone (110).jpg",
    "./Assets1/Dr. Stone (111).jpg",
    "./Assets1/Dr. Stone (112).jpg",
    "./Assets1/Dr. Stone (113).jpg",
    "./Assets1/Dr. Stone (114).jpg",
    "./Assets1/Dr. Stone (115).jpg",
    "./Assets1/Dr. Stone (116).jpg",
    "./Assets1/Dr. Stone (117).jpg",
    "./Assets1/Dr. Stone (118).jpg",
    "./Assets1/Dr. Stone (119).jpg",
    "./Assets1/Dr. Stone (120).jpg",
    "./Assets1/Dr. Stone (121).jpg",
    "./Assets1/Dr. Stone (122).jpg",
    "./Assets1/Dr. Stone (123).jpg",
    "./Assets1/Dr. Stone (124).jpg",
    "./Assets1/Dr. Stone (125).jpg",
    "./Assets1/Dr. Stone (126).jpg",
    "./Assets1/Dr. Stone (127).jpg",
    "./Assets1/Dr. Stone (128).jpg",
    "./Assets1/Dr. Stone (129).jpg",
    "./Assets1/Dr. Stone (130).jpg",
    "./Assets1/Dr. Stone (131).jpg",
    "./Assets1/Dr. Stone (132).jpg",
    "./Assets1/Dr. Stone (133).jpg",
    "./Assets1/Dr. Stone (134).jpg",
    "./Assets1/Dr. Stone (135).jpg",
    "./Assets1/Dr. Stone (136).jpg",
    "./Assets1/Dr. Stone (137).jpg",
    "./Assets1/Dr. Stone (138).jpg",
    "./Assets1/Dr. Stone (139).jpg",
    "./Assets1/Dr. Stone (140).jpg",
    "./Assets1/Dr. Stone (141).jpg",
    "./Assets1/Dr. Stone (142).jpg",
    "./Assets1/Dr. Stone (143).jpg",
    "./Assets1/Dr. Stone (144).jpg",
    "./Assets1/Dr. Stone (145).jpg",
    "./Assets1/Dr. Stone (146).jpg",
    "./Assets1/Dr. Stone (147).jpg",
    "./Assets1/Dr. Stone (148).jpg",
    "./Assets1/Dr. Stone (149).jpg",
    "./Assets1/Dr. Stone (150).jpg",
    "./Assets1/Dr. Stone (151).jpg",
    "./Assets1/Dr. Stone (152).jpg",
    "./Assets1/Dr. Stone (153).jpg",
    "./Assets1/Dr. Stone (154).jpg",
    "./Assets1/Dr. Stone (155).jpg",
    "./Assets1/Dr. Stone (156).jpg",
    "./Assets1/Dr. Stone (157).jpg",
    "./Assets1/Dr. Stone (158).jpg",
    "./Assets1/Dr. Stone (159).jpg",
    "./Assets1/Dr. Stone (160).jpg",
    "./Assets1/Dr. Stone (161).jpg",
    "./Assets1/Dr. Stone (162).jpg",
    "./Assets1/Dr. Stone (163).jpg",
    "./Assets1/Dr. Stone (164).jpg",
    "./Assets1/Dr. Stone (165).jpg",
    "./Assets1/Dr. Stone (166).jpg",
    "./Assets1/Dr. Stone (167).jpg",
    "./Assets1/Dr. Stone (168).jpg",
    "./Assets1/Dr. Stone (169).jpg",
    "./Assets1/Dr. Stone (170).jpg",
    "./Assets1/Dr. Stone (171).jpg",
    "./Assets1/Dr. Stone (172).jpg",
    "./Assets1/Dr. Stone (173).jpg",
    "./Assets1/Dr. Stone (174).jpg",
    "./Assets1/Dr. Stone (175).jpg",
    "./Assets1/Dr. Stone (176).jpg",
    "./Assets1/Dr. Stone (177).jpg",
    "./Assets1/Dr. Stone (178).jpg",
    "./Assets1/Dr. Stone (179).jpg",
    "./Assets1/Dr. Stone (180).jpg",
    "./Assets1/Dr. Stone (181).jpg",
    "./Assets1/Dr. Stone (182).jpg",
    "./Assets1/Dr. Stone (183).jpg",
    "./Assets1/Dr. Stone (184).jpg",
    "./Assets1/Dr. Stone (185).jpg",
    "./Assets1/Dr. Stone (186).jpg",
    "./Assets1/Dr. Stone (187).jpg",
    "./Assets1/Dr. Stone (188).jpg",
    "./Assets1/Dr. Stone (189).jpg",
    "./Assets1/Dr. Stone (190).jpg",
    "./Assets1/Dr. Stone (191).jpg",
    "./Assets1/Dr. Stone (192).jpg",
    "./Assets1/Dr. Stone (193).jpg",
    "./Assets1/Dr. Stone (194).jpg",
    "./Assets1/Dr. Stone (195).jpg",
    "./Assets1/Dr. Stone (196).jpg",
];

// Passo 2 - Contagem da Lista

let currentPageIndex = 0;

// Selecionar os elementos do HTML
const imgElement = document.getElementById("manga-page");
const btnPrev = document.getElementById("prev-btn");
const btnNext = document.getElementById("next-btn");
const pageCounter = document.getElementById("page-counter");

// Atualizar a página do leitor
function updateReader() {
    imgElement.src = pages[currentPageIndex];

    pageCounter.textContent =
        `Página ${currentPageIndex + 1} de ${pages.length}`;

    btnPrev.disabled = currentPageIndex === 0;
    btnNext.disabled = currentPageIndex === pages.length - 1;
}

// Botão Anterior
btnPrev.addEventListener("click", () => {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        updateReader();
    }
});

// Botão Próximo
btnNext.addEventListener("click", () => {
    if (currentPageIndex < pages.length - 1) {
        currentPageIndex++;
        updateReader();
    }
});

// Verificar se a imagem foi carregada
imgElement.addEventListener("error", () => {
    console.error("Não foi possível carregar a imagem:", imgElement.src);
});

// Iniciar o leitor
updateReader();


// Passo 6 - Suport para navegação via seta
document.addEventListener ("keydown", (event) => {
    if (event.key === "ArrowLeft" && currentPageIndex > 0) {
        currentPageIndex--;
        updateReader();
    } else if (event.key === "ArrowRight" && currentPageIndex < pages.length - 1) {
        currentPageIndex++;
        updateReader();
    }
})

updateReader();


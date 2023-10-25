const movies = [
  {
    img: "https://image.slidesharecdn.com/bobesponja-171116175820/75/bob-esponja-1-2048.jpg?cb=1669861073",
    title: "Bob Esponja #01 -Precisa-se de ajudante",
    link: "https://sinalpublico.com/player3/server1httphlb.php?vid=BOBESPJT01EP01",
    category: "bobEsponja",
  },
  {
    img: "https://image.slidesharecdn.com/bobesponja-171116175820/75/bob-esponja-1-2048.jpg?cb=1669861073",
    title: "Bob Esponja #02 - Assoprador de recifes",
    link: "https://sinalpublico.com/player3/server1httphlb.php?vid=BOBESPJT01EP02",
    category: "bobEsponja",
  },
  {
    img: "https://image.slidesharecdn.com/bobesponja-171116175820/75/bob-esponja-1-2048.jpg?cb=1669861073",
    title: "Bob esponja #03 - Chá em terra firme",
    link: "https://sinalpublico.com/player3/server1httphlb.php?vid=BOBESPJT01EP06",
    category: "bobEsponja",
  },
  {
    img: "https://image.slidesharecdn.com/bobesponja-171116175820/75/bob-esponja-1-2048.jpg?cb=1669861073",
    title: "Bob esponja #04 - Bolhas de sabão",
    link: "https://sinalpublico.com/player3/server1httphlb.php?vid=BOBESPJT01EP04",
    category: "bobEsponja",
  },
  {
    img: "https://image.slidesharecdn.com/bobesponja-171116175820/75/bob-esponja-1-2048.jpg?cb=1669861073",
    title: "Bob esponja #05 -Calças rasgadas",
    link: "https://sinalpublico.com/player3/server1httphlb.php?vid=BOBESPJT01EP05",
    category: "bobEsponja",
  },
  {
    img: "https://image.slidesharecdn.com/bobesponja-171116175820/75/bob-esponja-1-2048.jpg?cb=1669861073",
    title:
      "Bob esponja #06 - Caçando agua viva",
    link: "https://sinalpublico.com/player3/server1httphlb.php?vid=BOBESPJT01EP06",
    category: "bobEsponja",
  },
  {
    img: "https://image.slidesharecdn.com/bobesponja-171116175820/75/bob-esponja-1-2048.jpg?cb=1669861073",
    title: "Bob esponja #07 - Plankton!",
    link: "https://sinalpublico.com/player3/server1httphlb.php?vid=BOBESPJT01EP07",
    category: "bobEsponja",
  },
  {
    img: "https://image.slidesharecdn.com/bobesponja-171116175820/75/bob-esponja-1-2048.jpg?cb=1669861073",
    title: "Bob esponja #08- Vizinhos nauticos terriveis",
    link: "https://sinalpublico.com/player3/server1httphlb.php?vid=BOBESPJT01EP08",
    category: "bobEsponja",
  },
  {
    img: "https://image.slidesharecdn.com/bobesponja-171116175820/75/bob-esponja-1-2048.jpg?cb=1669861073",
    title:
      "Bob esponja #9 - Escola de pilotagem",
    link: "https://sinalpublico.com/player3/server1httphlb.php?vid=BOBESPJT01EP09",
    category: "bobEsponja",
  },
  {
    img: "https://image.slidesharecdn.com/bobesponja-171116175820/75/bob-esponja-1-2048.jpg?cb=1669861073",
    title:
      "Bob esponja #10 - Entrega de pizza",
    link: "https://sinalpublico.com/player3/server1httphlb.php?vid=BOBESPJT01EP10",
    category: "bobEsponja",
  },
  {
    img: "https://img.youtube.com/vi/WKbLXuP9S-c/sddefault.jpg",
    title: "Webinar - Recriando a interface do Linkedin com Flutter",
    link: "https://www.youtube.com/embed/WKbLXuP9S-c",
    category: "webinar",
  },
  {
    img: "https://img.youtube.com/vi/dJ6y1zMjVXU/sddefault.jpg",
    title: "Webinar - Recriando a interface do Instagram com Flutter",
    link: "https://www.youtube.com/embed/dJ6y1zMjVXU",
    category: "webinar",
  },
  {
    img: "https://img.youtube.com/vi/8rdJsqUjsGg/sddefault.jpg",
    title: "Webinar - Recriando a interface do iFood com Flutter",
    link: "https://www.youtube.com/embed/8rdJsqUjsGg",
    category: "webinar",
  },
  {
    img: "https://img.youtube.com/vi/C4p_7qBsECw/sddefault.jpg",
    title: "Webinar - Recriando a interface do PicPay com Flutter",
    link: "https://www.youtube.com/embed/C4p_7qBsECw",
    category: "webinar",
  },
  {
    img: "https://img.youtube.com/vi/L1pKoMC6hWk/sddefault.jpg",
    title: "Webinar - Recriando o layout do WhatsApp com Flutter",
    link: "https://www.youtube.com/embed/L1pKoMC6hWk",
    category: "webinar",
  },
  {
    img: "https://img.youtube.com/vi/FiZMowbaiJA/sddefault.jpg",
    title: "Live #5 Jornada UX/UI: O UX/UI Design é para todos?",
    link: "https://www.youtube.com/embed/FiZMowbaiJA",
    category: "ux-ui",
  },
  {
    img: "https://img.youtube.com/vi/cwqDu0ZzbYE/sddefault.jpg",
    title:
      "Live #4 Jornada UX/UI: Como migrar para o UX/UI Design: a trajetória de uma designer - Growdev",
    link: "https://www.youtube.com/embed/cwqDu0ZzbYE",
    category: "ux-ui",
  },
  {
    img: "https://img.youtube.com/vi/ZMZjQ9aRuIY/sddefault.jpg",
    title:
      "Live #3 Jornada UX/UI: As oportunidades de estudar um programa de formação pagando após formado",
    link: "https://www.youtube.com/embed/ZMZjQ9aRuIY",
    category: "ux-ui",
  },
  {
    img: "https://img.youtube.com/vi/8sd3wuKTZMA/sddefault.jpg",
    title:
      "Live #2 Jornada UX/UI: O profissional de UX/UI Design no mercado digital - Growdev",
    link: "https://www.youtube.com/embed/8sd3wuKTZMA",
    category: "ux-ui",
  },
  {
    img: "https://img.youtube.com/vi/-26aqPtgoEY/sddefault.jpg",
    title:
      "Live #1 Jornada UX/UI: O papel do UX/UI Designer no desenvolvimento de um produto digital - Growdev",
    link: "https://www.youtube.com/embed/-26aqPtgoEY",
    category: "ux-ui",
  },
  {
    img: "https://img.youtube.com/vi/QsuhYgsSYQo/sddefault.jpg",
    title: "Célula de talentos - Uma solução Growdev",
    link: "https://www.youtube.com/embed/QsuhYgsSYQo",
    category: "geral",
  },
  {
    img: "https://img.youtube.com/vi/ouDn8z3PSqs/sddefault.jpg",
    title: "Como é o dia a dia de um dev? Live Growdev com Marcelo Eltz",
    link: "https://www.youtube.com/embed/ouDn8z3PSqs",
    category: "geral",
  },
  {
    img: "https://img.youtube.com/vi/cQDQNX6NXYo/sddefault.jpg",
    title:
      "Onde trabalhar com qualidade de software? Conheça a Testing Company, empresa parceira da Growdev",
    link: "https://www.youtube.com/embed/cQDQNX6NXYo",
    category: "geral",
  },
  {
    img: "https://img.youtube.com/vi/nKGbolkirBM/sddefault.jpg",
    title: "WEBINAR ANALISTA DE DADOS - com Paulo Marcon da Arezzo&Co",
    link: "https://www.youtube.com/embed/nKGbolkirBM",
    category: "geral",
  },
  {
    img: "https://img.youtube.com/vi/6sZPsqNjeek/sddefault.jpg",
    title: "Tecnologia trazendo soluções para a Arezzo & CO | Ricardo Pinho",
    link: "https://www.youtube.com/embed/6sZPsqNjeek",
    category: "geral",
  },
];
